//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    list: [],
    users: [{
      name: '阿达',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '黄磊',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '殷素素',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '张无忌',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '张翠山',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '刘波',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '杨颖',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '靳东',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '胡歌',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '宋轶',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '黄晓明',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '麦香',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '秋香',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '狗头',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '小萝莉',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '剑豪',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '剑圣',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '狗熊',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '乐芙兰',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }, {
      name: '石头',
      photo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoiaGs9c7GtIFKIdHDHiaUEBMeYtmDiaKsEaicxHS0DAkqJYBf0etibhwbIWWqwhp68VSbAd31ephXvrhw/132',
    }]
  },
  showUsers: function() {
    this.setData({
      show: true
    })
    this.setData({
      list: this.data.users
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    
  },
  select: function(detail,option) {
    console.log('父组件select',detail,option)
  },
  confirm: function(detail) {
    console.log("父组件inputconfirm",detail)
  },
  cancle: function() {
    console.log('父组件cancle回调')
  }

})