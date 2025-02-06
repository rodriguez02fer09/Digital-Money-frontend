import isWithinDateRange from '@domains/dashBoard/activity/list/core/uses-cases/isWithinDateRange'

export const filterWithRangeDate = (activities, range) => {
  return activities.filter(({date}) => {
    return isWithinDateRange(date, range)
  })
}
