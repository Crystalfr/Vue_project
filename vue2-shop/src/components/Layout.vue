<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/logo.png" alt="">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>furong</li>
            <li class="nav-pile">|</li>
            <li>退出</li>
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li>|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
      <!-- 头部inner结束 -->
    </div>
    <!-- 头部结束 -->
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 内容部分结束 -->
    <div class="app-foot">
      <p>&copy; 2017 maxwelldu MIT</p>
    </div>
    <!-- 底部结束 -->
  </div>
</template>

<script type="text/javascript">
  export default {
  }
</script>

<style media="screen">
/* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
/*RESET CSS end*/

/*Global Style*/
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
/*Global Style*/

/*Layout style S*/
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head .app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.app-head .app-head-inner img{
  width: 50px;
  margin-top: 20px;
}
.app-head .app-head-inner .head-nav{
  float: right;
}
.app-head .app-head-inner .head-nav ul{
  overflow: hidden;
}
.app-head .app-head-inner .head-nav ul li{
  cursor: pointer;
  float: left;
}
.app-head .app-head-inner .head-nav .nav-pile{
  padding: 0 10px;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
.app-foot {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin-top: 30px;
  clear: both;
  background: #e3e4e8;
  text-align: center;
}
/*Layout style E*/

/*common style S*/
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
/*common style E*/

</style>
