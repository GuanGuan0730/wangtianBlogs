/*
 * 
 * 王天博客小程序开源版
 * 基于WordPress开源程序和WordPress REST API开发
 * organization: 王天博客  wx.dslcv.com
 * 码云地址：https://gitee.com/wangtianZS    
 * 技术支持微信号：ycygyzyq
 * 开源协议：MIT
 * Copyright (c) 2022  王天博客 https://wx.dslcv.com All rights reserved.
 * 
 */

import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var webSiteName= config.getWebsiteName;
var domain =config.getDomain

Page({
  data: {
    title: '页面内容',
    pageData: {},
    pagesList: {},
    hidden: false,
  
    webSiteName:webSiteName,
    domain:domain
  },
  onLoad: function (options) {

  this.loadFontFace()
    this.fetchData(options.id);
    wx.showShareMenu({
      withShareTicket:true,
      menus:['shareAppMessage','shareTimeline'],
      success:function(e)
      {
        //console.log(e);
      }
    })
     
  },
  loadFontFace() {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        console.log(res.status)
        self.setData({ loaded: true })
      },
      fail: function(res) {
        console.log(res.status)
      },
      complete: function(res) {
        console.log(res.status)
      }
    });
  },
  onShareTimeline: function() {
    let imageUrl = this.data.pageData.post_full_image
    if(imageUrl=='')
    {
      imageUrl=this.data.pageData.postImageUrl
    }
    return {
      title: this.data.pageData.title.rendered,
      query: {
        id: this.data.pageData.id
      },
      imageUrl
    }
  },
  
  fetchData: function (id) {
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url: Api.getPageByID(id, { mdrender: false }),
      success: function (response) {
        console.log(response);
        self.setData({
          pageData: response.data,         
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  },
  fetchPagesData: function () {
    var self = this;
    wx.request({
      url: Api.getPages(),
      success: function (response) {
        self.setData({
          pagesList: response.data
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  }
})
