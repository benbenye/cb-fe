/**
 * Created by bby on 18/3/22.
 */
const http = require("http");
const assert = require("assert");
const log = require("./log");
const queryString = require('querystring')
/** 反向代理中间件 */
module.exports = function reverseProxy(options) {
  assert(Array.isArray(options.servers), "options.servers 必须是数组");
  assert(options.servers.length > 0, "options.servers 的长度必须大于 0");

  // 解析服务器地址，生成 hostname 和 port
  const servers = options.servers.map(str => {
    return { hostname: str, port: "80" };
  });
  console.log(servers)

  // 获取一个后端服务器，顺序循环
  let ti = 0;
  function getTarget() {
    const t = servers[ti];
    ti++;
    if (ti >= servers.length) {
      ti = 0;
    }
    return t;
  }

  // 生成监听 error 事件函数，出错时响应 500
  function bindError(req, res, id) {
    return function(err) {
      const msg = String(err.stack || err);
      log("[%s] 发生错误: %s", id, msg);
      if (!res.headersSent) {
        res.writeHead(500, { "content-type": "text/plain" });
      }
      res.end(msg);
    };
  }

  return function proxy(req, res) {
    // 生成代理请求信息
    const target = getTarget();
    const info = {
      ...target,
      method: 'POST',//req.method,
      path: req.url,
      // headers: req.headers,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;',
        'Content-Length': Buffer.byteLength(queryString.stringify({
          'session_id': '9494qvn3pqui8ve95aio7q1ek7'
        })),
        'HTTP_SESSIONID': '9494qvn3pqui8ve95aio7q1ek7',
        'sessionid': '9494qvn3pqui8ve95aio7q1ek7'
      }
    };

    const id = `${req.method} ${req.url} => ${target.hostname}:${target.port}`;
    log("[%s] 代理请求", id);

    // 发送代理请求
    const req2 = http.request(info, res2 => {
      res2.on("error", bindError(req, res, id));
      log("[%s] 响应: %s", id, res2.statusCode);
      res2.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res2.on('end', () => {
        console.log('No more data in response.');
      });
      res.writeHead(res2.statusCode, res2.headers);
      res2.pipe(res);
    });
    req2.write(queryString.stringify({
      'session_id': '9494qvn3pqui8ve95aio7q1ek7'
    }))
    req.pipe(req2);
    req2.on("error", bindError(req, res, id));
  };
};
