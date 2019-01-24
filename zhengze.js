// 一
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// 手机号的正则表达式
var phoneNumber = '15270626060xxf';
var req = /^1[34578]\d{9}$/;
var f = phoneNumber.match(req);
console.log(f);