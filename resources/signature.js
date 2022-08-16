/*
*  canvas幕布目前写死, 如有限制可修改
* */
function set_c_19() {
    /* canvas幕布*/
    var img_b64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAACN0lEQVRIS8WWP0hWYRTGf98S5NBSm5sObgWt6RJR5uLQIGRC1OAWNEspOAWCIIR+4GYFDg1NEoEQ5tIghFNbBIlDLi5Bi/LIOXA8vu/1Q76v7nLvff+c9zzPc55zb4vT11F612vLxjTnz4Vl/3xoCHhaSsgTzQlncL0EcxV4C9xLtLSB58Af4AyAEvu+Pyf7P9S4BdwG5i2pogIl1mMJRUJ6qUCux8vAIvAeeABM24J2idm8ueaBCHYSmDJ2XgLPgO+Axt8AGnPmFF/srQM3PJFQGiUzKc5AIcYZDzQpoMAlH0jaLyGRHeAmsAI8BN4BrwIor28B2gac3S2r+wxAyY8YwL7kjaICnTCe2Rc7m3ay6rQfOAQ+AL+BpQAgAnZlYpIyqC4HKpBRPQfYaGKBcLbjs7fVOOcHaU4HvQZmgfvADHAtAfASiqAygBeAgGr8oNKgiwA82Xj30inNzVlwv+tQHb4MXDdAOigmqy2+zhMsKRCZjn7x8Ucqp2jiWhvNCkRCZNDPwKoNemI/gDWr8Qjgp3UTdZGPgeEagAzUz3bf/DqvFTb1e83tA6PAtwBAho7JRQBaNgZ8NaXOU0BqylvyQb4Ud66mQKce+ATcDZHdoLFt1hQ4KQHb26SAPDVhbblRgfwLEdkvzYn9J8BGxWTdGs7fDI87LGWyAtmosev43BVrkT7XrUQvFKfkgUvA30o0Sb0A6KfKO8+FDu7WphKAceCxfYD27HswCNwBdq2L9LpsOsZ3DLbTqh7TDN15AAAAAElFTkSuQmCC";
    var start_val = 3735928559;
    for (let i = 0; i < 32; i++) {

        var img_b64_length = img_b64.length;
        var charcode_index = start_val % img_b64_length;
        var charcode_value = img_b64.charCodeAt(charcode_index);
        start_val *= 65599;
        start_val = (start_val + charcode_value) >>> 0;
    }
    return start_val
}

var c_7 = 0;

function set_c_10(time_stamp, url) {

    var start_value = 0;
    var str_time_stamp = time_stamp.toString();
    for (let i = 0; i < str_time_stamp.length; i++) {
        time_value = str_time_stamp[i];
        char_code = time_value.charCodeAt();
        start_value = ((start_value ^ char_code) * 65599) >>> 0;
    }

    let last_value = start_value;

    for (let j = 0; j < url.length; j++) {
        url_value = url[j];
        charcode_url = url_value.charCodeAt();
        last_value = (((last_value ^ charcode_url) * 65599) >>> 0)

    }
    c_7 = last_value % 65521;
    var value = ((((last_value % 65521) * 65521) ^ time_stamp) >>> 0).toString(2);

    return value.toString()

}

function set_c_15(start_value) {

    var last_value = 0;
    start_value_to_string = start_value.toString();
    for (let i = 0; i < start_value_to_string.length; i++) {
        last_value = ((start_value_to_string.charCodeAt(i) ^ last_value) * 65599) >>> 0;

    }
    return last_value

}

function set_c_112(c_10) {
    let add_val = "0";
    let default_val = "";
    c_10_length = c_10.length;
    for (; c_10_length < 32;) {
        default_val += add_val;
        c_10_length += 1
    }

    return default_val
}


// var c6 = 35391523008271;
// var c15 = 1483135855;

function set_signature_1(c_6) {
    let first_val = c_6 >> 2;
    let start_value = 24;
    let value_str = "";
    for (; start_value >= 0;) {
        second_val = first_val >> start_value;
        thred_val = second_val & 63;
        if (thred_val < 26) {
            thred_val += 65;
        } else if (thred_val < 52) {
            thred_val += 71;

        } else if (thred_val < 62) {
            thred_val -= 4;
        }
        value_str += String.fromCharCode(thred_val);
        start_value -= 6
    }
    return value_str

}

