<template>
  <div id="app">
    <!-- 头部区域 -->
    <div id="top_list">
      <div id="top">
        <div id="top_left">
          <h1 class="logo"><a hidefocus="true" href="#"><img src="./assets/img/topbar.png" alt=""/></a></h1>
          <ul class="menu">
            <li><router-link to="/">发现音乐</router-link></li>
            <li><router-link to="/my_music">我的音乐</router-link></li>
            <li><router-link to="/friend">朋友</router-link></li>
            <li><router-link to="/shop">商城</router-link></li>
            <li><router-link to="/musician">音乐人</router-link></li>
            <li class="download"><router-link to="/download">下载客户端</router-link></li>
            <li class="hot"></li>
          </ul>
        </div>
        <div id="top_right">
          <div class="search">
            <input type="text" placeholder="音乐/视频/电台/用户">
            <label style=""></label>
          </div>
          <a href="#" class="creator">创作者中心</a>
          <div class="login">
            <a href="#">登录</a>
            <div class="down_list"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航区域 -->
    <router-view></router-view>
    <!-- 底部区域 -->
    <div id="foot">
      <div id="foot_list">
        <div id="f_left">
          <p class="l_font"><a href="#">服务条款</a>
            <span class="line">|</span>
            <a href="#">隐私政策</a>
            <span class="line">|</span>
            <a href="#">儿童隐私政策</a>
            <span class="line">|</span>
            <a href="#">版权投诉指引</a>
            <span class="line">|</span>
            <a href="#">意见反馈</a>
            <span class="line">|</span>
          </p>
          <p class="r_font">网易公司版权所有©1997-2020<span>杭州乐读科技有限公司运营：</span><a href="#">浙网文[2018]3506-263号</a></p>
          <p class="r_font">违法和不良信息举报电话：0517-89853516<span>举报邮箱：</span><a href="#">ncm5990@163.com</a></p>
        </div>
        <div id="f_right">
          <ul class="r_list">
            <li>
              <a href="#" class="user"></a>
              <span class="ff authentication"></span>
            </li>
            <li>
              <a href="#" class="independent"></a>
              <span class="ff singers"></span>
            </li>
            <li>
              <a href="#" class="money"></a>
              <span class="ff admire"></span>
            </li>
            <li>
              <a href="#" class="video"></a>
              <span class="ff reward"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="play_bar">
      <div id="bottom_bar">
        <div class="hand" title="展开播放条"></div>
        <div class="wrap">
          <a herf="#" class="prev_song"></a>
          <a herf="#" class="play_song"></a>
          <a herf="#" class="next_song"></a>
          <a href="#" class="picture"><img src="./assets/img/109951164345003993.jpg"/></a>
          <div class="play">
            <div class="words">
              <a hidefocus="true" href="#" class="desc" title="第三人称">第三人称</a>
              <span title="买辣椒也用券" class="author"><a class="singer" href="#" hidefocus="true">买辣椒也用券</a></span>
            </div>
            <div class="m-pbar">
              <div class="barbg ">

              </div>
              <span class="j-flag time"><em>00:00</em> / 04:29</span>
            </div>
          </div>
          <div id="operate">
            <a href="#" class="add"></a>
            <a href="#" class="share"></a>
          </div>
          <div id="control">
            <a href="#" class="sound"></a>
            <a href="#" class="play_method"></a>
            <a href="#" class="play_num"></a>
          </div>
          <div class="suo">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
    components: {

    }
}
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  #app{
    width: 100%;
  }
  #top_list{
    background-color: #242424;
  }
  #top{
    width:1100px;
    height:70px;
    margin: 0 auto;
  }
  #top_right{
  width: 50%;
  margin:0 auto;
}
  h1{
    float:left;
    width:176px;
    height:69px;
    overflow:hidden;
    display: block;
    font-size: 2em;
    background-color:#242424;
    text-algin:center;
  }
  .menu{
    width:720px;
    height:69px;
    background-color:#242424;
    list-style:none;
  }
  .menu a{
    text-decoration: none;
    padding: 0 19px;
    text-align: center;
    line-height: 70px;
    color: #ccc;
    float: left;
    font-size: 14px;
  }
  .menu a:hover{
    background-color: #000;
  }
  .download{
    position:relative;
  }
  .hot{
    background:url(./assets/img/topbar.png) no-repeat 0 9999px;
    display: block;
    position:relative;
    top: 21px;
    left: 675px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
  }
  .search{
    position:relative;
    margin-top: -50px;
    margin-left:480px;
    float: left;
    width: 158px;
    height: 32px;
  }
  .search input{
    position:absolute;
    border-radius: 32px;
    line-height: 32px;
    width: 95%;
    margin: 0;
    padding: 0;
    text-align: start;
    background-position: 0 -99px;
    background:url(./assets/img/topbar.png) no-repeat 0 999px;
  }
  .search label {
    font-size:12px;
    display: block;
    position: absolute;
    top: 10px;
    left: 33px;
    width: 90%;
    color: #9b9b9b;
    cursor: text;
    float: right;
  }
  .creator{
    position: absolute;
    float:left;
    width: 96px;
    height: 32px;
    margin: -50px 0 0 240px;
    box-sizing: border-box;
    padding-left: 15px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
    text-decoration:none;
    font-size:12px;
  }
  .login a{
    font-size:12px;
    position: absolute;
    float:left;
    width: 96px;
    text-decoration:none;
    height: 45px;
    margin: -40px 0 0 350px;
    padding: 0 22px 0 0;
    color:#787878;
    background-position: right -47px;
  }
  .down_list{
    position:absolute;
    float: left;
    height: 45px;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    background:url(./assets/img/topbar.png) no-repeat 0 9999px;
  }
  #foot{
    width: 100%;
    height: 149px;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }
  #foot_list{
    width: 980px;
    height: 91px;
    margin: 0 auto;
    position: relative;
  }
  #f_left{
    float: left;
    width: 520px;
    height: 87px;
    padding-top: 15px;
    line-height: 24px;
    position: absolute;
  }
  p{
    display: block;
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
  }
  p a{
    text-decoration: none;
  }
  .l_font a{
    color: #999;
  }
  .r_font a{
    color:#333;
  }
  .l_font span{
    margin: 0 8px 0 10px;
  }
 .r_font span{
    margin-left: 14px;
  }
  #f_right{
    float: right;
    width: 330px;
    height: 70px;
  }
  .r_list{
    position: absolute;
    float: right;
    width: 330px;
    height: 70px;
    margin-top: 21px;
    color: #333333;
    margin: 21px 0 0;
  }
  .r_list li:first-child{
    margin-left: 0;
  }
  .r_list li{
    list-style: none;
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
  }
  .user{
    background: url("./assets/img/foot_enter_new.png") no-repeat;
    background-position: -63px -101px;
    background-size: 110px 450px;
    display: block;
    width: 50px;
    height: 45px;
    margin: 0 5px;
  }
  .ff{
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
    background: url(./assets/img/foot_enter_tt.png) no-repeat;
    background-size: 180px 100px;
  }
  .authentication{
    background-position: -1px -91px;
  }
  .independent{
    background: url("./assets/img/foot_enter_new.png") no-repeat;
    background-position:0 0;
    background-size: 110px 450px;
    display: block;
    width: 50px;
    height: 45px;
    margin: 0 5px;
  }
  .money{
    background: url("./assets/img/foot_enter_new.png") no-repeat;
    background-position:-60px -50px;
    background-size: 110px 450px;
    display: block;
    width: 50px;
    height: 45px;
    margin: 0 5px;
  }
  .video{
    background: url("./assets/img/foot_enter_new.png") no-repeat;
    background-position:0 -101px;
    background-size: 110px 450px;
    display: block;
    width: 50px;
    height: 45px;
    margin: 0 5px;
  }
  #play_bar{
      width: 100%;
      height: 53px;
      position: relative;
      margin-right: 67px;
      background: url("./assets/img/playbar.png") repeat 0 9999px;
      background-position:0 -2px;
      z-index: -10;
    }
  #bottom_bar{
    width: 980px;
    height: 47px;
    margin: 0 auto;
  }
  .hand {
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
  }
  .wrap {
    position: absolute;
    top: 6px;
    z-index: 15;
    width: 980px;
    height: 47px;
    margin: 0 auto;
  }
  .prev_song{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background: url("./assets/img/playbar.png") no-repeat;
    background-position: 0 -130px;
    z-index: 10;
  }
  .play_song{
    display: block;
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    margin-top: 1px;
    text-indent: -9999px;
    background: url("./assets/img/playbar.png") no-repeat;
    background-position:0 -204px;
  }
  .next_song{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background: url("./assets/img/playbar.png") no-repeat;
    background-position:-80px -130px;
    position: ;
  }
  .wrap img{
    position: relative;
    top: 4px;
    left: 24px;
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 4px;
    box-shadow:0 0 5px #000;
  }
  .play {
    position: relative;
    *zoom: 1;
    width: 608px;
  }
  .words {
    height: 28px;
    overflow: hidden;
    color: #e8e8e8;
    text-shadow: 0 1px 0 #171717;
    line-height: 28px;
  }
  .words a{
    text-decoration: none;
    float: left;
    font-size: 12px;
  }
  .desc{
    color: #e8e8e8;
    width: 48px;
    height: 28px;
  }
  .singer{
    width: 72px;
    height: 13.6px;
    color: #9b9b9b;
  }
  .barbg{
    position: absolute;
    top: -7px;
    right: -13px;
    width: 22px;
    height: 24px;
    margin-left: -11px;
    background-position: 0 -250px;
    background: url("./assets/img/playbar.png") no-repeat;
  }
  #operate{
    width: 60px;
    height: 36px;
    float: left;
    color: #333333;
  }
  .add{
    float: left;
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    background-position: -88px -163px;
    background: url("./assets/img/playbar.png") no-repeat 0 -9999px;
  }
  .suo{
     position: absolute;
     top: -22px;
     right: 15px;
     width: 52px;
     height: 67px;
     background: url("./assets/img/playbar.png") no-repeat 0 9999px;
     background-position: 0 -380px;
     float: left;
  }
  @import "assets/css/normalize.css-master/normalize.css"
</style>
