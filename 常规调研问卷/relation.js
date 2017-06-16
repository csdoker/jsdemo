/* ���ñ��� */
loopbase = Math.round(Math.random() * 100);
paperid  = Math.random() * 100000000 * 100000000;
/* ��ʾ/������Ŀ */
function displayQuestion(qid,flag)
{	
	var display = 'none';
	if(flag == 1) display = '';

	var obj;
	if(obj = document.getElementById("dl_q_" + qid))
	{	
		if(obj.style.display != display) //
		{
			obj.style.display = display;
			enableQuestion(qid,flag);
		}
	}
	
	if(obj = document.getElementById("tr_" + qid))
	{	
		if(obj.style.display != display) //
		{
		obj.style.display = display;
		enableQuestion(qid,flag);
		}
	}
	
	if(obj = document.getElementById("t_" + qid))
	{
		enableQuestion(qid,flag);
		obj.style.display = display;
		var tblobj = obj.parentNode.parentNode.parentNode;
		if(tblobj.rows)
		{
			var opt_len = question[qid].length;
			for(var i=0;i<opt_len;i++)
			{
				var objtmp = document.getElementById("t_" + qid + "_" + question[qid][i]);
				if(objtmp)
				{
					objtmp.style.display = display;
				}
			}
		}
	}
}

/* ʹ��Ŀ��Ч/��Ч */
function enableQuestion(qid,flag)
{
	var disa = true;
	if(flag == 1) disa = false;
	var obj = document.getElementById("q_" + qid);
	if(obj)
	{
		obj.disabled = disa;
		if(obj.selectedIndex) obj.selectedIndex = 0;
		else obj.value = '';
		
		if(disa)
		{
			if(obj.onchange) obj.onchange();
		}
	}
	obj = document.getElementById("q_" + qid + "_other");
	if(obj)
	{
		obj.disabled = disa;
	}
	
	var funcs = new Array();
	var pattern = new RegExp("[a-zA-Z]+\\([^\\)]*\\);?","ig");	
	var pattern2 = new RegExp("this","i");
	var opt_len = question[qid].length;
	
	for(var i=0;i<opt_len;i++)
	{
		var objtmp = document.getElementById("q_" + qid + "_" + question[qid][i]);
		if(objtmp)
		{
			objtmp.disabled = disa;
			objtmp.checked = false;
		}
	}

	/*
	for(var i=0;i<opt_len;i++)
	{
		if(disa)
		{
			if(objtmp && objtmp.onclick)
			{
				var match_res = objtmp.onclick.toString().match(pattern);
				if (match_res != null && match_res.length > 1)
				{
					for(var j=1;j<match_res.length;j++)
					{
						if (!inArray(match_res[j],funcs))
						{
							//�滻this
							var cmd = match_res[j].replace(pattern2,"objtmp");
							//ִ�к���
							eval(cmd);							
							//��������
							funcs.push(match_res[j]);
						}
					}
				}
			}
		}
	}
	*/
}

/* ��ʾ/���ش� */
function displayAnswer(qid,aid,flag)
{
	var display = 'none';
	if(flag == 1) display = '';
	
	var obj = document.getElementById("q_" + qid + "_" + aid);
	if(obj)
	{
		var pobj = obj.parentNode;
		if(pobj)
		{
			//pobj.style.display = display;
		}
		obj.disabled = !flag;
	}
}

/* ʹ����Ч/��Ч */
function enableAnswer(qid,aid,flag)
{
	var obj = document.getElementById("q_" + qid + "_" + aid);
	if(obj)
	{
		obj.disabled = !flag;
	}
}

/* �ж���ѡ������ */
function countSelected(qid)
{
	var obj;
	var cnt = 0;

	var len = question[qid].length;
	for (var i=0; i<len; i++)
	{
		var id = "q_" + qid + "_" + question[qid][i];
		obj = document.getElementById(id);
		if (obj && obj.checked)
		{
			cnt++;
		}
	}

	return cnt;
}

