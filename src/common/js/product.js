/**
 * Created by bby on 18/2/11.
 */
import {axiosAPI, axiosWWW} from '../../util/client-axios'
import Cookie from 'js-cookie'

export function addCart({pid, count = 1, sku_code, trackid = 0, source = 0, site_id = 1}) {
  // return axiosAPI({
    return axiosWWW({
    url: '/Cart/addToCart',
    params: {
      sesesion_id: Cookie.get('cb_csd'),
      product_id: pid,
      site_id: site_id,
      sku_num: count,
      sku_code: sku_code,
      trackid: trackid,
      source: source
    }
  })
}