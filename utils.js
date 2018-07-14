const prepare = obj => {
  obj._id = {
    ...obj._id,
    _id: `${obj._id}`,
  }
  return obj
}

export { prepare }
