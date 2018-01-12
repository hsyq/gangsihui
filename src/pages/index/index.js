//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    news:["1","2","3"],
    text:"今夜",
    show:true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://localhost:3000/getAlbumsList',
    //   success:function(data){
    //     console.log(data);
           
    //   }
    // });
   // data
  },

  btnClick:function(){
    var isShow =this.data.show;
    console.log(isShow);
    this.setData({show:!isShow});
  },

  kwjdClick:function(){
    //console.log("点击了");
    wx.navigateTo({
      url: "../itemlist/itemlist?"
    })
    
  },

  gdgyqClick: function () {
    console.log("点击了");
    wx.navigateTo({
      url:"../itemlist/itemlist"
    })
  }
})
