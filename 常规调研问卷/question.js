/*�ж�'����'ѡ���Ƿ�ѡ��*/
function chkOtherAns(objname,othername)
{
	var obj = document.getElementById(objname);
	if(obj == null)
	{
		return ;
	}
	var otherobj = document.getElementById(othername);
	if(otherobj)
	{
		if(obj.selected || obj.checked)
		{
			//otherobj.disabled = false;
			//otherobj.style.display = "";
		}
		else
		{
			//otherobj.disabled = true;
			//otherobj.style.display = "none";
			otherobj.value='';
		}
	}
}

/*����*/
var CITY;
CITY=new Array;

CITY[1]=new Array('������','������','������','������','������','��̨��','ʯ��ɽ��','������','��ͷ����','��ɽ��','ͨ����','˳����','��ƽ��','������','������','ƽ����','������','������');
CITY[2]=new Array('��ƽ��','�Ӷ���','������','�Ͽ���','�ӱ���','������','������','������','�����','������','������','������','������','������','������','������','������','����');
CITY[3]=new Array('ʯ��ׯ��','��ɽ��','�ػʵ���','������','��̨��','������','�żҿ���','�е���','������','�ȷ���','��ˮ��');
CITY[4]=new Array('̫ԭ��','��ͬ��','��Ȫ��','������','������','˷����','������','�˳���','������','�ٷ���','������');
CITY[5]=new Array('���ͺ�����','��ͷ��','�ں���','�����','ͨ����','������˹��','���ױ�����','�����׶���','�����첼��','�˰���','���ֹ�����','��������');
CITY[6]=new Array('������','������','��ɽ��','��˳��','��Ϫ��','������','������','Ӫ����','������','������','�̽���','������','������','��«����');
CITY[7]=new Array('������','������','��ƽ��','��Դ��','ͨ����','��ɽ��','��ԭ��','�׳���','�ӱ߳�����������');
CITY[8]=new Array('��������','���������','������','�׸���','˫Ѽɽ��','������','������','��ľ˹��','��̨����','ĵ������','�ں���','�绯��','���˰������');
CITY[9]=new Array('������','¬����','�����','������','������','������','բ����','�����','������','������','��ɽ��','�ζ���','�ֶ�����','��ɽ��','�ɽ���','������','�ϻ���','������','������');
CITY[10]=new Array('�Ͼ���','������','������','������','������','��ͨ��','���Ƹ���','������','�γ���','������','����','̩����','��Ǩ��');
CITY[11]=new Array('������','������','������','������','������','������','����','������','��ɽ��','̨����','��ˮ��');
CITY[12]=new Array('�Ϸ���','�ߺ���','������','������','��ɽ��','������','ͭ����','������','��ɽ��','������','������','������','������','������','������','������','������');
CITY[13]=new Array('������','������','������','������','Ȫ����','������','��ƽ��','������','������');
CITY[14]=new Array('�ϲ���','��������','Ƽ����','�Ž���','������','ӥ̶��','������','������','�˴���','������','������');
CITY[15]=new Array('������','�ൺ��','�Ͳ���','��ׯ��','��Ӫ��','��̨��','Ϋ����','������','̩����','������','������','������','������','������','�ĳ���','������','������');
CITY[16]=new Array('֣����','������','������','ƽ��ɽ��','������','�ױ���','������','������','�����','�����','�����','����Ͽ��','������','������','������','�ܿ���','פ�����');
CITY[17]=new Array('�人��','��ʯ��','ʮ����','�˲���','�差��','������','������','Т����','������','�Ƹ���','������','������','��ʩ����������������','������','Ǳ����','������','��ũ������');
CITY[18]=new Array('��ɳ��','������','��̶��','������','������','������','������','�żҽ���','������','������','������','������','¦����','��������������������');
CITY[19]=new Array('������','�ع���','������','�麣��','��ͷ��','��ɽ��','������','տ����','ï����','������','������','÷����','��β��','��Դ��','������','��Զ��','��ݸ��','��ɽ��','������','������','�Ƹ���');
CITY[20]=new Array('������','������','������','������','������','���Ǹ���','������','�����','������','��ɫ��','������','�ӳ���','������','������');
CITY[21]=new Array('������','������','��ָɽ��','����','������','�Ĳ���','������','������','������','�Ͳ���','������','�ٸ���','��ɳ����������','��������������','�ֶ�����������','��ˮ����������','��ͤ��������������','������������������','��ɳȺ��','��ɳȺ��','��ɳȺ���ĵ������亣��');
CITY[22]=new Array('����','������','������','��ɿ���','������','ɳƺ����','��������','�ϰ���','������','��ʢ��','˫����','�山��','������','ǭ����','������','�뽭��','������','ͭ����','������','�ٲ���','�ɽ��','��ƽ��','�ǿ���','�ᶼ��','�潭��','��¡��','����','����','������','�����','��ɽ��','��Ϫ��','ʯ��������������','��ɽ����������������','��������������������','��ˮ����������������','������','�ϴ���','������','�ϴ���');
CITY[23]=new Array('�ɶ���','�Թ���','��֦����','������','������','������','��Ԫ��','������','�ڽ���','��ɽ��','�ϳ���','üɽ��','�˱���','�㰲��','������','�Ű���','������','������','���Ӳ���Ǽ��������','���β���������','��ɽ����������');
CITY[24]=new Array('������','����ˮ��','������','��˳��','ͭ�ʵ���','ǭ���ϲ���������������','�Ͻڵ���','ǭ�������嶱��������','ǭ�ϲ���������������');
CITY[25]=new Array('������','������','��Ϫ��','��ɽ��','��ͨ��','������','˼é��','�ٲ���','��������������','��ӹ���������������','��ɽ׳������������','��˫���ɴ���������','�������������','�º���徰����������','ŭ��������������','�������������');
CITY[26]=new Array('������','��������','ɽ�ϵ���','�տ������','��������','�������','��֥����');
CITY[27]=new Array('������','ͭ����','������','������','μ����','�Ӱ���','������','������','������','������');
CITY[28]=new Array('������','��������','�����','������','��ˮ��','������','��Ҵ��','ƽ����','��Ȫ��','������','������','¤����','���Ļ���������','���ϲ���������');
CITY[29]=new Array('������','��������','��������������','���ϲ���������','���ϲ���������','�������������','��������������','�����ɹ������������');
CITY[30]=new Array('������','ʯ��ɽ��','������','��ԭ��','������');
CITY[31]=new Array('��³ľ����','����������','��³������','���ܵ���','��������������','���������ɹ�������','���������ɹ�������','�����յ���','�������տ¶�����������','��ʲ����','�������','���������������','���ǵ���','����̩����','ʯ������','��������','ͼľ�����','�������');
CITY[32]=new Array('̨��');
CITY[33]=new Array('����ر�������');
CITY[34]=new Array('�����ر�������');

