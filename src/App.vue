<template>
  <div id="app">
    <!--顶部-->
   <top :seller="seller">
   </top>
   <!--tab部分-->
    <div class="tab">
      <div class="align-item">
        <router-link  to="/" >商品</router-link>
      </div>
      <div class="align-item">
        <router-link to="/assess">评价</router-link>
      </div>
      <div class="align-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>


    <router-view :seller="seller"></router-view>
 </div>

</template>

<script>
import Top from '@/components/top/top';
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return {
        seller:{}
    }

  },
  mounted(){
    axios.get('http://result.eolinker.com/rPNTNnr9a7f82c3f81de4b1dea66e1f0e0b3b176d78c66e?uri=api/data').then((res)=>{
      this.seller=res.data.seller;
    })

  },
  components:{
    Top
  }
}

</script>
<style  lang="less" >
  @import "./common/css/border1px.less";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  font-style:normal;
  a{
    text-decoration: none;

  }
  .tab{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    .border-1px(rgba(7,17,27,0.1));
    .align-item{
      flex: 1;
      a{
        font-size:14px ;
        line-height: 40px;
        color: rgb(77,85,93);
        display: block;
        height: 40px;
        text-align: center;
      }
      .router-link-exact-active{
        color:rgb(240,20,20);
      }
    }
  }
}
</style>
