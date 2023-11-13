<template>
  <div class="contain-header">
    <div class="header-main">
      <div class="header-btn media-header-main">
        <a @click="changeClose">
          <i class="bx bx-sm" :class="icon"></i>
        </a>
      </div>
      <ul class="media-header-main">
        <li>
          <a href="https://fanyi.youdao.com/" target="_blank">
            <i class="bx bxs-analyse bx-sm"></i>
            <div class="btn-text">翻译</div>
          </a>
        </li>
        <li>
          <a href="https://weather.cma.cn/" target="_blank">
            <i class="bx bx-cloud-snow bx-sm"></i>
            <div class="btn-text">天气</div>
          </a>
        </li>
        <li>
          <a href="https://www.bilibili.com/" target="_blank">
            <i class="bx bx-tv bx-sm"></i>
            <div class="btn-text">B站</div>
          </a>
        </li>
        <li>
          <a href="https://www.apple.com.cn/" target="_blank">
            <i class="bx bxl-apple bx-sm"></i>
            <div class="btn-text">Apple</div>
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank">
            <i class="bx bx-message-square-dots bx-sm"></i>
            <div class="btn-text">个人社区</div>
          </a>
        </li>
      </ul>
      <div class="media-header medied-header">
        <img
          :src="srcImg"
          alt="emptyacup"
          style="height: 45px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainHeader",
  data() {
    return {
      isClose: true,
      icon: "bx-right-indent  bx-fade-right-hover",
      img: {
        dark: process.env.VUE_APP_BACK_URL+'/webtent/黑杯.png',
        sun: process.env.VUE_APP_BACK_URL+'/webtent/杯.png',
      },
      srcImg: process.env.VUE_APP_BACK_URL+'/webtent/杯.png',
    };
  },
  methods: {
    changeClose() {
      this.isClose = !this.isClose;
      let close = this.isClose;
      // this.$store.state.isClose = close
      this.$bus.$emit("cClose", close);
      close
        ? (this.icon = "bx-right-indent  bx-fade-right-hover")
        : (this.icon = "bx-left-indent  bx-fade-left-hover");
    },
    changeSun(sun) {
      sun ? (this.srcImg = this.img.sun) : (this.srcImg = this.img.dark);
    },
  },
  mounted() {
    this.$bus.$on("cSun", this.changeSun);
  },
};
</script>

<style lang="less" scoped>
.contain-header {
  position: fixed;
  width: 100%;
  height: 74px;
  z-index: 5;
  top: 0;
  .header-main {
    height: 100%;
    display: flex;
    align-items: center;
    flex-basis: auto;
    position: relative;
    background-color: var(--header-color);
    .header-btn {
      height: 100%;
      width: 74px;
      text-align: center;
      a {
        display: block;
        height: 100%;
        text-align: center;
        line-height: 84px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      li {
        height: 42px;
        padding: 5px 15px;
        a {
          display: flex;
          align-content: center;
          i {
            margin: 4px;
          }
          .btn-text {
            text-align: center;
            margin: auto;
          }
        }
      }
    }
    .media-header {
      display: none;
    }
    @media screen and (max-width: 768px) {
      .media-header-main {
        display: none;
      }
      .medied-header {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
}
</style>
