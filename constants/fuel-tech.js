export const GROUP_LABEL = 'Default'
export const GROUP_NAME = 'default'

export const PUMPS = 'pumps'
export const BATTERY_CHARGING = 'battery_charging'
export const EXPORTS = 'exports'
export const IMPORTS = 'imports'
export const BROWN_COAL = 'brown_coal'
export const BLACK_COAL = 'black_coal'
export const BIOMASS = 'biomass'
export const BIOENERGY_BIOMASS = 'bioenergy_biomass'
export const BIOENERGY_BIOGAS = 'bioenergy_biogas'
export const DISTILLATE = 'distillate'
export const GAS_STEAM = 'gas_steam'
export const GAS_CCGT = 'gas_ccgt'
export const GAS_OCGT = 'gas_ocgt'
export const GAS_RECIP = 'gas_recip'
export const GAS_LFG = 'gas_lfg' // deprecate
export const GAS_WCMG = 'gas_wcmg'
export const BATTERY_DISCHARGING = 'battery_discharging'
export const HYDRO = 'hydro'
export const WIND = 'wind'
export const SOLAR = 'solar'
export const ROOFTOP_SOLAR = 'rooftop_solar'
// v3 ids
export const COAL_BROWN = 'coal_brown'
export const COAL_BLACK = 'coal_black'
export const SOLAR_UTILITY = 'solar_utility'
export const SOLAR_ROOFTOP = 'solar_rooftop'

// Fuel tech default order
export const DEFAULT_FUEL_TECH_ORDER = [
  SOLAR_ROOFTOP,
  ROOFTOP_SOLAR,
  SOLAR_UTILITY,
  SOLAR,
  WIND,
  HYDRO,
  BATTERY_DISCHARGING,
  GAS_WCMG,
  GAS_LFG,
  GAS_RECIP,
  GAS_OCGT,
  GAS_CCGT,
  GAS_STEAM,
  DISTILLATE,
  BIOENERGY_BIOMASS,
  BIOENERGY_BIOGAS,
  BIOMASS,
  COAL_BLACK,
  BLACK_COAL,
  COAL_BROWN,
  BROWN_COAL,
  IMPORTS,
  EXPORTS,
  PUMPS,
  BATTERY_CHARGING
]

// Fuel tech colour
export const DEFAULT_FUEL_TECH_COLOUR = {}
DEFAULT_FUEL_TECH_COLOUR[PUMPS] = '#88AFD0'
DEFAULT_FUEL_TECH_COLOUR[BATTERY_CHARGING] = '#B2DAEF'
DEFAULT_FUEL_TECH_COLOUR[EXPORTS] = '#977AB1'
DEFAULT_FUEL_TECH_COLOUR[IMPORTS] = '#44146F'
DEFAULT_FUEL_TECH_COLOUR[BROWN_COAL] = '#8B572A'
DEFAULT_FUEL_TECH_COLOUR[BLACK_COAL] = '#121212'
DEFAULT_FUEL_TECH_COLOUR[COAL_BROWN] = '#8B572A'
DEFAULT_FUEL_TECH_COLOUR[COAL_BLACK] = '#121212'
DEFAULT_FUEL_TECH_COLOUR[BIOMASS] = '#A3886F'
DEFAULT_FUEL_TECH_COLOUR[BIOENERGY_BIOGAS] = '#4CB9B9'
DEFAULT_FUEL_TECH_COLOUR[BIOENERGY_BIOMASS] = '#1D7A7A'
DEFAULT_FUEL_TECH_COLOUR[DISTILLATE] = '#F35020'
DEFAULT_FUEL_TECH_COLOUR[GAS_STEAM] = '#F48E1B'
DEFAULT_FUEL_TECH_COLOUR[GAS_CCGT] = '#FDB462'
DEFAULT_FUEL_TECH_COLOUR[GAS_OCGT] = '#FFCD96'
DEFAULT_FUEL_TECH_COLOUR[GAS_RECIP] = '#F9DCBC'
DEFAULT_FUEL_TECH_COLOUR[GAS_LFG] = '#DD8018'
DEFAULT_FUEL_TECH_COLOUR[GAS_WCMG] = '#B46813'
DEFAULT_FUEL_TECH_COLOUR[BATTERY_DISCHARGING] = '#00A2FA'
DEFAULT_FUEL_TECH_COLOUR[HYDRO] = '#4582B4'
DEFAULT_FUEL_TECH_COLOUR[WIND] = '#417505'
DEFAULT_FUEL_TECH_COLOUR[SOLAR] = '#DFCF00'
DEFAULT_FUEL_TECH_COLOUR[ROOFTOP_SOLAR] = '#F8E71C'
DEFAULT_FUEL_TECH_COLOUR[SOLAR_UTILITY] = '#DFCF00'
DEFAULT_FUEL_TECH_COLOUR[SOLAR_ROOFTOP] = '#F8E71C'

