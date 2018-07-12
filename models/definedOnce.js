import mongoose from 'mongoose'

export default (modelName, schema) => {
  let model = null
  if (mongoose.models.hasOwnProperty(modelName)) {
    model = mongoose.models[modelName]
  } else {
    model = mongoose.model(modelName, schema)
  }
  return model
}
