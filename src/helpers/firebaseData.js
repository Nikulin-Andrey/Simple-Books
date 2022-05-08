export const convertToArray = data => {
  const result = Object.keys(data).map(key => ({
    id: key,
    ...data[key],
  }))
  return result
}
