// ����һ�������߳����ڽ��մӲ�ͬ���ӷ��͹�����ָ�ָ�����ɺ󽫽�����ص�������ͬ�������û���

onconnect = function(e) {
    var port = e.ports[0];
    var data = e.data;
    port.onmessage = function(e) {
        port.postMessage(e.data+"123");
    }
}