$(document).ready(function(){

    $("#mainpagesearchbutton").on("click",function(){
        event.preventDefault();
        document.location.href='./searchresults.html';
        localStorage.clear();
        var keyword=$("#main-page-search").val();
        localStorage.setItem('keyword', keyword);
    })

    $(document).on("click",".dropdown-genre",function(){
        event.preventDefault();
        document.location.href='./searchresults.html';
        localStorage.clear();
        var keyword=$(this).attr("data-value");
        localStorage.setItem('keyword', keyword);
    })


    $(document).on("keypress",function(){
        if (event.keyCode === 13) {
            console.log("enter");
            $("#mainpagesearchbutton").click();
        }
    });

})