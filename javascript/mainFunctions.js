/**
 * 这是网页的主要JS脚本,大多依附于JQuery
 * @author _dongbob_
 */


/*平滑隐藏文本内容*/
$(function(){

    //将所有article类的文本隐藏
    $(".article").hide();

    //点击对应文本标题隐藏文本
    $(function(){
        $("h1#t_info").click(function(){
            $("article#w_info").toggle(250);
        });
    });

    $(function(){
        $("h1#t_history").click(function(){
            $("article#w_history").toggle(250);
        });
    });

    $(function(){
        $("h1#t_achieve").click(function(){
            $("article#w_achieve").toggle(250);
        });
    });

    $(function(){
        $("h1#t_message").click(function(){
            $("article#w_message").toggle(250);
        });
    });

});


/*滚动回顶部*/
$(function() {

    $("#toTop").hide();
    //当滚动条的位置处于距顶部30像素以下时，跳转链接出现，否则消失

    $(window).scroll(function() {
        if ($(window).scrollTop() > 30) {
            $("#toTop").fadeIn(500);
        } else {
            $("#toTop").fadeOut(500);
        }
    });

    //滑动回到顶部 点击事件
    $("#toTop").click(function(){
        $(".article").hide(250);
        $("body,html").animate({'scrollTop':0});
    });

});

/*首页图片淡入*/
$(function(){
    
    $(".image").hide();
    $(".image").fadeIn();

});