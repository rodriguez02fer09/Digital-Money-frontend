const filterUpWork = (activity = [], work) => {
  const a = activity.filter(item => {
    return item.description.includes(work)
  })

  console.log(a)
  return a
}
export default filterUpWork
//filtra actividades por palabras
