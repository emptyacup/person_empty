<template>
  <div class="main-search">
    <div class="main-contarn-search">
      <div class="search-text">
        <label for="type-bing1"  v-for="item ,index in searchList" :key="index" :class="{activeLabel:index===searchIndex}"><span @click="changeSearch(index)">{{ item.name }}</span></label>
      </div>
      <div class="search-entry">
        <input type="text" placeholder="欢迎来到这里" v-model="searchText" @keyup.enter="handleBlank" />
        <a @click="handleBlank"><i class="bx bx-search bx-md"></i></a>
      </div>
      <div class="search-text">
        <label for="type-zhannel"  v-for="item ,index in searchList[searchIndex].children" :key="index" :class="{activeLabel:index===searchTextIndex}"><span  @click="changeSearchText(index)">{{ item.name }}</span></label>
      </div>
    </div>
    <div class="main-search-text">
      <a
        ><i class="bx bx-purchase-tag-alt"></i
        >这是一个包含着Bing，Google，站内，bilibili的简单搜索链接框架，敬请各位免费试用</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "mainSearch",
  props: {},
  data(){
    return{
      searchList:[
        {
          name:'常用',
          children:[
            {
              name:'站内',
              link:'https://www.bing.com/search?q='
            },
            {
              name:'Bing',
              link:'https://www.bing.com/search?q='
            },
            {
              name:'Google',
              link:'https://www.google.com.hk/search?q='
            },
            {
              name:'哔哩哔哩',
              link:'https://search.bilibili.com/all?keyword='
            },
          ]
        },
        {
          name:'搜索',
          children:[
            {
              name:'开发者搜索',
              link:'https://kaifa.baidu.com/searchPage?wd='
            },
            {
              name:'稀金社区',
              link:'https://juejin.cn/search?query='
            },
            {
              name:'git社区',
              link:'https://github.com/search?q='
            },
            {
              name:'腾讯开发文档',
              link:'https://developers.weixin.qq.com/doc/search.html?query='
            },
          ]
        },
      ],
      searchText:'',
      searchIndex:0,
      searchTextIndex:0,
    }
  },
  methods:{
    changeSearch(index){
      if( this.searchIndex !== index){
        this.searchTextIndex = 0
      }
      this.searchIndex = index
    },
    changeSearchText(index){
      this.searchTextIndex = index

    },
    handleBlank(){
      let text = this.searchList[this.searchIndex].children[this.searchTextIndex].link + this.searchText
      window.open(text,'blank')
    }
  }
};
</script>

<style lang="less" scoped>
.main-search {
  color: var(--font-color);
  margin-top: 40px;
  width: 100%;
  margin-bottom: 60px;
  .main-contarn-search {
    height: 145px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .search-text {
      width: 90%;
      max-width: 800px;
      flex: 5;
      justify-content: center;
      align-items: center;
      display: flex;
      label {
        cursor: pointer;
        display: flex;
        height: 100%;
        opacity: 0.6;
        font-weight: 500;
        span {
          margin: auto;
          padding: 0 10px;
        }
        &:hover {
          opacity: 1;
        }
      }
      .activeLabel{
        opacity: 1;
      }
    }
    .search-entry {
      width: 90%;
      max-width: 800px;
      height: 50px;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        font-size: 15px;
        padding: 0 25px;
        background: var(--header-color);
        color: var(--font-color);
      }
      i {
        top: 50%;
        position: absolute;
        right: 10px;
        transform: translateY(-50%);
      }
    }
  }
  .main-search-text {
    text-align: center;
    height: 33px;
    overflow: hidden;
    a {
      font-size: 5px;
    }
  }
}
</style>
