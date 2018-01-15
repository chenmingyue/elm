<template>
    <div class="shopCart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="iconfont icon-gouwuche1"></i>
            </div>
          </div>
          <div class="price">0</div>
          <div class="desc">另需配送费￥{{deliverPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay">￥{{minPrice}}元起送</div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name:'shopCart',
      props:{
        deliverPrice:{
          type:Number
        },
        minPrice:{
          type:Number
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
            i{
              font-size: 24px;
              color: #80858a;
              line-height: 44px;
            }
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

        }
      }
    }
  }
</style>
