var express = require('express');
var morgan = require('morgan');

var xb = require('./resources/xb');
const sign = require('./resources/xbogus.8.29');
var signature = require('./resources/signature');
var __ac_signature = require('./resources/__ac_signature');
var D = require('./resources/sign96');


var app = express();
app.use(morgan('short'));



// def get_ac_signature(ac_nonce):
//     return _ac_signature_compiler.get_ac_signature(ac_nonce)
// 当对主页发出 GET 请求时，响应“hello world”
app.get('/', function(req, res) {
  res.send('hello world');
});


function base64Decode(encode_data){
    return Buffer.from(encode_data, 'base64').toString('utf-8');
}


app.get('/xb', function(req, res){
    let str_data = base64Decode(req.query.data);
    let data = JSON.parse(str_data);
    let url_para = data.url_para;
    let ua = data.ua;
    // let result = xb.xb_main(url_para, ua, time_now);
    let result = sign.sign(url_para, ua);
    res.send(result);
})


app.get('/signature', function(req, res) {
    let str_data = base64Decode(req.query.data);
    let data = JSON.parse(str_data);

    let url = data.url;
    let ua = data.ua;
    let referer = data.referer;
    let result = signature.get_signature(url, ua, referer);
    res.send(result);
})


app.get('/ac_signature', function(req, res) {
    let nonce = req.query.nonce;
    let result = __ac_signature.get_ac_signature(nonce);
    res.send(result);
})


app.get('/sign96', function(req, res) {
    let md5 = req.query.md5;
    let result = D.D(md5);
    res.send(result);
})




app.listen(8100);