import Cookie from 'js-cookie'

export const setCityInfo = ({site_id = 4, city_id, province_id, name}) => {
  const domain = '.chunbo.com';
  const dateHistory = 365;
  const option = {
    expires: dateHistory,
    path: "/",
    // domain: domain
  }

  Cookie.set('cb_site_id', site_id, option);
  Cookie.set('cb_province_id', province_id, option);
  Cookie.set('cb_site_name', name, option);
  Cookie.set('cb_address_city', city_id, option);
  Cookie.remove('cb_address_district');
  Cookie.remove('cb_address_street');
  Cookie.remove('cb_address_text');
}