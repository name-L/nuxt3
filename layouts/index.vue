<template>
  <div>
    <div id="navigationBar" role="navigation" data-type="cn_zh" class="pls-nav pls-nav-air fixed">
      <div class="pls-nav-mod">
        <div class="pls-nav-top">
          <div class="pls-nav-top-logo">
            <nuxt-link to="/">OmniSpace</nuxt-link>
          </div>
          <div class="pls-nav-list-wrap">
            <ul class="pls-nav-list">
              <li v-for="data, index in navList" :key="index" class="pls-nav-item" tabindex="-1"
                :class="{ 'is-active': index === current }" @mouseover="handelNav(index)">
                <a role="button" hotrep="hp.header.product" href="javascript:void 0;">{{ data }}</a>
              </li>
            </ul>
          </div>
          <div class="pls-nav-top-operation">
            <a href="javascript:void 0;" hotrep="hp.pc.topnav.login" rel="nofollow" class="pls-nav-top-link">联系我们</a>
            <a href="javascript:void 0;" hotrep="hp.pc.topnav.register" rel="nofollow" class="pls-nav-top-btn">立即注册</a>
          </div>
        </div>
        <section :class="['pls-nav-dropdown',{'navClass': navClass }]" style="visibility: hidden;height:0px; opacity: 0;" @mouseleave="navClass = false, current = null">
          <div :class="['pls-nav-dropdown-content', { 'content-navClass': navClass }]">
            <div class="pls-nav-dropdown-inner">
              <NuxtLink  class="pls-nav-dropdown-ro" to="/cloud-production">
                <p>4k超高清云制作</p>
                <p>云上制作一站式解决方案</p>
              </NuxtLink>
              <NuxtLink  class="pls-nav-dropdown-ro">
                <p>离线渲染</p>
                <p>云端高性能GPU分布式渲染集群</p>
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </div>
    <slot />
    <footer class="tpm-product-footer">
      <ul class="pls-footer-website">
        <li>
          <div class="pls-footer-website-group">
            <h3 class="pls-footer-website-title">
              OmniSpace
            </h3>
            <ul class="pls-footer-website-list">
              <li><a href="javascript:void 0;">立即注册</a></li>
              <li><a href="javascript:void 0;">成为合作伙伴</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="pls-footer-website-group">
            <h3 class="pls-footer-website-title">
              产品服务
            </h3>
            <ul class="pls-footer-website-list">
              <li><a href="javascript:void 0;">渲染云主机</a></li>
              <li><a href="javascript:void 0;">4K超高清云制作</a></li>
              <li><a href="javascript:void 0;">离线渲染</a></li>
              <li><a href="javascript:void 0;">实时渲染</a></li>
              <li><a href="javascript:void 0;">AI云主机</a></li>
              <li><a href="javascript:void 0;">AI训练与推理服务</a></li>
              <li><a href="javascript:void 0;">数字资产自动生成与交易</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="pls-footer-website-group">
            <h3 class="pls-footer-website-title">
              解决方案
            </h3>
            <ul class="pls-footer-website-list">
              <li><a href="javascript:void 0;">XR影棚虚拟拍摄</a></li>
              <li><a href="javascript:void 0;">易学教育云</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="pls-footer-website-group">
            <h3 class="pls-footer-website-title">
              关于OminSpace
            </h3>
            <ul class="pls-footer-website-list">
              <li><a href="javascript:void 0;">公司介绍</a></li>
              <li><a href="javascript:void 0;">新闻动态</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div class="pls-footer-website-group">
            <h3 class="pls-footer-website-title">
              合作咨询
            </h3>
            <ul class="pls-footer-website-list">
              <li><a href="javascript:void 0;">电话：18153888618</a></li>
              <li><a href="javascript:void 0;">地址：马栏山滨河路280号兴旺V视界五楼</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

// const activeIndex = ref("1");

