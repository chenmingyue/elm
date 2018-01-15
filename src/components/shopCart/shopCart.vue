<template>
    <div class="shopCart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="iconfont icon-gouwuche1" :class="{'highlight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalCount>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliverPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{payDesc}}</div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name:'shopCart',
      data(){
        return {
          //totalCount:3
        }
      },
      props:{
        deliverPrice:{
          type:Number
        },
        minPrice:{
          type:Number
        },
        selectFoods:{
          type:Array,//如果是array或者object
          default(){
            return [
              {
                price:3,
                count:10
              }
            ];
          }
        }

      },
      computed:{
        totalPrice(){
          let total=0;
          this.selectFoods.forEach((food)=>{
            total+=food.price*food.count;
          });
          return total
        },
        totalCount(){
          let total=0;
          this.selectFoods.forEach((food)=>{
            total+=food.count;
          });
          return total
        },
        payDesc(){
          if(this.totalPrice===0){
            return `￥{this.minPrice}起送`
          }else if(this.totalPrice<this.minPrice){
            let diff=this.minPrice-this.totalPrice;
            return `还差￥${diff}元起送`
          }else{
            return '去结算';
          }
        },
        payClass(){
          if(this.totalPrice<this.minPrice){
            return 'not-enough'
          }else{
            return 'enough'
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .shopCart{
    position: fixed;
    bottom: 0;
    width: 100%;
    height:48px ;
    left: 0;
    z-index: 50;
    .content{
      display: flex;
      background: #141d27;
      .content-left{
        flex: 1;
        .logo-wrapper{
          display: inline-block;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 50%;
          background: #141d27;
          .logo{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #2b343c;
            text-align: center;
            &.highlight{
              background: rgb(1,160,220);
            }
            i{
              font-size: 24px;
              color: #80858a;
              line-height: 44px;
              &.highlight{
                color: #fff;
              }
            }
          }
          .num{
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #fff;
            background: rgb(240,20,20);
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
          }
        }
        .price{
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255,255,255,0.1);
          font-size: 16px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          &.highlight{
            color: #fff;
          }
        }
        .desc{
          display: inline-block;
          vertical-align: top;
          margin:12px 0 0 12px;
          line-height: 24px;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
        }
      }
      .content-right{
        flex: 0 0 105px;
        width: 105px;
        .pay{
          height: 48px;
          line-height: 48px;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          background: #2b333b;
          text-align: center;
          &.not-enough{
            background: #2b333b;
          }
          &.enough{
            background: #00b43c;
            color: #fff;
          }
        }
      }
    }
  }
</style>
