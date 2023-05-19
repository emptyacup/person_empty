<template>
  <div class="Topup flexCen" v-show="show" @close="closeTop">
    <div style="position: relative;">
    <div class="showPageImg-container" :style="{ width: width+ 'px' }">
      <img :src="url" alt="" />
    </div>
    <div class="close" @click="closeTop"
      ><img src="@/asset/webtent/关闭.png" alt=""
    /></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'showPageImg',
  props: {
    value: {
      type: Boolean,
    },
    url: {},
    width: {
      type: Number,
      default: 400,
    },
  },
  watch: {
    value(n) {
      this.show = n
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    closeTop() {
      this.$emit('input', false)
      this.$emit('close', false)
    },
  },
}
</script>

<style scoped lang="less">
.Topup{
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0,0.8);
  flex-direction: column;
  backdrop-filter: blur(4px);
}
.showPageImg-container {
  position: relative;
  max-height: 692px;
  overflow-y: auto;
  img {
    width: 100%;
    height: auto;
  }
}
.showPageImg-container::-webkit-scrollbar {
  width: 4px;
  border-radius: 2px;
  background: rgb(88, 89, 90);
  cursor: pointer;
}
.showPageImg-container::-webkit-scrollbar-button {
  display: none;
}
.showPageImg-container::-webkit-scrollbar-thumb {
  width: 4px;
  border-radius: 2px;
  background-color: rgb(199, 201, 204);
}
.showPageImg-container::-webkit-scrollbar-thumb:hover {
  background-color: rgb(244, 256, 256);
}
.close {
  position: absolute;
  margin-top: 24px;
  cursor: pointer;
  left: 50%;
  transform: translate(-50%);
  width: 20px;
  height: 20px;
  caret-color: transparent;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
