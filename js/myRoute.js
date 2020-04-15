//配置服务器请求地址
var domain = "http://127.0.0.1/ouliluoya_backend/backend/web";
var imageUrl = "http://127.0.0.1/ouliluoya_backend/backend/web/image/";


//##########################   配置接口地址  ###################################
//后台账户登陆
var adminLogin = domain + "/user/login";

//获取用户基本信息
var adminUserInfo = domain + "/user/admin-user-info";

//分页获取bannel
var UrlbannelPage = domain + "/bannel/page";

//修改bannel状态
var UrlbannelUpdateStatus = domain + "/bannel/update-status";

//bannel排序 上移或者下移
var UrlbannelExchangePosition = domain + "/bannel/exchange-position";

//添加bannel
var UrlbannelAdd= domain + "/bannel/add";

//删除bannel
var UrlbannelDel= domain + "/bannel/del";


//日志列表
var logPage = domain + "/log/page";

//添加后台账户
var userAdd= domain + "/user/add";

//通用上传文件
var uploadFile = domain + "/bannel/upload-file";

//上传logo文件
var uploadFile1 = domain + "/bannel/upload-file1";

//获取首页信息
var home = domain + "/bannel/bannel-type-num";

//获取一个楼层的所有品牌
//http://127.0.0.1/ouliluoya_backend/backend/web/bannel/get-louceng-pingpai?title=1F     解析方法同品牌这个页面




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

//bannel状态样式转换
var status_btn=new Array();
status_btn[1]="btn-success";
status_btn[2]="";
var status_fa=new Array();
status_fa[1]="fa-check";
status_fa[2]="fa-close";
var status_label=new Array();
status_label[1]="label-success";
status_label[2]="label-defaunt";
var status_click=new Array();
status_click[1]="member_stop";
status_click[2]="member_start";
//定义bannel 状态
var BANNEL_STATUS=new Array();
BANNEL_STATUS[1]="已启用";
BANNEL_STATUS[2]="已停用";

//################################公用方法###################

//动态加载数据内容
function initContent(data) {
    var status_btn=new Array();
    status_btn[1]="btn-success";
    status_btn[2]="";
    var status_fa=new Array();
    status_fa[1]="fa-check";
    status_fa[2]="fa-close";
    var status_label=new Array();
    status_label[1]="label-success";
    status_label[2]="label-defaunt";
    var status_click=new Array();
    status_click[1]="member_stop";
    status_click[2]="member_start";
    //定义bannel 状态
    var BANNEL_STATUS=new Array();
    BANNEL_STATUS[1]="已启用";
    BANNEL_STATUS[2]="已停用";
    //<video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video>
    //<img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/>
    var content = "";
    for (var i in data) {
        content += '<tr>\n' +
            '                <td><label><input type="checkbox" class="ace"><span class="lbl"></span></label></td>\n' +
            '                <td>' + data[i].id + '</td>\n' +
            '                <td>' + BANNEL_TYPE[data[i].image_type] + '</td>\n';
        if( data[i].image_type == 1 ){
            content += '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/></a></span></td>\n';
        }else{
            content += '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video></a></span></td>\n';
        }
        content +=
            '                <td>' + data[i].image_height + 'x' + data[i].image_width + '</td>\n' +
            '                <td>' + data[i].title + '</td>\n' +
            '                <td>' + data[i].content + '</td>\n' +
            '                <td>' + data[i].sort + '</td>\n' +
            '                <td class="td-status"><span class="label '+status_label[data[i].status]+' radius">' + BANNEL_STATUS[data[i].status] + '</span></td>\n' +
            '                <td class="td-manage">\n' +
            '                <a title="停用" href="javascript:;" onClick="'+status_click[data[i].status]+'(this,' + data[i].id + ')"   class="btn btn-xs '+status_btn[data[i].status]+'"><i class="fa '+status_fa[data[i].status]+' bigger-120"></i></a>\n' +
            '                <a title="删除" href="javascript:;"  onClick="member_del(this,' + data[i].id + ')"  class="btn btn-xs btn-warning" ><i class="fa fa-trash  bigger-120"></i></a>\n' +
            '                <a title="上移" href="javascript:;"  onClick="member_up(this,' + data[i].id + ')"  class="btn btn-xs btn-green" ><i class="fa fa-arrow-up  bigger-120"></i></a>\n' +
            '                <a title="下移" href="javascript:;"  onClick="member_down(this,' + data[i].id + ')"  class="btn btn-xs btn-lan" ><i class="fa fa-arrow-down  bigger-120"></i></a>\n' +
            '                </td>\n' +
            '</tr>\n';
    }
    return content;
}