/* �жϴ��Ƿ�ѡ�� */
function judgeAnswerSelected(qid,aid)
{
	var obj = document.getElementById("q_" + qid + "_" + aid);
	if(obj)
	{
		if(obj.selected || obj.checked) return true;
	}
	
	return false;
}

/* �ж��ı����� */
function judgeTextLength(qid,len)
{
	var obj = document.getElementById("q_"+qid);
	obj.value = obj.value.replace("/(^\s*)|(\s*$)/g", "");
	if(obj.value.length > len)
	{
		if($("dl_q_"+qid) != null) location.href="#dl_q_"+qid;
		else if($("tr_"+qid) != null) location.href="#tr_"+qid;
		else if($("t_"+qid) != null) location.href="#t_"+qid;
		else if($("s_"+qid) != null) location.href="#s_"+qid;
		
		setQuestionAlert(qid);
		alert('�ı����ȳ�������!');
		return false;
	}
	
	return true;
}

/* �ж��ı��Ƿ�Ϊ���� */
function judgeOnlyNumeric(qid,onlyNumeric)
{	
	if(onlyNumeric ==1) {
		var pageid = getPageid();
		var re=/^[0-9]*$/;
		if(inArray(qid,page[pageid])) {
			var obj = document.getElementById("q_"+qid);
			if(obj && re.test(obj.value)==false)
			{
				setQuestionAlert(qid);
				alert('ֻ������������!');
				return false;
			}			
			
		}
	}
	return true;
}

/* �ж϶�ѡ��ѡ�����Ƿ����*/
function judgeMultiLimitMust(qid,count)
{	
	var pageid = getPageid();
	if(inArray(qid,page[pageid])) {
		var obj = document.getElementById("dl_q_"+qid);
		if(obj)
		{	
			var selcnt = countSelected(qid);
			if(selcnt > 0 && selcnt < count) 
			{
				setQuestionAlert(qid);
				alert('�������ѡ'+count+'�');
				return false;
			}
		}			
	}
	return true;
}

/* �ж��ı��Ƿ�Ϊ���� */
function checkOnlyNumeric(qid,onlyNumeric)
{	
	if(onlyNumeric == 1) 
	{
		var   re=/^[0-9]*$/;
		var obj = document.getElementById("q_"+qid);
		var objErr = document.getElementById("q_"+ qid + "_error");
		if(obj && objErr && re.test(obj.value)==false)
		{	
			setQuestionAlert(qid);
			objErr.innerHTML = "<font color='red'>ֻ������������!</font>";
			//obj.focus();
			return false;
		}
		objErr.innerHTML = "";
	}
	return true;
}


/* ��ʾ/���������� */
function displayGroup(gid,flag)
{
	var display = 'none';
	if(flag == 1) display = '';
	
	var obj = document.getElementById("dl_g_"+gid);
	if(obj)
	{
		obj.style.display = display;
		/*	var ques_len = group[gid].length;
		for(var i=0;i<ques_len;i++)
		{
			displayQuestion(group[gid][i],flag);
		}*/
	}
}

/* �ж�ֵ�Ƿ��������� */
function inArray(val,arr)
{
	for(var i=0;i<arr.length;i++)
	{
		if(val == arr[i]) return true;
	}
	return false;
}

/* ���������еı��� */
function setDescValue(id,name,value)
{
	var obj = document.getElementById("n_" + id + "_" + name);
	
	if(obj)
	{
		obj.innerHTML = value;
	}
}