// Fuel tech type
export const LOAD = 'load'
export const SOURCE = 'source'
export const FUEL_TECH_CATEGORY = {}
FUEL_TECH_CATEGORY[PUMPS] = LOAD
FUEL_TECH_CATEGORY[BATTERY_CHARGING] = LOAD
FUEL_TECH_CATEGORY[EXPORTS] = LOAD
FUEL_TECH_CATEGORY[IMPORTS] = SOURCE
FUEL_TECH_CATEGORY[BROWN_COAL] = SOURCE
FUEL_TECH_CATEGORY[BLACK_COAL] = SOURCE
FUEL_TECH_CATEGORY[COAL_BROWN] = SOURCE
FUEL_TECH_CATEGORY[COAL_BLACK] = SOURCE
FUEL_TECH_CATEGORY[BIOMASS] = SOURCE
FUEL_TECH_CATEGORY[BIOENERGY_BIOGAS] = SOURCE
FUEL_TECH_CATEGORY[BIOENERGY_BIOMASS] = SOURCE
FUEL_TECH_CATEGORY[DISTILLATE] = SOURCE
FUEL_TECH_CATEGORY[GAS_STEAM] = SOURCE
FUEL_TECH_CATEGORY[GAS_CCGT] = SOURCE
FUEL_TECH_CATEGORY[GAS_OCGT] = SOURCE
FUEL_TECH_CATEGORY[GAS_RECIP] = SOURCE
FUEL_TECH_CATEGORY[GAS_LFG] = SOURCE
FUEL_TECH_CATEGORY[GAS_WCMG] = SOURCE
FUEL_TECH_CATEGORY[BATTERY_DISCHARGING] = SOURCE
FUEL_TECH_CATEGORY[HYDRO] = SOURCE
FUEL_TECH_CATEGORY[WIND] = SOURCE
FUEL_TECH_CATEGORY[SOLAR] = SOURCE
FUEL_TECH_CATEGORY[ROOFTOP_SOLAR] = SOURCE
FUEL_TECH_CATEGORY[SOLAR_UTILITY] = SOURCE
FUEL_TECH_CATEGORY[SOLAR_ROOFTOP] = SOURCE

export const FUEL_TECH_RENEWABLE = {}
FUEL_TECH_RENEWABLE[PUMPS] = false
FUEL_TECH_RENEWABLE[BATTERY_CHARGING] = false
FUEL_TECH_RENEWABLE[EXPORTS] = false
FUEL_TECH_RENEWABLE[IMPORTS] = false
FUEL_TECH_RENEWABLE[BROWN_COAL] = false
FUEL_TECH_RENEWABLE[BLACK_COAL] = false
FUEL_TECH_RENEWABLE[COAL_BROWN] = false
FUEL_TECH_RENEWABLE[COAL_BLACK] = false
FUEL_TECH_RENEWABLE[BIOMASS] = true
FUEL_TECH_RENEWABLE[BIOENERGY_BIOGAS] = true
FUEL_TECH_RENEWABLE[BIOENERGY_BIOMASS] = true
FUEL_TECH_RENEWABLE[DISTILLATE] = false
FUEL_TECH_RENEWABLE[GAS_STEAM] = false
FUEL_TECH_RENEWABLE[GAS_CCGT] = false
FUEL_TECH_RENEWABLE[GAS_OCGT] = false
FUEL_TECH_RENEWABLE[GAS_RECIP] = false
FUEL_TECH_RENEWABLE[GAS_LFG] = false
FUEL_TECH_RENEWABLE[GAS_WCMG] = false
FUEL_TECH_RENEWABLE[BATTERY_DISCHARGING] = false
FUEL_TECH_RENEWABLE[HYDRO] = true
FUEL_TECH_RENEWABLE[WIND] = true
FUEL_TECH_RENEWABLE[SOLAR] = true
FUEL_TECH_RENEWABLE[ROOFTOP_SOLAR] = true
FUEL_TECH_RENEWABLE[SOLAR_UTILITY] = true
FUEL_TECH_RENEWABLE[SOLAR_ROOFTOP] = true

