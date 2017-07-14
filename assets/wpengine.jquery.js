jQuery.noConflict();
jQuery(document).ready(function($) {
	
	wpe_load_report();
	
	$('.refreshit').click(function() { 				
		$('.content').html('');
		$('.temp-message').show();
		$('.checkzone').addClass('engineloading');
		wpe_load_report(); 
	});
	
function wpe_load_report() {
	setTimeout(function () {
		$.post(ajaxurl,{
			'_wpnonce': $('.temp-message').attr('rel'),
			'action'	:	'wpe_check'
			}, function(response)  {
				$('.checkzone').removeClass('engineloading');
				$('.temp-message').hide();
				$('.content').html(response).show();
				
  		$('.content li').each(function(index,obj) {
 
				$(this).find('a').click(function(e) {	
					e.preventDefault();
					var plugin_src = $(this).attr('href');
					var _wpnonce = $(this).attr('rel');
					$.post(ajaxurl, {
								'action'		:'wpe_ajax',
								'wpe_action':'wpe_deactivate_plugin',
								'plugin_src'		: plugin_src,
								'_wpnonce'	:	_wpnonce
							},function(response) {
								console.log();
								message = $(obj).find('a');							
								message.fadeOut(1,function() {
									message.remove();
									$(obj).find('img').show();	
									setTimeout(function() {
										$(obj).append('<span>Plugin deactivated.</span>');
										$(obj).find('img').hide();	
									},500);
								});
						});										
					});
				});
			}
	)},1500);
}

});

