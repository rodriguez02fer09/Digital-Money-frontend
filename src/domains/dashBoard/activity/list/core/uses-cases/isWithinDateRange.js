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
    startDate: startDate,
    end: end,
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
 *
 * @param {date utc} date
 * @param {strings} range
 * @returns {date utc}
 */
const isWithinDateRange = (date, range) => {
  const dateRange = formatRange(rangeMethods[range]())

  return isWithinInterval(new Date(date), {
    start: dateRange.startDate,
    end: dateRange.end,
  })
}
