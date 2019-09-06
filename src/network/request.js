import axios from 'axios'
//封装axios
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
});

export function request(config) {

  //请求头
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  //请求拦截
  instance.interceptors.request.use(config => {
    //console.log(config)
    return config//必须返回否则err会报错
  }, err => {
    //console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    //console.log(res)
    return res.data
  }, err => {
    // console.log(err.response)
  })
  //本身就是一个promise请求，直接返回就可以用了
  return instance(config)
}

//post请求
export function get(url, param = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {params: param})
      .then(res => {
        resolve(res)
      }, err => {
        reject(err)
      })
  })
}

// post请求
export function post(url, param = {}) {
  return new Promise((resolve, reject) => {
    instance.post(
      url,
      param
    ).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

// put请求
export function put(url, param = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, param)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}

// delete
export function deletes(url, param = {}) {
  return new Promise((resolve, reject) => {
    instance.delete(url, param)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
