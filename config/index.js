/**
 * Created by bby on 17/12/1.
 */

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/dist/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/getCookBook': {
        target: 'https://easy-mock.com/mock/5a2de4e5e9ee5f7c09d8e114/cb/cookbook',
        changeOrigin: true,
        pathRewrite: {
          // '^/api/tuan/address/\.+$': ''
          '^/api/getCookBook': ''
        }
      },
      '/api/home': {
        target: 'http://api.chunbo.com/home/newindex',
        changeOrigin: true,
        pathRewrite: {
          '^/api/home': ''
        }
      },
      '/api': {
        target: 'https://easy-mock.com/mock/5a712d21eaec52606d71e4e7/cb-fe',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/www': {
        target: 'http://www.chunbo.com',
        changeOrigin: true,
        headers: {
          Referer: 'http://www.chunbo.com/',
          Origin: 'http://www.chunbo.com/',
          Cookie: 'cb_lang=zh-cn; PHPSESSID=kq3ujosgi44tu4clohi64gp181; cb_site_id=1; cb_address_city=110100; cb_province_id=110000; cb_csd=kq3ujosgi44tu4clohi64gp181; cb_cba_device_id=a36dcdf36ff05d80566bf4f6fab18661; Hm_lvt_e0f0cb1367ed4098be9f5fae340f3a0f=1517229150; Hm_lpvt_e0f0cb1367ed4098be9f5fae340f3a0f=1517235047'
        },
        pathRewrite: {
          '^/www': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

