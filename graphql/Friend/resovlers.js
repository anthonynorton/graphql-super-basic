import FriendModel from '../../models/friend'
import { prepare } from '../../utils'

const resolvers = {
  query: {
    getFriends: async () => await FriendModel.find(),
    getOneFriend: async (_, { id }) => {
      const resp = await FriendModel.findById({
        _id: id,
      })
      const friend = await resp.toObject()
      return friend
    },
  },
  mutation: {
    createFriend: async (_, { input }) => await FriendModel.create(input),
    updateFriend: async (_, { id, input }) => {
      return new Promise((resolve, reject) => {
        FriendModel.findByIdAndUpdate(
          { _id: id },
          input,
          { upsert: true },
          (err, data) => {
            if (!err) {
              resolve(data)
            } else {
              reject(err)
            }
          }
        )
      })
      // const friend = await FriendModel.findByIdAndUpdate({ _id: id }, input, {
      //   upsert: true,
      // })
      // return friend
    },
    deleteFriend: async (_, { id, input }) => {
      return new Promise((resolve, reject) => {
        FriendModel.findByIdAndDelete({ _id: id }, err => {
          if (!err) {
            resolve('Successfully deleted friend')
          } else {
            reject(err)
          }
        })
      })
    },
  },
}

export default resolvers