function set_signature_2(c_6) {

    let one = ((c_6 / 4294967296) >>> 0) >>> 4;
    let two = c_6 << 28;
    let start_value = 24;
    let first_val = one | two;
    let value_str = "";
    for (; start_value >= 0;) {
        second_val = first_val >> start_value;
        thred_val = second_val & 63;
        if (thred_val < 26) {
            thred_val += 65;
        } else if (thred_val < 52) {
            thred_val += 71;

        } else if (thred_val < 62) {
            thred_val -= 4;
        }
        value_str += String.fromCharCode(thred_val);
        start_value -= 6
    }
    return value_str

}

function set_signature_3(c_6, c_19) {

    let one = c_19 ^ c_6;
    let aaa = ((c_6 / 4294967296) >>> 0) << 26;
    let two = one >>> 6;
    let start_value = 24;
    let first_val = aaa | two;
    let value_str = "";
    for (; start_value >= 0;) {
        second_val = first_val >> start_value;
        thred_val = second_val & 63;
        if (thred_val < 26) {
            thred_val += 65;
        } else if (thred_val < 52) {
            thred_val += 71;

        } else if (thred_val < 62) {
            thred_val -= 4;
        }
        value_str += String.fromCharCode(thred_val);
        start_value -= 6
    }

    var end_code = one & 63;
    if (end_code < 26) {
        end_code += 65;
    } else if (end_code < 52) {
        end_code += 71;

    } else if (end_code < 62) {
        end_code -= 4;
    }
    var end_code_str = String.fromCharCode(end_code);
    value_str += end_code_str;
    return value_str


}

function set_user_agent(c_15, use_agent) {
    // c_15
    let start_value = c_15;
    for (let j = 0; j < use_agent.length; j++) {
        use_agent_val = use_agent[j];
        charcode_url = use_agent_val.charCodeAt();
        start_value = (((start_value ^ charcode_url) * 65599) >>> 0);
    }
    return start_value
}


function set_params(c_15, params) {
    // c_15
    let start_value = c_15;
    for (let j = 0; j < params.length; j++) {
        params_val = params[j];
        charcode_url = params_val.charCodeAt();
        start_value = (((start_value ^ charcode_url) * 65599) >>> 0)
    }
    return start_value
}

function set_signature_4(c6, c15, use_agent, params) {
    ua_val = set_user_agent(c15, use_agent);
    ua_change_val = (ua_val % 65521) << 16;
    params_val = set_params(c15, params);
    params_change_val = params_val % 65521;
    values = params_change_val | ua_change_val;
    let first_val = values >> 2;
    let start_value = 24;
    let value_str = "";
    for (; start_value >= 0;) {
        second_val = first_val >> start_value;
        thred_val = second_val & 63;
        if (thred_val < 26) {
            thred_val += 65;
        } else if (thred_val < 52) {
            thred_val += 71;

        } else if (thred_val < 62) {
            thred_val -= 4;
        }
        value_str += String.fromCharCode(thred_val);
        start_value -= 6
    }

    var one = 1 << 8;
    var two = 2 << 4;
    var three = one | two;
    var four = c6 ^ three;
    var five = four >>> 4;
    var six = values << 28;
    var seven = five | six;
    value_str_2 = "";
    var seven_start_value = 24;
    for (; seven_start_value >= 0;) {
        seven_val = seven >> seven_start_value;
        eight_val = seven_val & 63;
        if (eight_val < 26) {
            eight_val += 65;
        } else if (eight_val < 52) {
            eight_val += 71;

        } else if (eight_val < 62) {
            eight_val -= 4;
        }
        value_str_2 += String.fromCharCode(eight_val);
        seven_start_value -= 6
    }

    return value_str + value_str_2

}

function set_signature_5(c_7) {

    let start_value = 24;
    let value_str = "";
    for (; start_value >= 0;) {
        second_val = c_7 >> start_value;
        thred_val = second_val & 63;
        if (thred_val < 26) {
            thred_val += 65;
        } else if (thred_val < 52) {
            thred_val += 71;

        } else if (thred_val < 62) {
            thred_val -= 4;
        }
        value_str += String.fromCharCode(thred_val);
        start_value -= 6
    }
    return value_str

}

