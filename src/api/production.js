import request from '@/utils/request'

export const addProgress = async ({ productionList }) => {
  return await request({
    url: '/add/progress',
    method: 'POST',
    data: { productionList },
  })
}

export const progressGet = async ({ productions }) => {
  return await request({
    url: '/progress/get',
    method: 'POST',
    data: productions,
  })
}

export const getProduction = async ({ type, page }) => {
  return await request({
    url: '/production/getProduction',
    method: 'get',
    params: { type, page },
  })
}
