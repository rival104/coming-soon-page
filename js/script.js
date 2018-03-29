
$(document).ready(function(){
	//chaneged to 75 to reset time to 99 days.
	ts = new Date(2018, 75, 95, 12)

	// if((new Date() > ts)){
	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;

	// }

	/* ---- Countdown timer ---- */
	$('#counter').countdown({
		
		// timestamp : (new Date()).getTime() + 24*10*60*60*1000
		timestamp: ts.getTime() + 10 * 24 * 60 * 60 * 1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
