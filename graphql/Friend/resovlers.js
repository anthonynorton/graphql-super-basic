import FriendModel from '../../models/friend'
import { prepare } from '../../utils'

const resolvers = {
  query: {
    getFriends: async () => {
      return new Promise((resolve, reject) => {
        FriendModel.find((err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(data)
          }
        })
      })
    },
    getOneFriend: (_, { id }) => {
      return new Promise(async (resolve, reject) => {
        FriendModel.findById({ _id: id }, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      })
    },
  },
  mutation: {
    createFriend: async (_, { input }) => {
      return new Promise((resolve, reject) => {
        FriendModel.create(input, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      })
    },
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
    },
    deleteFriend: (_, { id, input }) => {
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
