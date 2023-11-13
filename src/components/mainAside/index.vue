<template>
  <div class="media-main-asider aside" :class="isClose">
    <div class="header">
      <img id="header-img" :src="srcImg" alt="emptyacup" />
    </div>
    <div class="contarn">
      <div class="contarn-flex">
        <menuItem
          :closing="closing"
          v-for="(item, index) in menuList"
          :key="index"
          :title="item.name"
          :icon="item.icon"
          :children="item.children"
          :id="item.id"
        ></menuItem>
      </div>
    </div>
    <div class="foo">
      <div class="flex-item">
        <a href="" alt="持续更新">
          <i
            class="bx bx-star bx-sm"
            style="position: relative; margin: 0px 8px"
          ></i>
          <p>新标签页</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import menuItem from './menuItem.vue'
export default {
  name: 'mainAside',
  components: { menuItem },
  data() {
    return {
      img: {
        cat: process.env.VUE_APP_BACK_URL + '/webtent/图层1.png',
        dark: process.env.VUE_APP_BACK_URL + '/webtent/黑杯.png',
        sun: process.env.VUE_APP_BACK_URL + '/webtent/杯.png',
      },
      srcImg: process.env.VUE_APP_BACK_URL + '/webtent/图层1.png',
      isClose: 'close',
      closing: true,
      suning: true,
      menuList: [
        { name: '持续进步', icon: 'bx-paper-plane', id: 'progress' },
        {
          name: '空杯原创',
          icon: 'bx-fingerprint',
          id: 'product',
          children: [
            { name: '产品版面', value: 1 },
            { name: '前端内容', value: 2 },
          ],
        },
        {
          name: '空杯分享',
          icon: 'bx-share-alt',
          id: 'share',
          children: [
            { name: '电子书籍', value: 1 },
            { name: '不知道放什么', value: 2 },
            { name: '不知道放什么', value: 3 },
          ],
        },
      ],
    }
  },
  mounted() {
    this.$bus.$on('cSun', this.changeSun)
    this.$bus.$on('cClose', this.changeClose)
  },
  methods: {
    changeSun(sun) {
      this.suning = sun
      if (!this.closing) {
        sun ? (this.srcImg = this.img.sun) : (this.srcImg = this.img.dark)
      }
    },
    changeClose(close) {
      this.closing = close
      if (close) {
        this.isClose = 'close'
        this.srcImg = this.img.cat
      } else {
        this.isClose = ''
        this.changeSun(this.suning)
      }
    },
    changeChildMenu(item) {
      this.childmenu[item] = !this.childmenu[item]
    },
  },
}
</script>

<style lang="less" scoped>
.aside {
  position: fixed;
  width: 220px;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 7;
  transition: var(--tran-03);
  .header {
    height: 74px;
    background-color: var(--header-color);
    width: 100%;
    text-align: center;
    line-height: 100px;
    #header-img {
      max-height: 35px;
    }
  }
  .contarn {
    flex: 1;
    width: 100%;
    .contarn-flex {
      display: flex;
      flex-direction: column;
      .close-list {
        top: 10%;
        right: -10%;
        position: absolute;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        transition: var(--tran-03);
        .close-item {
          display: flex;
          align-items: center;
          height: 40px;
          width: 180px;
          line-height: 40px;
        }
        .menu-first {
          background: var(--aside-menu-first);
          border-radius: 4px;
          color: var(--font-color);
          padding: 8px 20px;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            background: var(--aside-menu-first);
            width: 8px;
            height: 8px;
            bottom: 50%;
            left: -3px;
            transform: translateY(50%) rotate(45deg);
          }
        }
        ul {
          background-color: var(--aside-menu-list);
          a {
            display: flex;
            width: 90%;
            height: 90%;
            padding: 8px 10px;
            margin: 3px 8px;
            align-items: center;
          }
        }
      }
    }
    .icon-right {
      top: 0;
      position: absolute;
      content: '';
      width: 32px;
      height: 32px;
      border-radius: 50%;
      right: 10px;
      text-align: center;
      line-height: 32px;
      color: var(--font-color);
      transform: translateY(25%);
    }
  }
  .flex-item {
    text-align: center;
    line-height: 45px;
    position: relative;
    a {
      display: flex;
      height: 45px;
      margin: 0 5px;
      border-radius: 8px;
      padding: 12px 5px;
      justify-items: center;
      align-items: center;
      position: relative;
      transition: var(--tran-03);
      &:hover {
        background-color: var(--contarn-color);
        transition: var(--tran-03);
      }
      p {
        font-size: 14px;
      }
    }
  }
  .foo {
    height: 60px;
    width: 100%;
  }
}
.close {
  width: 60px;
  .flex-item {
    a {
      &:hover {
        .close-list {
          visibility: visible;
          opacity: 1;
        }
      }
      p {
        display: none;
      }
    }
  }

  .icon-right {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .media-main-asider {
    display: none;
  }
}
</style>
