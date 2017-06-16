var fs = require('fs');
var async = require('async');
var request = require('request');

var url = "https://www.zhihu.com/api/v4/members/jin-xi-xi-35/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=0&limit=20";
var url1 = "https://www.zhihu.com/api/v4/members/ni-ba-tie-ren/followees?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&amp;offset=0&amp;limit=20";
 
var zurl = "https://www.zhihu.com/api/v4/members/demouser/followees?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&amp;offset=0&amp;limit=20";
 
//request�����options
var options = {
    url: url,
    headers: {
        "authorization": "Bearer Mi4wQUFCQTZFc3FBQUFBTUVCMnAtYWhDU1lBQUFCZ0FsVk5TdFpBV1FDZl9FRXFJMlFoa3RJMVV2enQ3N2J6N2U1dTdn|1494832046|e8add976cfdc4762ba6f093fb70d625112098647",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
    }
}

//��ȡ�û�����
function getDataList(url) {
    options.url = url;
	console.log(url);
    request.get(options, function(error, response, body) {
		console.log(response);
        if(!error && response.statusCode == 200) {
            var response = JSON.parse(response.body);
			console.log(response);
            var zhList = response.data;
            zhList.forEach(function(item) {
                //item.gender == 0 �Ա��ж�
                if(item.gender == 0) {
                    console.log(`����ץȡ${item.avatar_url}`)
                    users.push({
                        "name": item.name,
                        "img": item.avatar_url.replace("_is", ""),
                        "url_token": item.url_token
                    })
                }
            })
            //is_end��ǰ�û��Ĺ�ע�û��Ƿ����һҳ
            if(response.paging.is_end) {
                //�����ж�ץȡ������
                if(users.length >= 1000) {
                    console.log(`ץȡ���`);
                    downLoadContent(JSON.stringify(users));
                    return;
                } else {
                    console.log(`��${i+1}���û�������`);
                    getDataList(zurl.replace("demouser", users[i].url_token))
                    i++;
                }
            } else {
                if(users.length >= 1000) {
                    console.log(`ץȡ���`);
                    downLoadContent(JSON.stringify(users));
                    return;
                }
                getDataList(response.paging.next);
            }
        }
    })
}

//�����������ص�data.js
function downLoadContent(cont) {
    fs.appendFile('./' + 'data.js', "module.exports =" + cont, 'utf-8', function(err) {
        if(err) {
            console.log(err);
        } else
            console.log('success');
    });
}


//����ʶ��API
var eyeUrl = "http://api.eyekey.com/face/Check/checking";
var options = {
    "app_id": "f89ae61fd63d4a63842277e9144a6bd2",
    "app_key": "af1cd33549c54b27ae24aeb041865da2",
    "url": "https://pic4.zhimg.com/43fda2d268bd17c561ab94d3cb8c80eb.jpg"
}
function face(item) {
    options.url = item.img;
    request.post({
        url: eyeUrl,
        form: options
    }, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            try {
                if(data.face[0].attribute.gender == 'Female') {//�ж�����ͷ��
                    console.log(`��������${item.img}`);
                    downLoadImg(item)
                }
            } catch(e) {
                console.log(`��֤ʧ��${item.img}~`);
            }
        }
    })
}

//����ͼƬ
function downLoadImg(image) {
    request.head(image.img, function(err, res, body) {
        if(err) {
            console.log(err);
        }
    });
    request(image.img).pipe(fs.createWriteStream('./image/' + image.name + Date.now() + '.' + image.img.substring(image.img.lastIndexOf(".") + 1, image.img.length)));
}

//��ʼ����
function startDownLoad(imgdata){
    //���Ʋ�����,��5������
    async.eachLimit(imgdata, 3, function (item, callback) {
        face(item);
        callback();
    }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('success!');
        }
    });
}

//�������
getDataList(url) //#��ȡ���ݵ����,�����ݱ��浽�ļ���
//startDownLoad(imgdata) //#����ͼƬ���ݵ����,�������ó�����������