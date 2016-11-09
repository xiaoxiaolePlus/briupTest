/**
 * Created by Administrator on 2016.10.31.
 */
//图片轮播
var index = 0;
function change() {
    index++;
    if (index > 4){
        index = 0;
    }
    $("#dright a img").fadeTo(0, 0.5).hide();
    $("#dright a").eq(index).find("img").show().fadeTo(200, 1);
    $('#dright div div').eq(index).addClass("g").siblings('div').removeClass("g");
}
var timer = setInterval(change, 2000);
$('#dright').hover(function(){
    clearInterval(timer);
}, function(){
    timer = setInterval(change, 2000);
});
//console.log($('.gundongtiao div'));
$('.gundongtiao div').mouseover(function(){
    //console.log($(this));
    index = $(this).index();
    $(this).addClass('g').siblings('div').removeClass('g');
    $("#dright a img").fadeTo(0, 0.5).hide();
    $("#dright a").eq(index).find("img").show().fadeTo(200, 1);
});

