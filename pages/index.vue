<template>
  <div class="omin-space-box">
    <!-- <div id="navigationBar" role="navigation" data-type="cn_zh" class="pls-nav pls-nav-air fixed">
      <div class="pls-nav-mod">
        <div class="pls-nav-top">
          <div class="pls-nav-top-logo">
            OmniSpace
          </div>
          <div class="pls-nav-list-wrap">
            <ul class="pls-nav-list">
              <li v-for="data, index in navList" :key="index" class="pls-nav-item" tabindex="-1"
                :class="{ 'is-active': index === current }" @mouseover="handelNav(index)" @mouseout="current = null">
                <a role="button" hotrep="hp.header.product" href="javascript:void 0;">{{ data }}</a>
              </li>
            </ul>
          </div>
          <div class="pls-nav-top-operation">
            <a href="javascript:void 0;" hotrep="hp.pc.topnav.login" rel="nofollow" class="pls-nav-top-link">联系我们</a>
            <a href="javascript:void 0;" hotrep="hp.pc.topnav.register" rel="nofollow" class="pls-nav-top-btn">立即注册</a>
          </div>
        </div>
        <section class="pls-nav-dropdown" style="visibility: hidden; height: 0px;">
          <div
            style="height: 0px; transition: transform 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s; opacity: 0; transform: translate(0px, -100%);">
            <a href="javascript:void 0;" class="pls-nav-dropdown-close" hotrep="hp.header.close">关闭</a>
          </div>
        </section>
      </div>
    </div> -->
    <!-- 背景 -->
    <!-- <div id="webgl" style="margin-top: 200px;margin-left: 100px;" /> -->
    <div class="tpm-hero2__main">
      <div style="position: absolute; bottom: 100px; width: 100%;">
        <div class="tpm-hero2-text">
          <div class="tpm-hero2-text1">
            OmniSpace
          </div>
          <div class="tpm-hero2-text2">
            元宇宙虚拟制作一站式解决方案
          </div>
        </div>
      </div>
    </div>
    <div class="tpm-hero2__entries-wrap">
      <div class="tpm-hero2__entries-inner">
        <a href="javaScript:void(0);" class="tpm-hero2__entry" hotrep="hp.belowbanner.news1">
          <!--  target="_blank" -->
          <div class="tpm-hero2__entry-icon">
            <img src="~/assets/image/ic_tiyan.png" alt="">
          </div>
          <div class="tpm-hero2__entry-title">
            <h3>立即体验</h3>
            <p class="tpm-hero2__entry-desc">立即注册</p>
          </div>
        </a>
        <a href="javascript:void 0;" class="tpm-hero2__entry" hotrep="hp.belowbanner.news1">
          <div class="tpm-hero2__entry-icon">
            <img src="~/assets/image/ic_shichan.png" alt="">
          </div>
          <div class="tpm-hero2__entry-title">
            <h3>市场活动</h3>
            <p class="tpm-hero2__entry-desc">最新上线</p>
          </div>
        </a>
        <a href="javascript:void 0;" class="tpm-hero2__entry" hotrep="hp.belowbanner.news1">
          <div class="tpm-hero2__entry-icon">
            <img src="~/assets/image/ic_chanpin.png" alt="">
          </div>
          <div class="tpm-hero2__entry-title">
            <h3>热门产品</h3>
            <p class="tpm-hero2__entry-desc">UE离线渲染</p>
          </div>
        </a>
        <a href="javascript:void 0;" class="tpm-hero2__entry" hotrep="hp.belowbanner.news1">
          <div class="tpm-hero2__entry-icon">
            <img src="~/assets/image/ic_fangan.png" alt="">
          </div>
          <div class="tpm-hero2__entry-title">
            <h3>热门解决方案</h3>
            <p class="tpm-hero2__entry-desc">超算XR影棚解决方案</p>
          </div>
        </a>
      </div>
    </div>
    <!--  -->
    <section class="tpm-product__section">
      <!-- H2控制台报警告  [Vue warn]: Failed to resolve component: di If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->
      <!-- <H2 class="tpm-section__title">
        OmniSpace为您服务
      </H2> -->
      <div class="tpm-section__title">
        OmniSpace为您服务
      </div>
      <div class="tpm-product-servicebox">
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/ic_a.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>多团队多地数据共享</h3>
            <p class="tpm-product-desc">
              流程协同与统一视图
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/ic_b.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>融合离线渲染</h3>
            <p class="tpm-product-desc">
              提速资产的产出
            </p>
            <p class="tpm-product-desc">
              查看预审核
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/ic_c2.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>无缝衔接虚拟制片</h3>
            <p class="tpm-product-desc">
              云与现场的资产同步
            </p>
            <p class="tpm-product-desc">
              数据同步及算力共用
            </p>
          </div>
        </div>
        <div class="tpm-product-service">
          <div class="tpm-product-icon">
            <img src="~/assets/image/ic_c.png" alt="">
          </div>
          <div class="tpm-product-title">
            <h3>全线接入AI大模型</h3>
            <p class="tpm-product-desc">
              助力内容创新
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="tpm-product__section2">
      <div class="tpm-product__section2-box">
        <!-- H2控制台报警告  [Vue warn]: Failed to resolve component: di If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->
        <!-- <H2 class="tpm-section__title">
          OmniSpace基本组成
        </H2> -->
        <div class="tpm-section__title">
          OmniSpace基本组成
        </div>
        <div class="tpm-product__section-tabBox">
          <div class="tpm-product-tab-left">
            <div v-for="(item, index) in tpmProductTabLeft" :key="item.txt" class="tpm-product-left-flex"
              :class="{ 'is-active': tabCurrent === index }" @click="selectTabClick(index)">
              <div class="tpm-product-tab-img">
                <!-- <img v-if="tabCurrent === index" :src="`../assets/image/basic-composition/${item.img}`" alt=""> -->
                <!-- <img v-else :src="`../assets/image/basic-composition/${item.imgNor}`" alt=""> -->
                <img v-if="tabCurrent === index" :src="getAssetURL('basic-composition', item.img)" alt="">
                <img v-else :src="getAssetURL('basic-composition', item.imgNor)" alt="">
              </div>
              <div class="tpm-product-tab-txt">
                {{ item.txt }}
              </div>
            </div>
            <!-- <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_4k_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              4K超高清云制作
            </div>
          </div>
          <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_UE_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              UE离线渲染
            </div>
          </div>
          <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_shishi_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              实时渲染
            </div>
          </div>
          <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_AI_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              AI云主机
            </div>
          </div>
          <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_xunlian_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              AI训练与推理服务
            </div>
          </div>
          <div class="tpm-product-left-flex">
            <div class="tpm-product-tab-img">
              <img src="~/assets/image/basic-composition/ic_zichan_nor.png" alt="">
            </div>
            <div class="tpm-product-tab-txt">
              资产生成与交易
            </div>
          </div> -->
          </div>
          <div v-if="tabCurrent === 0" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                渲染云主机
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                标准云主机
              </div>
              <div class="tpm-product-right-txt-desc">
                标准规格的云主机，用于普通办公使用！
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                专业云主机
              </div>
              <div class="tpm-product-right-txt-desc">
                专业渲染云主机，提供高性能RTX A6000GPU,释放最大性能！
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                云存储
              </div>
              <div class="tpm-product-right-txt-desc">
                大规模共享访问，弹性扩展的文件存储服务
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                我的团队
              </div>
              <div class="tpm-product-right-txt-desc">
                加入团队，共享团队存储
              </div>
            </div>
            <div class="tpm-product-right-img">
              <img v-if="tabCurrent === 0" src="~/assets/image/basic-composition/ic_right_xuanran.png" alt="">
              <!-- <img v-if="tabCurrent === 1" src="~/assets/image/basic-composition/ic_right_4k.png" alt="">
            <img v-if="tabCurrent === 2" src="~/assets/image/basic-composition/ic_right_UE.png" alt="">
            <img v-if="tabCurrent === 3" src="~/assets/image/basic-composition/ic_right_shishi.png" alt="">
            <img v-if="tabCurrent === 4" src="~/assets/image/basic-composition/ic_right_AI.png" alt="">
            <img v-if="tabCurrent === 5" src="~/assets/image/basic-composition/ic_right_xunlian.png" alt="">
            <img v-if="tabCurrent === 6" src="~/assets/image/basic-composition/ic_right_zichan.png" alt=""> -->
            </div>
          </div>
          <div v-if="tabCurrent === 1" class="tpm-product-tab-right">
            <div class="tpm-product-tab-right-title">
              <div class="tpm-product-right-txt">
                <div class="tpm-product-right-txt-cn">
                  4K超高清云制作
                </div>
                <!-- <div class="tpm-product-right-txt-us">
                  Render cloud host
                </div> -->
              </div>
            </div>
            <div class="flex">
              <div class="left">
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    工作台
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    项目进度甘特图跟踪，全局掌控和风险控制一目了然
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    项目主机
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    主机管理，随时为新成员创建办公环境
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    成员管理
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    项目成员、角色、权限统一管理
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    资产库
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    资产库统一管理，项目资产、个人资产及平台资产
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    资产管理
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    项目所有资产统一管理，防止资产丢失
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    流程管理
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    流程标准化管理，降低项目风险
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    版本管理
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    历史版本可追溯
                  </div>
                </div>
                <div class="tpm-product-right-txt1">
                  <div class="tpm-product-right-txt-title">
                    数据管理
                  </div>
                  <div class="tpm-product-right-txt-desc">
                    保留项目所有足迹，为您保驾护航
                  </div>
                </div>
              </div>
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_4k.png" alt="">
            </div>
          </div>
          <div v-if="tabCurrent === 2" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                UE离线渲染
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                首页
              </div>
              <div class="tpm-product-right-txt-desc">
                根据站点资源，创建可弹性扩展的文件存储服务
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                模型管理
              </div>
              <div class="tpm-product-right-txt-desc">
                渲染模型的上传、解压与渲染配置
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                离线渲染
              </div>
              <div class="tpm-product-right-txt-desc">
                多机并发渲染，提高渲染效率
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                渲染结果查看
              </div>
              <div class="tpm-product-right-txt-desc">
                支持渲染结果的查看与导出
              </div>
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_UE.png" alt="">
            </div>
          </div>
          <div v-if="tabCurrent === 3" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                实时渲染
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                敬请期待!
              </div>
              <div class="tpm-product-right-txt-desc" />
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_shishi.png" alt="">
            </div>
          </div>
          <div v-if="tabCurrent === 4" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                AI云主机
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                AI云主机
              </div>
              <div class="tpm-product-right-txt-desc">
                提供高性能RTX A6000和深度学习框架，处理复杂的计算任务和大规模的数据处理
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                云存储
              </div>
              <div class="tpm-product-right-txt-desc">
                大规模共享访问，弹性扩展的文件存储服务
              </div>
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                我的团队
              </div>
              <div class="tpm-product-right-txt-desc">
                加入团队，共享团队存储
              </div>
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_AI.png" alt="">
            </div>
          </div>
          <div v-if="tabCurrent === 5" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                AI训练与推理服务
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                敬请期待!
              </div>
              <div class="tpm-product-right-txt-desc" />
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_xunlian.png" alt="">
            </div>
          </div>
          <div v-if="tabCurrent === 6" class="tpm-product-tab-right">
            <div class="tpm-product-right-txt">
              <div class="tpm-product-right-txt-cn">
                资产生成与交易
              </div>
              <!-- <div class="tpm-product-right-txt-us">
                Render cloud host
              </div> -->
            </div>
            <div class="tpm-product-right-txt1">
              <div class="tpm-product-right-txt-title">
                敬请期待!
              </div>
              <div class="tpm-product-right-txt-desc" />
            </div>
            <div class="tpm-product-right-img">
              <img src="~/assets/image/basic-composition/ic_right_zichan.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tpm-product__section3">
      <!-- H2控制台报警告  [Vue warn]: Failed to resolve component: di If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->
      <!-- <H2 class="tpm-section__title">
        多样化的行业解决方案
      </H2> -->
      <div class="tpm-section__title">
        多样化的行业解决方案
      </div>
      <div class="tpm-product__section3-accordion">
        <div :class="['accordion-card', { 'big': d.key === activeKey }]" v-for="d in cardList" :key="d.key"
          @mouseover="handelCard(d.key)">
          <div class="accordion-box-txt">
            {{ d.title }}
            <div class="accordion-introduce">
              <div v-if="d.text">{{ d.text }}</div>
              <div v-if="d.text1">{{ d.text1 }}</div>
              <div v-if="d.text2">{{ d.text2 }}</div>
              <div v-if="d.text3">{{ d.text3 }}</div>
            </div>
          </div>
          <div class="accordion-box">
            <!-- <img :src="`../assets/image/basic-composition/${d.key}.png`" alt=""> -->
            <img :src="getAssetURL('basic-composition',d.key + '.png')" alt="">
          </div>
        </div>
        <!-- <div class="accordion-card big">
          <div class="accordion-box-txt">
            影视
            <div class="accordion-introduce">
              <div>云端媒体存储和管理</div>
              <div>远程协作与沟通</div>
              <div>分布式渲染和云渲染服务</div>
              <div>即时预览和远程审阅</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/1.png" alt="">
          </div>
        </div>

        <div class="accordion-card">
          <div class="accordion-box-txt">
            动漫
            <div class="accordion-introduce">
              <div>云端媒体存储和管理</div>
              <div>远程协作与沟通</div>
              <div>分布式渲染和云渲染服务</div>
              <div>动画预览和远程审核</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/2.png" alt="">
          </div>
        </div>

        <div class="accordion-card">
          <div class="accordion-box-txt">
            广告片
            <div class="accordion-introduce">
              <div>快速高效的制作流程</div>
              <div>高质量的画面展示</div>
              <div>分布式渲染和云渲染服务</div>
              <div>远程审核和合作</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/3.png" alt="">
          </div>
        </div>

        <div class="accordion-card">
          <div class="accordion-box-txt">
            游戏
            <div class="accordion-introduce">
              <div>云端资源管理</div>
              <div>远程协作与沟通</div>
              <div>分布式渲染和云渲染服务</div>
              <div>高质量的图形展示</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/4.png" alt="">
          </div>
        </div>

        <div class="accordion-card">
          <div class="accordion-box-txt">
            教育行业
            <div class="accordion-introduce">
              <div>在线教学与学习</div>
              <div>高清视频展示</div>
              <div>远程协作和互动</div>
              <div>多媒体教学资源</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/5.png" alt="">
          </div>
        </div>

        <div class="accordion-card">
          <div class="accordion-box-txt">
            文旅行业
            <div class="accordion-introduce">
              <div>虚拟旅游体验</div>
              <div>云端展览和艺术欣赏</div>
              <div>教育与普及</div>
            </div>
          </div>
          <div class="accordion-box">
            <img src="~/assets/image/basic-composition/6.png" alt="">
          </div>
        </div> -->
      </div>
    </section>
    <!-- <footer class="tpm-product-footer">
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
    </footer> -->
    <div id="webgl" />
  </div>
