import request from '@/utils/request'

import qs from 'qs'

export function login(data) {
  return request({
    url: '/usercenter/login',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    method: 'post',
    data: qs.stringify(data)
    // data: JSON.stringify(data)
  })
}

export function register(data) {
  return request({
    url: '/usercenter/register',
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=utf-8;charset=utf-8' },
    data: JSON.stringify(data)
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
