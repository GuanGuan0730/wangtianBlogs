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

var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js')
var auth = require('../../utils/auth.js');
import config from '../../utils/config.js'
var app = getApp();

Page({
    data: {
        posterImageUrl:"",
        dialog: {
            title: '',
            content: '',
            hidden: true
        },



    },
    onLoad: function (options) {
        var self = this;
        
        wx.setNavigationBarTitle({
            title: '海报',
            success: function (res) {
                // success
            }
        });
        self.setData({
            posterImageUrl: options.posterImageUrl
        });
        
        
    }, 
    savePosterImage:function()
    {
        var self=this;
        wx.downloadFile({
            url: self.data.posterImageUrl,
            success: function (res) {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success(result) {
                        console.log(result)
                        wx.showModal({
                            title: '提示',
                            content: '二维码海报已存入手机相册，赶快分享吧',
                            showCancel: false,
                            success: function (res) {
                                if (res.confirm) {
                                    
                                    wx.navigateBack({
                                        delta: 1
                                    })
                                }
                            }
                        })
                    }
                });
            }, fail: function (res) {
                console.log(res)
            }
        });
    },
    posterImageClick:function(e){
        var src = e.currentTarget.dataset.src;
        wx.previewImage({
            urls: [src],
        });
    }
})