$(document).ready(function(){

    $("#mainpagesearchbutton").on("click",function(){
        event.preventDefault();
        document.location.href='./searchresults.html';
        localStorage.clear();
        var keyword=$("#main-page-search").val();
        console.log(keyword);
        localStorage.setItem('keyword', keyword);
    })
})