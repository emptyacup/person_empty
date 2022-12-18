<template>
  <div class="fix-footer">
    <a @click="changeSun"><i class="bx bxs-sun" :class="icon"></i></a>
    <a><i class="bx bx-search-alt"></i></a>
    <a><i class="bx bx-bookmark-heart"></i></a>
    <a><i class="bx bxs-chevrons-up"></i></a>
  </div>
</template>

<script>
export default {
  name: "fixFoote",
  data(){
    return {
      isSun : true,
      icon: "bxs-sun"
    }
  },
  methods:{
    changeSun(){
      this.isSun = !this.isSun
      let sun =this.isSun
      // this.$store.state.isSun=sun
      this.$bus.$emit('cSun',sun)
      sun ? this.icon = "bxs-sun" :this.icon="bxs-moon"
    }
  }
};
</script>

<style lang="less" scoped>
.fix-footer {
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: flex;
  z-index: 5;
  flex-direction: column-reverse;
  a {
    margin: 5px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
    text-align: center;
    line-height: 40px;
    color: var(--fixfootert-font-color);
    background: var(--fixfootert-color);
    border-radius: 50%;
    position: relative;
  }
}
</style>
