import {useState, useEffect} from 'react'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import {deburr} from 'lodash'
import {parseISO} from 'date-fns'
import {
  startOfDay,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  format,
  startOfWeek,
} from 'date-fns'

const timeZone = 'UTC'

const useActivity = ({searchItem = ''}) => {
  const {account} = useAccountStore()

  const {id: account_id} = account ?? {}
  const [activity, setActivity] = useState([])

  const updateStateActivity = currentActivity => {
    console.log('Fecha filtrada:', getFilteredDate('lastWeek')) // Verifica si se imprime correctamente
    debugger
    setActivity(currentActivity)
  }

  // Función para formatear la fecha en UTC
  const formatUTC = date => format(date, 'yyyy-MM-dd')

  const getFilteredDate = filter => {
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

    const formattedDate = formatUTC(date)
    console.log(
      `Fecha formateada en UTC para filtro "${filter}":`,
      formattedDate,
    )

    return formattedDate
  }

  useEffect(() => {
    if (account_id) {
      const filterItem = searchItem ? `?search=${searchItem}` : ''
      const dateFilter = getFilteredDate('lastWeek') //  el filtro deseado

      request(
        {
          path: `accounts/${account_id}/activity${filterItem}`,
          method: 'GET',
          addHeaders: {
            Authorization: `${getDataLocalStore('token')}`,
          },
        },
        updateStateActivity,
      )
    }
  }, [account, searchItem])

  return {
    activity,
  }
}

export default useActivity
