import _cloneDeep from 'lodash.clonedeep'
import AxisTicks from '@/services/axisTicks.js'
import AxisTimeFormats from '@/services/axisTimeFormats.js'
import DateDisplay from '@/services/DateDisplay.js'

export const state = () => ({
  isHovering: false,
  hoverDate: null,
  hoverDomain: null,
  highlightDomain: '',
  focusDate: null,
  xTicks: null,
  xGuides: null,
  tickFormat: () => ({}),
  secondTickFormat: () => ({}),

  chartSummaryPie: true
})

export const getters = {
  isHovering: state => state.isHovering,
  hoverDate: state => state.hoverDate,
  hoverDomain: state => state.hoverDomain,
  highlightDomain: state => state.highlightDomain,
  isFocusing: state => state.focusDate !== null,
  focusDate: state => state.focusDate,
  xTicks: state => state.xTicks,
  xGuides: state => state.xGuides,
  tickFormat: state => state.tickFormat,
  secondTickFormat: state => state.secondTickFormat,

  chartSummaryPie: state => state.chartSummaryPie
}

export const mutations = {
  isHovering(state, isHovering) {
    state.isHovering = isHovering
  },
  hoverDate(state, hoverDate) {
    state.hoverDate = hoverDate
  },
  hoverDomain(state, hoverDomain) {
    state.hoverDomain = hoverDomain
  },
  highlightDomain(state, highlightDomain) {
    state.highlightDomain = highlightDomain
  },
  focusDate(state, focusDate) {
    state.focusDate = focusDate
  },
  xTicks(state, xTicks) {
    state.xTicks = xTicks
  },
  xGuides(state, xGuides) {
    state.xGuides = xGuides
  },
  tickFormat(state, tickFormat) {
    state.tickFormat = tickFormat
  },
  secondTickFormat(state, secondTickFormat) {
    state.secondTickFormat = secondTickFormat
  },

  chartSummaryPie(state, data) {
    state.chartSummaryPie = data
  }
}

export const actions = {
  doUpdateXTicks({ commit }, { range, interval, isZoomed, fitlerPeriod }) {
    commit('xTicks', AxisTicks(range, interval, isZoomed, fitlerPeriod))
  },

  doUpdateXGuides({ commit }, { interval, start, end }) {
    let xGuides = []
    if (interval === 'Day') {
      xGuides = DateDisplay.weekendGuides(start, end)
    }
    if (interval === '5m' || interval === '30m') {
      xGuides = DateDisplay.nightGuides(start, end)
    }
    commit('xGuides', xGuides)
  },

  doUpdateTickFormats({ commit }, { range, interval }) {
    let tickFormat = AxisTimeFormats.defaultFormat,
      secondTickFormat = AxisTimeFormats.secondaryFormat
    switch (interval) {
      case 'Day':
        tickFormat = AxisTimeFormats.intervalDayTimeFormat
        secondTickFormat = AxisTimeFormats.intervalDaySecondaryTimeFormat
        break
      case 'Week':
        tickFormat = AxisTimeFormats.intervalWeekTimeFormat
        secondTickFormat = AxisTimeFormats.intervalWeekSecondaryTimeFormat
        break
      case 'Month':
        range === 'ALL'
          ? (tickFormat = AxisTimeFormats.rangeAllIntervalMonthTimeFormat)
          : (tickFormat = AxisTimeFormats.intervalMonthTimeFormat)
        break
      case 'Fin Year':
        tickFormat = d => {
          const year = d.getFullYear() + 1 + ''
          return `FY${year.substr(2, 2)}`
        }
        break
      default:
    }
    commit('tickFormat', tickFormat)
    commit('secondTickFormat', secondTickFormat)
  }
}
