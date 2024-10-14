//hit's cache at 2024-10-13 18:22:18
(function() {
	var placeholder = true;
	var data = {"id":"mqa_82PgpiU2","width":"100%","height":"100px","device_pc":"1","device_wap":"1","adList":[{"ad_id":"407","ad_name":"&#49;","ad_img":"https:\/\/gg.mdysgg.cc\/upload\/20240922\/1753538869.gif","ad_url":"\/template\/m1938pc\/html9\/ads\/lunbo2.html","ad_desc":"","ad_html":"","weight":"1"},{"ad_id":"428","ad_name":"&#49;&#49;&#49;","ad_img":"https:\/\/pic.adsimg1991.com\/yuepao\/xiaotu\/3.gif","ad_url":"https:\/\/br26.top","ad_desc":"","ad_html":"","weight":"1"}]};
	var div_id = 'mm_'+data.id+'_'+String(Date.now());
	placeholder && document.write('<div id="'+div_id+'"></div>');
	var bindData=function(data){
		layui.use(['laytpl', 'jquery'], function(){
			var laytpl = layui.laytpl;
			var $ = layui.jquery;
			if((data['device_pc'] == 1 && $(window).width() > 768) || (data['device_wap'] == 1 && $(window).width() <= 768)){
				laytpl('<div id="{{d.id}}" class="mqa-box {{d.id}} mqaCloseAll">{{# layui.each(d.adList, function(index, ad){ }}<li><a href="{{ad.ad_url}}" target="_blank" data-id="{{ad.ad_id}}"><img src="{{ad.ad_img}}" border="0" style="width:100%; height:100px; border: 0px inset #00FF00" /></a></li>{{# }) }}<span class="ad-logo">骞垮憡</span></div>').render(data, function(html){
					if(placeholder == true) {
						$('#'+div_id).append(html);
					}else{
						$('body').append(html);
					}
				});
				$('#'+div_id+' .ad-close, #'+data.id+' .ad-close').click(function(){
					$('#'+div_id+', #'+data.id).remove()
				});
			}
		});
	}
	var script = document.createElement('script');
	script.type = 'text/javascript';
	//script.src = 'https://gg.mdysgg.cc/component/layui/layui.js';
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
	var style = document.createElement('style');

	style.type = 'text/css';
	style.innerHTML = '	.mqa-box {width:100%; position:relative;display:block;margin:0 auto;overflow:hidden;}	.mqa-box ul,.mqa-box li{maring:0;padding:0;list-style:none;}	.mqa-box .ad-logo {position:absolute;top:0;right:0;background:rgba(0,0,0,.3);border-radius:.5px 2px .5px .5px;height:18px;line-height:18px;color:#fff;padding:0 5px;font-size:12px;z-index:188}	.mqa-box .ad-close {position:absolute;bottom:0;right:0;background:rgba(0,0,0,.3);border-radius:50%;height:18px;line-height:18px;color:#fff;padding:0 5px;font-size:12px;z-index:188;cursor:pointer;}';
	head.appendChild(style);
	script.onload = function(){
		bindData(data);
	}
})();