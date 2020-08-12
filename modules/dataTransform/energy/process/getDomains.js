import * as FT from '@/constants/fuel-tech.js'
import {
  MARKET_VALUE,
  PRICE,
  PRICE_ABOVE_300,
  PRICE_BELOW_0,
  TEMPERATURE
} from '@/constants/v2/data-types'

export function getPowerEnergyDomains(ids, type) {
  return ids ? FT.getFuelTechObjs(ids, type).reverse() : []
}

export function getTemperatureDomains(ids) {
  return ids.map(t => {
    return {
      id: t,
      domain: t,
      type: TEMPERATURE,
      colour: '#e34a33'
    }
  })
}

export function getPriceDomains(res) {
  let domains = []
  const PRICE_COLOUR = '#e34a33'
  domains = res.map(d => {
    return { id: d.id, domain: d.id, type: d.type, colour: PRICE_COLOUR }
  })
  if (domains.length > 0) {
    domains.push({
      id: PRICE_ABOVE_300,
      domain: PRICE_ABOVE_300,
      type: PRICE,
      colour: PRICE_COLOUR
    })
    domains.push({
      id: PRICE_BELOW_0,
      domain: PRICE_BELOW_0,
      type: PRICE,
      colour: PRICE_COLOUR
    })
  }
  return domains
}

export function getVolWeightedPriceDomains() {
  const PRICE_COLOUR = '#e34a33'
  return [
    {
      id: '_volWeightedPrice',
      domain: '_volWeightedPrice',
      type: 'price',
      colour: PRICE_COLOUR
    },
    {
      id: '_volWeightedPriceAbove300',
      domain: '_volWeightedPriceAbove300',
      type: 'price',
      colour: PRICE_COLOUR
    },
    {
      id: '_volWeightedPriceBelow0',
      domain: '_volWeightedPriceBelow0',
      type: 'price',
      colour: PRICE_COLOUR
    }
  ]
}
