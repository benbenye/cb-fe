<template>
    <cb-modal :visible.sync="visible" :modal="modal"></cb-modal>
</template>

<script>
  import {ec} from '../../util/index'
  import {axiosWWW} from '../../util/client-axios'
  import {setCityInfo} from '../../common/js/position'
  import CbModal from '../../components/modal/Modal.vue'
  export default {
    name: 'CbPosition',
    components: ec([
      CbModal
    ]),
    data() {
      return {
        visible: false,
        modal: {
          title: '温馨提示',
          content: '<div style="text-align:center;">' + '<p style="margin-top:15px; margin-bottom:15px;">您当前的地理位置与所在站点不符，<br>是否切换站点？</p></div>',
          button: {
            cancel: '不切换',
            confirm: '切换站点'
          }
        }
      };
    },
    mounted() {
      if (location.search.match('useragent=mobile')) return;

      import('js-cookie').then(e => {
        const Cookie = e;
        const CbAddressCity = Cookie.get('cb_address_city');
        axiosWWW.get('/Index/ajaxGetCityInfo')
          .then(res => {
            if (res.data) {
              if (!CbAddressCity) {
                setCityInfo({...res.data})
                return;
              }
              this.visible = true
              if (+res.data.city_id !== +CbAddressCity) {
                this.visible = true
              }
            }
          })
      })
    },
    methods: {
    }
  };
</script>

<style scoped lang="less" type="text/less">
</style>
