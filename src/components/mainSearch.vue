<template>
  <div class="main-search">
    <div class="main-contarn-search">
      <div class="search-text">
        <label for="type-bing1"><span>常用</span></label>
        <label for="type-bing2"><span>搜索</span></label>
        <label for="type-bing3"><span>社区</span></label>
      </div>
      <div class="search-entry">
        <input type="text" placeholder="欢迎来到这里" />
        <a><i class="bx bx-search bx-md"></i></a>
      </div>
      <div class="search-text">
        <label for="type-zhannel"><span>站内</span></label>
        <label for="type-zhanne2"><span>Google</span></label>
        <label for="type-zhanne3"><span>Bing</span></label>
        <label for="type-zhanne4"><span>哔哩哔哩</span></label>
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
        display: flex;
        height: 100%;
        width: 70px;
        opacity: 0.6;
        font-weight: 500;
        span {
          margin: auto;
        }
        &:hover {
          opacity: 1;
        }
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
