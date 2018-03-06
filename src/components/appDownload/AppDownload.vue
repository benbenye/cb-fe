<template>
  <div id="new-download-app" class="download-app" v-if="isShowAppDownload">
    <div id="new-download-openapp" class="open-app" @click="openApp.clickOpen()"></div>
    <span id="new-download-app-close" class="close-app" @click="closeAppDownload()"></span>
  </div>
</template>

<script>
  import {ec} from '../../util/index';
  import {axiosWWW} from '../../util/client-axios';
  export default {
    name: 'AppDownload',
    components: ec([]),
    props: {
      isShowAppDownload: {
        type: Boolean,
        required: true
      },
      productId: {}
    },
    data() {
      return {
        useMobLink: false,
        regPathProduct: /product/i,
        regPathAct: /act/i,
        regPathMember: /member/i,
        openApp: {},
        openAppOption: {},
        apkVersion: 'ChunBoMall_3.8.0.apk'
      };
    },
    created() {
      this.$store.commit('SET_ISSHOWAPPDOWNLOAD', this.isShowAppDownload)
    },
    mounted() {

      Promise.all([
        import('../../util/index'),
        import('./AppDownload'),
        import('js-cookie'),
        axiosWWW.get('/app/printAppVersion')
      ])
        .then(res => {
          const ua = res[0].UA();
          const OpenApp = res[1].default;
          const Cookie = res[2];
          this.apkVersion = res[3].data;

          const createOpenApp = (isRemoveRedirectUrl) => {
            this.getOpenAppOption(Cookie)
            if (isRemoveRedirectUrl) {
              delete this.openAppOption.inteneUrlParams.redirect_url
            }
            if (!this.openAppOption.intentUrlPage) {
              this.$emit('update:isShowAppDownload', false)
              return;
            }
            this.openApp = new OpenApp(this.openAppOption);
            this.openApp.open()
          }

          if (ua.isWX && ua.isAndroid) {
            const script = document.createElement('script')
            script.type = 'text\/javascript';
            script.onerror = function (err) {
              console.warn(`moblink: 加载出错${err.target.src}`)
            }
            script.onload = function () {
              createOpenApp(true);
            }
            script.src = 'http://f.moblink.mob.com/v2_0_1/moblink.js?appkey=1e2266274a360&v=5.0.1';
            document.head.appendChild(script)
          } else {
            createOpenApp();
          }
        })
    },
    methods: {
      closeAppDownload: function () {
        this.$emit('update:isShowAppDownload', false)
      },
      getOpenAppOption: function (Cookie) {
        const option = {openAppBtnId: '#new-download-openapp', apkVersion: this.apkVersion};
        if (location.pathname.match(this.regPathProduct)) {
          option.intentUrlPage = 1;
          option.path = '/chunbo/SingleCommodityActivity';
          option.inteneUrlParams = {
            siteId: Cookie.get('cb_site_id') || 1,
            siteName: Cookie.get('cb_site_name') || '北京',
            productId: this.productId,
//                redirect_url: encodeURIComponent(location.href),//防微信ios唤起的重定向
            redirect_url: encodeURIComponent(location.href.replace(/\d{3}\.\d{2}\.\d{1,3}\.\d{1,3}\:8080/, 'www.chunbo.com')),//防微信ios唤起的重定向
            from: location.search.indexOf('src') > -1 ? location.search.substring(1).split('&').find(e => e.indexOf('src=') > -1).split('=')[1] : ''
          }
        }
        if (location.pathname.match(this.regPathAct)) {
          option.intentUrlPage = 2;
          option.path = '/chunbo/SpecialActivity';
          option.inteneUrlParams = {
            siteId: Cookie.get('cb_site_id') || 1,
            siteName: Cookie.get('cb_site_name') || '北京',
            url: location.href.split('#')[0],
//                redirect_url: encodeURIComponent(location.href),
            redirect_url: encodeURIComponent(location.href.replace(/\d{3}\.\d{2}\.\d{1,3}\.\d{1,3}\:8080/, 'www.chunbo.com')),//防微信ios唤起的重定向
            ware_id: location.search.indexOf('ware_id') > -1 ? location.search.substring(1).split('&').find(e => e.indexOf('ware_id=') > -1).split('=')[1] : ''
          }
        }
        if (location.pathname.match(this.regPathMember)) {
          option.intentUrlPage = 4;
        }
        if (location.pathname === '/' || (location.pathname === '/index' && location.search !== '?select_city=1&src=index-top-selectcity')) {
          option.intentUrlPage = 3;
        }
        this.openAppOption = option;
      }
    },
    watch: {
      isShowAppDownload: function () {
        this.$store.commit('SET_ISSHOWAPPDOWNLOAD', this.isShowAppDownload)
      }
    }
  };
</script>

<style scoped lang="less" type="text/less">

  .download-app {
    position: relative;
    height: .5rem;
    background-color: #3a3a3a;
    background-image: url(https://s0.chunboimg.com/group1/M00/20/D0/Cv4JrlovdzqAUrWsAAA5HDjhAMs429.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .open-app {
      position: absolute;
      width: 1rem;
      height: 100%;
      top: 0;
      right: 0;
    }
    .close-app {
      position: absolute;
      width: .35rem;
      top: 0;
      left: 0;
      bottom: 0;
    }
  }
</style>
