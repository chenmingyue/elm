<template>
  <div id="app">
    <!--顶部-->
   <top>
   </top>
   <!--tab部分-->
    <div class="tab">
      <div class="align-item">
        <router-link  to="/" class="active">商品</router-link>
      </div>
      <div class="align-item">
        <router-link to="/assess">评价</router-link>
      </div>
      <div class="align-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>


    <router-view/>
 </div>

</template>

<script>
import Top from '@/components/top/top'
export default {
  name: 'app',
  data(){
    return {

    }

  },
  components:{
    Top
  }
}
</script>

<style scoped lang="less">
body,html{
  margin: 0;
  padding: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-style:normal;
  a{
    text-decoration: none;

  }
  .tab{
    display: flex;
    height: 40px;
    .align-item{
      flex: 1;
    }
  }
}
</style>
