import request from '@/utils/request'

export const userFind = async () => {
  return await request({
    url: '/user/find',
    method: 'GET',
    data: {},
  })
}

export const login = async ({ username, password }) => {
  return await request({
    url: '/user/login',
    method: 'Post',
    data: { username, password },
  })
}
