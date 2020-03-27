var uploader_video = new plupload.Uploader({//创建实例的构造方法
    runtimes: 'html5', //上传插件初始化选用那种方式的优先级顺序
    browse_button: 'video_upload_btn', // 上传按钮
    url: "upload.php", //远程上传地址
    flash_swf_url : 'js/Moxie.swf', //swf文件，当需要使用swf方式进行上传时需要配置该参数
    silverlight_xap_url : 'js/Moxie.xap', //silverlight文件，当需要使用silverlight方式进行上传时需要配置该参数
    filters: {
        max_file_size: '1gb', //最大上传文件大小（格式100b, 10kb, 10mb, 1gb）
        mime_types: [//允许文件上传类型
            {title: "files", extensions: "mp4"}
        ]
    },
    //       chunk_size: "5mb", //分片上传文件时，每片文件被切割成的大小，为数字时单位为字节。也可以使用一个带单位的字符串，如"200kb"。当该值为0时表示不使用分片上传功能
    multi_selection: false, //true:ctrl多文件上传, false 单文件上传
});
  uploader_video.bind('FilesAdded',function(uploader,files){
      $("#video_name_box").css({"display": "inline-block"});
      $("#video_upload_btn").show();
      $("#video_file_name").text(files[0].name);
      $("#upload_video").removeClass("disabled");
      $("#upload_video").click(function() {
          uploader_video.start(); //调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
      })
      $("#video_iput").attr("file_id", files[0]['id'])
  });
  uploader_video.bind('UploadProgress',function(uploader,file){
      $("#video_loading").show();
      $('#upload_video_area,#video_upload_area').hide();
      var percent = file.percent;
      $("#percent").css({"width": percent + "%"});
      $("#percentnum").text(percent + "%");
      $("#video_success").hide();
  });
  uploader_video.bind('FileUploaded',function(uploader,file, info){
      $("#video_loading").hide();
      $("#video_success").show();
      var data = eval("(" + info.response + ")");//解析返回的json数据
      $("#video_iput").html("<input type='hidden'id='video_file' value='" + data.pic + "'/><input type='hidden'id='video_name' value='" + data.name + "'/>");
  });

  uploader_video.init();
  reupload_video();

function reupload_video() { //重新上传
    $('#video_upload_btn').show();
    $('#video_name_box').hide();
    $("#upload_video_area").show().addClass("disabled");
    $("#video_text").val("");
    $("#video_words_num").text(0);
    $("#video_success").hide();
    $("#video_file,#video_name").val("");
}

function checkVideoText(value) {
    var length = value.length;
    var other = 130 - length;
    if (length > 0) {
        $("#video_words_num").html(other);
    } else {
        $("#video_words_num").html("<span class='red'>" + other + "</span>");
    }
}
function video_upload_cancel() {  //取消上传
    uploader_video.stop();
    $("#video_loading,#video_name_box").hide();
    $("#video_upload_area,#video_upload_btn").show();
    $("#upload_video_area").show();
    $("#upload_video").addClass("disabled");
    $("#video_text").val("");
    $("#video_words_num").text(0);
    $("#video_success").hide();
    $("#video_file,#video_name").val("");
    var file_id = $("#video_iput").attr("file_id");
    var obj_file = uploader_video.getFile(file_id);
    uploader_video.removeFile(obj_file);
}
function fadeout_div(id) {
    $(id).fadeOut();
}
