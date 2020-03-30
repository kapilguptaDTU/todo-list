console.log("mai aa gya");
$("ul").on("click", "li", function(event){
//   event.stopPropogation();
    $(this).toggleClass("strike");
    console.log(event.which);
});
// $("ul").on("mouseenter", "li", function(event){
//     console.log("entered");
// //   event.stopPropogation();
// $("span").fadeIn();    
// });
// $("ul").on("mouseleave", "li", function(event){
//     console.log("leaving");
// //   event.stopPropogation();
// $("span").fadeOut();    
// });

$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().remove();

});
$(".plus").on("click", function(){
    console.log("plus clicked");
$("input").fadeToggle();
});


$("input").on("keypress",function(event){
  if(event.which===13){
      var inpuText=$(this).val();
      $(this).val("");
    $("ul").append("<li>"+ inpuText +"<span><i class=\"fas fa-trash-alt\"></i></span> "+"</li>");  
  }  
    
    
});


