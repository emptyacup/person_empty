<template>
  <div class="context-main-item" :id="type">
    <div class="context-main-text">
      <i class="bx bx-fingerprint bx-sm"></i>
      <h4>{{ name }}</h4>
    </div>

    <titleSwip :context="title" v-on="$listeners" />
    <ul class="context-main-item-items" v-if="list.length">
      <li
        v-for="item in list"
        :key="item.id"
        class="context-main-item-item media-item2"
      >
        <a @click="handleImgSHow(item)" class="context-main-img"
          ><img :src="item.img" :alt="item.name"
        /></a>
        <div class="context-main-item-text">
          <a :href="item.link" target="_blank" class="main-item-text-able"
            ><p>{{ item.name }}</p></a
          >
          <p class="data">{{ item.data }}</p>
        </div>
      </li>
    </ul>
    <div class="blank" v-else>还在努力制作中...</div>
  </div>
</template>

<script>
import titleSwip from '@/basicComponents/titleSwip'
export default {
  name: 'productiCard',
  components: { titleSwip },
  props: {
    title: {},
    list: {},
    type: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  methods: {
    handleImgSHow(item) {
      if (item.url) {
        window.open(item.url, 'blank')
      } else this.$emit('handleImgSHow', item.img)
    },
  },
}
</script>

<style lang="less" scoped>
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
    margin-top: 0.8rem;
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
.blank {
  text-align: center;
  height: 250px;
  line-height: 150px;
  color: var(--font-color);
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
