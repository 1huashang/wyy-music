<template>
  <div id="found">
  <!-- 导航栏 -->
    <div class="menu">
      <div class="m_middle">
        <ul>
          <li><router-link to="/discover">推荐</router-link></li>
          <li><router-link to="/toplist">排行榜</router-link></li>
          <li><router-link to="/playlist">歌单</router-link></li>
          <li><router-link to="/djradio">主播电台</router-link></li>
          <li><router-link to="/artist">歌手</router-link></li>
          <li><router-link to="/album">新碟上架</router-link></li>
        </ul>
      </div>
    </div>
    <router-view name="son"></router-view>
  </div>
</template>

<script>
    export default {
        name: "found",
        data(){
            return {}
        },
        methods: {
            // getList(){
            //     this.$http.get('')
            }
        }
</script>

<style scoped>
  #found{
    width: 100%;
  }
  .menu{
    width: 100%;
    height: 35px;
    background-color: #c20c0c;
    margin-top: 0;
    position: relative;
  }
  .m_middle{
    width:1100px;
    height: 34px;
    margin: 0 auto;
    position: absolute;
  }
  .m_middle li{
    list-style-type: none;
    float: left;
    color: #fff;
    text-decoration: none;
  }
</style>
