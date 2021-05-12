// pages/openapi/getwerun/getwerun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  btnscanbook: function() {
    wx.scanCode({
      success: (result) => {
        console.log(result)
        wx.cloud.callFunction({
          name: 'getbook',
          data: {isbn: result.result},
          success: function(res) {
            wx.showToast({
              title: '调用成功',
            })
            console.log(res)
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '调用失败',
            })
            console.log(err)
          }
        })
      },
    })
  },

  btnbind: function() {
    wx.getWeRunData({
      complete: (result) => {
        // console.log(result)
        wx.cloud.callFunction({
          name: 'getwxrun',
          data: {
            werundata: wx.cloud.CloudID(result.cloudID)
          },
          success: res => {
            wx.showToast({
              title: '调用成功',
            })
            console.log(res)
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '调用失败',
            })
            console.error('[云函数] 调用失败：', err)
          }
        })
      },
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})