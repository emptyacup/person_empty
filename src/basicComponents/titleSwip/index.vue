<template>
  <div class="context-text-tab">
    <div class="context-text-swip" v-if="list">
      <li
        class="swip"
        v-for="(item, index) in list"
        :key="index"
        :style="{ width: item.len + 'px' }"
        :class="{ active: swipIndex === index }"
        @mouseover="swipBtn(index)"
        @mouseout="swipBtn(temporaryIndex)"
        @click="handleClick(index)"
      >
        <span>{{ item.name }}</span>
      </li>
      <li
        class="context-text-btn"
        :style="{
          transform: `translateY(-50%) translateX(${handleBtn}px)`,
          width: btnWidth,
        }"
      ></li>
    </div>
  </div>
</template>

<script>
const unciod = (val) => {
  return val.replace(/[\u0391-\uFFE5]/g, 'aa').length * 8 + 26
}
export default {
  name: 'titleSwip',
  props: ['context', 'value'],
  data() {
    return {
      swipIndex: 0,
      temporaryIndex: 0,
      list: null,
      handleBtn: 0,
    }
  },
  watch: {
    context: {
      deep: true,
      immediate: true,
      handler() {
        this.init()
      },
    },
    value(val, oldVal) {
      if (val === oldVal) return
      this.swipIndex = val
    },
    swipIndex(val) {
      this.$emit('update', val)
    },
  },
  computed: {
    btnWidth() {
      return this.list[this.swipIndex].len + 'px'
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.list = this.context.slice(0)
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].len = unciod(this.list[i].name)
      }
    },
    handleClick(index) {
      this.swipIndex = index
      this.temporaryIndex = index
      this.swipBtn(this.swipIndex)
      this.$emit('handleClick', this.list[index].value)
    },
    swipBtn(index) {
      var list = this.list.slice(0, index)
      this.swipIndex = index
      let len = 0
      list.forEach((item) => {
        len = len + item.len
      })
      this.handleBtn = len
      this.$emit('handleMouseEnter', this.list[index].value)
    },
  },
}
</script>

<style lang="less" scoped>
.context-text-tab {
  .context-text-swip {
    height: 34px;

    position: relative;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    border: 3px solid transparent;
    margin: 10px 30px 10px 0;
    display: inline-flex;
    // display: inline-block;
    .swip {
      height: 100%;
      position: relative;
      line-height: 28px;
      color: #6c757d;
      cursor: pointer;
      display: inline;
      span {
        margin-left: 5px;
        position: absolute;
        padding: 0 10px;
        z-index: 3;
        font-size: 0.96rem;
        transition: var(--tran-03);
      }
    }
    .active {
      color: #fff;
    }
    .context-text-btn {
      position: absolute;
      height: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: 90px;
      border-radius: 17px;
      background-color: #56899f;
      left: 0;
      transition: var(--tran-03);
    }
  }
}
</style>
