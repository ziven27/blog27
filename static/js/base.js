//我的代码
var _27 = _27 || {};
//解析url参数
_27.getQueryString = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r && r != null) {
		return unescape(r[2]);
	}
	return false;
};
//js 的ajax请求

_27.jsLoad=function(url,afterLoad){
	var xmlhttp;

	function loadXMLDoc(url) {
		xmlhttp = null;
		if (window.XMLHttpRequest) { // code for IE7, Firefox, Mozilla, etc.
			xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) { // code for IE5, IE6
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (xmlhttp != null) {
			xmlhttp.onreadystatechange = onResponse;
			xmlhttp.open("GET", url, true);
			xmlhttp.send(null);
		} else {
			alert("Your browser does not support XMLHTTP.");
		}
	}

	function onResponse() {
		if (xmlhttp.readyState != 4) return;
		if (xmlhttp.status != 200) {
			alert("Problem retrieving XML data");
			return;
		}
		afterLoad(xmlhttp);
	}

	loadXMLDoc(url);
};


//百度统计
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?c2751207a7ac225c405e77ec498f1273";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();