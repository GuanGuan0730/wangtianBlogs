/*
 * 
 * 王天博客小程序开源版
 * 基于WordPress开源程序和WordPress REST API开发
 * organization: 王天博客  wx.dslcv.com
 * 码云地址：https://gitee.com/wangtianZS    
 * 技术支持微信号：ycygyzyq
 * 开源协议：MIT
 * Copyright (c) 2022  王天博客 https://wx.dslcv.com All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "wx.dslcv.com";
var WEBSITENAME="王天真帅"; //网站名称
var PAGECOUNT='10'; //每页文章数目
var WECHAT='微信号：ycygyzyq'; //客服联系方式,如 微信号：ycygyzyq 或 邮箱：ycygyzyq@sina.com
//是否启用小程序扫描二维码登录网站  true 启用  false  不启用
//未安装王天博客登录插件不要启用
const enableScanLogin =true
//////////////////////////////////////////////////////


//王天博客小程序端版本,请勿修改
const minapperVersion=4.5
const minapperSource="free"
//////////////////////////////////////////////////////

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPageCount: PAGECOUNT,
  getWecat: WECHAT,
  enableScanLogin,
  minapperVersion,
  minapperSource
}