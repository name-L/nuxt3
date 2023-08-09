<template>
  <div>
    <div class="tpm-hero2__main">
      <div style="position: absolute; bottom: 160px; width: 100%;">
        <div class="tpm-hero2-text">
          <div class="tpm-hero2-text1">
            4K超高清云制作
          </div>
          <div class="tpm-hero2-text2">
            4K超高清云制作平台是一款基于云计算技术，围绕数字内容从前期制作、制作到后期制作全流程制作，提供数字内容全流程制作解决方案。
          </div>
          <button class="cloud-btn">立即开始</button>
        </div>
      </div>
    </div>
    <section class="tpm-product__section">
      <!-- H2控制台报警告  [Vue warn]: Failed to resolve component: di If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->
      <!-- <H2 class="tpm-section__title">
        OmniSpace为您服务
      </H2> -->
      <div class="tpm-section__title">
        产品特性
      </div>
      <div class="tpm-product-servicebox">
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/cloud-production/characteristic1.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>动态算力</h3>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              强劲配置：提供Intel 铂金8系列专业级CPU搭配RTX A6000专业显卡，充分释放设备性能
            </p>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              弹性扩容：虚拟资源池调度，vCPU/内存/带宽/磁盘等资源按需扩容
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/cloud-production/characteristic2.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>全链路打通</h3>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              业务全链路打通：云端制作+云端渲染+云端合成剪辑
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/cloud-production/characteristic3.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>超高清、流畅高性能云桌面</h3>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              无损画质：最高支持H265、YUV444、4K超高清，带来无损超清画质
            </p>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              超低延时：延时低至30ms以内，媲美本地电脑体验
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/cloud-production/characteristic4.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>团队协同</h3>
            <p class="tpm-product-desc">
              <img src="~/assets/image/basic-composition/ic_gou.png" alt="">
              多人同时使用，提供强大的云共享存储能力，安全稳定，促进信息流通和资源共享，提高办公效率
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="tpm-product__section2">
      <div class="tpm-section-function">
        <div class="tpm-section__title">
          主要功能
        </div>
        <ul class="tpm-solution2__navs">
          <li class="tmp-navs-content" v-for="data in navsList" :key="data.title">
            <p class="tmp-navs-title">{{ data.title }}</p>
            <!-- <img :src="`../assets/image/cloud-production/${data.img}`" alt=""> -->
            <img :src="getAssetURL('cloud-production',data.img)" alt="">
          </li>
        </ul>
      </div>
    </section>
    <section class="tpm-product__section3">
      <div class="tpm-section-function">
        <div class="tpm-section__title">
          业务流程
        </div>
        <div class="tpm-operation_flow">
          <div class="tpm-operation_flow-card">
            <h3>资产制作</h3>
            <p class="introduce">
              资产制作为设计师通过4K超高清云制作平台，进行场景设计、三维建模、动画效果、特效制作、材质、程序等内容制作。
            </p>
            <img src="~/assets/image/cloud-production/zczz.png" alt="">
            <div class="tag-box">
              <span class="tag">3Ds Max</span>
              <span class="tag">Maya</span>
              <span class="tag">UnrealEngin</span>
              <span class="tag">Cinema4D</span>
              <span class="tag">Blender</span>
              <span class="tag">Houdini</span>
            </div>
          </div>
          <div class="tpm-operation_flow-card">
            <h3>协同作业</h3>
            <p class="introduce">
              业务全链路打通：云端制作+云端渲染+云端合成剪辑
            </p>
            <img src="~/assets/image/cloud-production/xtzy.png" alt="">
            <div class="tag-box">
              <!-- <span class="tag">3Ds Max</span> -->
            </div>
          </div>
          <div class="tpm-operation_flow-card">
            <h3>云端渲染</h3>
            <p class="introduce">
              独有的UE并行渲染算法，支持多机多卡并行渲染，渲染速度成倍提升100倍以上
            </p>
            <img src="~/assets/image/cloud-production/ydxr.png" alt="">
            <div class="tag-box">
              <!-- <span class="tag">3Ds Max</span> -->
            </div>
          </div>
          <div class="tpm-operation_flow-card">
            <h3>云端剪辑</h3>
            <p class="introduce">
              后期剪辑与云端制作、现场拍摄棚内进行资产打通，包括剪辑、特效、音效、调色等，提升制作质量，节省时间与成本。
            </p>
            <img src="~/assets/image/cloud-production/ydjj.png" alt="">
            <div class="tag-box">
              <span class="tag">DaVinci Resolve</span>
              <span class="tag">Premiere</span>
              <span class="tag">AfterEffect</span>
              <span class="tag">Media Encoder</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { setseHead, getAssetURL } from '@/utils/util'
