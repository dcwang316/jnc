import moment from 'moment';
import Cookies from 'universal-cookie';

const platformCode = '2000001';

const cookies = new Cookies();
export function getToken(tokenName = 'product_id') {
    return cookies.get(tokenName) || null;
}

export function setToken(tokenName, cookie) {
    cookies.set(tokenName, cookie);
}

export function removeToken(tokenName) {
    cookies.remove(tokenName);
}
export function idGen(code = platformCode) {
    let date = moment().format('YYYYMMDD');
    let num = (Math.random() + '').slice(3, 12);
    return code + date + num;
}

const iframe = document.createElement("iframe");
iframe.setAttribute('style', 'display:none');
document.body.appendChild(iframe);
export function downloadFile(url, params, fileName) {
    let paramsList = Object.entries(params).map(([key, value]) => {
        return `${key}=${value ? value : ''}`;
    });
    iframe.src = `${url}?${paramsList.join('&')}`;
}

export function downloadLoad() {
    iframe.src = 'http://jnc.quduoduo.cc/jnc-manage/jnc/download/word'
}

export function downloadLoadApply() {
    iframe.src = 'http://jnc.quduoduo.cc/jnc-manage/jnc/download/apply'
}

export function getUrlParams(search) {
    let paramsStr = search;
    if (search.indexOf('?') === 0) paramsStr = search.split('?')[1];
    let params = {};
    paramsStr.split('&').forEach(str => {
        let ss = str.split('=');
        params[`${ss[0]}`] = ss[1];
    });
    return params;
}