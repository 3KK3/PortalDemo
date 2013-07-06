
/**
 * 声明seajs模块
 */
define(function(require, exports, module){
	var App = require('../base/match');
	
	return {
		initialize: function(){
			C.Config = $.extend(C.Config, {
				matchDataUrl_pro: 'http://caipiao.m.taobao.com/lottery/html5/getMatchsInfoDcAjax.do', //��������
				matchDataUrl_pre: 'http://caipiao.wapa.taobao.com/lottery/html5/getMatchsInfoDcAjax.do', //��������
				matchDataUrl_dev: 'http://caipiao.waptest.taobao.com/lottery/html5/getMatchsInfoDcAjax.do'//��������
			});
	
			C.ZQDC = new App.app({
				id: 'C.ZQDC',
				lotteryType: 16,
				lotteryTypeName: 'DC_SPF',
				betpage: 'zqdcbet.html',
				filterpage: 'zqdcfilter.html',
				minMatch: 1
			});
		}
	}
});