/**
 * Created by Administrator on 2016.11.8.
 */

//加载页面
$("#menu .a1")[0].onclick = function (event) {
    event.preventDefault();
    $("#loadHTML").load("loadHTML/main.html")
};
$($("#menu .a1")[0]).trigger('click');

var loadA1 = $("#top .a1");

loadA1[1].onclick = function (event) {
    event.preventDefault();
    $("#loadHTML").load("loadHTML/login.html")
};

loadA1[2].onclick = function (event) {
    event.preventDefault();
    $("#loadHTML").load("loadHTML/reginster.html")
};

loadA1[5].onclick = function (event) {
    event.preventDefault();
    $("#loadHTML").load("loadHTML/collect.html")
};