function chgCityOption(provobj,cityname)
{
	var cityobj = document.getElementById(cityname);
	
	if(cityobj == null) return ;

	cityobj.length=0;
	cityobj.length++;
	cityobj.options[0].text="��ѡ��";
	cityobj.options[0].value="";

	if(provobj.value == '')
	{
		return;
	}

	cityobj.length=0;
	cityobj.length++;
	cityobj.options[0].text="��ѡ��";
	cityobj.options[0].value="";
	
	var selcity = provobj.options[provobj.selectedIndex].value;
	var cityarray = CITY[selcity];
	if(cityarray != null)
	{
		for(i = 0; i < cityarray.length; i++){
			cityobj.options[i+1] = new Option(cityarray[i], cityarray[i]);
		}
		cityobj.selectedIndex = 0;
	}
}

function setCity(obj)
{
	var str = obj.id.replace(/[a-z]+/i,'q_');
	var cityobj = document.getElementById(str);	
	if(cityobj == null) return;

	str = str.substr(2,str.length);
	if(obj.id.substr(0,4) == 'city')
	{
		if(obj.value == '')
		{
			cityobj.value = '';
		}
		else
		{
			var pobj = document.getElementById('province' + str);
			if(pobj == null)
			{
				cityobj.value = '';
			}
			else
			{
				cityobj.value = pobj.options[pobj.selectedIndex].innerHTML;
				cityobj.value += '/' + obj.value;
			}
		}
	}
	else
	{
		var cobj = document.getElementById('city' + str);
		if(cobj == null)
		{
			cityobj.value = obj.options[obj.selectedIndex].innerHTML;
		}
		else
		{
			cityobj.value = '';
		}
	}
}


//added by zmqiu
function setArea(obj)
{
	var str = obj.id.replace(/[a-z]+/i,'q_');
	var returnObj = document.getElementById(str);	

	str = str.substr(2,str.length);
	
	var provinceObject = document.getElementById("province" + str);
	var cityObject = document.getElementById("city" + str);
	var areaObject = document.getElementById("area" + str);
	
	returnObj.value = '';
	if(provinceObject && provinceObject.value != '') returnObj.value += provinceObject.value;
	if(cityObject && cityObject.value != '') returnObj.value += '/' + cityObject.value;
	if(areaObject && areaObject.value != '') returnObj.value += '/' + areaObject.value;
}


/*����*/
function setDateTime(obj)
{
	var str = obj.id.replace(/[a-z]+/i,'q_');
	var timeobj = document.getElementById(str);

	if(timeobj == null) return;	
	
	if(obj.id.substr(0,4) == 'week')
	{
		timeobj.value = obj.value;
	}
	else
	{
		str = str.substr(2,str.length);
		var yearobj = document.getElementById("year" + str);
		var monthobj = document.getElementById("month" + str);
		var dayobj = document.getElementById("day" + str);
		
		timeobj.value = '';
		
		if(yearobj != null && yearobj.value != '')
		{
			timeobj.value += yearobj.value + '-';
		}
		if(monthobj != null)
		{
			if(monthobj.value == '')
			{
				timeobj.value += '01-';
			}
			else
			{
				timeobj.value += monthobj.value + '-';
			}
		}
		if(dayobj != null)
		{
			if(dayobj.value == '')
			{
				timeobj.value += '01-';
			}
			else
			{
				timeobj.value += dayobj.value + '-';
			}
		}
		
		if(timeobj.value.substr(timeobj.value.length-1,1) == '-')
		{
			timeobj.value = timeobj.value.substr(0,timeobj.value.length-1);
		}
	}

}

//��ѭ��˳�������Ŀ��
function writeItem(items)
{
	if(loopbase == null) loopbase = 2;
	
	var len = items.length;
	
	for(var i=1;i<len;i++)
	{
		var idx = (i+loopbase) % (len-1);
		idx ++;
		if (items[idx] != null)	document.write(items[idx]);
	}
	if(items[0] != null) document.write(items[0]);
}
function writeTableItem(items,linecnt,brcode)
{
	if(loopbase == null) loopbase = 2;
	
	var len = items.length;
	
	for(var i=1;i<len;i++)
	{
		var idx = (i+loopbase) % (len-1);
		idx ++;
		if(undefined != items[idx]){
			document.write(items[idx]);
		}
		if(i % linecnt == 0) document.write(brcode);
	}
	if(items[0] != null) document.write(items[0]);
}

function writeComplexItem(items)
{
	if(loopbase == null) loopbase = 2;
	
	var len = items.length;
	
	for(var i=1;i<len;i++)
	{
		var idx = (i+loopbase) % (len-1);
		idx ++;
		document.write(items[idx]);
	}
}