definePageMeta({
  layout: 'index',
  index: 1,
});
setseHead('cloud-production')
const state = reactive({
  navsList: [
    {
      title: '弹性扩容',
      img: 'kuorong.png'
    },
    {
      title: '镜像定制',
      img: 'dingzhi.png'
    },
    {
      title: '共享云盘',
      img: 'yunpan.png'
    },
    {
      title: '团队管理',
      img: 'guanli.png'
    },
    {
      title: '多人协同',
      img: 'xietong.png'
    },
    {
      title: '云端渲染',
      img: 'xuanran.png'
    },
    {
      title: '云端合成',
      img: 'hecheng.png'
    },
    {
      title: '云端剪辑',
      img: 'jianji.png'
    },
  ]
})
const { navsList } = toRefs(state)
</script>

<style lang="less" scoped>
.tpm-hero2__main {
  height: 630px;
  max-width: 100%;
  min-width: 1400px;
  margin-top: 60px;
  background: url('~/assets/image/cloud.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 800px;
    height: 630px;
    background: url('~/assets/image/cloud.gif') no-repeat;
    background-size: 100% 100%;
  }
}

.tpm-hero2-text {
  width: 1400px;
  margin: 0 auto;

  .tpm-hero2-text1 {
    height: 56px;
    font-size: 40px;
    font-weight: 600;
    color: #0E1127;
    line-height: 56px;
  }

  .tpm-hero2-text2 {
    width: 540px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    line-height: 28px;
  }

  .cloud-btn {
    width: 197px;
    height: 56px;
    background: linear-gradient(134deg, #5384FD 0%, #4B59FF 100%);
    border-radius: 28px;
    color: #fff;
    outline: none;
    border: none;
    margin-top: 36px;
  }
}

.tpm-product__section {
  padding-top: 15px;
  width: 1400px;
  height: 724px;
  margin: 0 auto;

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 102px 0 154px 0;
    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-product-servicebox {
    min-width: 1400px;
    display: flex;
    justify-content: space-between;
  }

  .tpm-product-service {
    width: 332px;
    height: 316px;
    background: linear-gradient(180deg, #E8EFFA 0%, #FFFFFF 100%);
    box-shadow: 0px 12px 24px 0px rgba(233, 233, 233, 0.5);
    border-radius: 4px;
    border: 2px solid #FFFFFF;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;

    .tpm-product-icon {
      text-align: center;
      margin-top: -95px;
    }

    .tpm-product-title>h3 {
      margin-top: 46px;
      font-size: 18px;
      text-align: center;
      font-weight: 600;
      color: #333333;
      margin-bottom: 10px;
    }

    .tpm-product-desc {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #A2A8C1;
      line-height: 24px;
      display: flex;

      // &::before {
      //   content: '';
      //   display: block;
      //   width: 14px;
      //   height: 11px;
      //   margin-right: 12px;
      //   background: url('~/assets/image/basic-composition/ic_gou.png');
      // }
      >img {
        width: 14px;
        height: 11px;
        position: relative;
        top: 6px;
        margin-right: 12px;
        vertical-align: text-top;
      }

    }
  }
}

.tpm-product__section2 {
  width: 100%;
  background: url('~/assets/image/basic-composition/ic_bg.png') no-repeat;
  background-size: 100% 100%;
  height: 600px;
  overflow: hidden;

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 100px 0 60px 0;
    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-section-function {
    width: 1400px;
    margin: auto;
    padding: 0 100px;
    box-sizing: border-box;

    .tpm-solution2__navs {
      font-size: 0;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      .tmp-navs-content {
        width: 282px;
        height: 108px;
        background: linear-gradient(180deg, #ECF3FF 0%, #FFFFFF 100%);
        box-shadow: 0px 8px 16px 0px rgba(233, 233, 233, 0.5);
        border-radius: 4px;
        border: 2px solid #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 44px 0 60px;
        box-sizing: border-box;
        margin: 0 24px 32px 0;

        &:nth-child(4n) {
          margin: 0;
        }

        .tmp-navs-title {
          height: 28px;
          font-size: 20px;
          font-weight: 600;
          color: #333333;
          line-height: 28px;
        }
      }

    }
  }
}

.tpm-product__section3 {
  width: 1400px;
  height: 795px;
  margin: auto;
  // overflow: hidden;
  padding: 1px;

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 100px 0 60px 0;
    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-operation_flow {
    display: flex;
    justify-content: space-between;

    .tpm-operation_flow-card {
      width: 332px;
      height: 459px;
      background: #FFFFFF;
      box-shadow: 0px 8px 16px 0px rgba(233, 233, 233, 0.5);
      border-radius: 4px;
      padding: 32px 24px;
      box-sizing: border-box;

      >h3 {
        height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #111111;
        line-height: 25px;
        margin-bottom: 8px;
      }

      .introduce {
        height: 60px;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 20px;
        margin-bottom: 14px;
      }
      // >img:hover{
      //   transform: scale(1.5);
      //   transition-duration: 500ms;
      // }

      .tag-box {
        margin-top: 26px;

        >.tag {
          display: inline-block;
          padding: 3px 12px;
          box-sizing: border-box;
          margin: 0 12px 12px 0;
          border: 1px solid #F2F2F2;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          line-height: 20px;

          &:nth-child(3n) {
            margin: 0;
          }
        }
      }

      &:last-child {
        .tag-box {
          .tag {
            &:nth-child(3n) {
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
}
</style>utils/util