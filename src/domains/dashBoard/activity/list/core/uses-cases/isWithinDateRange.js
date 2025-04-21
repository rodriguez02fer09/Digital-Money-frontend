// @domains/dashBoard/activity/list/core/uses-cases/isWithinDateRange.js

import {
  startOfDay,
  endOfDay,
  subDays,
  subWeeks,
  subMonths,
  subYears,
  startOfWeek,
  isWithinInterval,
  parseISO,
  isValid,
} from 'date-fns'

const today = new Date()

const rangeMethods = {
  today: () => ({
    startDate: startOfDay(today),
    end: endOfDay(today),
  }),
  yesterday: () => {
    const date = subDays(today, 1)
    return {
      startDate: startOfDay(date),
      end: endOfDay(date),
    }
  },
  lastWeek: () => ({
    startDate: startOfWeek(subWeeks(today, 1), {weekStartsOn: 1}),
    end: endOfDay(today),
  }),
  last15Days: () => ({
    startDate: startOfDay(subDays(today, 15)),
    end: endOfDay(today),
  }),
  lastMonth: () => ({
    startDate: startOfDay(subMonths(today, 1)),
    end: endOfDay(today),
  }),
  lastYear: () => ({
    startDate: startOfDay(subYears(today, 1)),
    end: endOfDay(today),
  }),
}

const isWithinDateRange = (date, range) => {
  if (!date || !rangeMethods[range]) return false

  const {startDate, end} = rangeMethods[range]()
  const parsedDate = typeof date === 'string' ? parseISO(date) : new Date(date)

  if (!isValid(parsedDate)) {
    console.warn('Fecha inválida:', date)
    return false
  }

  return isWithinInterval(parsedDate, {start: startDate, end})
}

export default isWithinDateRange
