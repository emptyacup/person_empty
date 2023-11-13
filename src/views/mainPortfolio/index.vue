<template>
  <div class="mainPortfolio">
    <div class="title" >
      作品集
      <div class="titleTip">（一步一个脚印）</div>
    </div>
    <div class="cards">
      <div class="works animate__animated animate__bounce" v-for="(item, num) in works" :key="num">
        <div class="left">
          <span v-if="num % 2 === 0" :class="{ activeFont: index === num }">{{
            item.name
          }}</span>
          <span v-if="num % 2 !== 0" :class="{ activeFont: index !== num }">{{
            item.name
          }}</span>
        </div>
        <a @click="handleWork(num)" :class="{ active: index === num }"
          ><i class="iconfont icon-catPat"></i
        ></a>
        <div class="right">
          <span v-if="num % 2 === 0" :class="{ activeFont: index !== num }">{{
            item.name
          }}</span>
          <span v-if="num % 2 !== 0" :class="{ activeFont: index === num }">{{
            item.name
          }}</span>
        </div>
        <div class="card" :class="{ activeCard: index === num }">
          <el-carousel
            :interval="4000"
            type="card"
            height="200px"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(workItem, workIndex) in item.work"
              :key="workIndex"
            >
              <img :src="workItem" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPortfolio',
  data() {
    return {
      works: [
        {
          name: 'OFFICE CHAIR',
          work: [
            'http://png.eot.ooo/i/2022/10/05/633d6db334a38.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d6ea095ad5.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d66b7f27ad.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d6dab56ed7.jpg',
          ],
        },
        {
          name: 'EPIDMIC HELMET',
          work: [
            'http://png.eot.ooo/i/2022/10/05/633d779051825.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d77909824e.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d778fe681c.jpg',
          ],
        },
        {
          name: 'SHOULDER FAN',
          work: [
            'http://png.eot.ooo/i/2022/10/05/633d783bd02ba.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d783aa0d35.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d783ad1ea8.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d7839d96f2.jpg',
          ],
        },
        {
          name: 'OTHERS PRODUCT',
          work: [
            'http://png.eot.ooo/i/2022/10/05/633d78d2e030b.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d78d1995f5.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d78d1b882b.jpg',
          ],
        },
        {
          name: 'ICEMAKDER MINI',
          work: [
            'http://png.eot.ooo/i/2022/10/05/633d7951d1abf.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d79513dc6a.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d795393bd7.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d79520d6c8.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d795314d8d.jpg',
            'http://png.eot.ooo/i/2022/10/05/633d7952c9ca7.jpg',
          ],
        },
      ],

      index: -1,
    }
  },
  methods: {
    handleWork(num) {
      this.index === num ? (this.index = -1) : (this.index = num)
    },
  },
}
</script>

<style lang="less" scoped>
.mainPortfolio {
  margin-top: 74px;
  width: calc(100% - 5px);
  padding: 40px;
  overflow: hidden;
  .title {
    background: var(--header-color);
    border-radius: 10px;
    height: 100px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 100px;
    text-align: center;
    color: var(--font-color);
    transition: var(--tran-03);
    &:hover {
      transform: translateY(-10px);
      transition: var(--tran-03);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
    .titleTip {
      display: inline;
      font-size: 15px;
    }
  }
  .cards {
    background: var(--header-color);
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    padding: 20px 60px;
    margin-bottom: 20px;

    .works {
      display: flex;
      margin-bottom: 50px;
      position: relative;
      span{
        white-space: nowrap;
      }
      // 右侧样式
      &:nth-child(2n) {
        .left {
          min-width: 55%;
        }
        .card {
          // left: -80%;
          // right: auto;
          right: 200%;
          left: auto;
        }
        .activeCard {
          // left: 0;
          // right: auto;
          right:50%;
          left: auto;
        }
      }
      .left {
        min-width: 31%;
        flex: 0.3;
        color: var(--font-color);
        font-size: 40px;
        padding: 20px;
        line-height: 150px;
        text-align: end;
      }

      i {
        font-size: 200px;
      }
      .right {
        flex: 0.3;
        flex-grow: 1;
        color: var(--font-color);
        padding-right: 50px;
        font-size: 40px;
        padding: 20px;
        line-height: 150px;
      }
    }
  }
  .card {
    background: var(--font-color);
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 40%);
    position: absolute;
    height: 220px;
    width: 700px;
    top: 0;
    // right: -80%;
    left:200%;
    padding: 10px;
    transition: all 1.2s ease;
    // .el-carousel {
    //   padding: 5px;
    // }
    img {
      height: 200px;
    }
  }

  span {
    opacity: 0;
    transition: var(--tran-03);
  }
  .activeCard {
    // right: 0;
    left: 50%;
  }
  .active {
    color: var(--font-active-color);
  }
  .activeFont {
    opacity: 1;
    transition: var(--tran-03);
  }
}
</style>
