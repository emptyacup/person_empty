<template>
  <div class="main-context">
    <div class="work-item">
      <div class="context-header-text">
        <i class="bx bx-ghost bx-sm"></i>
        <h4>空杯介绍</h4>
      </div>
      <div class="workMain">
        <a @click="aboutMe">关于我</a>
        <a @click="portfolio">作品集</a>
        <a @click="fillForm">填写表单</a>
        <!-- <img src="@/asset/3.png" alt=""> -->
      </div>
    </div>
    <div class="context-header-item" id="item-1">
      <div class="context-header-text">
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
    <div class="context-main-item" id="item-2">
      <div class="context-main-text">
        <i class="bx bx-fingerprint bx-sm"></i>
        <h4>空杯原创</h4>
      </div>

      <titleSwip :context="productionTitle" />
      <ul class="context-main-item-items">
        <li
          v-for="item in production"
          :key="item.id"
          class="context-main-item-item media-item2"
        >
          <a :href="item.weblink" target="_blank" class="context-main-img"
            ><img :src="item.weblink" :alt="item.name"
          /></a>
          <div class="context-main-item-text">
            <a :href="item.link" target="_blank" class="main-item-text-able"
              ><p>{{ item.name }}</p></a
            >
            <p class="data">{{ item.data }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="context-main-item" id="item-3">
      <div class="context-main-text">
        <i class="bx bx-share-alt bx-sm"></i>
        <h4>空杯分享</h4>
      </div>
      <titleSwip :context="shareTitle" />
      <ul class="context-main-item-items">
        <li
          v-for="item in share"
          :key="item.id"
          class="context-main-item-item media-item2"
        >
          <a :href="item.weblink" target="_blank" class="context-main-img"
            ><img :src="item.weblink" :alt="item.name"
          /></a>
          <div class="context-main-item-text">
            <a :href="item.link" target="_blank" class="main-item-text-able"
              ><p>{{ item.name }}</p></a
            >
            <p class="data">{{ item.data }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import titleSwip from './titleSwip.vue'
export default {
  name: 'mainContext',
  props: {},
  components: { titleSwip },
  data() {
    return {
      progress: [
        {
          url: 'https://github.com/emptyacup',
          id: '430',
          name: '空杯个人社区',
          img: 'https://avatars.githubusercontent.com/u/104680632?v=4',
          title: '一个github个人社区',
          data: 'GitHub社区',
        },
        {
          url: 'https://emptyacup.GitHub.io',
          id: '870',
          name: '空杯的个人主页',
          img: 'http://png.eot.ooo/i/2022/09/10/631c2f28e5a3c.png',
          title: '（开发中）期待ing-',
          data: '（开发中）期待ing-',
        },
        {
          url: 'https://space.bilibili.com/76799667?spm_id_from=333.1007.0.0',
          id: '432',
          name: '空杯的B站',
          img: 'http://png.eot.ooo/i/2022/05/01/626e5007393ea.png',
          title: '闲来没事',
          data: '闲来没事',
        },
        {
          url: 'https://weread.qq.com',
          id: '433',
          name: '微信读书',
          img: 'http://png.eot.ooo/i/2022/05/02/626f6d3ed82c0.png',
          title: '四处看看',
          data: '腾讯笔下的良心网站',
        },
        {
          url: 'https://space.bilibili.com/38377165/?spm_id_from=333.999.0.0',
          id: '434',
          name: '白雁同学的bilibili日常',
          img: 'http://png.eot.ooo/i/2022/05/01/626e4ffe28c5f.jpg',
          title: '一个立志于up主的小青年',
          data: '一个立志于up主的小青年',
        },
      ],
      productionTitle: [{
        name:'产品版面',
        value:1
        },
         {
          name:'爬取内容',
          value:2
          }],
      production: [
        {
          weblink: 'http://png.eot.ooo/i/2022/05/01/626e4df87b04e.jpg',
          id: '010',
          name: 'POTTED-chair',
          data: '一款绿色的办公椅',
          scale: '5x7',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/07/07/62c6ea3cee43f.jpg',
          id: '011',
          name: 'ICEMAKDER',
          data: '夏日便携式制冰机',
          scale: '5x7',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/07/07/62c6ea3c7df32.jpg',
          id: '012',
          name: 'ICEMAKDER_mini',
          data: '夏日便携式制冰机',
          scale: '5x2',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/07/07/62c6ea36e9f94.jpg',
          id: '013',
          name: 'MULTI-SCENE helmet',
          data: '多场景智能扫码头盔',
          scale: '5x7',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/07/07/62c6ea396ec72.jpg',
          id: '014',
          name: 'EPIDMIC-hemmet',
          data: '疫情应急检测头盔',
          scale: '5x2',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/07/07/62c6ea3caea7c.jpg',
          id: '015',
          name: 'PANICNIG-fan',
          data: '“我好方”便携式小型风扇',
          scale: '5x2',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/05/01/626e4e4d4f8d7.jpg',
          id: '016',
          name: 'FLOWER-fan',
          data: '一款与剪纸相结合的手握式风扇',
          scale: '5x2',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/05/02/626f5e39f4016.jpg',
          id: '017',
          name: 'LUNCH-BOX',
          data: '投影香氛一体化投影仪',
          scale: '5x7',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/05/02/626f5e2ebbeb3.jpg',
          id: '018',
          name: 'SHOULDER-fan',
          data: '多功能可穿戴式小型风扇',
          scale: '5x2',
        },
        {
          weblink: 'http://png.eot.ooo/i/2022/05/01/626e4e4c98a6b.jpg',
          id: '019',
          name: 'PENGUIN-cup',
          data: '有关于企鹅主题的保温杯壶',
          scale: '5x2',
        },
      ],
      // shareTitle: ['分享书籍你好啊00', '分享链接000'],
      shareTitle: [{
        name:'分享书籍你好啊00',
        value:'1'
        },
         {
          name:'分享链接000',
          value:'2'
          },
         {
          name:'分享链接000',
          value:'3'
          },
          ],
      share: [
        {
          weblink:
            'https://wfqqreader-1252317822.image.myqcloud.com/cover/812/855812/t6_855812.jpg',
          id: '01',
          name: '人类简史：从动物到上帝',
          data: '讲述了人类的发展史，想法很新颖',
          scale: '5x7',
        },
        {
          weblink: 'https://res.weread.qq.com/extcover/600920657',
          id: '02',
          name: '天谴行动',
          data: '一位以色列特工的真实经历',
          scale: '5x7',
        },
      ],
      isSun: true,
    }
  },
  mounted() {
    this.$bus.$on('cSun', this.changeSun)
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