/* �����Ŀ�Ƿ�Ϊ�� */
function checkQuestionEmpty(qid)
{
	var flag = true;
	
	//check display
	var o = null;
	if($("dl_q_"+qid) != null) o = $("dl_q_"+qid);
	else if($("tr_"+qid) != null) o = $("tr_"+qid);
	else if($("t_"+qid) != null) o = $("t_"+qid);
	else if($("s_"+qid) != null) o = $("s_"+qid);

	var hideflag = false;
	while (o)
	{
		if (o.tagName == 'BODY') break;

		if (o.style.display == 'none') hideflag = true;
		o = o.parentNode;
	}
	if (hideflag) return true;
	
	var obj = document.getElementById("q_" + qid);
	if(obj)
	{
		flag = false;
		var otherobj = document.getElementById("q_"+qid+"other");
		if(otherobj != null)
		{
			if(otherobj.style.display == '' && (otherobj.value.Trim() == '' || otherobj.value == '��ѡ��...')) 
			{
				flag = true;
			}
		}
		if(obj.disabled == false && obj.value.Trim() == '')
		{
			flag = true;
		}
	}
	else
	{
		var isset = 0;
		if (question[qid])
		{
			var opt_len = question[qid].length;
			for(var i=0;i<opt_len;i++)
			{
				var objtmp = document.getElementById("q_" + qid + "_" + question[qid][i])
				if (objtmp && objtmp.disabled == false)
				{
					isset = 1;
					if (objtmp.checked || objtmp.selected)
					{
						flag = false;
						break;
					}
				}
			}
		}
		if(isset == 0) flag = false;
	}
	
	if(flag)
	{
		try
		{
			for(i=0;i<=pagecnt;i++)
			{
				if(!page[i]) continue;
				for(j=0;j<page[i].length;j++)
				{
					if(qid == page[i][j]) break;
				}
				if(j<page[i].length) break;
			}
			if(i!=1){
				if(i>pagecnt) goPage(pagecnt);
				else goPage(i);	
			}
			
		}
		catch (ex)
		{
		}
		
		if($("dl_q_"+qid) != null) location.href="#dl_q_"+qid;
		else if($("tr_"+qid) != null) location.href="#tr_"+qid;
		else if($("t_"+qid) != null) location.href="#t_"+qid;
		else if($("s_"+qid) != null) location.href="#s_"+qid;
		
		setQuestionAlert(qid);
		alert('����ĿΪ�ش���!');
		return false;
	}
	else
	{
		return true;
	}
}
function checkQuestion()
{
	var flag = true;
	for(var i=0;i<must.length;i++)
	{
		flag = checkQuestionEmpty(must[i]);
		if (!flag) break;
	}
	return flag;
}

/* ������Ŀ��Ŀ��ʾ */
function setQuestionAlert(qid)
{
	var alt_bgcolor = "#FEC";
	if($("dl_q_"+qid) != null)
	{
		$("dl_q_"+qid).style.backgroundColor = alt_bgcolor;
	}
	else if($("tr_"+qid) != null)
	{
		$("tr_"+qid).style.backgroundColor = alt_bgcolor;
	}
	else if($("t_"+qid) != null)
	{
		var obj = $("t_"+qid);
		obj.style.backgroundColor = alt_bgcolor;
		var sub_len = question[qid].length;
		for(var i=0;i<sub_len;i++)
		{
			var objtmp = document.getElementById("t_" + qid + "_" + question[qid][i]);
			if (objtmp)
			{
				objtmp.style.backgroundColor = alt_bgcolor;
			}
		}
	}
	else if ($("s_"+qid) != null)
	{
		var obj = $("s_"+qid);
		obj.parentNode.style.backgroundColor = alt_bgcolor;
		obj.focus();
	}
}

/* �����Ŀ��Ŀ��ʾ */
function clearQuestionAlert(qid)
{
	if($("dl_q_"+qid) != null)
	{
		$("dl_q_"+qid).style.backgroundColor = "";
	}
	else if($("tr_"+qid) != null)
	{
		$("tr_"+qid).style.backgroundColor = "";
	}
	else if($("t_"+qid) != null)
	{
		var obj = $("t_"+qid);
		obj.style.backgroundColor = "";
		var sub_len = question[qid].length;
		for(var i=0;i<sub_len;i++)
		{
			var objtmp = document.getElementById("t_" + qid + "_" + question[qid][i]);
			if (objtmp)
			{
				objtmp.style.backgroundColor = "";
			}
		}
	}
	else if($("s_"+qid) != null)
	{
		var obj = $("s_"+qid);
		obj.parentNode.style.backgroundColor = "";
	}
}

