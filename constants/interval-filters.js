export const INTERVAL_5MIN = '5m'
export const INTERVAL_30MIN = '30m'
export const INTERVAL_DAY = 'Day'
export const INTERVAL_WEEK = 'Week'
export const INTERVAL_MONTH = 'Month'
export const INTERVAL_FINYEAR = 'Fin Year'
export const INTERVAL_YEAR = 'Year'

export const INTERVAL_SEASON = 'Season'
export const FILTER_SEASON_SUMMER = 'Summer'
export const FILTER_SEASON_AUTUMN = 'Autumn'
export const FILTER_SEASON_WINTER = 'Winter'
export const FILTER_SEASON_SPRING = 'Spring'

export const INTERVAL_QUARTER = 'Quarter'
export const FILTER_QUARTER_Q1 = 'Q1'
export const FILTER_QUARTER_Q2 = 'Q2'
export const FILTER_QUARTER_Q3 = 'Q3'
export const FILTER_QUARTER_Q4 = 'Q4'

export const INTERVAL_HALFYEAR = 'Half Year'
export const FILTER_HALFYEAR_1ST = '1st Half'
export const FILTER_HALFYEAR_2ND = '2nd Half'

export const FILTER_NONE = 'All'

export const INTERVAL_FILTERS = {}
INTERVAL_FILTERS[INTERVAL_SEASON] = [
  FILTER_NONE,
  FILTER_SEASON_SUMMER,
  FILTER_SEASON_AUTUMN,
  FILTER_SEASON_WINTER,
  FILTER_SEASON_SPRING
]
INTERVAL_FILTERS[INTERVAL_QUARTER] = [
  FILTER_NONE,
  FILTER_QUARTER_Q1,
  FILTER_QUARTER_Q2,
  FILTER_QUARTER_Q3,
  FILTER_QUARTER_Q4
]
INTERVAL_FILTERS[INTERVAL_HALFYEAR] = [
  FILTER_NONE,
  FILTER_HALFYEAR_1ST,
  FILTER_HALFYEAR_2ND
]

export function hasIntervalFilters(interval) {
  return (
    interval === INTERVAL_SEASON ||
    interval === INTERVAL_QUARTER ||
    interval === INTERVAL_HALFYEAR
  )
}
