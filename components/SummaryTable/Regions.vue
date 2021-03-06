<template>
  <section>
    <dates-display
      :start-date="startDate"
      :end-date="endDate"
      :hovered-date="timeHovered"
      :range="range"
      :interval="interval"
    />
    <div class="summary">
      <div class="summary-header">
        <div class="summary-row">
          <div class="item-region summary-item">
            <group-selector />
          </div>
          <div 
            v-if="isEnergy" 
            class="item-energy summary-item">
            <span>Energy</span>
            <small>GWh</small>
          </div>
          <div 
            v-else 
            class="item-energy summary-item">
            <span>Power</span>
            <small>MW</small>
          </div>
          <div class="item-contribution summary-item">
            <span>Contribution</span>
            <small>to demand</small>
          </div>
          <column-selector class="item-price summary-item" />
        </div>
      </div>
      <div class="summary-list">
        <div 
          v-for="d in domains" 
          :key="d.domain"
          class="summary-row"
          @touchstart="handleTouchstart(d.domain)"
          @touchend="handleTouchend"
          @mouseenter="handleRegionEnter(d.domain)"
          @mouseleave="handleRegionLeave()"
          @click.exact="handleRegionClick(d.domain)"
          @click.shift.exact="handleRegionShiftClick(d.domain)">
          <div class="item-region summary-item">
            <span 
              :style="{
                'background-color': isHidden(d.domain) ? '#fff' : d.colour
              }" 
              class="colour-square"/>
            <strong>{{ d.label }}</strong>
          </div>

          <div class="item-energy summary-item">{{ getEnergyValue(d.domain) }}</div>
          <div class="item-contribution summary-item"/>
          
          <div 
            v-if="isEmissionsVolumeColumn" 
            class="item-emissions summary-item">{{ getEmissionValue(d.domain) }}</div>
          <div 
            v-if="isEmissionsIntensityColumn" 
            class="item-emissions summary-item">{{ getEmissionIntValue(d.domain) }}</div>
          <div 
            v-if="isAvValueColumn" 
            class="item-price summary-item">{{ getPriceValue(d.domain) }}</div>
            <!-- <div class="summary-item">{{ getTemperatureValue(d.domain) }}</div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EnergyDataTransform from '~/services/dataTransform/Energy.js'
import DatesDisplay from '~/components/SummaryTable/DatesDisplay'
import GroupSelector from '~/components/ui/FuelTechGroupSelector'
import ColumnSelector from '~/components/ui/SummaryColumnSelector'

export default {
  components: {
    GroupSelector,
    ColumnSelector,
    DatesDisplay
  },
  props: {
    domains: {
      type: Array,
      default: () => []
    },
    dataset: {
      type: Object,
      default: () => {}
    },
    dateHovered: {
      type: Date,
      default: () => null
    },
    range: {
      type: String,
      default: () => ''
    },
    interval: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      mousedownDelay: null,
      longPress: 500
    }
  },

  computed: {
    ...mapGetters({
      showSummaryColumn: 'showSummaryColumn',
      dateFilter: 'dateFilter',
      filteredRegions: 'region/filteredRegions',
      hiddenRegions: 'region/hiddenRegions'
    }),
    isEnergy() {
      return this.range === '30D' || this.range === '1Y' || this.range === 'ALL'
    },
    isAvValueColumn() {
      return this.showSummaryColumn === 'av-value'
    },
    isEmissionsVolumeColumn() {
      return this.showSummaryColumn === 'emissions-volume'
    },
    isEmissionsIntensityColumn() {
      return this.showSummaryColumn === 'emissions-intensity'
    },
    timeHovered() {
      return this.dateHovered ? this.dateHovered.getTime() : 0
    },
    filteredEnergyDataset() {
      return this.dateFilter.length > 0
        ? EnergyDataTransform.filterDataByStartEndDates(
            this.dataset.energy,
            this.dateFilter[0],
            this.dateFilter[1]
          )
        : this.dataset.energy
    },
    startDate() {
      const dataset = this.filteredEnergyDataset
      const dataLength = dataset.length
      const startDate = dataLength > 0 ? dataset[0].date : null
      return startDate
    },
    endDate() {
      const dataset = this.filteredEnergyDataset
      const dataLength = dataset.length
      let whichIndex = 1
      if (this.isEnergy) {
        whichIndex = 2
      }
      if (dataLength > 0) {
        const date = dataset[dataLength - whichIndex]
          ? dataset[dataLength - whichIndex].date
          : dataset[dataLength - 1].date
        const endDate = date
        return endDate
      } else {
        return null
      }
    }
  },

  methods: {
    ...mapActions({
      hideRegion: 'region/hideRegion',
      showThisRegionOnly: 'region/showThisRegionOnly'
    }),
    getEnergyValue(domain) {
      return this.$options.filters.formatValue(
        this.findDataPoint('energy', domain, false)
      )
    },
    getEmissionValue(domain) {
      return this.$options.filters.formatValue(
        this.findDataPoint('emissionVol', domain, false)
      )
    },
    getEmissionIntValue(domain) {
      return this.$options.filters.formatValue(
        this.findDataPoint('emissionInt', domain, true)
      )
    },
    getPriceValue(domain) {
      return this.$options.filters.formatCurrency(
        this.findDataPoint('price', domain, true)
      )
    },
    getTemperatureValue(domain) {
      return this.$options.filters.formatValue(
        this.findDataPoint('temperature', domain, true)
      )
    },
    findDataPoint(prop, domain, showIncompleteBucketValues) {
      if (!this.dataset || !this.dataset[prop]) return ''
      const find = this.dataset[prop].find(d => d.date === this.timeHovered)

      if (showIncompleteBucketValues) {
        return find ? find[domain] : ''
      } else {
        return find && !find._isIncompleteBucket ? find[domain] : ''
      }
    },
    isHidden(domain) {
      return this.hiddenRegions.find(r => r === domain)
    },
    handleRegionClick(region) {
      this.hideRegion(region)
    },
    handleRegionShiftClick(region) {
      this.showThisRegionOnly(region)
    },
    handleRegionEnter(region) {
      this.$store.commit('region/hoveredRegion', region)
    },
    handleRegionLeave() {
      this.$store.commit('region/hoveredRegion', null)
    },
    handleTouchstart(domain) {
      this.mousedownDelay = setTimeout(() => {
        this.handleRegionShiftClick(domain)
      }, this.longPress)
    },
    handleTouchend() {
      this.clearTimeout()
    },
    clearTimeout() {
      clearTimeout(this.mousedownDelay)
      this.mousedownDelay = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/responsive-mixins.scss';
@import '~/assets/scss/variables.scss';
.summary {
  font-size: 0.8em;
}
.summary-row {
  display: flex;
  align-items: center;
  padding: 3px 4px;
  border-bottom: 1px solid #ddd;
  user-select: none;
}
.summary-header {
  .summary-row {
    font-family: $header-font-family;
    font-weight: 700;

    small {
      display: block;
    }
  }
}
.summary-list {
  .summary-row {
    cursor: pointer;

    &:hover {
      background-color: $row-hover;
    }
  }
}

.item-energy,
.item-contribution,
.item-price,
.item-emissions {
  width: 25%;
  text-align: right;
  padding: 0 5px;
}

.item-region {
  width: 180px;
  display: flex;
  align-content: center;
  text-align: left;
  .colour-square {
    display: block;
    width: 15px;
    height: 15px;
    background-color: #eee;
    margin-right: 5px;
  }
}
</style>
