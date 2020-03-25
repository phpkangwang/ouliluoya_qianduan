//配置服务器请求地址
var domain = "http://127.0.0.1/ouliluoya_backend/backend/web";
var imageUrl = "http://127.0.0.1/ouliluoya_backend/backend/web/image/";


//##########################   配置接口地址  ###################################
//后台账户登陆
var adminLogin = domain + "/user/login";

//获取用户基本信息
var adminUserInfo = domain + "/user/admin-user-info";

//分页获取bannel
var bannelPage = domain + "/bannel/page";

//修改bannel状态
var bannelUpdateStatus = domain + "/bannel/update-status";

//bannel排序 上移或者下移
var bannelExchangePosition = domain + "/bannel/exchange-position";

//添加bannel
var bannelAdd= domain + "/bannel/add";

//删除bannel
var bannelDel= domain + "/bannel/del";

//上传文件
var uploadFile = domain + "/bannel/upload-file";







//##########################js常量定义
//1屏保列表2主页3楼层4品牌5活动6服务
var bannelPage_pingbao = 1;
var bannelPage_zhuye = 2;
var bannelPage_louceng = 3;
var bannelPage_pingpai = 4;
var bannelPage_huodong = 5;
var bannelPage_fuwu = 6;

//定义bannel类型
var BANNEL_TYPE=new Array();
BANNEL_TYPE[1]="图片";
BANNEL_TYPE[2]="视频";