</template>

<script setup lang="ts">

import { toRefs, reactive, onMounted } from 'vue'
import { setseHead, getAssetURL } from '@/utils/util'
import $ from 'jquery'

const state = reactive({
  navList: ['产品', '解决方案', '文档'],
  current: null,
  activeKey: 1,
  cardList: [
    {
      key: 1,
      title: '影视',
      text: '云端媒体存储和管理',
      text1: '远程协作与沟通',
      text2: '分布式渲染和云渲染服务',
      text3: '即时预览和远程审阅',
    },
    {
      key: 2,
      title: '动漫',
      text: '云端媒体存储和管理',
      text1: '远程协作与沟通',
      text2: '分布式渲染和云渲染服务',
      text3: '动画预览和远程审核',
    },
    {
      key: 3,
      title: '广告片',
      text: '快速高效的制作流程',
      text1: '高质量的画面展示',
      text2: '分布式渲染和云渲染服务',
      text3: '远程审核和合作',
    },
    {
      key: 4,
      title: '游戏',
      text: '云端资源管理',
      text1: '远程协作与沟通',
      text2: '分布式渲染和云渲染服务',
      text3: '高质量的图形展示',
    },
    {
      key: 5,
      title: '教育行业',
      text: '在线教学与学习',
      text1: '高清视频展示',
      text2: '远程协作和互动',
      text3: '多媒体教学资源',
    },
    {
      key: 6,
      title: '文旅行业',
      text: '虚拟旅游体验',
      text1: '云端展览和艺术欣赏',
      text2: '教育与普及'
    },
  ],
  tpmProductTabLeft: [
    {
      imgNor: 'ic_xuanran_nor.png',
      img: 'ic_xuanran_sel.png',
      txt: '渲染云主机'
    },
    {
      imgNor: 'ic_4k_nor.png',
      img: 'ic_4k_sel.png',
      txt: '4K超高清云制作'
    },
    {
      imgNor: 'ic_UE_nor.png',
      img: 'ic_UE_sel.png',
      txt: 'UE离线渲染'
    },
    {
      imgNor: 'ic_shishi_nor.png',
      img: 'ic_shishi_sel.png',
      txt: '实时渲染'
    },
    {
      imgNor: 'ic_AI_nor.png',
      img: 'ic_AI_sel.png',
      txt: 'AI云主机'
    },
    {
      imgNor: 'ic_xunlian_nor.png',
      img: 'ic_xunlian_sel.png',
      txt: 'AI训练与推理服务'
    },
    {
      imgNor: 'ic_zichan_nor.png',
      img: 'ic_zichan_sel.png',
      txt: '资产生成与交易'
    }
  ],
  tabCurrent: 0
})