//floor动态加载数据内容
function initContentFloor(data) {
    var status_btn=new Array();
    status_btn[1]="btn-success";
    status_btn[2]="";
    var status_fa=new Array();
    status_fa[1]="fa-check";
    status_fa[2]="fa-close";
    var status_label=new Array();
    status_label[1]="label-success";
    status_label[2]="label-defaunt";
    var status_click=new Array();
    status_click[1]="member_stop";
    status_click[2]="member_start";
    //定义bannel 状态
    var BANNEL_STATUS=new Array();
    BANNEL_STATUS[1]="已启用";
    BANNEL_STATUS[2]="已停用";
    //<video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video>
    //<img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/>
    var content = "";
    for (var i in data) {
        content += '<tr>\n' +
            '                <td><label><input type="checkbox" class="ace"><span class="lbl"></span></label></td>\n' +
            '                <td>' + data[i].id + '</td>\n' +
            '                <td>' + data[i].title + '</td>\n' +
            '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/></a></span></td>\n' +
            '                <td>' + data[i].sort + '</td>\n' +
            '                <td class="td-status"><span class="label '+status_label[data[i].status]+' radius">' + BANNEL_STATUS[data[i].status] + '</span></td>\n' +
            '                <td class="td-manage">\n' +
            '                <a title="停用" href="javascript:;" onClick="'+status_click[data[i].status]+'(this,' + data[i].id + ')"   class="btn btn-xs '+status_btn[data[i].status]+'"><i class="fa '+status_fa[data[i].status]+' bigger-120"></i></a>\n' +
            '                <a title="删除" href="javascript:;"  onClick="member_del(this,' + data[i].id + ')"  class="btn btn-xs btn-warning" ><i class="fa fa-trash  bigger-120"></i></a>\n' +
            '                <a title="上移" href="javascript:;"  onClick="member_up(this,' + data[i].id + ')"  class="btn btn-xs btn-green" ><i class="fa fa-arrow-up  bigger-120"></i></a>\n' +
            '                <a title="下移" href="javascript:;"  onClick="member_down(this,' + data[i].id + ')"  class="btn btn-xs btn-lan" ><i class="fa fa-arrow-down  bigger-120"></i></a>\n' +
            '                </td>\n' +
            '</tr>\n';
    }
    return content;
}

//brand动态加载数据内容
function initContentBrand(data) {
    var status_btn=new Array();
    status_btn[1]="btn-success";
    status_btn[2]="";
    var status_fa=new Array();
    status_fa[1]="fa-check";
    status_fa[2]="fa-close";
    var status_label=new Array();
    status_label[1]="label-success";
    status_label[2]="label-defaunt";
    var status_click=new Array();
    status_click[1]="member_stop";
    status_click[2]="member_start";
    //定义bannel 状态
    var BANNEL_STATUS=new Array();
    BANNEL_STATUS[1]="已启用";
    BANNEL_STATUS[2]="已停用";
    //<video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video>
    //<img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/>
    var content = "";
    for (var i in data) {
        var append = JSON.parse(data[i].append);

        content += '<tr>\n' +
            '                <td><label><input type="checkbox" class="ace"><span class="lbl"></span></label></td>\n' +
            '                <td>' + data[i].id + '</td>\n' +
            '                <td>' + append['louceng'] + '</td>\n' +
            '                <td>' + append['menpaihao'] + '</td>\n' +
            '                <td>' + append['cname'] + '</td>\n' +
            '                <td>' + append['ename'] + '</td>\n' +
            '                <td>' + append['brand_type']+ '</td>\n'+
            '                <td>' + data[i].content + '</td>\n' +
            '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><img src="' + imageUrl+append['logo'] + '"  width="100%" height="100%"/></a></span></td>\n' +
            '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><img src="' + imageUrl+append['image'] + '"  width="100%" height="100%"/></a></span></td>\n' +
            '                <td>' + data[i].sort + '</td>\n' +
            '                <td class="td-status"><span class="label '+status_label[data[i].status]+' radius">' + BANNEL_STATUS[data[i].status] + '</span></td>\n' +
            '                <td class="td-manage">\n' +
            '                <a title="停用" href="javascript:;" onClick="'+status_click[data[i].status]+'(this,' + data[i].id + ')"   class="btn btn-xs '+status_btn[data[i].status]+'"><i class="fa '+status_fa[data[i].status]+' bigger-120"></i></a>\n' +
            '                <a title="删除" href="javascript:;"  onClick="member_del(this,' + data[i].id + ')"  class="btn btn-xs btn-warning" ><i class="fa fa-trash  bigger-120"></i></a>\n' +
            '                <a title="上移" href="javascript:;"  onClick="member_up(this,' + data[i].id + ')"  class="btn btn-xs btn-green" ><i class="fa fa-arrow-up  bigger-120"></i></a>\n' +
            '                <a title="下移" href="javascript:;"  onClick="member_down(this,' + data[i].id + ')"  class="btn btn-xs btn-lan" ><i class="fa fa-arrow-down  bigger-120"></i></a>\n' +
            '                </td>\n' +
            '</tr>\n';
    }
    return content;
}

