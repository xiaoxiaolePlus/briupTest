/**
 * Created by Jordan on 2016-11-01.
 */
/**
 * Created by Jordan on 2016-11-01.
 */
//初始化
createDB();
//声明用户类
function User(name,passwd,gender) {
    this.name = name;
    this.passwd = passwd;
    this.gender = gender;
}
//创建数据库，保证加载进来就可以有数据库
function createDB(){
    //获得可以创建一个数据库的对象
    var req=window.indexedDB.open("users");
    //获取数据库更新时的操作
    req.onupgradeneeded = function (event) {
        //创建一个数据库对象
        var db=event.target.result;
        //防止重复创建
        if(db.objectStoreNames.contains("user")){
            db.deleteObjectStore("user");
        }
        db.createObjectStore("user",{
            keyPath:"userId",
            autoIncrement:"true"
        })
    }
}
//获得数据库
function getDB(handler) {
    var req=window.indexedDB.open("users");
    req.onsuccess=function (event) {
        var db=event.target.result;
        var tx=db.transaction("user","readwrite");
        var store=tx.objectStore("user");
        handler(store);
    }
}
//登录函数
function login(user,fun,fun2){
    if (user.name==""||user.passwd==""){
        alert("请输入用户名或密码");
    }else{
        getDB(function (store) {
            var req=store.getAll();
            req.onsuccess=function () {
                var flag=false;
                for(var i=0;i<this.result.length;i++){
                    if (user.name==this.result[i].name&&user.passwd==this.result[i].passwd){
                        window.name=this.result[i].name;
                        fun();

                        flag=true;
                        break;
                    }
                }
                if(!flag){
                    fun2();
                }
            }
        });
    }

}
//注册函数
function register(user,fun,fun2) {
    if (user.name==""||user.passwd==""){
        alert("请输入用户名或密码");
    }else{
        getDB(function (store) {
         var req=store.getAll();
         req.onsuccess=function () {
         var flag=false;
         for(var i=0;i<this.result.length;i++){
         if(user.name==this.result[i].name){
         fun2();
         flag=true;
         break;
         }
         }
         if(!flag){
         var req=store.put(user);
         req.onsuccess=function () {
         fun();
         }
         }
         }
         })
    }

}
if(name==''){
    $("#login").text("请登录");
}else {
    $("#login").text(window.name);
    $("#regist").text("")
}
//console.log(name);










