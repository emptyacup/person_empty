<template>
  <div class="mainForm">
    <div class="cards">
      <div class="title animate__animated animate__jello">
        使用情况调查问卷 <a class="" @click="handleTippop">（你写了我也不看）</a>
      </div>
      <hr />
      <div class="smallCard">
        <div class="card animate__animated animate__flipInX">
          <p>你的性别</p>
          <hr />
          <div class="group">
            <el-radio-group v-model="sex">
              <el-radio label="男" class="elFont"></el-radio>
              <el-radio label="女" class="elFont"></el-radio>
              <el-radio label="未知" class="elFont"></el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="animate__animated animate__flipInX card">
          <p>你的年龄</p>
          <hr />
          <div class="group">
            <el-radio-group v-model="age">
              <el-radio-button label="16岁以下"></el-radio-button>
              <el-radio-button label="16-22岁"></el-radio-button>
              <el-radio-button label="22-30岁"></el-radio-button>
              <el-radio-button label="30岁以上"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="card animate__animated animate__flipInX">
          <p>当前学历</p>
          <hr />
          <div class="group">
            <el-select v-model="degree" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.label"
                :label="item.label"
                :value="item.label"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="card animate__animated animate__flipInX">
          <p>影视爱好</p>
          <hr />
          <div class="group">
            <el-checkbox-group v-model="hobbieList">
              <el-checkbox
                label="悬疑"
                border
                size="small"
                class="elFont"
              ></el-checkbox>
              <el-checkbox
                label="动漫"
                border
                size="small"
                class="elFont"
              ></el-checkbox>
              <el-checkbox
                label="爱情"
                border
                size="small"
                class="elFont"
              ></el-checkbox>
              <el-checkbox
                label="电影"
                border
                size="small"
                class="elFont"
              ></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="card animate__animated animate__flipInX">
          <p>网页点评</p>
          <hr />
          <div class="group" style="line-height: 100px">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="comment"
              maxlength="100"
              style="max-width: 400px; max-height: 50px"
            >
            </el-input>
          </div>
        </div>
        <div class="card animate__animated animate__flipInX">
          <p>网页评级</p>
          <hr />
          <div class="rate">
            <el-rate style="margin-top: 50px" v-model="rate" :colors="colors">
            </el-rate>
          </div>
        </div>
      </div>
      <div class="btns"><div class="btn" @click="submit">提交</div></div>
    </div>
    <el-dialog
      title="~~滋滋滋~~~发现重要信息！！！！"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span style="text-align: center"
        >检测到你在本机提交过，是否恢复之前的填写内容</span
      >
      <span slot="footer">
        <div class="tipBtns">
          <div class="tipBtn" @click="getStorege">确定</div>
          <div class="tipBtn" @click="dialogVisible = false">取消</div>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'mainForm',
  data() {
    return {
      sex: '',
      // 年龄
      age: '',
      // 学历
      options: [
        {
          value: '选项1',
          label: '初中',
        },
        {
          value: '选项2',
          label: '高中',
        },
        {
          value: '选项3',
          label: '专科',
        },
        {
          value: '选项4',
          label: '本科',
        },
        {
          value: '选项5',
          label: '研究生',
        },
      ],
      degree: '',
      // 爱好
      hobbieList: [],
      // 评论
      comment: '',
      // 评星
      rate: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      dialogVisible: false,
      getData: '',
    }
  },
  mounted() {
    this.int()
  },
  methods: {
    int() {
      this.getData = localStorage.getItem('userCommentOfWeb')
      if (this.getData) {
        this.dialogVisible = true
      }
    },
    // 提示
    handleTippop() {
      this.$message({
        message: '...wow.  这都被发现了，成就感+1',
        iconClass: 'el-icon-wind-power',
      })
    },

    // 获得数据
    getStorege() {
      let getData = this.getData
      let data = JSON.parse(getData)
      let hobbieList = data.hobbieList || []
      console.log(data)
      this.sex = data.sex || ''
      this.age = data.age || ''
      this.degree = data.degree || ''
      this.hobbieList = [...hobbieList]
      this.comment = data.comment || ''
      this.rate = data.rate || null
      this.dialogVisible = false
    },
    // 提交提示
    submit() {
      let message =
        '性别:' +
        this.sex +
        '\n年龄:' +
        this.age +
        '\n学历:' +
        this.degree +
        '\n爱好:' +
        this.hobbieList +
        '\n评论:' +
        this.comment +
        '\n评级:' +
        this.rate
      this.$notify({
        title: '提示',
        message,
      })
      let obj = {}
      obj.sex = this.sex
      obj.age = this.age
      obj.degree = this.degree
      obj.hobbieList = this.hobbieList
      obj.comment = this.comment
      obj.rate = this.rate
      console.log(obj)
      localStorage.setItem('userCommentOfWeb', JSON.stringify(obj))
    },
  },
}
</script>

<style lang="less" scoped>
.mainForm {
  margin-top: 74px;
  width: calc(100% - 5px);
  padding: 40px 30px;
  .cards {
    background: var(--header-color);
    border-radius: 10px;
    min-height: 500px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    padding: 20px;
    background-image: url('http://png.eot.ooo/i/2022/10/04/633c17dec043d.png');
    background-repeat: no-repeat;
    background-position: bottom -1;
    background-size: 100%;
    .title {
      font-size: 30px;
      text-align: center;
      color: var(--black-font-color);
      margin-bottom: 30px;
    }
    .smallCard {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .card {
        border-radius: 5px;
        margin: 10px 15px;
        flex: 0.5;
        min-width: 31%;
        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.5);
        min-height: 300px;
        background: var(--header-color);
        background-image: url('@/asset/envelope.png');
        background-position: top;
        background-position-y: -10px;
        background-repeat: no-repeat;
        background-size: 102%;
        transition: var(--tran-03) ;
        &:hover {
          transform: translateY(-10px);
          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
        }
        p {
          height: 100px;
          color: rgb(210, 210, 210);
          text-align: center;
          line-height: 100px;
          font-size: 20px;
        }
        .group {
          text-align: center;
          height: 200px;
          line-height: 150px;
        }
        .rate {
          text-align: center;
        }
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .btn {
        text-align: center;
        width: 200px;
        display: inline-block;
        padding: 12px 40px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 30px;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        transition: var(--tran-03);
        &:hover {
          background: rgba(255, 255, 255, 0.4);
          color: rgba(0, 0, 0, 0.6);
          transition: var(--tran-03);
        }
      }
    }
  }
  .elFont {
    color: var(--font-color);
  }
  .tipBtns {
    text-align: end;
    .tipBtn {
      text-align: center;
      width: 100px;
      display: inline-block;
      padding: 8px 20px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 30px;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      transition: var(--tran-03);
      margin-left: 10px;
      &:first-child {
        background: rgba(35, 105, 29, 0.8);
      }
      &:first-child:hover {
        border: 1px solid rgba(35, 105, 29, 0.8);
      }
      &:hover {
        background: rgba(255, 255, 255, 0.4);
        color: rgba(0, 0, 0, 0.6);
        transition: var(--tran-03);
        border: 1px solid rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>
