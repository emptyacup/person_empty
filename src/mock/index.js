import Mock from 'mockjs'

// 设置延迟时间
Mock.setup({
  timeout: 4000,
})

Mock.mock('/add/progress', 'post', {
  'data | 6': [
    {
      url: 'https://github.com/emptyacup',
      id: 7,
      name: '空杯个人社区',
      img: 'https://avatars.githubusercontent.com/u/104680632?v=4',
      title: '一个github个人社区',
      data: 'GitHub社区',
      scale: null,
      type: 'progress',
      page: 1,
    },
  ],
})