definePageMeta({
  layout: 'index',
  index: 1,
});
setseHead('omin-space')
onMounted(() => {
  // $(function () {
  //   $('.accordion-card').mouseenter(function (e: { target: string }) {
  //     $(e.target).addClass('big').siblings().removeClass('big')
  //   })
  // })
})
// 手风琴
const handelCard = (key: number) => {
  state.activeKey = key
}
const handelNav = (index: number) => {
  state.current = index as any
}
// 切换Tab
const selectTabClick = (index: number) => {
  state.tabCurrent = index
}
const { navList, current, tpmProductTabLeft, tabCurrent, activeKey , cardList } = toRefs(state)
</script>

<style lang="less" scoped>
// .pls-nav-air.fixed {
//   height: auto;
// }

// .pls-nav-air {
//   position: relative;
// }

// .pls-nav.fixed .pls-nav-mod {
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   background: #202337;
// }

// .pls-nav-air .pls-nav-mod {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   box-sizing: border-box;
// }

// .pls-nav-mod {
//   position: relative;
//   z-index: 1000;
//   box-sizing: border-box;
// }

// .pls-nav-air .pls-nav-mod:before {
//   content: "";
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(255, 255, 255, .8);
// }

// .pls-nav-air .pls-nav-top {
//   box-shadow: none;
// }

