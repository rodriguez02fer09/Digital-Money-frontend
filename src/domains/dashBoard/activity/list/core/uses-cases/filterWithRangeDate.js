import isWithinDateRange from '@domains/dashBoard/activity/list/core/uses-cases/isWithinDateRange'

const filterWithRangeDate = (activities, range) => {
  return activities?.filter(({date}) => {
    return isWithinDateRange(date, range)
  })
}

export default filterWithRangeDate
