import $ from 'jquery';
const timeout = 5000;
let ipurl = '';
// const ipurl = '';

if (process.env.NODE_ENV === 'production') {
    ipurl = 'http://jnc.quduoduo.cc/jnc-manage';
}
//异步
export function ajaxAPI(url, params = {}) {
    let param = getAjaxParams(params);
    url = ipurl + url;
    let ajaxObj = $.ajax({
        // timeout,
        type: "POST",
        url,
        data: param
    });
    return ajaxObj;
}

export function GetAPI(url, params = {}) {
    url = ipurl + url;
    let ajaxObj = $.ajax({
        // timeout,
        type: "GET",
        url,
        data: params
    });
    return ajaxObj;
}

//contentType: 'application/json; charset=utf-8'
export function ajaxStringifyAPI(url, params) {
    let param = getAjaxParams(params);
    url = ipurl + url;
    let ajaxObj = $.ajax({
        // timeout,
        type: "POST",
        url,
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        data: param
    });
    return ajaxObj;
}



//上传文件
export function uploadFile(url, formData) {
    url = ipurl + url;
    let ajaxObj = $.ajax({
        // timeout,
        type: "POST",
        url,
        data: formData,
        cache: false,
        processData: false,
        contentType: false
    });
    return ajaxObj;
}

function getAjaxParams(p) {
    //加密逻辑，待补充
    return p;
}
export { getAjaxParams };