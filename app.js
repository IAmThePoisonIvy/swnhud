$(document).ready(function(){

	var healths = $(".healthBox").text();

	var statusArray = [];
	var statusColors = [];

	function getStatus(index1,index2){
		var numerator = healths[index1];
		var denominator = healths[index2];

		var floatHealth = numerator/denominator;

		statusArray.push(floatHealth);
	};

	getStatus(6,9);
	getStatus(21,24);
	getStatus(36,39);
	getStatus(51,54);
	getStatus(66,69);
	getStatus(81,84);

	function decimalToHexString(number){
	    if (number < 0){
			number = 0xFFFFFFFF + number + 1;
		};
		return number.toString(16).toUpperCase();
	};

	for(i=0;i<6;i++){
		$(".healthBox").eq(i).css({"color":"#"+decimalToHexString(255-Math.round(statusArray[i]*255))+"00"+decimalToHexString(Math.round(statusArray[i]*255))});
	};

	$("body").attr({"background":"http://45.media.tumblr.com/8f637444a51ff813583790301736bbea/tumblr_nzckiqbLw51uf0h9xo1_500.gif"});
	document.body.style.backgroundSize = "100% 100%";

});