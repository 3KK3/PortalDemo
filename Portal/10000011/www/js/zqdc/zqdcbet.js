
/**
 * 声明seajs模块
 */
define(function(require, exports, module){
	var App = require('../base/sportbet');
	
	return {
		initialize: function(){
			C.ZQDC = new App.app({
				id: 'C.ZQDC',
				lotteryType: 16,
				lotteryTypeName: 'ZQDC',
				minMatch: 1,
				hasRepeat: false,  //�Ƿ�ȥ��
				percent: 0.65  //����ֳ�
			});
		}
	}
});