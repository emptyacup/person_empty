<template>
  <div class="main-context">
    <!-- <div class="work-item">
      <div class="context-header-text">
        <i class="bx bx-ghost bx-sm"></i>
        <h4>空杯介绍</h4>
      </div>
      <div class="workMain">
        <a @click="aboutMe">关于我</a>
        <a @click="portfolio">作品集</a>
        <a @click="fillForm">填写表单</a>
      </div>
    </div> -->
    <div class="context-header-item" id="progress">
      <div class="context-header-text" @click="addProgress">
        <i class="bx bx-paper-plane bx-sm"></i>
        <h4>持续进步</h4>
      </div>
      <ul class="context-header-item-items">
        <li v-for="item in progress" :key="item.id" class="media-item1">
          <a :href="item.url" target="_blank">
            <div class="context-header-item-item">
              <img :src="item.img" alt="item.name" />
              <div class="context-header-item-text">
                <strong>{{ item.name }}</strong>
                <p>{{ item.data }}</p>
              </div>
            </div>
          </a>
          <div class="tooltip">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <productCard
      :title="productionTitle"
      :list="product"
      name="空杯原创"
      type="product"
      @handleImgSHow="handleImgSHow"
      @handleClick="titleClick($event, 'product')"
    ></productCard>
    <productCard
      :title="shareTitle"
      :list="share"
      name="空杯分享"
      type="share"
      @handleClick="titleClick($event, 'share')"
    ></productCard>
    <showPageImg v-model="dialogVisible" :url="dialogImageUrl" />
  </div>
</template>

<script>
import showPageImg from '@/components/showPageImg/index.vue'
import productCard from './productCard.vue'
export default {
  name: 'mainContext',
  props: {},
  components: { showPageImg, productCard },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: null,
      progress: [],
      productionTitle: [
        {
          name: '产品版面',
          value: 1,
        },
        {
          name: '前端内容',
          value: 2,
        },
      ],
      product: [],
      // shareTitle: ['分享书籍你好啊00', '分享链接000'],
      shareTitle: [
        {
          name: '分享书籍',
          value: '1',
        },
        {
          name: '不知道放什么',
          value: '2',
        },
        {
          name: '不知道放什么',
          value: '3',
        },
      ],
      share: [],
      isSun: true,
    }
  },
  async mounted() {
    this.$bus.$on('cSun', this.changeSun)
    await this.getProduction('progress', 1)
    await this.getProduction('product', 1)
    await this.getProduction('share', 1)
  },
  methods: {
    changeSun(sun) {
      this.isSun = sun
    },
    // 关于我
    aboutMe() {
      this.$router.push({
        name: 'mainResume',
        query: {
          isSun: this.isSun,
        },
      })
    },
    // 作品集
    portfolio() {
      this.$router.push({
        name: 'mainPortfolio',
      })
    },
    // 填写表单
    fillForm() {
      this.$router.push({
        name: 'mainForm',
      })
    },
    // 图片展示
    handleImgSHow(url) {
      this.dialogImageUrl = url
      this.dialogVisible = true
    },
    // 传送数据
    addProgress() {
      let obj = {}
      obj.productionList = this.share
      this.$api.production.addProgress(obj)
    },
    // 尝试单个数据
    getProgress() {
      let obj = {}
      obj.productions = this.progress[0]
      this.$api.production.progressGet(obj)
    },
    // 获得数据
    async getProduction(type, page) {
      let obj = {}
      obj.type = type
      obj.page = page
      const res = await this.$api.production.getProduction(obj)
      if (!res || !res.length) {
        this[type].splice(0)
      } else {
        this[type] = res
      }
      // console.log(res2)
    },
    // 点击标题
    async titleClick(val, type) {
      await this.getProduction(type, val)
    },
  },
}
</script>

