import isWithinDateRange from '@domains/dashBoard/activity/list/core/uses-cases/isWithinDateRange'

const filterWithRangeDate = (activities, range) => {
  return activities?.filter(({dated}) => {
    return isWithinDateRange(dated, range)
  })
}

export default filterWithRangeDate
