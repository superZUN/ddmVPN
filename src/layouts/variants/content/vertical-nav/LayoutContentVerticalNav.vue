<template>
  <layout-content-vertical-nav :nav-menu-items="navMenuItems">
    <slot></slot>
    <!-- Slot: Navbar -->
    <template #navbar="{ isVerticalNavMenuActive, toggleVerticalNavMenuActive }">
      <div
        class="navbar-content-container"
        :class="{'expanded-search': shallShowFullSearch}"
      >
        <!-- Left Content: Search -->
        <div class="d-flex align-center">
          <h2> 뚱땡이  VPN</h2>
          <!-- <v-icon
            v-if="$vuetify.breakpoint.mdAndDown"
            class="me-3"
            @click="toggleVerticalNavMenuActive"
          >
            {{ icons.mdiMenu }}
          </v-icon> -->
          <!-- <app-bar-search
            :shall-show-full-search.sync="shallShowFullSearch"
            :data="appBarSearchData"
            :filter="searchFilterFunc"
            :search-query.sync="appBarSearchQuery"
            @update:shallShowFullSearch="handleShallShowFullSearchUpdate(isVerticalNavMenuActive, toggleVerticalNavMenuActive)"
          ></app-bar-search> -->
        </div>

        <!-- Right Content: I18n, Light/Dark, Notification & User Dropdown -->
        <div class="d-flex align-center right-row">
        <!-- 네이버 로그인 버튼 노출 영역 -->
        <div id="naver_id_login"></div>
        <!-- //네이버 로그인 버튼 노출 영역 -->
          <button @click="logout" v-show="loginStatus"> logout </button>
          <!-- <app-bar-user-menu></app-bar-user-menu> -->
        </div>
      </div>
    </template>

    <!-- Slot: Footer -->
    <template #footer>
      <div class="d-flex justify-space-between">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a
          href="#"
          class="text-decoration-none"
        >뚱땡이마트</a><span class="d-none d-md-inline">, All rights Reserved</span></span>
        <div class="align-center d-none d-md-flex">
          <span>SZ Factory</span>
          <v-icon
            color="error"
            class="ms-2"
          >
            {{ icons.mdiHeartOutline }}
          </v-icon>
        </div>
      </div>
    </template>
  </layout-content-vertical-nav>
</template>

<script>
import LayoutContentVerticalNav from '@/@core/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import navMenuItems from '@/navigation/vertical'

// App Bar Components
import AppBarSearch from '@core/layouts/components/app-bar/AppBarSearch.vue'
import AppBarUserMenu from '@/components/AppBarUserMenu.vue'

import { mdiMenu, mdiHeartOutline } from '@mdi/js'

import { getVuetify } from '@core/utils'

// Search Data
import appBarSearchData from '@/assets/app-bar-search-data'

import { ref, watch } from '@vue/composition-api'

export default {
  components: {
    LayoutContentVerticalNav,
    AppBarSearch,
    AppBarUserMenu,
  },
  setup() {
    const $vuetify = getVuetify()

    //naver id login
    const client_id = '6Rui0wRGtzMeWTqpPbkM'
    const redirectURI = 'http://localhost:8080/home'
    const state = ''
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

    // NOTE: Update search function according to your usage
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

    // ? Handles case where in <lg vertical nav menu is open and search is triggered using hotkey then searchbox is hidden behind vertical nav menu overlaty
    const handleShallShowFullSearchUpdate = (isVerticalNavMenuActive, toggleVerticalNavMenuActive) => {
      if ($vuetify.breakpoint.mdAndDown && isVerticalNavMenuActive) {
        toggleVerticalNavMenuActive()
      }
    }

    return {
      navMenuItems,
      handleShallShowFullSearchUpdate,

      // Search
      appBarSearchQuery,
      shallShowFullSearch,
      appBarSearchData,
      searchFilterFunc,

      icons: {
        mdiMenu,
        mdiHeartOutline,
      },
    }
  },
  data() {
    return {
      loginStatus: false,
      client_id: '6Rui0wRGtzMeWTqpPbkM',
      client_secret: 'cpCyJkoSVU',
      callbackUrl: 'http://localhost:8080/home',
      token: undefined,
      email: undefined,
      nickname: undefined,
      naver_id_login: undefined,
    }
  },
  mounted() {
    this.naver_id_login = new window.naver_id_login('6Rui0wRGtzMeWTqpPbkM', 'http://localhost:8080/home')

    if (this.naver_id_login.getAccessToken() != undefined) {
      this.loginStatus = true

      this.token = this.naver_id_login.oauthParams.access_token
      this.naver_id_login.get_naver_userprofile('this.callback')
      // 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
      setTimeout(() => {
        this.email = this.naver_id_login.getProfileData('email')
        this.nickname = this.naver_id_login.getProfileData('nickname')

        this.$emit('setInput', this.nickname)
      }, 2000)
    } else {
      console.log('no token')
      const state = this.naver_id_login.getUniqState()
      this.naver_id_login.setButton('white', 2, 25) // 버튼 설정
      this.naver_id_login.setState(state)
      // naver_id_login.setPopup(); // popup 설정을 위한 코드
      this.naver_id_login.init_naver_id_login()
    }
  },
  methods: {
    logout() {
      var url =
        'https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=jyvqXeaVOVmV' +
        this.client_id +
        '&client_secret=' +
        this.client_secret +
        '&access_token=' +
        this.token +
        '&service_provider=NAVER'

      this.axios.get(url).then(response => {
        console.log(response.data)
      })
      window.location.replace(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}

// ? Handle bg of autocomplete for blured appBar
.v-app-bar.bg-blur {
  .expanded-search {
    ::v-deep .app-bar-autocomplete-box div[role='combobox'] {
      background-color: transparent;
    }

    > .d-flex > button.v-icon {
      display: none;
    }

    // ===

    & > .right-row {
      visibility: hidden;
      opacity: 0;
    }

    ::v-deep .app-bar-search-toggler {
      visibility: hidden;
    }
  }
}
</style>
