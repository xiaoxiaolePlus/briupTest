/**
 * Created by Jordan on 2016-11-01.
 */
//注册按钮
//判断重复密码是否正确
var again = $(":input #yes");
console.log(again)
again.bind()
/*var pass = $("#passwd").val();
console.log(pass);
var again = $("#yes").val();
console.log(again);*/
if (pass == again) {
    //提交
    $("#xieyi").bind("click",function () {
        //alert();
        var name = $("#name").val();
        var passwd = $("#passwd").val();
        var gender = $("#gender").val();
        var user = new User(name,passwd,gender);
        register(user,function () {
            alert("注册成功");
            $("#loadHTML").load("loadHTML/login.html");
        },function () {
            alert("用户已存在");
            $("form")[0].reset();
        })
    });
} else {}
$("#tr5a").bind("click",function (event) {
    event.preventDefault();
    $("#modal").modal({
        opacity:30,
        modal:true,
        escClose:true
    });
});