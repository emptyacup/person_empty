<template>
  <div class="contain-main">
    <main-search></main-search>
    <main-context></main-context>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainSearch from "@/components/mainSearch.vue"
import mainContext from "@/components/mainContext.vue"
import mainFooter from "@/components/mainFooter.vue"

export default {
  name: 'mainHome',
  components: { mainSearch,mainContext,mainFooter },
  props: {
    
  }
}
</script>

<style lang="less" scoped>
.contain-main{
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: calc(100% - 5px);
    min-height: 100%;
    margin-right: 5px;
    transition: var(--tran-03);
}
</style>
