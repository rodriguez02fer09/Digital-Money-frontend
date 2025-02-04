const filterUpWork = (activity = [], work) => {
  debugger

  const a = activity?.filter(item => {
    return item.description.includes(work)
  })

  console.log(a)
  return a
}

export default filterUpWork
