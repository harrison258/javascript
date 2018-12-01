<template>
  <header>
    <div class="header-left">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe628;输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <span class="iconfont">广州&#xe601;</span>
    </div>
  </header>
</template>
<script></script>
<style scoped lang="stylus">
  /*@import "../../../assets/css/var.styl";*/
  /*@import "~@/assets/css/var.styl";*/
  @import "~css/var.styl";

  header{
    width: 100%;
    line-height: .88rem;
    background-color:$bgColor ;
    display: flex;
    color:#fff;
    font-size: .36rem;
  }
  header .header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
  }
  header .header-search{
    flex:1;
    background-color: $textColor;
    height: .6rem;
    color:#e4e7ea;
    border-radius: .1rem;
    padding-left: .2rem;
    line-height: .6rem;
    font-size: .18rem;
    margin:.14rem 0;
  }
  header .header-right{
    padding: 0 .2rem;
    font-size: .20rem;
  }
</style>
