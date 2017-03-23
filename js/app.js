
console.log("workin on it");

$(document).ready(function(){
    $("p").click(function(){
        alert("The paragraph was clicked.");
        console.log("paragraph clicked");
    });
});




$('td').click(function(){
console.log($(this).attr('id'));
});

//first click puts an x into a box
$('td').click(function(){
$(this).addClass("O");


});
 

// each click alternates b/w an X and an O

// each box has a value 0-8 (so that it corresponds with a number in an array)

// i want that value to go into either...

// [012] O wins ?
// [.4.]
// [.7.]

//playerX = [      ]
//playerO = [      ]

// if a winning combo is pushed into array, 
    // return the function that that player won...

//  012, 345, 678 horizontal 
// 036, 147, 258 vert
// 048, 246 diagonal



//then display a <h3> Tag saying you won

//