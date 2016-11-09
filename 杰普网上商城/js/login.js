

$("#blogin").bind("click",function () {
    var name= $("#bnamet").val();
    var passwd=$("#bpt").val();
    var user=new User(name,passwd,'');
    login(user,function () {
        alert("登陆成功");
        window.location.reload("index.html");
    },function () {
        alert("用户名或密码错误，请重新登录");
    })
});
$(".aa").bind("click",function () {
    $("#loadHTML").load("loadHTML/reginster.html");
});
