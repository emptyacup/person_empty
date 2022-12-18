<template>
  <div class="main-footer">
    <div class="main-footer-context">
      <div class="footer-items media-footer-items">
        <div class="footer-item1" style="flex: 0.33%; padding: 0px 15px">
          <img :src="srcImg" alt="" />
          <div class="footer-text1">
            空的杯子｜大学生的网址导航 // 简约 尝试 无商用 //
            摘抄了一些原创内容，感谢您对本站的支持☕️
          </div>
        </div>
        <div class="footer-item2" style="flex: 0.42%; padding: 0px 15px">
          <div class="text-link">
            <a href="">新标签页</a>
            <a href="">过于本站</a>
            <a href="">我就看看</a>
          </div>
          <div class="cycle-link">
            <a>
              <div class="tooltip">
                <img
                  src="http://png.eot.ooo/i/2022/05/01/626e50048fcdf.png"
                  alt="QQ"
                />
              </div>
              <i class="bx bx-user bx-sm"></i>
            </a>
            <a>
              <div class="tooltip">
                <img
                  src="http://png.eot.ooo/i/2022/09/08/6319d329de720.png"
                  alt="微信"
                />
              </div>
              <i class="bx bx-chat bx-sm"></i>
            </a>
            <a href="https://weibo.com/u/7317497737" target="_blank">
              <div class="tooltip">微博</div>
              <i class="bx bxl-soundcloud bx-sm"></i>
            </a>
            <a href="https://www.zhihu.com/people/xu-xu-ru-sheng-68-11" target="_blank">
              <div class="tooltip">知乎</div>
              <i class="bx bxs-book bx-sm"></i>
            </a>
            <a href="https://juejin.cn/user/752481850890318" target="_blank">
              <div class="tooltip">稀土掘金</div>
              <i class="bx bxs-book-open bx-sm"></i>
            </a>
            <a href="https://space.bilibili.com/76799667" target="_blank">
              <div class="tooltip">哔哩哔哩</div>
              <i class="bx bx-tv bx-sm"></i>
            </a>
          </div>
        </div>
        <div class="footer-item3" style="flex: 0.25%; padding: 0px 15px">
          <div class="img1">
            <img
              src="http://png.eot.ooo/i/2022/09/08/6319d329de720.png"
              alt=""
            />
            <p>联系本站</p>
          </div>
        </div>
      </div>
      <div
        class="fin"
        style="
          position: absolute;
          bottom: 25px;
          font-size: 13px;
          color: var(--black-font-color);
        "
      >
        本站是一个自己独立做的个人网页，感谢你对本站的支持，你的赞助支持使我百倍努力。如有什么问题可以联系本人
        · 本人尽量及时回复！！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainFooter",
    data(){
    return{
      img:{
        dark:"http://png.eot.ooo/i/2022/09/10/631c20dea2089.png",
        sun:"http://png.eot.ooo/i/2022/05/01/626e55bd40508.png"
      },
      srcImg:"http://png.eot.ooo/i/2022/05/01/626e55bd40508.png"
    }
  },
  mounted() {
    this.$bus.$on("cSun", this.changeSun);
  },
  methods: {
    changeSun(sun) {
      sun ? (this.srcImg = this.img.sun) : (this.srcImg = this.img.dark);
    },
  },
};
</script>

<style lang="less" scoped>
.main-footer {
  margin: 30px 0 15px 3px;
  min-height: 250px;
  width: 100%;
  background-color: var(--header-color);
  padding: 20px;
  box-shadow: 0 -4px 20px 5px rgb(94 94 94 / 10%);
  border-radius: 10px;
  position: relative;
  .footer-items {
    padding: 20px 0;
    display: flex;
    width: 100%;
    .footer-item1 {
      img {
        width: 250px;
        height: 40px;
        margin-bottom: 20px;
      }
      .footer-text1 {
        color: var(--font-color);
      }
    }
    .footer-item2 {
      .text-link {
        width: 100%;
        margin-bottom: 16px;
        a {
          font-size: 14px;
          padding: 0 5px;
          &::before {
            display: inline-block;
            content: "";
            background-color: var(--font-color);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            vertical-align: 0.2em;
            margin: 0 0.5rem;
          }
        }
      }
      .cycle-link {
        width: 100%;
        a {
          color: var(--black-font-color);
          position: relative;
          display: inline-block;
          width: 35px;
          height: 35px;
          margin: 5px 10px;
          border-radius: 50%;
          background-color: var(--cycle-link-color);
          text-align: center;
          line-height: 48px;
          &:hover{
            background-color:var(--cycle-link-active-color);
          }
          &:hover .tooltip {
            visibility: visible;
            opacity: 1;
          }
          .tooltip {
            display: flex;
            word-break: keep-all;
            padding: 5px;
            text-align: center;
            left: 50%;
            position: absolute;
            background: #272727;
            color: #fff;
            z-index: 5;
            border-radius: 4px;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-110%) translateX(-50%);
            top: 0;
            transition: var(--tran-03);
            img {
              max-width: 100px;
            }
            &::before {
              content: "";
              position: absolute;
              background: #272727;
              width: 8px;
              height: 8px;
              bottom: -7px;
              left: 50%;
              transform: rotate(45deg) translateX(-50%);
            }
          }
        }
      }
    }
    .footer-item3 {
      width: 90px;
      margin: 0 10px;
      text-align: center;
      vertical-align: text-top;
      display: inline-block;
      .img1 {
        img {
          width: 80px;
          height: 80px;
        }
        p {
          font-size: 12px;
          color: var(--black-font-color);
          margin-bottom: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer-items{
     flex-direction: column;
  }
}
</style>
