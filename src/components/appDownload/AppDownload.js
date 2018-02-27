/**
 * Created by bby on 18/2/6.
 */
import Cookie from 'js-cookie';
import {axiosWWW} from '../../util/client-axios';
const ua = require('../../util/index').UA();
// intentUrlPage 首页3   专题页2   单品页1 我的春播4
const OpenApp = function (option) {
  if (!option || !option.intentUrlPage) {
    console.warn('唤起APP必须传intentUrlPage')
  }
  this.params = Object.assign({
    isAutoOpenApp: location.href.indexOf('app=1') >= 0,
    AndroidStartUp: 'chunbo://chunbo/startApp',
    IOSStartUp: 'https://secureweb.chunbo.com',
    intentUrl: 'chunbo://chunbo/startApp',
    downloadIFrameId: 'downloadApp_loadIFrame',
    downloadIOS: 'itms-apps://itunes.apple.com/us/app/chun-bo/id967139095?l=zh&ls=1&mt=8',
    downloadAndroid: `//static.chunboimg.com/app/ChunBoMall_3.7.2.apk`,
    safariVersion: this.getSafariVersion(),
    timerAry: [],
    flag: false
  }, option);
};

OpenApp.prototype.getSchemaUrlWithParams = function (isIOSUniversal) {
  let S = this.params.inteneUrlParams;
  let ParamsStr = '';
  if (S) {
    ParamsStr = Object.keys(S).map(e => `${e}=${S[e]}`).join('&');
    ParamsStr && (ParamsStr = `&${ParamsStr}`)
  }
  return `${isIOSUniversal ? this.params.IOSStartUp : this.params.intentUrl}?page=${this.params.intentUrlPage}${ParamsStr}`;

}

OpenApp.prototype.tryOpen = function (isFailTryOpen) {
  let schemaUrl = this.getSchemaUrlWithParams()
  console.log(schemaUrl)
  let openUrl = null;
  // 只处理非微信浏览器
  if (ua.isIOS) {
    openUrl = this.params.downloadIOS;
  } else {
    openUrl = this.params.downloadAndroid;
  }
  if ((ua.isSafari && this.params.safariVersion >= 9)) {
    this.params.timerAry.push(setTimeout(() => {
      const U = document.createElement('a');
      U.setAttribute('href', schemaUrl);
      U.style.display = 'none';
      document.body.appendChild(U);
      const E = document.createEvent('HTMLEvents');
      E.initEvent('click', false, false);
      U.dispatchEvent(E);
    }, 0));
  } else {
    document.querySelector(`#${this.params.downloadIFrameId}`).src = schemaUrl;
  }
  const now = Date.now();
  this.params.timerAry.push(setTimeout(() => {
    if (isFailTryOpen) {
      this.params.timerAry.push(setTimeout(() => this.openFailTryOpen(now, openUrl), 1500))
    }
  }, 100))
}

OpenApp.prototype.openFailTryOpen = function (time, url) {
  const now = Date.now();
  if (time && now - time < 1500 + 200) {
    location.href = url;
  }
}

OpenApp.prototype.createIFrame = function () {
  if (!this.flag) {
    const IFrame = document.createElement('iframe');
    IFrame.id = this.params.downloadIFrameId;
    document.body.appendChild(IFrame);
    IFrame.style.display = 'none';
    IFrame.style.width = '0';
    IFrame.style.height = '0';
    this.flag = true;
  }
}

OpenApp.prototype.autoOpen = function () {
  if (this.params.openAppBtnId) {
    this.beforeOpen(false);
  }
}

OpenApp.prototype.clickOpen = function () {
  if (this.params.openAppBtnId) {
    this.beforeOpen(true);
  }
}

OpenApp.prototype.getSafariVersion = function () {
  let safariVersion = 0;
  ua.isSafari && (safariVersion = ua.ua.match(/Version\/([\d\.]+)/));
  try {
    safariVersion = parseFloat(safariVersion[1], 10);
  } catch (e) {
  }
  return safariVersion;
}

OpenApp.prototype.openWithMobLink = function () {
  MobLink({
    el: this.params.openAppBtnId,
    path: this.params.path,
    params: {
      uri: this.getSchemaUrlWithParams()
    }
  })
}
OpenApp.prototype.openWithUniversal = function () {
  window.location.href = this.getSchemaUrlWithParams(true);
  const loadDateTime = Date.now();
  this.timerAry.push(setTimeout(function () {
    const timeOutDateTime = Date.now();
    if (timeOutDateTime - loadDateTime < 1000) {
      window.location.href = this.params.downloadIOS;
    }
  }, 25));
}

OpenApp.prototype.beforeOpen = function (isFailTryOpen) {
  if (ua.isWX) {
    if (!ua.isAndroid) {
      console.log('use universal')
      this.openWithUniversal()
    }
  } else {
    console.log('use iframe')
    this.createIFrame();
    this.tryOpen(isFailTryOpen)
  }
}

OpenApp.prototype.open = function () {
  if (this.params.isAutoOpenApp) {
    this.autoOpen()
  }

  if (ua.isWX && ua.isAndroid) {
    //moblink 直接初始化即可
    this.openWithMobLink();
  }
}

export default OpenApp;
