<template>
  <div class="toolTip-container" :style="{ display: display }">
    <transition>
      <div
        ref="tipContainer"
        v-show="show"
        :style="{
          width: width + 'px',
          background: background,
          color: color,
          borderRadius: borderRadius,
          tabindex: tabindex,
          padding: padding,
        }"
        class="tip-toolTip-container"
        :class="{ [`position-${placement}`]: true }"
        @mouseleave="mouseleave"
        @mouseenter="mouseenter"
      >
        <!-- 角  如果背景透明，不透明度会叠加 暂时不用了-->
        <div
          class="angle"
          v-if="visibleArrow"
          :style="{ [`border-${placement}-color`]: background }"
        ></div>
        <slot></slot>
      </div>
    </transition>
    <span
      ref="btnContainer"
      class="btn"
      @mouseleave="mouseleave"
      @mouseenter="mouseenter"
      @click.stop="click"
    >
      <slot name="reference"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'toolTip',
  props: {
    trigger: {
      //触发方式
      type: String,
      default: 'hover',
      validator: value => ['hover', 'click'].indexOf(value) > -1,
    },
    reference: {},
    width: {
      type: [String, Number],
    },
    placement: {
      //提示框位置
      type: String,
      default: 'top',
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    background: {
      type: String,
      default: 'rgba(0,0,0,0.65)',
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    padding: {
      //左右
      type: String,
      default: '10px 12px',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
    display: {
      //inline-block    消失会有体积，土方法
      type: String,
      default: 'inline',
    },
  },
  data() {
    return {
      show: false,
      class: 'top',
      scroll: null,
    }
  },
  // 摧毁
  beforeDestroy() {
    this.eventHandler()
    // console.log(this.$refs.tipContainer)
    // if (document && this.$refs.tipContainer) {
    //   document.removeChild(this.$refs.tipContainer)
    // }
    // 删除所有创造的元素
    var tip = [...document.getElementsByClassName('tip-toolTip-container')]
    if (tip.length > 0) {
      for (let i = 0; i < tip.length; i++) {
        tip[i].remove()
      }
    }
    // tip.remove()
  },
  mounted() {
    // 监视滚动的页面
    this.scroll = document.querySelector('.right-rel')
  },
  methods: {
    mouseenter(e) {
      this.$emit('mouseenter')
      if (this.trigger !== 'hover') return
      this.show = true
      this.positionContent(e)
    },
    // click监听
    eventHandler() {
      this.show = false
      document.removeEventListener('click', this.eventHandler)
      this.scroll.removeEventListener('scroll', this.scrollHandler)
    },
    // 滚动监听
    scrollHandler() {
      setTimeout(() => {
        this.positionContent()
      }, 100)
    },

    click(e) {
      this.$emit('click')
      if (this.trigger !== 'click') return
      this.show = !this.show
      this.positionContent(e)
      // 监听页面
      if (this.show === true) {
        // let eventHandler = () => {
        //   this.show = false
        //   document.removeEventListener('click', eventHandler)
        //   // scroll.removeEventListener('scroll', scrollHandler)
        // }
        // let scrollHandler = () => {
        //   setTimeout(() => {
        //     this.positionContent()
        //   }, 100)
        // }
        document.addEventListener('click', this.eventHandler)
        this.scroll.addEventListener('scroll', this.scrollHandler)
      }
    },
    // 确定位置
    positionContent() {
      const { tipContainer, btnContainer } = this.$refs
      if (!tipContainer && !btnContainer) return
      document.body.appendChild(tipContainer)
      let { width, height, top, left } = btnContainer.getBoundingClientRect()
      let { height: height2 } = tipContainer.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.pageYOffset,
          left: left + window.pageXOffset + width / 2,
        },
        bottom: {
          top: top + height + window.pageYOffset,
          left: left + window.pageXOffset + width / 2,
        },
        left: {
          top: top + (height - height2) / 2 + window.pageYOffset,
          left: left + window.pageXOffset - width / 2,
        },
        right: {
          top: top + (height - height2) / 2 + window.pageYOffset,
          left: left + width + window.pageXOffset + width / 2,
        },
      }
      tipContainer.style.left = positions[this.placement].left + 'px'
      tipContainer.style.top = positions[this.placement].top + 'px'
    },
    mouseleave() {
      this.$emit('mouseleave')
      if (this.trigger !== 'hover') return
      this.show = false
    },
  },
}
</script>

<style lang="scss" scoped>
.toolTip-container {
  position: relative;
  display: inline;
}
.tip-toolTip-container {
  position: absolute;
  word-break: break-all;
  font-size: 12px;
  transition: linear 0.5s ease;
  .angle {
    content: '';
    width: 0;
    height: 0;
    border: 8px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%) translateX(-50%);
    margin-top: -10px;
    .angle {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.position-bottom {
    transform: translateX(-50%);
    margin-top: 10px;
    .angle {
      bottom: calc(100%);
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.position-left {
    transform: translateX(-100%) translateY(-50%);
    margin-left: -10px;
    .angle {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    transform: translateY(-50%);
    margin-left: 10px;
    .angle {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.btn {
  cursor: pointer;
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
  animation: topup 0.5s ease-in-out;
}
.v-leave-active {
  animation: topup 0.5s reverse ease-in-out;
}
</style>
