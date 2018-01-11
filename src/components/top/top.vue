<template>
    <div class="top">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" width="64px" height="64px">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[1].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="detailShow">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="detailShow">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <transition name="fade">
      <div class="detail" v-show="isShow" >
        <div class="detail-wrapper clearfix" >
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="item in seller.supports">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="detailHide">
          <i class="el-icon-close"></i>
        </div>
      </div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
  import star from './../star/star';
    export default {
      name:'top',
      data(){
        return {
          isShow:false
        }
      },
      methods:{
        detailShow(){
          this.isShow=true
        },
        detailHide(){
          this.isShow=false
        }
      },
      props:{
        seller:{
          type:Object
        }
      },
      components:{
        star
      },
      created(){
        this.classMap=['decrease','discount','guarantee','invoice','special']
      }
    }
</script>

<style scoped lang="less">
 @import "./../../common/css/bg-image.less";
  .top{
  color: #fff;
  position: relative;
  background: rgba(7,17,27,0.4);
    overflow: hidden;
  .content-wrapper{
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
    .avatar{
      display: inline-block;
      vertical-align: top;
      img{
        border-radius: 2px;
      }
    }
    .content{
      display: inline-block;
      font-size: 4px;
      margin-left: 16px;
      .title{
        margin:2px 0 8px 0;
        .brand{
          display: inline-block;
          width: 30px;
          height: 18px;
          .gradientBackground(@ccc:brand);
          background-size: 30px 18px;
          background-repeat: no-repeat;
          vertical-align: top;
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
      }
      .description{
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;

      }
      .support{
        .icon{
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            .bg-image(@type:'decrease_1')
          }
          &.discount{
            .bg-image(@type:'discount_1')
          }
          &.guarantee{
            .bg-image(@type:'guarantee_1')
          }
          &.invoice{
            .bg-image(@type:'invoice_1')
          }
          &.special{
            .bg-image(@type:'special_1')
          }
        }
        .text{
          line-height: 12px;
          font-size: 12px;

        }
      }
    }
    .support-count{
      position: absolute;right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-right: 14px;
      background-color: rgba(0,0,0,0.2);
      text-align: center;
      border-radius: 8px;
      .count{
        font-size: 10px;
        vertical-align: top;

      }
      i{
        font-size: 10px;
        margin-left: 2px;
        line-height: 24px;
      }
    }
  }
  .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0;
    position: relative;
    background: rgba(7,17,27,0.2);
    .bulletin-title{
      display: inline-block;
      width: 22px;
      height: 12px;
      .bg-image(@type:'bulletin');
      background-size: 22px 12px;
      vertical-align: top;
      margin-top: 8px;
    }
    .bulletin-text{
      vertical-align: top;
      margin:0 4px;
      font-size: 10px;
    }
    .el-icon-arrow-right{
      font-size: 10px;
      position: absolute;
      right: 12px;
      top: 8px;
    }


  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter:blur(10px);
  }
  .detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);
    top: 0;
    left: 0;
    transition:all 0.5s;
    &.fade-enter, &.fade-leave{
      opacity: 1;
      background: rgba(7,17,27,0.8);
    }
    &.fade-enter, &.fade-leave{
      opacity: 0;
      background: rgba(7,17,27,0);
    }
    .detail-wrapper{
      min-height: 100%;
      width: 100%;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .name{
          line-height: 16px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        .title{
          display: flex;
          width: 80%;
          margin:30px auto 30px auto;
          .line{
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom:1px solid rgba(255,255,255,0.2);

          }
          .text{
            padding:0 12px;
            font-size: 14px;
          }
        }
        .supports{
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              vertical-align: top;
              width: 16px;
              height: 16px;
              margin-right: 4px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              &.decrease {
                .bg-image(@type:'decrease_2')
              }
              &.discount {
                .bg-image(@type:'discount_2')
              }
              &.guarantee {
                .bg-image(@type:'guarantee_2')
              }
              &.invoice {
                .bg-image(@type:'invoice_2')
              }
              &.special {
                .bg-image(@type:'special_2')
              }
            }
            .text {
              line-height: 16px;
              font-size: 16px;

            }
          }
        }
        .bulletin{
          width: 80%;
          margin: 0 auto;
          .content{
            padding: 0 12px;
            line-height: 24px;
            font-size: 14px;

          }
        }
      }
    }
    .detail-close{
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto;
      clear: both;
      font-size: 32px;
    }
  }
}
</style>
