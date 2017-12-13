


var val = [];
var randonworking;
var setgame = true;
var crystal=[];
var sum=0;
var j=0;
var k=0;
var win=0;
var loss=0;

$(document).ready(function() {
var randomvar = Math.floor((Math.random() * 100  ) + 1);
  $("#randomnum").append(randomvar);


    randomcrystalnum ();
    userselect ();
    


 
  
    // input ();

function randomcrystalnum() {
  for (var i=0; i < 3; i++){
    val[i] = Math.floor((Math.random() * 15) + 1);
    console.log(val[i]);

   if (i===0){

    var picbtn = $("<button>");
    picbtn.addClass("pic1 userchoice");
    picbtn.attr('data-letter', val[i]);
    picbtn.append(val[i]);
    $("#button").append(picbtn);
  }else if(i===1){

    var picbtn = $("<button>");
    picbtn.addClass("pic2 userchoice");
    picbtn.attr('data-letter', val[i]);
    picbtn.append(val[i]);
    $("#button").append(picbtn);
  }else if(i===2){

    var picbtn = $("<button>");
    picbtn.addClass("pic3 userchoice");
    picbtn.attr('data-letter',val[i]);
    picbtn.append(val[i]);
    $("#button").append(picbtn);
  }

  }
}

   function userselect(){
    
$(".userchoice").on("click", function() {

 crystal[k] = ($(this).attr('data-letter'));
 crystal[k] = parseInt(crystal[k]);
sum =parseInt(sum);
sum = crystal[k] + sum;
document.getElementById("totalscore").innerHTML= sum;
console.log(sum);

k++;

if (sum === randomvar){
  alert("You Win!")
  $(document).ready(function() {
randomvar = Math.floor((Math.random() * 100) + 1);
  $("#randomnum").empty();
  $("#randomnum").append(randomvar);
  sum=0;
  document.getElementById("totalscore").innerHTML= sum;
  win++;
  $('#winz').html(win);
});

  
} if(sum >randomvar){
  alert("you lose");

$(document).ready(function() {
randomvar = Math.floor((Math.random() * 100) + 1);
  $("#randomnum").empty();
  $("#randomnum").append(randomvar);
  sum=0;
  document.getElementById("totalscore").innerHTML= sum;
  loss++;
console.log(loss);
  $('#lossz').html(loss);
  
  
});
  
}

 


 
 });
}
});
      
    
   

// function input() {
//      $(".number").on("click", function() {
//        secondNumber += $(this).val();
//           $("#second-number").text(secondNumber);

      

  

   


    // $("crystals").on("click",function(){


      //
    
 