// Fuel tech label
export const FUEL_TECH_LABEL = {}
FUEL_TECH_LABEL[PUMPS] = 'Pumps'
FUEL_TECH_LABEL[BATTERY_CHARGING] = 'Battery (Charging)'
FUEL_TECH_LABEL[EXPORTS] = 'Exports'
FUEL_TECH_LABEL[IMPORTS] = 'Imports'
FUEL_TECH_LABEL[BROWN_COAL] = 'Brown Coal'
FUEL_TECH_LABEL[BLACK_COAL] = 'Black Coal'
FUEL_TECH_LABEL[COAL_BROWN] = 'Brown Coal'
FUEL_TECH_LABEL[COAL_BLACK] = 'Black Coal'
FUEL_TECH_LABEL[BIOMASS] = 'Biomass'
FUEL_TECH_LABEL[BIOENERGY_BIOGAS] = 'Bioenergy (Biogas)'
FUEL_TECH_LABEL[BIOENERGY_BIOMASS] = 'Bioenergy (Biomass)'
FUEL_TECH_LABEL[DISTILLATE] = 'Distillate'
FUEL_TECH_LABEL[GAS_STEAM] = 'Gas (Steam)'
FUEL_TECH_LABEL[GAS_CCGT] = 'Gas (CCGT)'
FUEL_TECH_LABEL[GAS_OCGT] = 'Gas (OCGT)'
FUEL_TECH_LABEL[GAS_RECIP] = 'Gas (Reciprocating)'
FUEL_TECH_LABEL[GAS_LFG] = 'Gas (Landfill)'
FUEL_TECH_LABEL[GAS_WCMG] = 'Gas (Waste Coal Mine)'
FUEL_TECH_LABEL[BATTERY_DISCHARGING] = 'Battery (Discharging)'
FUEL_TECH_LABEL[HYDRO] = 'Hydro'
FUEL_TECH_LABEL[WIND] = 'Wind'
FUEL_TECH_LABEL[SOLAR] = 'Solar (Utility)'
FUEL_TECH_LABEL[ROOFTOP_SOLAR] = 'Solar (Rooftop)'
FUEL_TECH_LABEL[SOLAR_UTILITY] = 'Solar (Utility)'
FUEL_TECH_LABEL[SOLAR_ROOFTOP] = 'Solar (Rooftop)'

export function getFuelTechObjs(fuelTechs, type) {
  return Object.keys(fuelTechs).map(ft => {
    return {
      id: fuelTechs[ft],
      domain: fuelTechs[ft],
      fuelTech: ft,
      label: FUEL_TECH_LABEL[ft],
      colour: DEFAULT_FUEL_TECH_COLOUR[ft],
      category: FUEL_TECH_CATEGORY[ft],
      renewable: FUEL_TECH_RENEWABLE[ft],
      type
    }
  })
}

export function isNetFuelTech(fuelTech) {
  return (
    fuelTech === BATTERY_CHARGING ||
    fuelTech === BATTERY_DISCHARGING ||
    fuelTech === HYDRO ||
    fuelTech === PUMPS ||
    fuelTech === EXPORTS ||
    fuelTech === IMPORTS
  )
}