// .pls-nav-top {
//   position: relative;
//   z-index: 1;
//   height: 62px;
//   background: #202337;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   padding-left: 20px;
// }

// .pls-nav-top-logo {
//   margin: 0 78px 0 158px;
//   font-size: 24px;
//   font-weight: bold;
//   color: #FFFFFF;
// }

// .pls-nav-list-wrap {
//   position: relative;
//   padding-right: 300px;
//   flex: 1;
// }

// .pls-nav-list {
//   display: flex;
//   overflow: hidden;
//   flex-wrap: wrap;
//   height: 62px;
// }

// .pls-nav-item {
//   flex-shrink: 0;
//   margin-right: 106px;
// }

// .pls-nav-item>a[href] {
//   cursor: pointer;
// }

// .pls-nav-item.is-active>a:hover {
//   color: #0052d9;
//   text-decoration: none;
// }

// .pls-nav-item.is-active>a::after {
//   content: '';
//   display: inline-block;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   border-bottom: 2px solid #2773E7;
// }

// .pls-nav-item>a {
//   position: relative;
//   display: block;
//   font-weight: 500;
//   font-size: 14px;
//   color: #fff;
//   line-height: 62px;
//   text-decoration: none;
//   cursor: default;
//   padding: 0 12px;
// }

// .pls-nav-top-operation {
//   position: absolute;
//   right: 0;
//   top: 0;
//   height: 100%;
//   display: flex;
//   justify-content: flex-end;
//   white-space: nowrap;
// }

