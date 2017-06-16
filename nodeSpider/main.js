// ���� superagent��cheerio
var superagent= require("superagent");
var cheerio=require("cheerio");

// ��½ url ��Ŀ�� url
var  url={
    url:"http://www.zhihu.com/",
    login_url:"http://www.zhihu.com/login/email",
    target_url:"https://www.zhihu.com/collections"
};


// �����������ͷ��������Ϣ
var browserMsg={
    "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
};



var cookie;


// post ������Ϣ�����У�������ǰ������ _xsrf ��Ϣ
var loginMsg=
{
    password:"zhihu0630",
    remember_me:true,
    email:"809648883@qq.com"
};


// ��ȡ _xrsf ֵ
function getXrsf(){

    superagent.get(url.url).end(function(err,res){
        if(!err){
            var $=cheerio.load(res.text);
            loginMsg._xsrf=$('[name=_xsrf]').attr('value');
        }else
            console.dir(err);

    });
}


// ���͵�½���󣬻�ȡ cookie ��Ϣ
function getLoginCookie() {
    //  ���ȣ����� set �����������������в��������������������������Է��������������ش���
    //  send ���������� post ���������ύ�Ĳ���
    //  redirects �������ã����в���Ϊ 0 ��Ϊ�˱������û���½�ɹ��������ҳ������ˢ�£��Ӷ��޷���ȡ cookie
    superagent.post(url.login_url).set(browserMsg).send(loginMsg).redirects(0).end(function (err, response) {
        if (!err) {
            cookie = response.headers["set-cookie"];
            console.dir(cookie);
        } else

            console.dir(err);
    });
}

// ���� cookie ����ȡ target ҳ���ע��Ϣ
// ͨ��������֪����ȡ�� z_c0 �� cookie ���ɣ��� getLoginCookie ��������Ϊһ�� cookie ���飬����������
function getFollower(){
    superagent.get(url.target_url).set("Cookie",cookie).set(browserMsg).end(function(err,response){
        if (err) {
            console.log(err);
        } else {

            var $ = cheerio.load(response.text);

            // �˴���ͬ������ F12 �����߹��ߣ�����ҳ�� Dom �ṹ������ cheerio ģ��ƥ��Ԫ��
            var array = $('#zh-favlist-following-wrap .zm-item');
            console.log(" �ղؼб��� " + " " + " �ղ�����");
            if (array && array.length > 0) {
                array.each(function () {
                    console.log($(this).find('.zm-item-title>a').text() + " " + ($(this).find('.zg-num').text() ? $(this).find('.zg-num').text() : "0"));
                    //$(this).find('.zm-item-title>a').text();
                    //$(this).find('.zg-num').text();

                });
            }

        }
    });
}
getLoginCookie();
//getFollower();