//��Ŀ��ϵʵ��
/* ����ѡ���� 3 */
function chkSelCount(obj,cnt)
{
	if(obj.checked)
	{
		var pattern = /q_([0-9]+)/i;
		var tmp = pattern.exec(obj.id);
		if(tmp[1] != null) var qid = tmp[1];
		
		var selcnt = countSelected(qid);
		
		if(selcnt > cnt)
		{
			alert('����Ŀ�������ѡ��'+cnt+'��!');
			obj.checked = false;
		}
	}
}


/* ����������Ƿ�ѡ�� 4 */
function chkOtherAnswer(qid,aid,oqid,oaid,flag)
{
	var obj = document.getElementById('q_'+qid+'_'+aid);
	if(obj == null) return ;
	var havesel = false;
	if(flag == 1)
	{
		havesel = true;
	}
	
	var tmp = judgeAnswerSelected(oqid,oaid);
	
	if(tmp != havesel)
	{
		if(obj.selected != null) obj.selected = false;
		if(obj.checked != null) obj.checked = false;
	}
}
/* ����������Ŀȡ��ѡ�� 4 */
function setOtherAnswer(qid,aid,oqid,oaid,flag)
{
	var obj = document.getElementById('q_'+qid+'_'+aid);
	if(obj == null) return ;
	
	var havesel = false;
	if(flag == 1)
	{
		havesel = true;
	}
	
	var oObj = document.getElementById('q_'+oqid+'_'+oaid);
	if(oObj == null) return ;
	
	if((obj.selected != null && obj.selected != havesel) || (obj.checked != null && obj.checked != havesel))
	{
		if(oObj.selected != null) oObj.selected = false;
		if(oObj.checked != null) oObj.checked = false;
	}	
}
/* ����������Ŀ/��Ŀ����ʾ 5 */
function setQuestionDisplay(qid,aid,idstr,flag) 
{	
	var oldflag = flag;
	var tmp = aid.split(',');
	var checked = 0;
	var obj;
	for(var i=0;i<tmp.length;i++)
	{
		obj = document.getElementById('q_'+qid+'_'+tmp[i]);
		if(obj == null) continue;
		if(obj.selected || obj.checked) 
		{
			checked = 1;
			break;
		}
	}

	if(checked != 1)
	{
		flag = (flag == 1)? 0:1;
	}
	
	var ids = idstr.split(',');
	for(var i=0;i<ids.length;i++)
	{
		if(ids[i].Trim() == '') continue;
		if(ids[i].substr(0,1) == 'G')  displayGroup(ids[i].substr(1,ids[i].length),flag);
		if(ids[i].substr(0,1) == 'Q')  displayQuestion(ids[i].substr(1,ids[i].length),flag);
	}
	
	//////////////////// 
	/*
	var index = qid+'_'+aid+'_'+oldflag;
	//alert(index);
	//alert(relation[index]);
	for(var i=0;i<relation[index].length;i=i+2)
	{
		var ids = relation[index][i].split(',');
		for(var j=0;j<ids.length;j++)
		{
			if(ids[j].Trim() == '') continue;
			if(ids[j].substr(0,1) == 'G')  displayGroup(ids[j].substr(1,ids[j].length),relation[index][i+1]);
			if(ids[j].substr(0,1) == 'Q')  displayQuestion(ids[j].substr(1,ids[j].length),relation[index][i+1]);
		}
	}
	*/
	
	////////////////////

	for(var j=0; j<tmp.length; j++)
	{
		var index = qid+'_'+tmp[j]+'_'+oldflag;
		//alert(index);
		//alert(relation[index]);

		for(var i=0;i<relation[index].length;i=i+2)
		{
			var ids = relation[index][i].split(',');
			for(var k=0;k<ids.length;k++)
			{
				if(ids[k].Trim() == '') continue;
				if(ids[k].substr(0,1) == 'G')  displayGroup(ids[k].substr(1,ids[k].length),relation[index][i+1]);
				if(ids[k].substr(0,1) == 'Q')  displayQuestion(ids[k].substr(1,ids[k].length),relation[index][i+1]);
			}
		}
	}
	
}
/* ������������ʾ 6 */
function setAnswerDisplay(qid,aid,oqid,oaid,flag)
{
	var tmp = aid.split(',');

	var checked = 0;
	for(var i=0;i<tmp.length;i++)
	{
		var obj = document.getElementById('q_'+qid+'_'+tmp[i]);
		if(obj == null) return ;
		if(obj.selected || obj.checked) 
		{
			checked = 1;
			break;
		}		
	}
	
	if(checked != 1)
	{
		flag = (flag == 1)? 0:1;
	}		
	
	var tmp1 = oaid.split(',');	
	for(var j=0;j<tmp1.length;j++)
	{
		var obj1 = tmp1[j];
		if(obj1 == null) continue;
		displayAnswer(oqid,obj1,flag);		
	}	
}
/* ����������Ŀ�����еı��� */
function setVariableInDesc(qid,oqidstr,name)
{
	var value = '';
	
	var obj = document.getElementById('q_'+qid);
	if(obj)
	{
		if(obj.selectedIndex != null) 
		{
			if(obj.value != '')	value=obj.options[obj.selectedIndex].text;
			else value = '';
		}
		else value = obj.value;
	}
	else
	{
		var opt_len = question[qid].length;
		for(var i=0;i<opt_len;i++)
		{
			var obj = document.getElementById("q_" + qid + "_" + question[qid][i]);
			var lobj = document.getElementById("l_" + qid + "_" + question[qid][i]);
			if (obj && obj.checked && lobj)
			{
				value += lobj.value + ",";
			}
		}
		if(value.length > 0) value = value.substr(0,value.length-1);
	}
	
	var ids = oqidstr.split(',');
	for(var i=0;i<ids.length;i++)
	{
		setDescValue(ids[i].toLowerCase(),name,value);
	}
}

