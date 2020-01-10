let ShowWidth = $(document).width();
let ShowHeight = $(document).height();

init();

// 初始化函数
function init(){
    let l = 0;
    let aside =$("aside");
    $("#UpButton").hide();

    $("#floatBottom img").attr('src','image/wechat.jpg');

    const listItem = $(".list");
    let listHeight =listItem[0].getBoundingClientRect().height;
    let listWidth =listItem[0].getBoundingClientRect().width;
    let rowNum =Math.floor((ShowWidth*0.8-aside.width())/listWidth);
    let i = Math.ceil(9/rowNum);
    aside.css('height',listHeight*i+"px");

    //浮动按钮的自适应大小
    if(ShowWidth>1200){
         l = 50;
    }else {
         l = ShowWidth*0.05;
    }
    $("#floatBottom i").each(function () {
        $(this).css("width",l+"px");
        $(this).css("height",l+"px");
        $(this).css("font-size",l/2.5+"px");
        $(this).css("line-height",l+"px");
    });

    console.log('init successfully');
}

// 窗口大小变化的自适应
$(window).resize(function () {
    ShowWidth = $(document).width();
    ShowHeight = $(document).height();
    init();
});

$(document).ready(function() {

    // 滚动事件
    $(window).scroll(function () {
        const s = $(this).scrollTop();
        if (s > 0) {
            // 返回顶部按钮
            $("#UpButton").show();
            // 顶部Fix导航Opacity过渡
        }
        else if (s === 0) {
            $("#UpButton").fadeOut();
        }
    });


    // 返回顶部
    $("#UpButton").click(function () {
        $("html, body").animate({scrollTop: "0"}, 500);
    });

    // 微信公众号图片显示
    $("#WeChatButton").hover(function () {
        $("#floatBottom img").fadeIn();
    },function () {
        $("#floatBottom img").fadeOut();
    })

});