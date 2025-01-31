import {
  startOfDay,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  format,
  startOfWeek,
} from 'date-fns'

// Función para formatear la fecha en UTC
const formatUTC = date => format(date, 'yyyy-MM-dd')
const getFilterDate = filter => {
  let date
  console.log(`Filtro recibido: ${filter}`) // Verificar qué filtro se está pasando

  switch (filter) {
    case 'today':
      date = startOfDay(new Date())
      break
    case 'yesterday':
      date = startOfDay(subDays(new Date(), 1))
      break
    case 'lastWeek':
      date = startOfWeek(subWeeks(new Date(), 1))
      break
    case 'last15Days':
      date = startOfDay(subDays(new Date(), 15))
      break
    case 'lastMonth':
      date = startOfDay(subMonths(new Date(), 1))
      break
    case 'lastYear':
      date = startOfDay(subYears(new Date(), 1))
      break
    default:
      console.error('Filtro no reconocido:', filter)
      return null
  }

  console.log(`Fecha sin formatear para filtro "${filter}":`, date) // Verificar la fecha antes de formatear

  if (!date) {
    console.error('Fecha es undefined para filtro:', filter)
    return null
  }

  const formatedDate = formatUTC(date)
  console.log(`Fecha formateada en UTC para filtro "${filter}":`, formatedDate)

  return formatedDate
}
export default getFilterDate
