//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('./api/data.json', (req, res) => {
  return {
    data: res
  }
})
