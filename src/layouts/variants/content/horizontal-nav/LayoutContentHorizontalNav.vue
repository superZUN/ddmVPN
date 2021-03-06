<template>
  <layout-content-horizontal-nav :nav-menu-items="navMenuItems">
    <!-- Default Slot -->
    <slot></slot>

    <!-- Navbar -->
    <template #navbar>
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <!-- Left Content: Search -->
        <div class="d-flex align-center">
            <h2 class="app-title text--primary">
              뚱땡이VPN
            </h2>
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center">
          <app-bar-user-menu class="ms-2"></app-bar-user-menu>
        </div>
      </div>
      <v-overlay
        :value="$store.state.app.shallContentShowOverlay"
        z-index="5"
        absolute

        class="system-bar-overlay"
      ></v-overlay>
    </template>

  </layout-content-horizontal-nav>
</template>

<script>
import LayoutContentHorizontalNav from '@core/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import navMenuItems from '@/navigation/horizontal'

// App Bar Components
import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
import AppBarThemeSwitcher from '@core/layouts/components/app-bar/AppBarThemeSwitcher.vue'
import AppBarUserMenu from '@/components/AppBarUserMenu.vue'

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'

import { ref, watch } from '@vue/composition-api'

import themeConfig from '@themeConfig'
import { mdiHeartOutline } from '@mdi/js'

export default {
  components: {
    LayoutContentHorizontalNav,
    AppCustomizer,

    // App Bar Components
    AppBarSearch,
    AppBarThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    // Search
    const appBarSearchQuery = ref('')
    const shallShowFullSearch = ref(false)
    const maxItemsInGroup = 5
    const totalItemsInGroup = ref({
      pages: 0,
      files: 0,
      contacts: 0,
    })
    watch(appBarSearchQuery, () => {
      totalItemsInGroup.value = {
        pages: 0,
        files: 0,
        contacts: 0,
      }
    })

    const searchFilterFunc = (item, queryText, itemText) => {
      if (item.header || item.divider) return true

      const itemGroup = (() => {
        if (item.to !== undefined) return 'pages'
        if (item.size !== undefined) return 'files'
        if (item.email !== undefined) return 'contacts'

        return null
      })()

      const isMatched = itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1

      if (isMatched) {
        if (itemGroup === 'pages') totalItemsInGroup.value.pages += 1
        else if (itemGroup === 'files') totalItemsInGroup.value.files += 1
        else if (itemGroup === 'contacts') totalItemsInGroup.value.contacts += 1
      }

      return appBarSearchQuery.value && isMatched && totalItemsInGroup.value[itemGroup] <= maxItemsInGroup
    }

    return {
      navMenuItems,

      // Search
      appBarSearchQuery,
      shallShowFullSearch,
      appBarSearchData,
      searchFilterFunc,

      // App Config
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Icons
      icons: {
        mdiHeartOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}
</style>
