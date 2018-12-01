# 周边旅游APP开发

## 一、项目介绍

该项目为城市周边旅游App，为旅游爱好者提供游玩导向。

## 二、软件架构

软件架构说明

## 三、项目搭建&代码托管

1.安装node

2.安装cnpm		

```
npm i cnpm -g
```

3.安装VUE命令行（脚手架）

```
cnpm i vue-cli -g
```

4.构建项目

```
vue init webpack myapp
```

5.布码云实现代码托管，并接通仓库。

(1)下载

```
git clone 您的仓库地址
```

(2)获取公钥

```
// 生成 ssh key
ssh-keygen -t rsa -C "您的邮箱"  
// 获取到你的 public key
cat ~/.ssh/id_rsa.pub
// 添加主机到本机SSH可信列表
ssh -T git@gitee.com
```

6.上传代码到仓库

```
（1）连接
git config --global user.name '用户名'
$ git config --global user.email '邮箱'
（2）上传
git add .
git commit -m 'init'
git push
```

## 四、文件引入

1.引入reset.css

2.引入fastclick.js

```
//安装
npm install fastclick -S
// 引入
import FastClick from 'fastclick'
// 使用
FastClick.attach(document.body);
```

3.引入阿里字符图标

```
（1）下载图标文件
（2）引入
	import './assets/css/iconfont.css';
（3）使用测试
	<div class="iconfont">&#xe690;</div>
```

## 五、代码编写

### 1、header部分

```
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

<style scoped>
  header{
    width: 100%;
    line-height: .88rem;
    background-color: #00bcd4;
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
    background-color: #fff;
    height: .6rem;
    color:#e4e7ea;
    border-radius: .1rem;
    padding-left: .2rem;
    line-height: .6rem;
    font-size: .28rem;
    margin:.14rem 0;
  }
  header .header-right{
    padding: 0 .2rem;
    font-size: .20rem;
  }
</style>
```

### 2、动态CSS（stylus）（https://www.zhangxinxu.com/jq/stylus/）

```
// 1.安装
	cnpm i stylus stylus-loader -S
// 2.创建文件(var.styl)，并书写内容
	$bgColor = #00bcd4
	$textColor = #fff
// 3.应用
	<style scoped lang="stylus">
      @import "../../../assets/css/var.styl";

      header{
        width: 100%;
        line-height: .88rem;
        background-color:$bgColor ;
        display: flex;
        color:#fff;
        font-size: .36rem;
      }      
</style>
// 4.缩短引用css文件路径
    // 1）修改配置文件（webpack.base.conf.js）
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'css':resolve('src/assets/css')
            }
        }
    // 2）修改引用路径
    	@import "~css/var.styl";
    // 3）重启服务
    	npm run dev
```

