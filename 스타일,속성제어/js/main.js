/*
    jQuery DOM style
    $(선택자).css();
    - 선택한 DOM의 css변경--> DOM.css(변경할 내용)
    - 선택한 DOM의 css속성값 구하기 --> DOM.css("속성명");
    - 해당 메서드로 변경한 css값은 일반 stylesheet로는 변경불가
    - 실제 DOM(태그상에) 인라인스타일을 꽂아 넣음
*/

//$(".box").css("background-color", "hotpink");
/*
$(".box").css({
    backgroundColor : "pink",
    width: "50%",
    height: 400
});
*/

$(window).on("resize", function(){
    var wid = $(this).width();
    console.log(wid);

    if(wid < 540){
        $(".box").css({backgroundColor: "orange"});
    }
    if(wid >= 540 && wid <1100){
        $(".box").css({backgroundColor: "hotpink"});
    }
    if(wid >= 1100){
        $(".box").css({backgroundColor: "aqua"});
    }
});

var link = $("#test").attr("href");
console.log(link);

$("#test").attr({
    href : "https://www.nate.com",
    target : "_self",
    title : "현재창에서 네이트로 이동"
}).text("네이트");

