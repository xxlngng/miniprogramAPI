// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()

// todo 需要doubanbook 解吗

async function getDBbook(isbn) {
  const url = 'https://search.douban.com/book/subject_search?search_text=' + isbn

  let res = await axios.get(url)
  return res
}

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const {isbn} = event

  const res = await getDBbook(isbn)
  return res
}