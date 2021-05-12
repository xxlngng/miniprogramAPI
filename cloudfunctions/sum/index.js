// 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()
// 云函数入口
exports.main = async ob => {
  console.log(ob)
  const {a,b} = ob
  return {
    sum: a + b
  }
}