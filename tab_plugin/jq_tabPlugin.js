// JavaScript Document
(function($) {

 $.fn.tabPlugin = function(options){

  // デフォルト値 --------------------------------
  
  var defaults = {
   'speed' : 800,
   'tabaction':'fadeIn',   // [fadeIn] or [slideDown]
   'heighttype':'auto'     // [auto] or [flat]
  };

  // 引数とデフォルトを比較＆[setting]へ格納  ------
  
  var setting = $.extend(defaults, options);


  // プラグインの処理 ------------------------------

	// tabの数
	var tabnum = $('#switchtab li').length;
	// 全体の横幅
	var contwidth = $('#tab').width();
	// 各tabの横幅
	var tabwidth = contwidth/tabnum
	
	$('.tab_innerbx:first').show();
	$('#switchtab li').outerWidth(tabwidth);
	$('#tab li:first').addClass('active');
	$('.tab_innerbx:first').addClass('active');


	$('#tab li').click(function() {
		$('#tab li').removeClass('active');
		$(this).addClass('active');
		$('.tab_innerbx').hide();
		
			if(setting['tabaction'] == 'slideDown'){
			$($(this).find('a').attr('href')).slideDown(setting['speed']);
			}else{
			$($(this).find('a').attr('href')).fadeIn(setting['speed']);
			}

		return( this );
	});


}
})(jQuery);