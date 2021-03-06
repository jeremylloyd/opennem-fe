<template>
  <div
    :class="{'is-active': dropdownActive}"
    class="dropdown">
    <a
      v-on-clickaway="handleClickAway"
      class="dropdown-trigger"
      @click="handleClick">
      <span>
        <strong>{{ regionLabel }}</strong>
        <i class="fal fa-chevron-down" />
      </span>          
    </a>

    <transition name="slide-down-fade">
      <div
        v-show="dropdownActive" 
        class="dropdown-menu">
        <div class="dropdown-content">
          <nuxt-link
            v-show="showRegionLink('all')"
            :to="`/${currentView}/all/`" 
            class="dropdown-item" 
            @click.native="handleClick">All Regions</nuxt-link>
          
          <hr 
            v-show="showRegionLink('all')" 
            class="dropdown-divider">
          
          <nuxt-link
            v-for="link in links"
            :key="link.id"
            :to="`/${currentView}/${link.id}/`"
            :class="{
              'dropdown-item-child': link.isChild,
              'dropdown-item-first-child': link.isFirstChild,
              'dropdown-item-last-child': link.isLastChild
            }"
            class="dropdown-item" 
            @click.native="handleClick">
            {{ link.label }}
          </nuxt-link>
        </div>
      </div>
    </transition> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import { getEnergyRegions } from '@/constants/energy-regions.js'

export default {
  mixins: [clickaway],

  data() {
    return {
      dropdownActive: false,
      regions: getEnergyRegions(),
      links: []
    }
  },

  computed: {
    ...mapGetters({
      wemEnergy: 'feature/wemEnergy'
    }),

    regionId() {
      return this.$route.params.region
    },
    regionLabel() {
      return this.getRegionLabel(this.regionId)
    },
    currentView() {
      return this.$store.getters.currentView
    }
  },

  watch: {
    currentView(view) {
      // create links without 'all' since a divider is needed
      this.links = this.getLinks()

      if (!this.wemEnergy && this.currentView !== 'facilities') {
        this.links = this.links.filter(r => r.id !== 'wem')
      }
    }
  },

  created() {
    // create links without 'all' since a divider is needed
    this.links = this.getLinks()

    if (!this.wemEnergy && this.currentView !== 'facilities') {
      this.links = this.links.filter(r => r.id !== 'wem')
    }
  },

  methods: {
    getLinks() {
      return this.regions
        .map(r => {
          const isChild = r.parentRegion ? true : false
          const isFirstChild = r.parentFirstChild ? true : false
          const isLastChild = r.parentLastChild ? true : false

          return {
            id: r.id,
            label: r.label,
            isChild,
            isFirstChild,
            isLastChild
          }
        })
        .filter(r => r.id !== 'all')
    },
    getRegionLabel(regionId) {
      const region = this.regions.find(d => d.id === regionId)
      return region ? region.label : ''
    },
    handleClick() {
      this.dropdownActive = !this.dropdownActive
      this.$store.dispatch('export/title', '')
      this.$store.dispatch('export/description', '')
      this.$store.dispatch('si/emissionsVolumePrefix', '')
    },
    handleClickAway() {
      this.dropdownActive = false
    },
    showRegionLink(regionId) {
      if (regionId === 'all' && this.currentView === 'energy') {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
$dropdown-border-colour: #dedede;
$dropdown-border-colour-hover: #999;

.dropdown-menu {
  display: block;
}

.dropdown-item-child {
  padding-left: 2rem;

  &::before {
    content: '';
    border-left: 1px dashed $dropdown-border-colour;
    position: absolute;
    top: 1px;
    bottom: 0;
    left: 1.1rem;
  }
  &::after {
    content: '';
    border-bottom: 1px dashed $dropdown-border-colour;
    position: absolute;
    width: 7px;
    top: 0;
    bottom: 17px;
    left: 1.1rem;
  }

  &:hover::before,
  &:hover::after {
    border-color: $dropdown-border-colour-hover;
  }

  &.dropdown-item-first-child::before {
    top: 0px;
  }

  &.dropdown-item-last-child::before {
    bottom: 17px;
  }
}
</style>
