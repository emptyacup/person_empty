<template>
  <div
    class="flex-item"
    :class="{ 'flex-item-close': closing }"
    @click="scroll"
  >
    <a :alt="title" @click="changeChildMenu()">
      <i
        class="bx bx-sm"
        :class="icon"
        style="position: relative; margin: 0px 8px"
      ></i>
      <!-- 右侧 -->
      <p>{{ title }}</p>
      <div class="close-list">
        <div class="close-item menu-first">{{ title }}</div>
        <ul>
          <li
            class="close-item menu"
            v-for="(item, index) in children"
            :key="index"
            @click="clickChildMenu"
          >
            <a href="">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </a>
    <i
      v-if="!closing && children"
      class="bx bx-chevron-right bx-sm icon-right"
    ></i>
    <!-- 底边 -->
    <transition>
      <ul v-if="!closing && itemClose">
        <li v-for="(item, index) in children" :key="index">
          <a class="chrldItem">
            <span style="height: 40px; margin-left: 10px">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'productiCard',
  props: {
    title: {},
    children: {
      type: Array,
    },
    closing: {
      type: Boolean,
      default: false,
    },
    icon: { type: String },
    id: {},
  },
  data() {
    return {
      itemClose: false,
    }
  },
  watch: {
    closing(val) {
      if (val) return
      this.itemClose = false
    },
  },
  methods: {
    handleImgSHow(item) {
      if (item.url) {
        window.open(item.url, 'blank')
      } else this.$emit('handleImgSHow', item.img)
    },
    changeChildMenu() {
      if (!this.children) return
      this.itemClose = !this.itemClose
    },
    // 滚动
    scroll() {
      const dom = document.getElementById(this.id)
      if (dom) {
        this.$utils.scrollTo(dom.offsetTop - 100)
      }
    },
    clickChildMenu() {},
  },
}
</script>

<style lang="less" scoped>
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
  .chrldItem {
    height: 40px;
    margin-left: 36px;
    line-height: 40px;
    font-size: 14px;
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
    pointer-events: none;
  }
}

.close-list {
  top: 10%;
  right: -10%;
  position: absolute;
  transform: translateX(100%);
  visibility: hidden;
  opacity: 0;
  transition: var(--tran-03);
  height: 40px;
  margin-left: 36px;
  line-height: 40px;
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
.flex-item-close {
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
    .close-list {
      // display: none;
      visibility: hidden;
    }
  }
}
@keyframes topup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.v-enter-active {
  animation: topup 0.5s ease;
}
.v-leave-active {
  animation: topup 0.5s reverse ease;
}
</style>
