//将秒数转换为分秒的表示形式
var formatSeconds = function (value) {
  var time = parseFloat(value);
  var m = Math.floor(time / 60);
  var s = time - m * 60;

  return [m, s].map(formatNumber).join(':');

  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}
// 全局获取 backgroundAudioManager
const backgroundAudioManager = wx.getBackgroundAudioManager(); 

Page({
  data: {
    current:"00:00",
    total:"00:00",
    playPauseBtn: "icon-play",
    audioPlayPause: "audioPlay",
    audioUrl: "http://audio.xmcdn.com/group32/M06/4A/B0/wKgJnFmarfqBLs5nAHUEnIxKGdk494.m4a",
    audioTitle: "许巍"
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    console.log("参数"+options);
    const atile = options.name;
    backgroundAudioManager.title = "白小平";
    backgroundAudioManager.src = this.data.audioUrl;
    
    console.log("音频长度"+backgroundAudioManager.duration);
    console.log(backgroundAudioManager.title);
    console.log(backgroundAudioManager);
  
  // 监听音乐播放 
    wx.onBackgroundAudioPlay(function () {
      console.log('onBackgroundAudioPlay')
    })
  },

// 生命周期函数--监听页面初次渲染完成
  onReady: function (e) {
   
  },

// 生命周期函数--监听页面显示
  onShow: function () {

  },

// 生命周期函数--监听页面隐藏
  onHide: function () {
    console.log("页面隐藏");
    backgroundAudioManager.onPause();
  },

//  生命周期函数--监听页面卸载
  onUnload: function () {
    console.log("页面卸载");
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  },

  // 播放
  audioPlay: function () {
    this.setData({ playPauseBtn: "icon-pause", audioPlayPause: "audioPause" });
    console.log(backgroundAudioManager.title);
    backgroundAudioManager.play();
  },

  // 播放状态
  listenerButtonGetPlayState: function () {
    var that = this;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        var newtotal = formatSeconds(res.duration);
        that.setData({ total: newtotal, current: formatSeconds(res.currentPosition)});
        console.log('duration:' + res.duration);
        console.log('duration:' + newtotal);
        console.log('currentPosition:' + res.currentPosition);
        console.log('status:' + res.status);
        console.log('downloadPercent:' + res.downloadPercent);
        console.log('dataUrl:' + res.dataUrl);
        
      }
    })
  },

  // 暂停
  audioPause: function () {
    wx.pauseBackgroundAudio();
    this.setData({ playPauseBtn: "icon-play", audioPlayPause: "audioPlay" });
  },

  // 下一曲
  nextAudio: function () {
   
  },

  // 上一曲
  lastAudio: function () {

  },

  // 前进30s
  forwardSec: function () {
    
    wx.seekBackgroundAudio({
      position: currentnew + 30
    });
  },

  // 后退30s
  backSec: function () {

  },

  //进度条拖动事件
  hanleSliderChange:function(){

  },


  handleSliderMoveStart:function(){},
  handleSliderMoveEnd:function(){

  },

  //背景音频播放进度更新事件
  onTimeUpdate(){
    this.setData({current:formatSeconds(backgroundAudioManager.currentTime)})
  }

 
})