function writeComplexItem2(items,linecnt,brcode)
{
	if(loopbase == null) loopbase = 2;
	
	var len = linecnt.length;
	
	document.write(linecnt[1]);
	for(var i=1;i<len;i++)
	{
		var idx = (i+loopbase) % (len-1);
		idx ++;
		if(idx!=1)
		{
			document.write(linecnt[idx]);
		}
	}
	
	var len1 = items.length;
	
	for(var i=1;i<len1;i++)
	{
		document.write(items[i][1]);
		var len2 = items[i].length;
		for(var j=1;j<len2;j++)
		{
			var idx = (j+loopbase) % (len2-1);
			idx ++;
			if (idx!=1 && items[i][idx] != null)
			{
				document.write(items[i][idx]);
			}
		}
	}
	if(brcode != null) document.write(brcode);
}
function drawProcessBar()
{
	var pbar = "";
	var bdcolor = "#CCC";
	if ((typeof page) != 'undefined' && page.length > 2)
	{
		pbar += "<div id=\"processbar\">";
		pbar += "<table class=\"noborder\" style=\"border:0;width:300px;font-size:1px;\" cellpadding=\"0\" cellspacing=\"0\">";
		pbar += "<tr height=\"3\">";
		pbar += "<td rowspan=\"2\" style=\"font-size:10px;color:#666;font-family:Verdana;line-height:10px;\">0%&nbsp;</td>";
		pbar += "<td style=\"border-left:1px solid #CCC;border-right:1px solid " + bdcolor + ";width:25%;line-height:1px;\">&nbsp;</td>";
		pbar += "<td style=\"border-right:1px solid " + bdcolor + ";width:25%;line-height:1px;\">&nbsp;</td>";
		pbar +=	"<td style=\"border-right:1px solid " + bdcolor + ";width:25%;line-height:1px;\">&nbsp;</td>";
		pbar += "<td style=\"border-right:1px solid " + bdcolor + ";width:25%;line-height:1px;\">&nbsp;</td>";
		pbar += "<td rowspan=\"2\" style=\"font-size:10px;color:#666;font-family:Verdana;line-height:10px;\">&nbsp;100%</td>";
		pbar += "</tr>";
		pbar += "<tr height=\"6\">";
		pbar += "<td colspan=\"4\" id=\"procbar\" style=\"border:1px solid " + bdcolor + ";\">";
		pbar += "<span class=\"pbar\" style=\"border-right:none;width:5px;\">&nbsp;</span>";
		pbar += "</td>";
		pbar += "</tr>";
		pbar += "</table>";
		pbar += "</div>";
		document.write(pbar);		
	}
}
function setProcessBar(percent)
{
	var width = 0;
	var border = "border-right:none;";
	width = percent * 100;
	if (width >= 100)
	{
		border = "";
	}
	var obj = document.getElementById("procbar");
	if (obj)
	{
		obj.innerHTML = "<span class=\"pbar\" style=\"" + border + "width:" + width + "%;\">&nbsp;</span>";
	}
}
function computeProcess(nowpage)
{
	var total = 0;
	var now = 0;
	for (var i=0;i<page.length;i++)
	{
		if ((typeof page[i]) != 'undefined')
		{
			total += page[i].length;
			if (i < nowpage) now += page[i].length;
		}
	}
	
	return now/total;
}
function chgUniteSelection(main,sub,options)
{
	var mainobj = document.getElementById(main);
	var subobj = document.getElementById(sub);
	if (mainobj && subobj)
	{
		while (subobj.options.length > 1)
		{
			subobj.removeChild(subobj.options[1]);
		}
		if (mainobj.selectedIndex > 0 && (typeof options[mainobj.selectedIndex-1]) != 'undefined')
		{
			for(var i=0;i<options[mainobj.selectedIndex-1].length;i++)
			{
				var newobj = document.createElement("option");
				newobj.value = options[mainobj.selectedIndex-1][i];
				newobj.innerHTML = options[mainobj.selectedIndex-1][i];
				subobj.appendChild(newobj);
			}
		}
	}
}


