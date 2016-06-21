$(document).ready(function(){
  $("form#word-play").submit(function(event) {
    event.preventDefault();

    var input = $("input#sentence").val();
    var array = input.split(" ");
    var arrayReverse = array.reverse();
    var string = arrayReverse.toString();
    console.log(string);



  });
});