const activeIndex = computed(() => {
  return route.meta.index + ''
})
const state = reactive({
  navList: ['产品', '解决方案', '文档'],
  current: null,
  navClass: false
})

const handelNav = (index: number) => {
  switch (index) {
    case 0:
      state.navClass = true
      break;
  }
  state.current = index as any
}
const { navList, current, navClass } = toRefs(state)
</script>

<style lang="less" scoped>
.pls-nav-air.fixed {
  height: auto;
}

.pls-nav-air {
  position: relative;
}

.pls-nav.fixed .pls-nav-mod {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #202337;
}

.pls-nav-air .pls-nav-mod {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
}

.pls-nav-mod {
  position: relative;
  z-index: 1000;
  box-sizing: border-box;
}

// .pls-nav-air .pls-nav-mod:before {
//   content: "";
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(255, 255, 255, .8);
// }

.pls-nav-air .pls-nav-top {
  box-shadow: none;
}

.pls-nav-top {
  position: relative;
  z-index: 1;
  height: 62px;
  background: #202337;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.pls-nav-top-logo {
  a{
    color: #fff;
  }
  margin: 0 78px 0 158px;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
}

.pls-nav-list-wrap {
  position: relative;
  padding-right: 300px;
  flex: 1;
}

.pls-nav-list {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  height: 62px;
}

.pls-nav-item {
  flex-shrink: 0;
  margin-right: 106px;
}

.pls-nav-item>a[href] {
  cursor: pointer;
}

.pls-nav-item.is-active>a:hover {
  color: #0052d9;
  text-decoration: none;
}

.pls-nav-item.is-active>a::after {
  content: '';
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 2px solid #2773E7;
}

.pls-nav-item>a {
  position: relative;
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 62px;
  text-decoration: none;
  cursor: default;
  padding: 0 12px;
}

.pls-nav-top-operation {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
}

.pls-nav-top-link {
  display: block;
  margin-right: 24px;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 62px;
}

.pls-nav-top-btn {
  display: block;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 14px;
  color: #fff;
  line-height: 62px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  width: 130px;
  height: 62px;
  background: linear-gradient(45deg, #5698FF 0%, #4144EF 100%);
}

.pls-nav-air .pls-nav-top:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  opacity: .1;
}

// 下拉`
.pls-nav-dropDown{
  // visibility: hidden;
  // height: 0px;
}
.navClass{
  min-width: 1400px;
  max-width: 1920px;
  height: 171px !important;
  visibility: inherit !important;
  background: #202337;
  position: absolute;
  top: 62px;
  left: 50%;
  z-index: 99;
  opacity: 1 !important;
  transform: translate(-50%);
  transition: height 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
}
.pls-nav-dropdown-inner{
  color: #fff;
  display: flex;
  padding: 60px 110px;
  box-sizing: border-box;
  .pls-nav-dropdown-ro{
    margin-right: 200px;
    >p{
      height: 16px;
      font-size: 16px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 24px;
      &:last-child{
        height: 14px;
        font-size: 14px;
        font-weight: 400;
        color: #CCCCCC;
        line-height: 21px;
        margin-top: 12px;
      }
    }
  }
}

.tpm-product-footer {
  min-width: 1400px;
  height: 493px;
  background: #202337;
  padding: 100px 294px;
  box-sizing: border-box;

  .pls-footer-website {
    // margin-left: -10px;
    display: flex;
    align-items: flex-start;

    >li:first-child {
      flex: 1.5;
    }

    >li {
      flex: 1;
    }

    &>li:not(:first-child) .pls-footer-website-title {
      font-size: 16px;
      font-weight: 500;
    }

    .pls-footer-website-group {
      .pls-footer-website-title {
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 32px;
      }

      .pls-footer-website-list>li>a {
        display: block;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #CCCCCC;
        line-height: 20px;
        margin-bottom: 12px;

        &:hover {
          color: #2773E7;
        }
      }
    }
  }
}
</style>