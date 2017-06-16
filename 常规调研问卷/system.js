//==TRIM==
String.prototype.Trim = function()
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
//==��ȡ����==
function $(obj){return document.getElementById(obj)}

//==��ȡ�ʾ�URL����==
/*
	obj:������id
	name:url������
*/
function getUrlPara(obj,name){
	var urlSearch = window.location.search;
	var pattern = new RegExp("[?&]" + name +"=([^&\\s]+)","g");
	var value = pattern.exec(urlSearch);
	if(value != null){
		$(obj).value=value[1];
	}
}

//==��ȡ���ʱ��==
/*
	surveyTime:������id
*/
startTime = 0;
function surveyStart(){
	var start = new Date();
	startTime = start.getTime();
}
function surveyOver(){
	if($("surveyTime")){
		var now = new Date();
		$("surveyTime").value=(now.getTime() - startTime)/1000;
	}
}

//window.onload=surveyStart;
surveyStart();

//==cookie���ã���ȡ==
/*
	name:cookieֵ��
	value:����cookieֵ����Ӧcookieֵ
	expires:cookieֵ�����ڣ���λ�Ƿ��ӣ�Ĭ��60����
	path:cookie·����Ĭ���ڸ�ҳ���Ŀ¼��
	domain:����������
*/
function setCookie(name,value,expires,path,domain){
	var cookie=""
	if(name && value){cookie += name + "=" + escape(value) + ";"}
	if(expires){cookie +="expires=" + (new Date((new Date()).getTime() + expires * 60000)).toGMTString() + ";"}
	if(path){cookie += "path=" + path + ";"}
	if(domain){cookie += "domain=" + domain + ";"}
	if(cookie!=null && cookie!=""){document.cookie = cookie}
}
/*
	name:��ȡcookieֵ��
	getCookie(name):����ֵ
*/
function getCookie(name){
	var cookie =  new String(document.cookie);
	var pattern = new RegExp(name + "=([^;\\s]+)");
	var value = pattern.exec(cookie);
	if(value!=null){return value[1];}
	else {return null}
}