SPT="--��ѡ��ʡ��--";
SCT="--��ѡ�����--";
SAT="--��ѡ�����--";
ShowT=1;  //��ʾ���� 0:����ʾ 1:��ʾ
PCAD="D��Q$QϽy2{3{����y��Jy��%yeKy_��!y9��yrͷ��y��!yͨ1y˳��yH4y<Iy����y4��zQϽ~��j~������#���Q$QϽyC4y62y63y0��y6Dy����y����y����y<��y2��y3sy��0yD��yJcy����zQϽ~56~��9~����#6Du_��ׯ@Y&y��2y��3y7ty�����yԣty����~��k~��[����~����~����~����~�޻�~�޼�~4!~Ԫ��~��~����w޻:w��1w7��w¹Ȫx��!@·0y·Dypұy��4y7ye��y��~��0~��ͤ~Ǩ3~����~��9~��nwe0wǨ&x�ػ�O@9��y!9��yD��6ysA��.H��~��5~¬A^����@��!y��Ky��Iy����y����~W��~��&~<��~��~��~����~S��~��~����~��4~����~κ~����~J&x��K@��2y��3y��K~W[����~����~¡Ң~��~0C~5��~��¹~76~����~4��~��~c6~W3~0��wɳ6x��k@7}D}0}��[cԷ~�E~��4~��E~kI~��~��%~��[�T~��f~&7~��~��%~�~˳4~��Ұ~��~��1wk1w&��w�߱���x�ż�g@��2y��3y��ny�»�԰y��n~��D~����~��T~����~ε~%ԭ~��&~��ȫ~����~��¹~��[����^��P@˫��y˫��yӥ��Ӫ�ӿ�y��P~I¡~4Ȫ~��4~¡n~e5��.��:��.Χ����;��p?��1@7ty��6y��~s~2��~9I~��!~��5~0Ƥ~����~��~�ϴ��.��ͷw����w����w6��x�ȷ�@&��y��%y��&~Sc~��6~<[��&~<����.��1w��6x��E@��{��ǿ~��%~&4~��[��~��[��1w��1Q#!3u̫ԭ@С��yӭ��y�ӻ���y���ƺy���Ny��Tyc��~%��~¦��~p��x<ͬ@{��y0��y7��y%��~����~����~����~��T~��j~<ͬ^%Ȫ@{��y��y4k~��^Y��@{��yY��~��ԫ~����~4˳~��[����~Y��~J��~��~��T~º:x��:@{��E~%[lF~��1~��4x˷1@˷{4³y!��~Ӧ~����~����^��B@�ܴ�y����~��Ȩ~C˳~��%~��%~̫��~��~4ң~��_~����x��:@��ZyW�~����~��ϲ~�!~7�~�~ԫ��~��~4½~��[S��w6��x��1@�ø�yk��~��K~��~����~5J~����~���~��կ~��~6��~��P~ƫ��~ԭ4xW��@Ңfy����~��[���~�鶴~p~&��~��!~m~��5~<5~��~SC~��~��3~��Uw��1x����VyТ��w��_w��%w��E~��[I~W~��N~_¥~�~��!~B%~��g��#����p ��$��C��`@7{����y��Ȫy����y��Ĭ`��v��=��~CN��8~cE6~JF^��ͷ@26y��f��ys!y_��yqj��y��ԭy��Ĭ`��v��%~��8��ï��&������|h9@9����y90yh��z���@��!yԪ��!y]³��8��vGN��vGN��vN3~=ʲ=��v��ţ`v������v5[������|ͨ��@��8��y��8������Bv��8�������v��³~����v����v��³`v��N����x��8��L@2ʤy��M`v����8v����=ǰv����=v����vh��v��X������|���ױ�8@9M8y]��vĪ�����ߴ���'v���״� v����='v��G8��v7G8����v7G8����v����dw��=_w��b��w��8p��w��6xI&��,hb��`w]8!w��8������ǰv��8������Bv����`vͻȪ^��N������,������`w��N��`w]G��v��R`��v��R`��v2h������v3h������v̫����v���v����qv����v����^hb�첼��,��5we��w׿��~nP~��f~IC~��[���8����ǰv���8����Bv���8�����v��������|G����8��,W6w��ԭ~��g~hM`ǰvhM`BvhM`��v��������|]M����,]M����v]M����v�������#��5u��%@C4y��6y<2y�ʹ�y��3y�ռ���y2ly7:��y�ں�y��B~��4~����~7��x<��@B!y3��yɳ6gy�ʾ���y��˳gyX1yY9~�߷���w��b��wׯ6x��!@��2y��3y��!yǧ!yK&~�����.9:x��˳@7��y21y����y˳{��˳~7����.cԭ��?��a@4!yaZy��!y0��y��a��.������?��2@Ԫ��y��Iy��&y�����.2��w��:x��1@p��y��6y̫Cy��!~��~��9wD5xӪg@վǰy3}����Ȧy�ϱ�y��1w<_��x��7@91y7��y̫4yc6ryϸ6y��7��p.��J^��%@q��y��ʥy��ΰy��Y��y̫��6y��%~����x�̽�@˫K��yI¡Ky̫��~��!^����@��1yc6y����~3e~Hͼ~����w��ԭx��%@˫��yA{��%y��4~������������p.DƱw��Tx��«O@��!yA��y0Ʊy��B~��H~I:Q#mNuY��@0��y��{��%y����y��԰y˫%yũ&~��Kw����wP��xmN@H��yA̶y��Ӫye��ySm~��6w���w��bw��_x��4@��3y��2y����~��ͨ��.������w˫��x��T@A!y3&y2e~2��^ͨn@2Hy����/yͨn~��0~��6~÷6gw��&xq!@�˵�/y����~����~Yq����./T~W/x��ԭ@5/yǰ��8oL��p ~Y��~Ǭ&~����^q:@�Dy����~ͨ��~�0w<&x�ӱ߳���+��mwͼ��w��nw����wA��wCAw��c~&ͼ��#��A/u��8��@��dy0��y����y̫4y�㷻y����y4��y��b~��b~����~��~G��~ľb~ͨ6~����~]:w˫:w��־w�峣x�����8@Aɳy��ty����y����ay��M8��y����!y÷dL����8;yA/~��&~̩��~��0~��ԣ~=!~=2~��Ȫ~ګ6x��3@����y��!y�ε�y����y:��6y��!y��2~��Nw��!x�׸�@��%y��ũy0!yI&y2!yI!y��D~���^˫Ѽ!@��!y��2y�ķ�Ky��!y����~����~��c~��6^<��@��8ͼyA��y�ú�·y���y<ͬy��1~��T~N��~��8��`��p?����@����y0��y�Ѻ�y3Ny����y7sy��ayX!��y��ӪyhU6y����6y����yh����y����y�ϸ���y����~����x��ľL@S��y��%yǰ��y2��y��y��0~��F~��ԭ~��Զ~ͬ/w����x��K6@7Iy��!y����6y��i^ĵ��/@2&y%��y����y3&y25~Ng~���6w9Nw5&w����x��6@����y��/~ѷ=~����~D&w��<����x��n@DNy����~b3~s��~&��~��E~����~&��w��2w9��x<I&��Vy����~��6~Į6��#��9Q$QϽy����y¬��y���yY5y��&y����yբDy��gy����y����y��!y��ky��27yX!y��/ys��y0��y����zQϽ~������#/��u0��@��Jyq��y�ػ�y����y��¥y�¹�y��gy<��y��ϼy�껨Ky/5y/��~����~��E~�ߴ�^����@��&y0YyD��y��!y��!y��Zy/��w��Ix��1@��¥yjAy��dy��cyȪ!ye~��~ͭ!~�5~7��w��1x��1@��5y��¥y������y��y��%wX̳wJ��x��1@����y4/yX��y����y��By��{����w�żҸ�w��!w��/w̫��x0ͨ@��Fy��բy9&~��2~��2w���wͨ1w9rx��j��@��jy7��y91y����~29~��j~��0^��&@c6y��1y����yc��~��E~����~����~XZ^��:@{��E~��9~��5~��%~��Z~��f~2Kw<ex��1@��ly��/y��y��Ӧ~����w����w/fx��/@��gy��1y��ͽ~��%w��Bw����x̩1@9ly�߸�yInw��/w̩Iw����x��Ǩ@��{��ԥ~��%~��%~������#��/u��1@��{��{/��y����y3Zy��/y��!y�ຼyͩ®~��&~��Pw��%wW&x5��@9��y/2y/DyD��y��9y��!~59~۴~��Ҧw��aw��nx��1@¹{A��y�9y��ͷ~S��~4%~��0~�ĳ�~̩˳~��&w��cx��I@��{����y����~9��~95w4ZQͩ��xZ1@Pc~YI~&m^��I@Խ{��I~7H~����w����w��1xXt@��{X2yJ��~��/~��&~baw��hw2%wS��x��1@��{��/y��!~��n~A��~/!x��!@k9y����y�!~����^K1@��/y����y·��y��~��r~��K~�ɾ�~����wW9x��E@��fys��~��j~��H~��%~jC~��Ԫ~��5��.AȪQ#&��u�Ϸ�@2}B}3}��yYe~��2~��3^��Z@��ZyU��y7��y�/y��Z~��H~0l^����@2}B}3}��y��Զ~��6~����^��0@<ͨy�����yл�Ҽ�y�˹�!y�˼�y��K^U��!@X��ׯy��!y��!y��Ϳ^��D@�ż�y��!y��!y�a^ͭl@ͭ��!yʨ��!y��yͭl^&��@ӭ/y<��y��y��5~��%~Ǳ!~̫Z~����~��/~��3~ͩ:x��!@��ay��!y��1y�~��5~��~��r^��1@����y0��y��&~ȫ��~kԶ~��%~��Yw����x��%@ӱ1yӱ2yӱȪyWȪ~̫C~��0~���~����x��1@(���)��y�!~��~���~��^��Z@�ӳ�y®/~��Ϊ~��!~C^��&@X&yԣ&y��~����~��[Xկ~��!^��1@��{��%~��[i��^��1@���y2��~_K~s%^��:@��1y��a~��P~��~��a~�P~5��Q#����u��1@��¥yK/y��!yUβy��&y����~��/~oT~��c~S̩~4̶~��cwY��x��r@������y˼��y��Ԫy��NyZdy����yͬ&z����@:��y��/y����~����^����@÷��y��Ԫy��a~c��~5n~<��~��a~ɳ~����~̩5~��5~S&xȪ1@��{e��y��/yȪ��y��&~&a~S��~Pn~Xr~_ʨw��/w0&x��1@ܼ{A��yj��~����~گ&~Y̩~��!~0��~4C~t&~A9x04@��4y˳H~��[����~��a~��C~��JwJ��!w���w��%xA��@7oyY͡~Sk~�Ϻ�~J4~��[��4x5P@��{ϼ��~p��~��0~��5~��5~����~��&w����Q#/3u0H@2Zy3Zysj��y��dy��y0H~7��~&��~����^��P��@H/y��!y����~��4xƼ��@&Ty��2y����~����~«a^��/@®!y�%y��/~J5~��E~S��~P&~����~fH~Zg~����~��Hx7��@��Ey����^ӥ̶@��Zy��/~��ax��1@�¹�y��~��e~<��~����~����~&Զ~A0~k0~ȫ0~5f~��f~I��~��H~Ѱh~_[��Xw0��xm&@m1ysԭym&~mE~Ͽ/~7��~Se~̩C~��F~��&~&��~S7~����!x�˴�@Ԭ1y��7~����~�ϸ�~��e~��&~ͭ��~e:w�z��w��&x��1@WFy0[��F~0e~����~��&~�˻�~Xa~��a~2��~��H^����@��1y����~��e~��!~Ǧ!~���~߮%~���~��%~����~��T~PIQ#!2u��0@����yQBy����y����y��{Ycy4��~��%~��6~����xsO@Q0yQDy�ķ�y��Oy��!y���y:%y��1w��īw4��w��0w��3x�Ͳ�@��Fy�ŵ�y��!yW��y�ܴ�y��K~��s~��T^��ׯ@QByѦ{�{K��ׯy!ͤy��1x2Ӫ@2Ӫy6gy��i~i��~����^��K@֥�y��!yĲ4y��!yYO~Agw��%w��1w����w��Զw��ϼw9%xΫ��@Ϋ{��ͤy����y����yW��~H��~s1w��:w�ٹ�w&��w����wH��x��5@QBy��{΢!~��K~X��~����~����~��E~��!~����w��1w��:x̩&@̩!y���y5%~24~7̩w��:x��9@����y�ĵ�w�ٳ�w��!x����@2��y����~��^����@��{��:zW��@b!yoׯy62y��0~۰[��E~��!~��~4��~��0~����~W��^P1@P{l~5��~��j~W��~��6~4ԭ~�Ľ�~J[��lw��:x��:@2H��y%��~ݷ~��4~2]~��~����~Wcx��1@��{����~%��~���~մn~��I~��4^����@ĵ��y��~��~��J~��Ұ~۩[۲[k��~2����#60u֣1@Bԭy����y��:��;yXEy�Ͻ�y��!yBĲ~����w��%w7��w7֣w�Ƿ�x����@Aͤy˳6��;y��¥y0��y��y�~ͨ��~ξ��~����~b��^��%@��{3��y�e6��;y��3ymiy��Ay�Ͻ�~7&~��F~��~��%~��%~��5~��F~��ʦx4��!@7ty��2y_Ayտ6y��e~Ҷ~³!~ۣ~���w��1x&%@�ķ�yD��y��3y��y&%~����~��~�ڻ�~N1x�ױ�@��!y!{俱�y��~�^7��@����y7tyDվy��y7��~���~ԭ%~�ӽ�~����~Yԫ~����w����x����@���yBվyU��y!%y��J~����~J��~��~��Tw��%w��1x�%@}ce~0��~��~Kǰ~�%^��H@κfy��H~۳l~��[��1wY��x��6@T��y��%~Wӱ~۱:^��rϿ@Z��y�ų�~��~¬��~��Uw�鱦x0%@Է{��Ay0��~��[3Ͽ~��4~����~��F~����~��6~7Ұ~ͩ��~��1x����@��԰y�%y��Ȩ~�~5l~��[��[����~S:x��%@��6y4��yo!~��!~7~��[��ʼ~��F~����~Ϣ~��%^��g@F��y����~3t~��E~����~��[��%~̫��~¹��~��:xפU��@��{34~�ϲ�~4��~��%~ȷ!~��%~��0~��4~7����#ZDuJ��@/��y/��y�~gy��%yJHys!y��!y23Zy��0y�̵�y/��y����y7��z��_@��_��y3��!y��½y��!y%7~<ұw��:!zʮ��@é��y����y��~��3~��!~��a~��~��/gx��H@3ly��Ҹ�y���y�Vͤy��lyԶ&~I!~����~Y%����.�������.��fw��%w֦/x�差@��{��{��%y0��~��[����~��6gw��%w��:x��1@����Zyt��y��:z��r@2��y�޵�y��!~ɳ��~����xТ��@Т0yТH~<��~j��~Ӧ:w&½w��Fx��1@ɳ}��1y��&~��i~/l~_��w��Zw����x�Ƹ�@��1y�ŷ�~��&~o��~Ӣ!~�E~ޭ��~��÷~��:wJѨx��5@��&y����~ͨ[��%~ͨ!~���x��1@��fy��Ex��ʩ����;��+��ʩwiFw��ʼ~G2~����~��e~����~�׷�^ʡֱϽ�ؼ�������λ,����wǱ/w��rw��ũ��N��#Z0uYɳ@ܽ��y����y��´y����y�껨yYɳ~��[5��~�%x����@����y«��y_��y��Ԫy����~��~��l~��l~��lx��̶@��Zy����y��̶~����w��!x��%@����y���y_��y����y0��y��%~��0~��!~��2~��2~��%w��5x��%@˫cy<��yD��y��2~7��~��%~¡��~��g~��5~75~:����.J��x��%@��%¥yjay��!y��%~����~����~4/~��owW��x��P@Jly��{&��~����~�~W�~��T~_r~��Qx�żҽ�@SkyJlTy��i~ɣֲ^��%@��%y��!y0~��/~&n~��/x��1@DZy����y��%~����~SI~�κ�~WJ~��[��2~&��~��IxS1@֥!y��E̲y��%~2&~˫��~��~/S~5Զ~��!~7��~/t��?��n@��{B��~��l~��a~����~��ͬ~��%��.7�ζ�.��/��.��1��;��.ͨ����.//x¦��@¦��y˫��~7n~��E/w��Tx��3����;��+m��w��a~���~��ԫ~����~p��~S˳~A!��#��2u��1@2!y����yԽ��y9��y��6y����yqjy����y��خy��fy��:w��nx�ع�@D/yJ/y�/y��/yʼI~��n~��T~��T��.7e~��Hw0��x����@oZy����y0!y��&yA��y����z��9@����y��ryX��z��ͷ@���yAZyX԰y��4y6��y0��~��%w��9x��!@{_��y˳Py09w��Ew����x/r@��/y/9yK!w7��w��4w��!w��4xտ/@�࿲yϼ!y��ͷy����y��a~����~��/w��1w��Fxï��@ï0yï��y��q~��1wn1w����x����@��1y��Zy��5~����~�⿪~P��~��Ҫw�Ļ�x��1@��{��o~��2~Ar~��%x÷1@÷/y÷~<��~e˳~��t~4Զ~����~I5x��β@{9e~½6~½ex6T@T{��X~AF~��4~C4~2T^%/@/{%3~%2~%��xcԶ@c{���~%!~��!׳;��.��0��.c7~ӢPw��1x2ݸxB!x��1@����y��&~��4^��%@��{��2~��3~����~��5xj��@j{7I~��0~j&~okQ#��3׳�� ��$05@I5y7{3����y/0yS7y��5~J��^��1@:By���y��0y��DyQ��y��/~��&~��E~��/~��:^��N@���y����y��!y����y��!y%˷~W��~��F~ȫ1~I&~S��~��%~Aʤ��.��T~4��~����~��:��?��1@����y��!yQ��y����~��~��!~�axD9@9{��{��!��y����^��:��@��gy��{��˼~2Ix��1@��0y��Dy��!~��D^���@��Dy��0y40~��4x��N@��Ny��~½F~��q~Iҵ~D��x05Vyƾ��w��~��%~��N~¡&~U!~����~����~<7~���~5��~A1^��1Vy��!w¹կ~��1~J��~����~��&~��/��.��E��.X����.��:^��1w��1w��4~��!~��F��?��ɫVy��ɫw��%~��2~4��~P��~��3~����~��j~��ҵ~��N~¡N��.3N^6��Vy6��w��1wo:����.��/ë0.0��~���~��!~2b~GU��.f&��.<n��'��#90u9g@��2y7ty��Ӣz��>wQϽzʡֱϽ�ؼ�������λ,��ָ!w��9w��1w��!w��Hw��5w2��wk&~��H~����~W&~qɳ��.H/��.��2��.lE��.��ͤ��;��.��B��;��'��#����Q$����wG~D��y��1~�!~Y��~<��gy<��~��Fw/Dy/D~/��w��A��y0��y0ͩ��y��/~��H~ɳƺ��yQϽyQBy˫��yͭ��~��0~SFQ#��Fu��f@��/ys��yXţyJ��y�ɻ�yAȪ��ysq/y7fyX��~˫��~��/~ۯ~<��~��/~7��~f/��w��1w����w��1x�Թ�@������y����~<&y��̲y��~��˳^��֦��@2y3y��Cy����~�α�^��1@/%y��ayAU̶y��~��/~��S~p��^P%@�%yB/~o/~�㺺wʲ��w����x��%@��{����y��K~��ͤ~&~����~DF~4J~/��x��Ԫ@QByԪ��y����y����~sF~����~��a^��5@QBy��a~���~<Ӣ^��/@QBy2Iy��Զ~��B~¡H^��!@QByɳ��y��ͨ��yXg6y��Ϊ~����~��/~��F~�����.U����.��ü!x0��@˳Ӧy��ƺy��ly0��~Ӫ!~��&~��¤~3��~��Bxü!@2��y����~��!~����~����~s��^�˱�@����y�˱�~0a~/&~Y5~��~��~����~I��~��!^��&@��&y����~Jʤ~��E~t��x��1@ͨF~��~����~��/~<��~��~��Tx��&@��{��!~����~��T~_��~��ȫ~«!~��!^GB@G1yͨ/~0/~4H^��%@��/y&��~����~��%x]�Ӳ�;Ǽ+��F~��~ï~����~��կ��~XF~СX~��E~U8��~����~]��~��8��~��ԭ^���β�+��k~��k~��G~��A~��/~����~¯��~����~7A~P��~q��~_��~ɫ��~����~G��~��[��[����^��!��+3Hwľd��.��T~PH~����~��2~50~�ո�~����~X%~�Ѿ�~ϲP~��5~Խ3~����~����~�ײ���#��1u��%@0��yj��y��ayh��yqjyС6y��%~Ϣ��~����~c��x����Ew��!y��֦`yE[��^����@�컨��y����~ͩ��,��%~��&~��������;��.��F����;��.���~��̶~����~ϰE~��Ew�ʻ�x&˳@3��y4��~��k~��5����;��.���벼��;��.��j��;����?ͭ��Vyͭ��w/g~������._��~˼0~ӡ/����;��.P/~��6����.������.��!`zǭ30����;��+I��wI��~��&~��¡~��e~����~����~&A^�Ͻ�Vy�Ͻ�w<��~ǭ3~Xɳ~֯X~��Ӻ~��5��;��;��1 ~����^ǭ20��;��+��dw��4~ʩ��~����~��Զ~᯹�~����~����~��6~K/~��4~��/~��/~��!~��/~��կ^ǭ0����;��+f��w��Ȫw��~��k~��&~��!~4��~o��~Y˳~Ad~��E~��fE'��#j0u����@��ty��Ay�ٶ�y3!y2Fy�ʹ�~��5~����~����~_N��.����~»Ȱ��;��.Ѱ���;��.&5x����@����yUA~½��~ʦ��~o4~��T~����~մ��~����x��a@����y/F~��/~ͨ9~t5~��r~��!��.74��;��.Ԫ/��R;��;��?��!@¡%yʩ��~�ڳ�~Al~H5^��ͨ@��%y³��~�ɼ�~�ν�~<��~S��~��/~����~����~����~E��^������+����w˫��~Ĳk~0t~Ҧ&~<Ҧ~S��~Ԫı~Jk~»e^��6��R;��+����w��Զw����~������.��E~_��~����~��3~Ԫ%~��6~X4��;��;��.�̴�~6g��?��!׳;��+��!~��!~3��~������~U��~��D~��0~��5^˼éVy˼éw�ն���R;��.ī/��R.��2��.���ȴ�;��.������;��R;M��./:��R;��.������;M��;��.����M��.3����?3˫���ɴ�+����w��9~����^<��q+<��w�����.��j~��F~�ֶ�~0����.Ρ!��;��.S4~jA~��T~��F~����^P���;����+����wº3w��6~ӯ/~¤F^��/Vy��/��3.Sʤ~tƺ~5����?ŭ/����+��E~����~��!��A;ŭ.bƺq;����?�����+���dM~P��~ά3����?W��VyW��~����~j~SP~��~˫/M��;��;����;��.��U��;��.��T��'��#3�� ��$M��@:��yN��~����~Rľ~��E~��AP��~����~ī�񹤿�^HfVyHf~/��~����~��h��~��s~����~����~��~â��~��¡^!0Vy��2~����~����~ɣ��~���~����~����~����~�Ӳ�~¡��~����~�˿���^�տ���Vy�տ���w0ľN~/��~k��~����~M��~����~лͨr~q��~�ʲ�~��U~k��~��G~>2~m¡~��Mľ~����~��G^����Vy����~����~����~����~&��~����~��~���~G��~R��^]dVy��b~����~��8~����~��m~����~����^N֥VyN֥~����/��~��N~ī��~����~����~��~��ľg��#��3u3&@7{��Ny��Zy���yδ��y����y����yW��yY&~����~����~��~��l^ͭF@����yӡKyҫ~�˾�^����@μ��yXKy����~����~�!~����~ü~¤~ǧ%~����~��~̫q^��%@��fy����yμ{��ԭ~��%~Ǭ~��Ȫ~S��~��~YJ~Ѯ��~��n~J��~I4xμ0@Wμyt~����~<��~��%~��[��[qE~��4~��:wt��x��&@����y��Y~��Y~&��~־��~����~��Ȫ~��~��F~��F~��A~��l^��B@��Ky0֣~:��~��~3��~��~5ǿ~��%~��G~����~��ƺ^��N@��%y��ľ~����~��!~����~k��~��P~��֬~��~�Ɽ~c��~����^&��@����y����~_Ȫ~5��~��%~᰸�~4i~��ƺ~Ѯ%~q6^����@��1y��0~����~��0~!%~��&~��E��#����ub1@:��y��d6y3��y&5y��pyS��~��b~��B^������wQϽzXH@XFySH^q��@q��y4Fy��Զ~��5~��̩^��E@��{D��ycE~��&~�ʹ�~J!~�ż�F��?J��@����~p��~��ף��?��ȪVy��rw��Ȫw�ػ�wX��~��D��p.]=������=.&3^��ҴVy��Ҵw��0ԣ��.����~W��~��K~!��^k3Vyk3~ͨμ~¤3~μT~W�~��~�^¤0VyJf~�H~��~��~��~3C~��~����~��^4��Vy4��w��F~��K~����~tͤ~ׯ��~��5^��%Vy3��w��%~��~t��~��E~��5~5~��ԭ^W�Ļ�+W��wW��~����~S��~��6~C��~2��.��_!��&;2��;��M?��0��+����wW̶~׿R~����~����~����~µ��~��6��#s9u35@:2y:By:3y:Dy<ͨ��;��.��B~��T^92Vy4&~��C��;��.��f~������.n¡��.ѭn��M?9D��+rT��.����~9��~�ղ�^��0��+ͬ��~����~���~60��p?90��+��C~ͬP~��P~I9~��0^�����+����~����~��P~����~����~���^������+����~�Ӷ�~�ƶ�~�ζ�~��ǫ~������^93��p;��+��8ľwP���whb~fb~�����#5�Ļ��� ��$��F@{7{��yS5~��b^_��!@<Jgy_��!y_̿��y4o~����~��ũ^����@i��yB��~B5~�γ�~ͬ��~sͭϿw��J^��ԭ@9ԭ~3m~¡P~��T~��%^����@ɳ��ͷy����~��ԭ��#7��ά��� ��$h³ľ��@��!yɳ��G=y7}Eĥ��yͷ��6y0Ȫy2!yh³ľ��^=M����@��!��y=M����yq��̲yh8��z��³��Vy��³��w۷��~��=ѷ^����Vy����wGd������= ~����^Hm��+Hmw����w��Ȫw��ͼ��~����L~��K~mľ��8~ľ�ݹ���= ^��8��M��p+����w��6~��Ȫ^G��������p 1,��8��w��K~ξ��~��Ǽ~��ĩ~���Ȼ�.C��~C˶~��Z^]=��Vy]=��w����~�⳵~ɳ��~7C~��[hʲ~]����~��ƺ^=�����տ�8=�� 1,]ͼʲw]=��~]����~hǡ^��ʲVy��ʲw�踽~����~Ӣmɳ~����~ɯ��~Ҷ[�����~����Z~٤ʦ~G��~��ʲ��8����m= ^C��VyC��wC��~ī��~Ƥ!~����~����~����~��e^�������= 1,��5w����w��5~�첼��8���� ~��[����~7T~����~`=L~R��=^��:Vy��:wh��w����~ɳ��~��d~ԣ��~C��=��8��p ^]��̩Vy]��̩w��8��~����~��9~��G6~s6~mľ��^ֱϽ������λ,_6��Q#���`��������$���#��r`��������$��r#K��uKD|��¡|KB|K0|����|K2#����$>��,]����,GN,�ϼ�M��,����,����,���,����·L,ӡ��,ӡ��R3>,����,��M=,�ձ�,Լ��,����,����`,����,U8����,��G��,U��3>,��ɫ��,��p,R��8,]��,G��L̹,G��L̹,���ɱ�,ɳ`]M��,7����,Ldb��,��i>,̩��,����կ,������,]����,Խ0,Ҳr,����,B��,B�����,B����r,B��K��|����,]8��i>,&��M,��d`d>,��oȺ��,����iȺO(3)(ML��8UL),��5,��������,�����ɷ���,��¡��,����¡,����iȺO(3)(ʥ=³L),��ý�,B��,է��,��Ħo,�չ�,m����,����,�������>,�������>,����,�Ա�>,����,����>,0��,����>����,��`����,��R>,������,i��d>,i��>,U���L��,UMά,Ud,ëd��R>,ëd��L,Ħ���,Īɣ��=,R��8,R��i>,��R��O,¬����,���ڼ�8,����8,��Mi��,��Ud,�յ�,L��ʿb,̹ɣR>,ʥ������,���,ͻRL,h�ɴ�,����8,�ޱ�>,��G��Τ,���ױ�>,�ϸ��3>,ɣ��G8,UԼ`O,ʥ����C��N3��|ŷ��,]8GR>,&��8,��Vi,��iʱ,����i>,��=,����,��b,����,P��,ֱ��o��(Ӣ),ϣ��,����i,��O,��8b,��<i,��֧��ʿ��,L�工=,¬ɭ��,U����,Ħ�ɸ�,��b,Ų��,��b,������,U���,oUR>,0LM��,ʥU��ŵ,3����,���,��ʿ,Ӣ��,��oV>,L����R>,��ٸ�,��LR>C����ά��,��oL����,>��R>��C��,q��oL��C��,��³m>��C��,����=L̹��C��,m8mL̹��C��,h�ȱ�=L̹��C��,��m=L̹��C��,������L̹��C��,h=b,������,M��ά>,��ɳR>,Ħ8����,]���ݽ�|����,&��MO,&���CG����,]��͢,]³GO,]ɭ��,G��U,GG��L,��i��,��Ľ<ȺO,��iά>,G3,����<,����ȺO,��i,���ױ�>,����R������,��L�����,pG,����R�ӹ�C��,��϶�8,��8�߶�,������>��,��N�ɴ�,ΣVUM,��>��,9V,��fML,�����,U��R=(��),ī3��,��`��M`O,����&����LȺO,R��M��,G��U,GM��,��³,�������,ʥƤ��8O��=¡O(��),ʥ=dL�и�CRάL,ʥ¬3>,��=bȺO,ά8��ȺO(Ӣ),ʥ��ɭ`O(Ӣ),ά8��ȺO(��),��d0,`��R��C��G��,hM��,����,ί����M,��lbO,`=LC����LȺO,�϶�o��|<����,��<i>,��=ȺO,쳼�,������dR3>����ϣ��,��Ŭ]ͼ,��O,��dGL,Ud>��ȺO,B;O,�³,7��d��R>ȺO,73b,G��>7����>,2��Ħ>,3��Ħ>,��orȺO,����,�Ե�O,��=O,�ƿ�LO,������,ŵ��=O,����,Ŧ��O,ͼ��¬,��=³,��=oR3>,U��8ȺO,��dL�Ӹ�ʿ��ȺO";
PCAStead="@/��,��Ͻ��,/\\+/��������,/\\./��������,/\\?/��������|/'/������/ /����/\\[/����,/\\^/��|/~/��,/{/����,/}/����,/z/��|/y/��,/x/��|/w/��,/v/��,/u/ʡ$".split("/");
PCAStore="!ɽ%��&��/��0��1��2��3��4ƽ5��6��7��8��9��:��;��<��=��>��A��B��C��D��EˮF��G��H��I��J��K̨L˹M��N��O��P��Q��R��S��TԴU��V��W��X��Y��Z��]��_ʯ`��aϪb��c��d��e��f��g��h��i��j��k��l��m��n��o��p��q��r��s��t��";
for(i=0;i<PCAStore.length;i=i+2)
	PCAD=PCAD.replace(RegExp(PCAStore.substr(i,1),"g"),PCAStore.substr(i+1,1));
