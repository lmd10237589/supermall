import { request } from "network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function geyHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}