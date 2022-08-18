Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','青岛市','崂山区',''],
    cityid: '1010',
    now : {
      temp: 0,
      text: '未知',
      icon: 999,
      humidity: 0,
      pressure: 0,
      vis:     0,
      windDir: 0,
      windSpeed: 0,
      windScale: 0,
    },
  },
  getweather:function()
  {
    var that=this;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data:{
        location: that.data.region[2],
        key:'67ab2b38e26e41fab6a84837a9942cde',
      },success:function(res)
      { 
        that.setData({cityid: res.data.location[0].id,});
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now',
          data:{
            location: that.data.cityid,//101010100',
            key:'67ab2b38e26e41fab6a84837a9942cde',
   
          },success:function(res)
          {
           console.log(res.data.now);
           that.setData({
             now: res.data.now,
           })
          }
        })
      }
    })
  },
  regionchange:function(e)
  {
    console.log(e)
      this.setData({
        region: e.detail.value,
      });
      this.getweather();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getweather();
    console.log(this.data);
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
    
  },
 
})