for(i=0;i<PCAStead.length;i=i+2)
	PCAD=PCAD.replace(RegExp(PCAStead[i],"g"),PCAStead[i+1]);
if(ShowT)
	PCAD=SPT+"$"+SCT+","+SAT+"#"+PCAD;
PCAArea=[];
PCAP=[];
PCAC=[];
PCAA=[];
PCAN=PCAD.split("#");
for(i=0;i<PCAN.length;i++){
	PCAA[i]=[];
	TArea=PCAN[i].split("$")[1].split("|");
	for(j=0;j<TArea.length;j++){
		PCAA[i][j]=TArea[j].split(",");
		if(PCAA[i][j].length==1)PCAA[i][j][1]=SAT;
		TArea[j]=TArea[j].split(",")[0]
	}
	PCAArea[i]=PCAN[i].split("$")[0]+","+TArea.join(",");
	PCAP[i]=PCAArea[i].split(",")[0];
	PCAC[i]=PCAArea[i].split(',')
}
function PCAS(){
	this.SelP=document.getElementsByName(arguments[0])[0];
	this.SelC=document.getElementsByName(arguments[1])[0];
	this.SelA=document.getElementsByName(arguments[2])[0];
	this.DefP=this.SelA?arguments[3]:arguments[2];
	this.DefC=this.SelA?arguments[4]:arguments[3];
	this.DefA=this.SelA?arguments[5]:arguments[4];
	this.SelP.PCA=this;
	this.SelC.PCA=this;
	this.SelP.onchange=function(){
		PCAS.SetC(this.PCA)
		};
	if(this.SelA)
		this.SelC.onchange=function(){PCAS.SetA(this.PCA)};
		PCAS.SetP(this)
};
PCAS.SetP=function(PCA)
	{
		for(i=0;i<PCAP.length;i++)
			{
				PCAPT=PCAPV=PCAP[i];
				if(PCAPT==SPT)
					PCAPV="";
				PCA.SelP.options.add(new Option(PCAPT,PCAPV));
				if(PCA.DefP==PCAPV)
					PCA.SelP[i].selected=true
			}PCAS.SetC(PCA)
	};
