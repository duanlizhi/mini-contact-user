var pinyin = require('./pinyin.js')

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示联系人
    show: {
      type: Boolean,
      value: false
    },
    //用户数组
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nav: [],
    showList: []
  },
  observers: {
    'list': function(list) {
      console.log('更新人员数据：', list)
      for (let user of list) {
        user['pinyin'] = pinyin.py.get(user.name).p
        if (!Boolean(user.photo)) {
          user['photo'] = "./resources/images/photo-boy.png";
        }
      }

      var newlist = [];
      var nav = [];
      if (this.data.list.length > 0) {
        var sortUsers = pinyin.py.dataLetterSort(this.data.list, 'pinyin')
        for (let key in sortUsers) {
          var obj = {};
          obj['title'] = key,
          obj['list'] = sortUsers[key]
          nav.push(key)
          newlist.push(obj);
        }
      }

      this.setData({
        showList: newlist,
        nav: nav
      })
      console.log(this.data.showList)
    }
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toView: function(e) {
      console.log('toview',e)
      this.setData({
        toViewNav: e.currentTarget.dataset.item,
        toView: e.currentTarget.dataset.item
      })
    },
    showInput: function() {
      this.setData({
        inputShowed: true
      });
    },
    //输入框点击取消按钮
    hideInput: function() {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
      this.triggerEvent('cancle');
    },
    touchend: function() {
      console.log(11111111)
      setTimeout(() => {
        this.setData({
          toViewNav: ""
        })
      }, 500);
      
    },
    
    clearInput: function() {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping: function(e) {
      this.setData({
        inputVal: e.detail.value
      });
    },
    hideUsers: function() {
      this.setData({
        show: false
      })
    },
    //选中某个联系人
    select(e) {
      console.log("选中联系人",e)
      var myEventDetail = {} // detail对象，提供给事件监听函数
      myEventDetail['user'] = e.currentTarget.dataset.user;
      var myEventOption = {} // 触发事件的选项
      this.setData({ show: false })
      this.triggerEvent('select', myEventDetail, myEventOption)
    },
    //点击完成按钮
    confirmInput: function (e) {
      console.log('点击键盘完成', e)
      var myEventDetail = {}//提供给事件监听函数
      myEventDetail['value'] = e.detail.value;
      this.triggerEvent('confirm',myEventDetail)
    }
  }
})