function set_signature_6(signature) {
    var start_value = 0;
    for (let i = 0; i < signature.length; i++) {
        time_value = signature[i];
        char_code = time_value.charCodeAt();
        start_value = (((start_value * 65599) + char_code) >>> 0);
    }
    tostring_16 = start_value.toString(16);
    return tostring_16.substr(tostring_16.length - 2);
}

function sorted_params(url) {

    var str_params = url.split("?")[1];
    var str_url = url.split("?")[0];
    var params_object = {};
    var params_array = str_params.split("&");
    for (let i = 0; i < params_array.length; i++) {
        params_object[params_array[i].split("=")[0]] = params_array[i].split("=")[1]
    }
    var key_array = [];
    for (i in params_object) {
        key_array.push(i)
    }
    var sorted_key_array = key_array.sort();

    var sort_string = "";

    sorted_key_array.forEach(
        function (key) {
            sort_string += key + "=" + params_object[key] + "&"
        }
    );
    pathname = str_url.split("https://www.douyin.com")[1];
    sort_string += "pathname" + "=" + pathname + "&tt_webid=&uuid=";
    return sort_string
}


function get_signature(url, useragent, referer) {
    var c_8 = 65521;
    // 时间戳
    var referer_str = referer.split("https://")[1];
    var params = sorted_params(url);
    var timestamp = parseInt(new Date().getTime().toString().substr(0, 10));
    // var c_9 = timestamp;
    var c_10 = set_c_10(timestamp, referer_str);
    // c10 c11 补0 位数
    var c_112 = set_c_112(c_10);
    var c_11 = c_112 + c_10;
    var c_12 = "0000";
    var c_13 = "00000011";
    var c_14 = "10";
    var c_6 = parseInt((c_14 + c_13 + c_12 + c_11), 2);
    var c_15 = set_c_15(c_6);
    // var c_17 = "aid=6383&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F91.0.4472.124+Safari%2F537.36&channel=channel_pc_web&cookie_enabled=true&count=10&device_platform=webapp&screen_height=1080&screen_width=1920&tag_id=&version_code=160100&version_name=16.1.0&pathname=/aweme/v1/web/channel/feed/&tt_webid=&uuid=";
    // var user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    var c_19 = set_c_19();
    s1 = set_signature_1(c_6);
    s2 = set_signature_2(c_6);
    s3 = set_signature_3(c_6, c_19);
    s4 = set_signature_4(c_6, c_15, useragent, params);
    s5 = set_signature_5(c_7);

    // 可改 00f01/00901 ...
    var default_start = "_02B4Z6wo00f01";
    sign = default_start + s1 + s2 + s3 + s4 + s5;
    sign = sign.replace(">", "-");
    sign = sign.replace("?", ".");
    var last_val = set_signature_6(sign);

    signature = sign + last_val;
    return signature.replace(">", "-").replace("?", '.')
}


// var url = 'www.douyin.com/channel/300201';
// var params = "aid=6383&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F91.0.4472.124+Safari%2F537.36&channel=channel_pc_web&cookie_enabled=true&count=10&device_platform=webapp&screen_height=1080&screen_width=1920&tag_id=300201&version_code=160100&version_name=16.1.0&pathname=/aweme/v1/web/channel/feed/&tt_webid=&uuid=";
// var useragent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
// var timestamp = 1625806217;
// console.log(get_signature(url, params, useragent, timestamp));

//var urls = "https://www.douyin.com/aweme/v1/web/channel/feed/?device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id=300203&count=10&version_code=160100&version_name=16.1.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F91.0.4472.124+Safari%2F537.36&browser_online=true";
var urls = "https://www.douyin.com/aweme/v1/web/comment/list/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7066404118285274376&cursor=20&count=5&item_type=0&rcFT=AALPPxGNA&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1536&screen_height=864&browser_language=en-US&browser_platform=Win32&browser_name=Chrome&browser_version=101.0.4951.54&browser_online=true&engine_name=Blink&engine_version=101.0.4951.54&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=200&webid=7094914171221657092"
var useragent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
var referer  = "https://www.douyin.com/video/7066404118285274376";
// console.log(get_signature(urls, useragent, referer));
module.exports = {
    'get_signature': get_signature
}