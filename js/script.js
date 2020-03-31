$(document).ready(function(){
  $("#button").click(function(button){
        event.preventDefault();
       
        var countBy = parseInt($("#countBy").val());
        var countTo = parseInt($("#countTo").val());
        
        
        calculate(countBy,countTo);
 });

var counting=[]

function calculate(countBy,countTo){

    for (var i = 0; i <= countTo; i += countBy) {
        if (i != 0){
            counting.push(i);
        }
     
    }
    console.log(counting);

    counting.forEach(function(count){
        $("<li>" + count + "</li>").appendTo("#result");
        
    });
    }
  
    return calculate
});

    

 

