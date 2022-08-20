var common = require('../../utils/common')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperimg: [
      {src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg'},
      {src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage2.jpg'},
      {src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg'}
    ],
    newslist : [
      {id: '',
      title: '',
      poster: '',
      content: '',
      add_date: ''}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  goToDetail(e)
  {
     let id =e.currentTarget.dataset.id;
     console.log(id)
     wx.navigateTo({
       url: '../detail/detail?id='+id,
     }) 
  },
  onLoad: function (options) {
    let list =common.getNewsList()
    this.setData({newslist:list})
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