import {
  startOfDay,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  format,
  startOfWeek,
  isWithinInterval,
  parseISO,
} from 'date-fns'

const formatRange = range => {
  const {startDate, end} = range
  return {
    startDate: format(startDate, "yyyy-MM-dd'T'HH:mm:ss"),
    end: format(end, "yyyy-MM-dd'T'HH:mm:ss"),
  }
}

const today = startOfDay(new Date())
const rangeMethods = {
  today: () => ({
    startDate: today,
    end: today,
  }),

  yesterday: () => ({
    startDate: startOfDay(subDays(new Date(), 1)),
    end: today,
  }),

  lastWeek: () => ({
    startDate: startOfWeek(subWeeks(new Date(), 1)),
    end: today,
  }),

  last15Days: () => ({
    startDate: startOfDay(subDays(new Date(), 15)),
    end: today,
  }),

  lastMonth: () => ({
    startDate: startOfDay(subMonths(new Date(), 1)),
    end: today,
  }),

  lastYear: () => ({
    startDate: startOfDay(subYears(new Date(), 1)),
    end: today,
  }),
}
export default rangeMethods
//funcion que devuelve su fecha filtrada

/**
 * Description placeholder
 *
 * @param {date utc} date
 * @param {strings} range
 * @returns {date utc}
 */
const isWithinDateRange = (date, range) => {
  const dateRangeFormat = formatRange(rangeMethods[range]())
  
  return isWithinInterval(
    format(date, "yyyy-MM-dd'T'HH:mm:ss"),
    dateRangeFormat,
  )
}