PCAS.SetC=function(PCA)
	{
		PI=PCA.SelP.selectedIndex;
		PCA.SelC.length=0;
		for(i=1;i<PCAC[PI].length;i++)
			{
				PCACT=PCACV=PCAC[PI][i];
				if(PCACT==SCT)
					PCACV="";
				PCA.SelC.options.add(new Option(PCACT,PCACV));
				if(PCA.DefC==PCACV)
					PCA.SelC[i-1].selected=true
			}
		if(PCA.SelA)PCAS.SetA(PCA)
	};
PCAS.SetA=function(PCA)
	{
		PI=PCA.SelP.selectedIndex;
		CI=PCA.SelC.selectedIndex;
		PCA.SelA.length=0;
		for(i=1;i<PCAA[PI][CI].length;i++)
			{
				PCAAT=PCAAV=PCAA[PI][CI][i];
				if(PCAAT==SAT)
					PCAAV="";
				PCA.SelA.options.add(new Option(PCAAT,PCAAV));
				if(PCA.DefA==PCAAV)
					PCA.SelA[i-1].selected=true
			}
	}

//====================ʡ������������=============================

//��JSʡ������������
//2012-04-16 by http://www.cnblogs.com/zjfree
var addressInit = function(_cmbProvince, _cmbCity, _cmbArea, defaultProvince, defaultCity, defaultArea)
{
	var cmbProvince = document.getElementById(_cmbProvince);
	var cmbCity = document.getElementById(_cmbCity);
	var cmbArea = document.getElementById(_cmbArea);
	
	function cmbSelect(cmb, str)
	{
		for(var i=0; i<cmb.options.length; i++)
		{
			if(cmb.options[i].value == str)
			{
				cmb.selectedIndex = i;
				return;
			}
		}
	}
	function cmbAddOption(cmb, str, obj)
	{
		//var option = document.createElement("OPTION");
		var option = new Option(str,str);
		option.obj = obj;
		cmb.options.add(option);
		//option.innerText = str;
		//option.value = str;
		//option.obj = obj;
	}
	
	function changeCity()
	{
		cmbArea.options.length = 0;
		if(cmbCity.selectedIndex == -1)return;
		var item = cmbCity.options[cmbCity.selectedIndex].obj;
		for(var i=0; i<item.areaList.length; i++)
		{
			cmbAddOption(cmbArea, item.areaList[i], null);
		}
		cmbSelect(cmbArea, defaultArea);
	}
	function changeProvince()
	{
		cmbCity.options.length = 0;
		cmbCity.onchange = null;
		if(cmbProvince.selectedIndex == -1)return;
		var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
		for(var i=0; i<item.cityList.length; i++)
		{
			cmbAddOption(cmbCity, item.cityList[i].name, item.cityList[i]);
		}
		cmbSelect(cmbCity, defaultCity);
		changeCity();
		cmbCity.onchange = changeCity;
	}
	
	for(var i=0; i<provinceList.length; i++)
	{
		cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i]);
	}
	cmbSelect(cmbProvince, defaultProvince);
	changeProvince();
	cmbProvince.onchange = changeProvince;
}