// .pls-nav-top-link {
//   display: block;
//   margin-right: 24px;
//   font-weight: 500;
//   font-size: 14px;
//   color: #fff;
//   line-height: 62px;
// }

// .pls-nav-top-btn {
//   display: block;
//   box-sizing: border-box;
//   padding: 0 20px;
//   font-size: 14px;
//   color: #fff;
//   line-height: 62px;
//   color: #fff;
//   cursor: pointer;
//   text-align: center;
//   width: 130px;
//   height: 62px;
//   background: linear-gradient(45deg, #5698FF 0%, #4144EF 100%);
// }

// .pls-nav-air .pls-nav-top:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 1px;
//   background-color: #000;
//   opacity: .1;
// }

.tpm-hero2__main {
  height: 630px;
  max-width: 100%;
  min-width: 1400px;
  margin-top: 60px;
  background: url('~/assets/image/banner-bg1.png') no-repeat;
  background-size: 100% 100%;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 975px;
    height: 630px;
    background: url('~/assets/image/banner-bg2.gif') no-repeat;
    background-size: 100% 100%;
  }
}

.tpm-hero2-text {
  width: 1400px;
  margin: 0 auto;

  .tpm-hero2-text1 {
    width: 222px;
    height: 53px;
    font-size: 40px;
    font-weight: bold;
    color: #0E1127;
    line-height: 53px;
  }

  .tpm-hero2-text2 {
    width: 448px;
    height: 45px;
    font-size: 32px;
    font-weight: 600;
    color: #333333;
    line-height: 45px;
  }
}

