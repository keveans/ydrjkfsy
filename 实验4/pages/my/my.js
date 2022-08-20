var common = require('../../utils/common')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
      nickname:'未登录',
      src:'/images/index.png',
      newslist:[{
        id: '',
        title: '',
        poster: '',
        content: '',
        add_date: ''
      }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  getmy()
  {
    let info=wx.getStorageInfoSync();
    console.log(info);
    let keys =info.keys;
    let num =keys.length;

    let mylist =[];
    for(var i=0;i<num;i++)
    {
        let  obj = wx.getStorageSync(keys[i]);
        mylist.push(obj);
    }
    this.setData({
      newslist:mylist,
      num:num
    });
  },
  getuserinfo()
  {
    var that=this;
    wx.getUserProfile({
      desc: 'desc',
      success(res){
        that.setData({
          islogin:true,
          src: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
        //console.log(res);
      }
    })
    this.getmy()
  },
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
if(this.data.islogin)
{
  this.getmy()
}
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})