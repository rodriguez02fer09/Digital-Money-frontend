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
  return {startDate, end}
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

/**
 * Verifica si una fecha está dentro de un rango dado
 *
 * @param {string | Date} date - Fecha en formato UTC o Date
 * @param {string} range - Nombre del rango ('today', 'yesterday', etc.)
 * @returns {boolean}
 */
const isWithinDateRange = (date, range) => {
  const dateRange = formatRange(rangeMethods[range]())

  return isWithinInterval(new Date(date), {
    start: dateRange.startDate,
    end: dateRange.end,
  })
}

export default isWithinDateRange
