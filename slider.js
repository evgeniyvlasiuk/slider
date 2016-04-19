var i = 1;
var q = 1;
var slider = {
	slides:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'],
	frame:0, 
init: function() { 
	for (var z = this.slides.length; z > 0; z--) {
    $('#scr' + z).css('backgroundImage', "url("+this.slides[z-1]+")");
	$('#miniscr' + z).css('backgroundImage', "url("+this.slides[z-1]+")");	       
	}
},
bordnone: function(){
    $('.minsc').css('border', "none");
},
left: function() { 
	var ws = (parseInt($('#mini').css('width')) - parseInt($('#pol').css('width')))/8;
	var wb = parseInt($('#big').css('width'))-parseInt($('#pol1').css('width'));
	var ws1 = (parseInt($('#mini').css('width'))-parseInt($('#pol').css('width')))-57;
    this.frame--;
    if(this.frame < 0){ 
        this.frame = this.slides.length-1;
		$('#mini').animate({marginLeft: "-" + ws1});
		$('#big').animate({marginLeft: "-" + wb});
	}
	else{
		$('#mini').animate({marginLeft: "+=" + ws});
        $('#big').animate({marginLeft: "+=" + parseInt($('#pol1').css('width'))});
	}
	slider.bord()
},
right: function() { 
	this.frame++;
	var ws = (parseInt($('#mini').css('width')) - parseInt($('#pol').css('width')))/8;
    console.log(ws); 
    if(this.frame > 7){
		this.frame = 0;
		$('#mini').animate({marginLeft: "0"});
		$('#big').animate({marginLeft: "0"});
	}
    else{
        $('#mini').animate({marginLeft: "-=" + ws});
	    $('#big').animate({marginLeft: "-=" + parseInt($('#pol1').css('width'))});
    }
	slider.bord();
},
bord: function(){
	this.bordnone();
	var t = 1+this.frame;
	$('#miniscr'+t).css('border', "2px solid #FFFFFF"); 
},
start: function() {
	var go = setInterval(function() { 
	slider.right();
	},2000);
    $("#stop").on('click', function(){
    i=1;
    clearInterval(go);
    });
} 
}
/*-------------------------------------------READY-------------------------------------------------*/
$(document).ready(function() {
   slider.init();
   slider.bord();
   slider.start();
   var lr = setInterval(function() { 
      q=1;
	},1000);

$("#play").on('click', function(){
	if (i==1) {
	slider.start();
	i+=1;
	}
});
$(".left").on('click', function(){
    if (q==1) {
	slider.left();
	q+=1;
	}
});
$(".right").on('click', function(){
    if (q==1) {
	slider.right();
	q+=1;
	}
});
$(".minsc").on('click', function(){
	var a = $(this).attr('id');
	var b = (a[a.length-1])-1;
	console.log(b);
	$('#mini').animate({marginLeft: "-" + ((parseInt($('#mini').css('width')) - parseInt($('#pol').css('width')))/8)*b});
	$('#big').animate({marginLeft: "-" + (parseInt($('#pol1').css('width'))*b)});
	slider.frame = b;
	slider.bord();
});
});