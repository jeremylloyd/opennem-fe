import { lsSet } from '~/services/LocalStorage'
import {
  FEATURE_TOGGLE_EMISSIONS,
  FEATURE_TOGGLE_REGION_COMPARE,
  FEATURE_TOGGLE_WEM_ENERGY
} from '@/constants/mutation-types/features.js'

export const state = () => ({
  emissions: false,
  regionCompare: false,
  wemEnergy: false
})

export const getters = {
  emissions: state => state.emissions,
  regionCompare: state => state.regionCompare,
  wemEnergy: state => state.wemEnergy
}

export const mutations = {
  emissions(state, emissions) {
    lsSet(FEATURE_TOGGLE_EMISSIONS, emissions)
    state.emissions = emissions
  },
  regionCompare(state, regionCompare) {
    lsSet(FEATURE_TOGGLE_REGION_COMPARE, regionCompare)
    state.regionCompare = regionCompare
  },
  wemEnergy(state, wemEnergy) {
    lsSet(FEATURE_TOGGLE_WEM_ENERGY, wemEnergy)
    state.wemEnergy = wemEnergy
  }
}

export const actions = {}
