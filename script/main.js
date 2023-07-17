
// gnb
$(".sub").css("display", "none")
$("#gnb>li").on("mouseenter", function () {
    $(".sub, .gnbbg").stop().slideDown();
    // $(".gnbbg").stop().slideDown();
});


$("#gnb>li").on("mouseleave", function () {
    $(".sub, .gnbbg").stop().slideUp();
    // $(".gnbbg").stop().slideUp();
});

// search
$(".search_i").on("click", function () {
    $(".search").css("display", "block");
});
$(".close_search").on("click", function () {
    $(".search").css("display", "none");
});


//tab
// $(".menu div").removeClass("on");
// $("tabmenu").removeClass("on");
$("#tab li").on("click", function () {
    $("#tabmenu").addClass("on");
    $(".close").css("display", "block");
    $("#tab").find("li").removeClass("on");
    // $(".menu").find("div").addClass("on");
    $(this).addClass("on");
    var conId = $(this).children("a").attr("href");
    $(conId).addClass("on");
});

$(".close").on("click", function () {
    $(".close").css("display", "none");
    // $(".menu").css("display", "none");
    $(".menu div").removeClass("on");
    $("#tabmenu").removeClass("on");
});


//slide_menu
$(".list>li").on("click", function () {
    $(".list").find("li").removeClass("on");
    $(this).addClass("on")
});



//slide

let frame = document.querySelector(".frame");
let frame_li = frame.querySelectorAll("li");
let btns = document.querySelectorAll(".btns li");

btns.forEach(function(el, index){
    el.addEventListener("click", function(e){
        e.preventDefault();
        for(let el of btns){el.classList.remove("on")}
        btns[index].classList.add("on");
        frame.style.marginLeft = "-100"* index + "%";
    })
})


//sub
//travel tab
function MyTab(el) {
    this.tab = document.querySelector("#tabBox");
    this.tabbtns = tab.querySelectorAll("ul li");
    this.boxes = tab.querySelectorAll("article div");
    this.bindingEvent();

}

MyTab.prototype.bindingEvent = function () {
    this.tabbtns.forEach(function (el, index) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(this);
            this.active(this.tabbtns, index);
            this.active(this.boxes, index);
        }.bind(this))
    }.bind(this))

}

MyTab.prototype.active = function (arr, index) {
    for (let el of arr) el.classList.remove("on");
    arr[index].classList.add("on");
}
const useTab = new MyTab("#tabBox");