/* ��ת��ĳҳ */
function goPage(pageNo)
{
	//����ҳ��
	survey_pageid = pageNo;

	var pageobj;
	var btnobj;
	var introobj = document.getElementById("intro");
	var infoobj = document.getElementById("infoContent");
	
	//���ذ�飬ҳ��
	hideInfo(1);
	hideContent(1);
	if(introobj) introobj.style.display = 'none';
	if(infoobj) infoobj.style.display = 'none';
	for(var i=0;i<=pagecnt;i++)
	{
		pageobj = document.getElementById("p_"+i);
		if(pageobj) pageobj.style.display = 'none';
		btnobj = document.getElementById("prev"+i);
		if(btnobj) btnobj.style.display = 'none';
		btnobj = document.getElementById("next"+i);
		if(btnobj) btnobj.style.display = 'none';
	}
	btnobj = document.getElementById("submit1");
	if(btnobj) btnobj.style.display = 'none';
	
	//��ʾ��ǰҳ
	if(pageNo == 0) 
	{
		introobj.style.display = '';
		hideInfo(0);
		btnobj = document.getElementById("next0");
		if(btnobj) btnobj.style.display = '';
	}
	else
	{
		hideContent(0);
		pageobj = document.getElementById("p_"+pageNo);
		if(pageobj)
		{
			btnobj = document.getElementById("prev"+pageNo);
			if(btnobj) btnobj.style.display = '';
			btnobj = document.getElementById("next"+pageNo);
			if(btnobj) btnobj.style.display = '';
			pageobj.style.display = '';
		}
	}
	//��ʾҳ��
	var obj = document.getElementById("next0");
	if(obj) 
	{
		pageNo++;
	}
	else
	{
		if(pageNo == 1) introobj.style.display = '';
	}
	obj = document.getElementById("page");
	if(obj) obj.innerHTML = pageNo;
	
	if(pageNo == pagecnt)
	{
		btnobj = document.getElementById("submit1");
		if(btnobj) btnobj.style.display = '';
	}
	
	window.scrollTo(0,0);
	
	if(pageNo != pagecnt) {
		var skipflag = 1;
		for(j=0;j<page[pageNo].length;j++)
		{
			var qid = page[pageNo][j];
			
			var obj = null;
			if($("dl_q_"+qid) != null) obj = $("dl_q_"+qid);
			else if($("tr_"+qid) != null) obj = $("tr_"+qid);
			else if($("t_"+qid) != null) obj = $("t_"+qid);
			else if($("s_"+qid) != null) obj = $("s_"+qid);
			
			while (obj && obj.style.display != 'none')
            {
	            if (obj.tagName == 'DL') break;
	            obj = obj.parentNode;
            }
			if(obj && obj.style.display != 'none') 
			{
				skipflag = 0;
				break;
			}
		}
		if(skipflag == 1) {
			goPage(pageNo+1);
		}
	}
}