<style lang="less" scoped>
.main-context {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  scroll-behavior: smooth;
  overflow: hidden;
  // 杯子介绍
  .work-item {
    display: none;
    .context-header-text {
      display: flex;
      color: var(--font-color);
      margin: 10px 0 20px;
    }
    .workMain {
      background: var(--header-color);
      height: 60px;
      line-height: 60px;
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
      border-radius: 6px;
      color: var(--black-font-color);
      background-image: url('@/asset/3.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: 80px;
      padding: 0 20px;
      font-size: 14px;
      margin: 10px 0;
      a {
        margin-right: 15px;
        &::before {
          display: inline-block;
          content: '';
          background-color: var(--font-color);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          vertical-align: 0.2em;
          margin: 0 0.5rem;
        }
      }
      img {
        height: 60px;
      }
    }
  }
  // 持续进步
  .context-header-item {
    .context-header-text {
      display: flex;
      color: var(--font-color);
      margin: 10px 0;
    }
    .context-header-item-items {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -0.825rem 10px;
      li {
        position: relative;
        .context-header-item-item {
          margin: 10px 15px 10px 15px;
          border-radius: 5px;
          background-color: var(--header-color);
          height: 70px;
          box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
          display: flex;
          transition: var(--tran-03);
          align-items: center;
          padding: 15px;
          img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
            flex-shrink: 0;
          }
          strong {
            display: block;
            color: var(--black-font-color);
            overflow: hidden;
            height: 25px;
            // text-overflow: ellipsis;
          }
          p {
            color: var(--context-font-color);
            margin-top: 3px;
            overflow: hidden;
            height: 17px;
            font-size: 12px;
          }
          &:hover {
            transform: translateY(-10px);
            transition: var(--tran-03);
            box-shadow: 0 15px 20px -5px rgb(0 0 0 / 10%);
            strong {
              color: var(--font-active-color);
            }
          }
        }
        a:hover + .tooltip {
          visibility: visible;
          opacity: 1;
          transition: var(--tran-03);
          transform: translateX(-50%) translateY(0);
        }
        .tooltip {
          min-width: 100px;
          word-break: keep-all;
          padding: 5px;
          text-align: center;
          left: 50%;
          transform: translateX(-65%) translateY(50%);
          position: absolute;
          background: #272727;
          color: #fff;
          z-index: 5;
          border-radius: 4px;
          visibility: hidden;
          opacity: 0;
          transition: var(--tran-03);
          &::before {
            content: '';
            position: absolute;
            background: #272727;
            width: 10px;
            height: 10px;
            top: -2px;
            left: 50%;
            transform: rotate(45deg) translateX(-50%);
          }
        }
      }
    }
  }
  // 空杯原创 --空杯分享
  .context-main-item {
    display: flex;
    flex-direction: column;
    .context-main-text {
      display: flex;
      color: var(--font-color);

      i {
        margin: 0 4px;
      }
    }
    .context-main-item-items {
      margin-left: -0.825rem;
      margin-right: -0.825rem;
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .context-main-item-item {
        padding-left: 0.825rem;
        padding-right: 0.825rem;
        display: flex;
        flex-direction: column;
        .context-main-img {
          width: 100%;
          box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
          background-color: rgba(120, 120, 120, 0.1);
          transition: var(--tran-03);
          img {
            max-width: 100%;
            border-radius: 0.25rem;
          }
          &:hover {
            transition: var(--tran-03);
            box-shadow: 0 15px 20px -5px rgb(0 0 0 / 10%);
            transform: translateY(-10px);
          }
        }
        .context-main-item-text {
          margin: 5px 0 20px;
          .main-item-text-able {
            p {
              line-height: 1.42857143;
              color: var(--black-font-color);
              font-size: 18px;
              height: 30px;
              overflow: hidden;
            }
          }
          .data {
            color: var(--context-font-color);
            height: 18px;
            overflow: hidden;
            font-size: 12px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 0) {
  .context-header-item-items {
    li {
      flex: 50%;
      max-width: 50%;
    }
  }
  .context-main-item-items {
    .context-main-item-item {
      max-width: 50%;
      flex: 50%;
    }
  }
}
@media screen and (min-width: 576px) {
  .context-header-item-items {
    li {
      flex: 50%;
      max-width: 50%;
    }
  }
  .context-main-item-items {
    .context-main-item-item {
      max-width: calc(100% / 3);
      flex: calc(100% / 3);
    }
  }
}
@media screen and (min-width: 768px) {
  .context-header-item-items {
    li {
      flex: 50%;
      max-width: 50%;
    }
  }
  .context-main-item-items {
    .context-main-item-item {
      max-width: 25%;
      flex: 25%;
    }
  }
}
@media screen and (min-width: 992px) {
  .context-header-item-items {
    li {
      flex: 25%;
      max-width: 25%;
    }
  }
  .context-main-item-items {
    .context-main-item-item {
      max-width: calc(100% / 6);
      flex: calc(100% / 6);
    }
  }
}
@media screen and (min-width: 1400px) {
  .main-context .work-item {
    display: block;
  }
  .context-header-item-items {
    li {
      flex: calc(100% / 6);
      max-width: calc(100% / 6);
    }
  }
  .context-main-item-items {
    .context-main-item-item {
      max-width: calc(100% / 7);
      flex: calc(100% / 7);
    }
  }
}
</style>
