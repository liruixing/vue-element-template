import request from '@/utils/request'

import qs from 'qs'

export function login(data) {
  return request({
    url: '/usercenter/login',
    method: 'post',
    data: qs.stringify(data)
    // data: JSON.stringify(data)
  })
}

export function register(data) {
  return request({
    url:'/usercenter/register',
    method:'post',
    data:JSON.stringify(data)
    // data:qs.stringify(data)
  })

}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