//active动态加载数据内容
function initContentActive(data) {
    var status_btn=new Array();
    status_btn[1]="btn-success";
    status_btn[2]="";
    var status_fa=new Array();
    status_fa[1]="fa-check";
    status_fa[2]="fa-close";
    var status_label=new Array();
    status_label[1]="label-success";
    status_label[2]="label-defaunt";
    var status_click=new Array();
    status_click[1]="member_stop";
    status_click[2]="member_start";
    //定义bannel 状态
    var BANNEL_STATUS=new Array();
    BANNEL_STATUS[1]="已启用";
    BANNEL_STATUS[2]="已停用";
    //<video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video>
    //<img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/>
    var content = "";
    for (var i in data) {
        var append = JSON.parse(data[i].append);
        content += '<tr>\n' +
            '                <td><label><input type="checkbox" class="ace"><span class="lbl"></span></label></td>\n' +
            '                <td>' + data[i].id + '</td>\n' +
            '                <td>' + BANNEL_TYPE[data[i].image_type] + '</td>\n'+
            '                <td>' + append['active_type'] + '</td>\n';
        if( data[i].image_type == 1 ){
            content += '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><img src="' + imageUrl+data[i].image_url + '"  width="100%" height="100%"/></a></span></td>\n';
        }else{
            content += '                <td><span class="ad_img"><a href="#" data-rel="colorbox" data-title="广告图"><video src="' + imageUrl+data[i].image_url + '" width="140px" controls="controls"></video></a></span></td>\n';
        }
        content +=
            '                <td>' + data[i].image_height + 'x' + data[i].image_width + '</td>\n' +
            '                <td>' + data[i].title + '</td>\n' +
            '                <td>' + data[i].content + '</td>\n' +
            '                <td>' + data[i].sort + '</td>\n' +
            '                <td class="td-status"><span class="label '+status_label[data[i].status]+' radius">' + BANNEL_STATUS[data[i].status] + '</span></td>\n' +
            '                <td class="td-manage">\n' +
            '                <a title="停用" href="javascript:;" onClick="'+status_click[data[i].status]+'(this,' + data[i].id + ')"   class="btn btn-xs '+status_btn[data[i].status]+'"><i class="fa '+status_fa[data[i].status]+' bigger-120"></i></a>\n' +
            '                <a title="删除" href="javascript:;"  onClick="member_del(this,' + data[i].id + ')"  class="btn btn-xs btn-warning" ><i class="fa fa-trash  bigger-120"></i></a>\n' +
            '                <a title="上移" href="javascript:;"  onClick="member_up(this,' + data[i].id + ')"  class="btn btn-xs btn-green" ><i class="fa fa-arrow-up  bigger-120"></i></a>\n' +
            '                <a title="下移" href="javascript:;"  onClick="member_down(this,' + data[i].id + ')"  class="btn btn-xs btn-lan" ><i class="fa fa-arrow-down  bigger-120"></i></a>\n' +
            '                </td>\n' +
            '</tr>\n';
    }
    return content;
}

//添加bannel
// function bannelAdd(data){
//
// }

//删除bannel
function bannelDel(ids)
{
    var idsStr = "";
    if($.isArray(ids)){
        idsStr = ids.join(",");
    }else{
        idsStr = ids;
    }
    var data = {};
    data.token = localStorage.token;
    data.ids = idsStr;
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: UrlbannelDel,
        data: data,
        success: function (res) {
            //成功后刷新这个页面
            layer.msg('已删除!', {icon: 1, time: 1000});
            location.reload();
        }
    });
}


/**
 *   产品上移或者下移
 */
function exchangeSort(id,direction)
{
    //分页获取数据
    var data = {};
    data.token = localStorage.token;
    data.id = id;
    data.direction = direction;
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: UrlbannelExchangePosition,
        data: data,
        success: function (res) {
            //成功后刷新这个页面
            //initPage();
            location.reload();
        }
    });
}

//修改bannel 显示隐藏状态
function changeStatus(id)
{
    var data = {};
    data.id = id;
    data.token = localStorage.token;
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: UrlbannelUpdateStatus,
        data: data,
        success: function (res) {
            if (res.code != 200) {
                layer.msg(res.message, {icon: 6, time: 1000});
            }
        }
    });
}
