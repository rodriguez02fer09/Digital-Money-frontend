const filterUpWord = (activity, work) => {
  const a = activity.filter(item => {
    return item.description.includes(work)
  })
  debugger
  console.log(a)
  return a
}

export default filterUpWord