.tpm-hero2__entries-wrap {
  height: auto;
  position: relative;
  z-index: 11;
  margin-top: -46px;
  pointer-events: none;
  padding: 0 40px 0;

  .tpm-hero2__entries-inner {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    // justify-content: center;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }

  .tpm-hero2__entry:last-child {
    margin-right: 0;
  }

  .tpm-hero2__entry {
    // display: block;
    display: flex;
    align-items: center;
    margin-right: 40px;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
    border-radius: 4px;
    box-sizing: border-box;
    // -ms-flex: 1;
    // flex: 1;
    width: 1px;
    max-width: none;
    height: auto;
    padding: 30px;
    position: relative;
    pointer-events: auto;

    transition: all .3s linear;
    width: 320px;
    height: 100px;
    background: linear-gradient(180deg, #ECF3FF 0%, #FFFFFF 100%);
    box-shadow: 0px 8px 16px 0px rgba(233, 233, 233, 0.5);
    border-radius: 4px;
    border: 2px solid #FFFFFF;

    .tpm-hero2__entry-icon {
      margin-right: 25px;
    }

    .tpm-hero2__entry-title>H3 {
      min-width: 72px;
      height: 25px;
      font-size: 18px;
      font-weight: 600;
      color: #111111;
      line-height: 22px;
    }

    .tpm-hero2__entry-title>.tpm-hero2__entry-desc {
      max-height: 44px;
      color: #97a3b7;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      min-width: 64px;
      height: 22px;
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      line-height: 22px;
    }
  }

  .tpm-hero2__entry:hover {
    .tpm-hero2__entry-title>h3 {
      color: #2773E7;
    }
  }
}

.tpm-product__section {
  padding-top: 15px;
  width: 1200px;
  height: 636px;
  margin: 0 auto;

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 80px 0 80px 0;

    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-product-servicebox {
    display: flex;
    justify-content: space-between;
  }

  .tpm-product-service {
    width: 282px;
    height: 320px;
    background: rgba(241, 245, 254, .8);
    position: relative;
    padding: 0 60px;
    box-sizing: border-box;

    .tpm-product-icon {
      margin-top: -37px;
    }

    .tpm-product-title>h3 {
      width: 162px;
      font-size: 18px;
      text-align: center;
      font-weight: 600;
      color: #333333;
      margin-bottom: 10px;
    }

    .tpm-product-desc {
      width: 162px;
      font-size: 14px;
      text-align: center;
      font-weight: 600;
      color: rgba(162, 168, 193, 1);
    }
  }
}

.tpm-product__section2 {
  width: 100%;
  background: url('~/assets/image/basic-composition/ic_bg.png') no-repeat;
  background-size: 100% 100%;

  .tpm-product__section2-box {
    height: 916px;
    width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    // padding: 0 260px;
    box-sizing: border-box;
  }

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 70px 0 43px 0;

    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-product__section-tabBox {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1400px;
  }

  .tpm-product-tab-left {
    .tpm-product-left-flex.is-active {
      color: #fff;
      border: 2px solid #2773E7;
      background: #2773E7;
      box-shadow: 0px 8px 30px 0px rgba(92, 121, 238, 0.4);

      .tpm-product-tab-txt {
        color: #fff;
      }
    }

    .tpm-product-left-flex {
      display: flex;
      align-items: center;
      padding: 10px 27px;
      box-sizing: border-box;
      width: 292px;
      height: 70px;
      background: linear-gradient(180deg, #E8EFFA 0%, #FFFFFF 100%);
      box-shadow: 0px 8px 24px 0px rgba(224, 224, 224, 0.5);
      border-radius: 4px;
      border: 2px solid #FFFFFF;
      margin-bottom: 22px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .tpm-product-left-flex:hover {
      border: 2px solid #2773E7;
      cursor: pointer;
    }

    .tpm-product-tab-img {
      margin-right: 28px;
      width: 50px;
    }

    .tpm-product-tab-txt {
      height: 25px;
      font-size: 18px;
      font-weight: 600;
      color: #666666;
      line-height: 25px;
    }
  }

  .tpm-product-tab-right {
    position: relative;
    width: 1066px;
    height: 623px;
    padding: 30px 0 0 50px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px 0px rgba(224, 224, 224, 0.5);
    border-radius: 4px;
    border: 1px solid #FFFFFF;
    background: url('~/assets/image/basic-composition/ic_right-bg.png') no-repeat;
    background-size: 100%;

    .tpm-product-right-txt {
      margin-bottom: 54px;

      .tpm-product-right-txt-cn {
        height: 33px;
        font-size: 24px;
        font-weight: 600;
        color: #2773E7;
        line-height: 33px;
      }

      .tpm-product-right-txt-us {
        margin-top: 6px;
        height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #2773E7;
        line-height: 25px;
      }
    }

    .tpm-product-right-txt1 {
      margin-bottom: 24px;

      .tpm-product-right-txt-title {
        height: 25px;
        font-size: 18px;
        font-weight: 600;
        color: #333333;
        line-height: 25px;
        margin-bottom: 7px;
      }

      .tpm-product-right-txt-desc {
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
      }
    }
  }

  .flex {
    display: flex;

    .left {
      margin-right: 40px;
    }
  }

  // .tpm-product-tab-right::after{
  //   content: '';
  //   width: 139px;
  //   height: 160px;
  //   position: absolute;
  //   right: 35px;
  //   bottom: 14px;
  //   display: inline-block;
  //   background: url('~/assets/image/basic-composition/ic_zichan_nor.png') no-repeat;
  //   background-size: 100% 100%;
  // }
  .tpm-product-right-img>img {
    width: 139px;
    height: 160px;
    position: absolute;
    right: 35px;
    bottom: 14px;
  }
}

.tpm-product__section3 {
  height: 696px;
  width: 1400px;
  // width: 100%;
  margin: 0 auto;
  overflow: hidden;
  // padding: 0 260px;
  box-sizing: border-box;

  .tpm-section__title {
    width: 100%;
    text-align: center;
    margin: 100px 0 60px 0;
    font-size: 40px;
    font-weight: 600;
    color: #111111;
    line-height: 56px;
  }

  .tpm-product__section3-accordion {
    display: flex;
    width: 1400px;
    margin: 0 auto;
    position: relative;

    .accordion-card {
      width: 186px;
      height: 360px;
      border: 3px solid #FFFFFF;
      // background: linear-gradient(180deg, #2773E7 0%, rgba(39,115,231,0) 100%);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      margin-right: 16px;
      // cursor: pointer;
      padding: 32px 24px;
      color: #FFF;
      box-sizing: border-box;
      transition: width .3s ease-in-out, box-shadow .3s ease-in-out, opacity .3s ease-in-out;

      &:last-child {
        margin: 0;
      }

      .accordion-box {
        position: absolute;
        top: 0;
        right: 0;
        // img {
        //   position: absolute;
        //   top: 0;
        //   right: 0;
        // }
      }

      .accordion-box-txt {
        position: relative;
        z-index: 2;
        height: 25px;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;

        .accordion-introduce {
          // position: absolute;
          // left: -180px;
          margin-top: 16px;
          display: none;
          font-size: 14px;
          font-weight: 400;
          color: #495770;
          line-height: 28px;

          &>div::before {
            content: '';
            display: inline-block;
            width: 14px;
            height: 11px;
            margin-right: 12px;
            background: url('~/assets/image/basic-composition/ic_gou.png');
          }
        }
      }
    }

    .accordion-card.big {
      width: 390px;
      box-shadow: 8px 8px 20px rgba(55, 99, 170, .4);
      border-radius: 4px;
      color: #333333;

      .accordion-box {
        opacity: .3;
        transition: opacity .3s ease-in-out;
      }

      .accordion-introduce {
        display: block;
        // left: 0;
        animation: move-right .3s ease-out 0s backwards;

      }
    }
  }
}

@keyframes move-right {
  0% {
    transform: translate(-180px);
    // opacity: 0;
  }

  50% {
    transform: translate();
    // opacity: 0.5;
  }

  100% {
    transform: translate(0);
    // opacity: 1;
  }
}

// .tpm-product-footer {
//   min-width: 1400px;
//   height: 493px;
//   background: #202337;
//   padding: 100px 294px;
//   box-sizing: border-box;

//   .pls-footer-website {
//     // margin-left: -10px;
//     display: flex;
//     align-items: flex-start;

//     >li:first-child {
//       flex: 1.5;
//     }

//     >li {
//       flex: 1;
//     }

//     &>li:not(:first-child) .pls-footer-website-title {
//       font-size: 16px;
//       font-weight: 500;
//     }

//     .pls-footer-website-group {
//       .pls-footer-website-title {
//         margin-bottom: 16px;
//         font-size: 24px;
//         font-weight: bold;
//         color: #FFFFFF;
//         line-height: 32px;
//       }

//       .pls-footer-website-list>li>a {
//         display: block;
//         height: 20px;
//         font-size: 14px;
//         font-weight: 400;
//         color: #CCCCCC;
//         line-height: 20px;
//         margin-bottom: 12px;

//         &:hover {
//           color: #2773E7;
//         }
//       }
//     }
//   }
// }
</style>
utils/util