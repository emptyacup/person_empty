<template>
  <div class="resume">
    <div class="cards">
      <div class="card1">
        <div class="img">
          <img src="http://png.eot.ooo/i/2022/09/10/631c20dea2089.png" alt="" />
        </div>
        <div class="leftText">
          <div class="title">Tel.</div>
          <a><div class="contarn">15606513950</div></a>
          <div class="title">E-mail.</div>
          <a><div class="contarn">1661805941@qq.com</div></a>
          <div class="title">WeChat.</div>
          <a><div class="contarn">xxl235689741</div></a>
          <div class="title">link to web.</div>
          <a><div class="contarn">https://emptyacup.github.io/</div></a>
          <div class="title" style="font-weight: 500">Mine Contact</div>
          <div class="items">
            <a
              ><div class="item"><i class="bx bx-phone bx-sm"></i></div
            ></a>
            <a
              ><div class="item"><i class="bx bx-envelope bx-sm"></i></div
            ></a>
            <a
              ><div class="item"><i class="bx bx-chat bx-sm"></i></div
            ></a>
          </div>
        </div>
        <img
          class="img2"
          src="http://png.eot.ooo/i/2022/10/04/633c17dec043d.png"
          alt=""
        />
      </div>
      <div class="card2" :class="{ imgFollow: isSun, imgRoot: !isSun }">
        <div class="right">
          <span class="title">徐小龙</span>
          <span class="new">个人信息</span>
          <div class="lift">PAYFILE CITY</div>
          <div class="mainText">
            三年设计经验，拥有丰富的产品设计实战经验及创意思维，专注于电商设计，对电商首页、详情页、精修等都具有良好的把控能力
            <br />
            <br />
            精通淘宝、天猫的店铺装修，同时对广告和游戏行业也有一定的涉及，并独立完成过平面海报和字体设计
            <br />
            <br />
            “愿为空的杯子，留存无限可能”
          </div>
          <div class="btn" @click="handleHref">查看作品集</div>
          <div class="angle"></div>
        </div>
        <!-- <img v-if="isSun" class="imgFollow" src="@/asset/follow.png" alt="" />
        <img v-if="!isSun" class="imgRoot" src="@/asset/treeRoot.png" alt="" /> -->
      </div>
      <div class="card3  animate__animated animate__flip">
        <img
          class="img1"
          src="http://png.eot.ooo/i/2022/05/01/626e500863123.jpg"
          alt=""
        />
        <div class="text">空的杯子</div>
        <img class="img2" :src="path+'/3.png'" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainResume',
  data() {
    return {
      isSun: true,
      path:process.env.VUE_APP_BACK_URL
    }
  },
  mounted() {
    this.$bus.$on('cSun', this.changeSun)
    this.isSun = this.$route.query.isSun
  },
  methods: {
    changeSun(sun) {
      this.isSun = sun
    },
    handleHref() {
      this.$router.push({
        name: 'mainPortfolio',
      })
    },
  },
}
</script>

<style lang="less" scoped>
.resume {
  // width: 100%;
  margin-top: 74px;
  width: calc(100% - 5px);
  padding: 40px;

  .cards {
    margin: 0 auto;
    height: 650px;
    display: flex;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    width: 1000px;
    position: relative;
    .card1 {
      color: rgba(255, 255, 255, 0.9);
      background: rgba(0, 0, 0, 0.9);
      height: 100%;
      flex: 0.3;
      padding: 30px;
      position: relative;
      overflow: hidden;
      .img2 {
        position: absolute;
        bottom: 0;
        height: 600px;
        left: 0;
        transition: var(--tran-03);
        z-index: 0;
        &:hover {
          height: 700px;
          transition: var(--tran-03);
          bottom: -50px;
        }
      }
      a {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: var(--font-active-color);
        }
      }
      .leftText {
        z-index: 1;
        font-size: 12px;
        margin-top: 200px;
        .title {
          margin-bottom: 5px;
        }
        .contarn {
          margin-bottom: 15px;
        }
        .items {
          display: flex;
          a {
            margin: 10px 10px 0 0;
          }
          .item {
            line-height: 50px;
            text-align: center;
            border: 2px rgba(255, 255, 255, 0.9) solid;
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
        }
      }
      .img {
        text-align: center;
        img {
          width: 90%;
          margin: 20px auto;
        }
      }
    }
    .card2 {
      background: var(--header-color);
      height: 100%;
      flex: 0.7;
      color: var(--black-active-color);
      padding: 30px;
      .right {
        margin-top: 100px;
        margin-left: 200px;
        .title {
          font-size: 25px;
          font-weight: 700;
          color: var(--black-font-color);
        }
        .new {
          color: rgb(163, 164, 164);
        }
        .lift {
          font-size: 20px;
          color: rgb(163, 164, 164);
          font-family: 'Times New Roman', Times, serif;
          margin-bottom: 40px;
        }
        .mainText {
          color: var(--font-color);
          font-size: 14px;
        }
        .btn {
          margin-top: 40px;
          display: inline-block;
          padding: 12px 40px;
          background: rgba(35, 105, 29, 0.8);
          border-radius: 30px;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: var(--tran-03);
          &:hover {
            background: rgba(204, 226, 202, 0.4);
            color: rgba(0, 0, 0, 0.6);
            transition: var(--tran-03);
          }
        }
        .angle {
          height: 60px;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            height: 8px;
            width: 8px;
            border-right: 2px rgb(163, 164, 164) solid;
            border-bottom: 2px rgb(163, 164, 164) solid;
          }
        }
      }
    }
    .imgFollow {
      background-image: url('http://png.eot.ooo/i/2022/10/12/63466e3380bf3.png');
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 40%;
    }
    .imgRoot {
      background-image: url('http://png.eot.ooo/i/2022/10/12/63466e31011a3.png');
      background-repeat: no-repeat;
      background-position: right top -15px;
      background-size: 70%;
    }

    .card3 {
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 23%;
      top: 18%;
      height: 400px;
      width: 270px;
      background: var(--header-color);
      text-align: center;
      transition: var(--tran-03);
      border-radius: 5px;
      overflow: hidden;
      &:hover {
        transform: translateY(-30px);
        transition: var(--tran-03);
        box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.5);
      }
      &:hover .img2 {
        transform: rotate(90deg) translateX(-120px) translateY(13px);
        transition: var(--tran-03);
      }
      .img1 {
        width: 200px;
        margin-top: 20px;
      }
      .img2 {
        width: 300px;
        transform: rotate(90deg) translateX(-185px) translateY(13px);
        transition: var(--tran-03);
      }
      .text {
        font-size: 20px;
        color: var(--black-font-color);
      }
    }
  }
}
</style>
