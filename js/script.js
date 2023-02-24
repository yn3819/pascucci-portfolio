$(function(){

    // icon hover
    $("figure .icon li .point").mouseenter(function(){
       $(this).siblings().addClass("on");
    });
    $("figure .icon li .point").mouseleave(function(){
        $(this).siblings(".hover_con").removeClass("on");
    });

 
    
    // signature Click - 컬러 변경
    $(".container .signature div").click(function(){
       $(this).siblings().removeClass("on");
       $(this).addClass("on");

         
    if($(".container .signature div:nth-of-type(1)").hasClass("on")){
        $(".container .sign_img div").removeClass("on");
        $(".container .sign_img div:nth-of-type(1)").addClass("on");
    } else if($(".container .signature div:nth-of-type(2)").hasClass("on")){
        $(".container .sign_img div").removeClass("on");
        $(".container .sign_img div:nth-of-type(2)").addClass("on");
    } else if($(".container .signature div:nth-of-type(3)").hasClass("on")){
        $(".container .sign_img div").removeClass("on");
        $(".container .sign_img div:nth-of-type(3)").addClass("on");
    }
    });

    // heart Click - 이미지 변경
    $(".swiper_container .price .icon_heart").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }      
    });

    // eye modal 창
    $(".swiper_container .price .icon_eye").click(function(){
        $(".swiper_container .swiper-slide .type").removeClass("pop");
        $(this).closest(".type").addClass("pop"); //closest : 가장 가까운 상위 요소 .type 찾기
        $(".modal").fadeIn(); //모달창 보여줘

       if ($(".swiper_container .swiper-slide.type1").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(1)").addClass("pop"); 

       } else if ($(".swiper_container .swiper-slide.type2").hasClass("pop")){
           $(".section03 .modal .inner ul li").removeClass("pop");
           $(".section03 .modal .inner ul li:nth-of-type(2)").addClass("pop");

       } else if ($(".swiper_container .swiper-slide.type3").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(3)").addClass("pop");

        } else if ($(".swiper_container .swiper-slide.type4").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(4)").addClass("pop");

        } else if ($(".swiper_container .swiper-slide.type5").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(5)").addClass("pop");

        } else if ($(".swiper_container .swiper-slide.type6").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(6)").addClass("pop");

        } else if ($(".swiper_container .swiper-slide.type7").hasClass("pop")){
            $(".section03 .modal .inner ul li").removeClass("pop");
            $(".section03 .modal .inner ul li:nth-of-type(7)").addClass("pop");
        }
    });

    $("body").click(function(e){
        if(e.target.className === "close" || e.target.className === "modal"){
            $(".section03 .modal").hide();
            // $(".section03 .blackOn").hide();
        }
    });
    $(".fa-xmark").click(function(e){
        $(".section03 .modal").hide();
    });
});

// gnb - 마우스 휠 이벤트 (클래스 추가/제거)
window.addEventListener("mousewheel", e=>{
    if(e.deltaY > 0) $("header").addClass("up");
    if(e.deltaY > 0) $("header").addClass("down");

    if(e.deltaY < 0) $("header").removeClass("up");
    if(e.deltaY <= 100 +"px") $("header").removeClass("down");
});

$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);
    
    //200보다 작으면
    if( scrollTop <= 200 ) {
        $("header").removeClass("down");
    }
    if(scrollTop>=320) {
        $(".signature_wrap .sign_tit").addClass("on_2");
    }
    if(scrollTop) {
        $(".header").addClass("on");
    }
    if(scrollTop) {
        $(".section01").addClass("on");
    }
    if(scrollTop>=1300) {
        $(".section02").addClass("on");
        $(".section02 .event_contents .event_coffee").addClass("on");
        $(".section02 .event_contents .event_txt").addClass("on");
    }
    if(scrollTop>=1650) {
        $(".section03 .coffee .coffee_tit").addClass("on");
        $(".section03 .coffee .coffee_p").addClass("on");
    }
    if(scrollTop>=2400) {
        $(".section04 .fran_txt .fran_tit").addClass("on");
    }

    $('.swiper-slide').hover(function(){ 
        swiper.autoplay.stop();  
        return false; 
    }, function(){ 
        swiper.autoplay.start();  
        return false; 
    });
    
});

// swiper
const swiper = new Swiper('.swiper_container', {
    //Optional parameters
    autoplay: {delay: 2000},
    speed: 500, //스와이프를 놨을 때 패널이 넘어가는 속도
    loop: true, //패널 무한반복 순환
    direction: "horizontal", //"vertical" 
    grabCursor: true,  //손가락 모양
    slidesPerView: "auto", //숫자값을 주면 해당 개수단위로 패널 표시 "auto" : 특정크기 지정
    spaceBetween: 20, //패널 사이 간격 (px)
    centeredSlides: true, //활성화 패널 중앙 배치
    pagination: {
        el:".swiper-pagination", //페이지네이션 버튼 추가(클래스 다르면 작동 불가)
        clickable: true, //클릭가능 여부 설정
        // type:"fraction" //글자로 변경
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    }
    
});