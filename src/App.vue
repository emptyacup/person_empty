<template>
  <div class="all" :class="isDark">
    <main-aside></main-aside>
    <div class="main" :class="isClose">
      <main-header></main-header>
      <!-- <main-home></main-home> -->
      <router-view></router-view>
    </div>
    <fix-foote></fix-foote>
  </div>
</template>
// hover
<script>
import mainAside from '@/components/mainAside.vue'
import mainHeader from '@/components/mainHeader.vue'
// import mainHome from "./views/mainHome.vue";
import fixFoote from '@/components/fixFoote.vue'

export default {
  name: 'App',
  components: { mainAside, mainHeader, fixFoote },
  data() {
    return {
      isDark: '',
      isClose: 'main-close',
    }
  },
  mounted() {
    this.$bus.$on('cSun', this.changeSun)
    this.$bus.$on('cClose', this.changeClose)
  },
  methods: {
    changeSun(sun) {
      sun ? (this.isDark = '') : (this.isDark = 'dark')
    },
    changeClose(close) {
      close ? (this.isClose = 'main-close') : (this.isClose = '')
    },
  },
}
</script>

<style lang="less">
:root {
  --header-color: #fff;
  --main-color: #f9f9f9;
  --font-color: #6c757d;
  --font-active-color: #a93332;
  --black-font-color: rgba(39, 39, 39, 0.7);
  // aisde
  --aside-color: #515c6b;
  --contarn-color: #d2d2d280;
  --context-font-color: rgba(140, 140, 140, 0.8);
  // 圆形链接
  --cycle-link-color: #ebeff3;
  --cycle-link-active-color: #d5d9dd;
  // fix
  --fixfootert-font-color: rgba(39, 39, 39, 0.7);
  --fixfootert-color: rgba(209, 209, 209, 0.5);
  // menu
  --aside-menu-first: #dadbdd;
  --aside-menu-list: #f0f2f4;

  --tran-05: all 0.5s ease;
  --tran-03: all 0.3s ease;
}
.dark {
  --header-color: #363738;
  --main-color: #2c2e2f;
  --font-color: #bdc0c6;
  --font-active-color: #dfe3ea;
  --black-font-color: rgba(255, 255, 255, 0.7);
  --aside-color: #000;
  --contarn-color: #232426;
  --context-font-color: rgba(140, 140, 140, 0.8);
  --cycle-link-color: #2f3031;
  --cycle-link-active-color: #151617;
  --fixfootert-font-color: rgba(255, 255, 255, 0.7);
  --fixfootert-color: rgba(13, 13, 13, 0.5);
  --aside-menu-first: #151618;
  --aside-menu-list: #363738;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  transition: var(--tran-03);
  // 滑块总
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 2px;
  }
  // 滑块本身
  &::-webkit-scrollbar-thumb {
    background: var(--font-color);
    border-radius: 10px;
    height: 1px;
  }
  // 滑块轨道
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
}
.all {
  background-color: var(--main-color);
  transition: var(--tran-05);
  min-height: 100vh;
}
.main {
  margin-left: 220px;
  width: calc(100% - 220px);
  transition: var(--tran-03);
  min-height: 100%;
}
.main-close {
  margin-left: 60px;
  width: calc(100% - 60px);
}
a {
  color: var(--font-color);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--font-active-color);
  }
}
li {
  list-style: none;
}
@media screen and (max-width: 768px) {
  .main {
    margin-left: 0;
    width: 100%;
  }
}
</style>