//��ʾ/�����ʾ�����
function hideContent(flag)
{
	var disp = '';
	if(flag == 1)
	{
		disp = 'none';
	}
	
	var obj = document.getElementById('survey');
	if(obj) obj.style.display = disp;
	
	var obj = document.getElementById('surveyContent');
	if(obj) obj.style.display = disp;
}

//��ʾ/���ػ�����Ϣ
function hideInfo(flag)
{
	var disp = '';
	if(flag == 1)
	{
		disp = 'none';
	}
	
	var obj = document.getElementById('info');
	if(obj) obj.style.display = disp;
	
	var obj = document.getElementById('infoContent');
	if(obj) obj.style.display = disp;
}

//��ҳ�ύ��غ���
//����ֵ����
function dealPostResponse()
{
	if (postObj.readyState == 4 || postObj.readyState == 'complete')
	{
		//������ص����ݲ�Ϊ�գ����޸�COOKIEֵ
		if (postObj.responseText.length == 13)
		{
			var pattern = new RegExp("[^0-9]+","i");
			if (!pattern.test(postObj.responseText))
			{
				var obj = document.getElementById("paperid");
				if (obj)
				{
					var c_value = getCookie("haveanswer" + obj.value);
					if (c_value)
					{
						c_value = postObj.responseText + c_value.substr(13);
						var Then = new Date();
						Then.setTime(Then.getTime() + 14400 * 1000);
						document.cookie = "haveanswer" + obj.value + "=" + c_value + ";expires=" + Then.toGMTString() + ";path=/;domain=163.com;";
					}
				}
			}
		}
	}
	//ʹ��ť��Ч
	var i = 0;
	var btnobj;
	while (true)
	{
		btnobj = document.getElementById("next" + i);
		if (btnobj) btnobj.disabled = false;
		else if (i > 0) break;
		i++;
	}
	btnobj = document.getElementById("submit1");
	if (btnobj) btnobj.disabled = false;
}
//����XMLHttpRequest����
function getHttpRequestObj(handle)
{
	var xmlObj = null; 
	if(window.XMLHttpRequest)
	{
		xmlObj = new XMLHttpRequest(); 
	}
	else if(window.ActiveXObject)
	{
		xmlObj = new ActiveXObject("Microsoft.XMLHTTP"); 
	}
	
	xmlObj.onreadystatechange = handle;
	
	return xmlObj;
}
//�ύ����
function postPageAnswer(pageid)
{
	var content = "";
	//ȡ������Ϣ
	var obj;
	obj = document.getElementById("paperid");
	if (!obj) return;
	content += obj.name + "=" + obj.value;
	//ȡ��������
	for(var i=0;i<hidden.length;i++)
	{
		obj = $("q_" + hidden[i]);
		if (obj) content += "&" + obj.name + "=" + encodeURIComponent(encodeURIComponent(obj.value));
	}
	//ȡ��������дҳ��
	for (var i=0;i<=pageid;i++)
	{
		//page[i] = page[pageid];
		if (!page[i])
		{
			continue;
		}
		//ȡ������Ŀ
		for (var j=0;j<page[i].length;j++)
		{
			//��պ������б�
			obj = $("q_" + page[i][j]);
			if (obj)
			{
				if (obj.disabled) continue;
				content += "&" + obj.name + "=" + encodeURIComponent(encodeURIComponent(obj.value));
				continue;
			}
			//��ѡ�Ͷ�ѡ
			for(var k=0;k<question[page[i][j]].length;k++)
			{
				obj = $("q_" + page[i][j] + "_" + question[page[i][j]][k]);
				if (obj && !obj.disabled && obj.checked)
				{
					content += "&" + obj.name + "=" + encodeURIComponent(encodeURIComponent(obj.value));
				}
			}
			//�����ı���
			obj = $("q_" + page[i][j] + "_other");
			if (obj && !obj.disabled && obj.style.display == "")
			{
				content += "&" + obj.name + "=" + encodeURIComponent(encodeURIComponent(obj.value));
			}
		}
	}
	postObj.open("POST","/answer.m",true);
	postObj.setRequestHeader("Content-Type",'application/x-www-form-urlencoded');
	postObj.send(content);
	
	postFlag = 0;
	
	return true;
}
//ȡ��ǰҳ��
function getPageid()
{
	if ((typeof survey_pageid) == 'undefined')
	{
		return null;
	}
	else
	{
		if (survey_pageid == 0 && !page[survey_pageid])
		{
			survey_pageid = 1;
		}
		return survey_pageid;
	}
}
//��鵱ǰҳ�ıش���
function checkPageQuestion(pageid)
{
	for(i=0;i<page[pageid].length;i++)
	{
		if (inArray(page[pageid][i],must))
		{
			if (!checkQuestionEmpty(page[pageid][i])) return false;
		}
	}
	
	return true;
}
//��ҳ����
function dealPage(nextpage)
{
	//���ش���
	var pageid = getPageid();
	if (pageid == null || pageid == '' || pageid >= nextpage)
	{
		pageid = nextpage - 1;
	}
	if (!checkPageQuestion(pageid)) return;
	if (typeof(judgeTextLengths) != 'undefined' && !judgeTextLengths()) return;
    if (typeof(judgeOnlyNumerics) != 'undefined' && !judgeOnlyNumerics()) return;
    if (typeof(judgeMultiLimitMusts) != 'undefined' && !judgeMultiLimitMusts()) return;
	//�ύ����
	if ((typeof preview) == 'undefined')
	{
		postObj = getHttpRequestObj(dealPostResponse);
		if (postObj)
		{
			if (postPageAnswer(pageid))
			{
				//������һҳ��ť��Ч
				var btnobj = document.getElementById("next" + nextpage);
				if (btnobj) btnobj.disabled = true;
				btnobj = document.getElementById("submit1");
				if (btnobj) btnobj.disabled = true;
			}
		}
	}
	
	goPage(nextpage);
	//���ý�����
	var proc = computeProcess(nextpage);
	setProcessBar(proc);
}
//ѡȡ�ı�������������
function selectAllText(obj)
{
	obj.select();
}

function selectTextItem(obj1)
{
		var obj = document.getElementById(obj1);
		if(obj)
		{
			if(obj.selected != null) obj.selected = true;
			if(obj.checked != null) obj.checked = true;	
		}
}

//��ʼ��Request����
var postObj;
var postFlag = 1;
