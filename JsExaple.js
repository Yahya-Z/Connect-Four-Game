    // // // // // // // // // // // // // // // 
    // // BASIC LEVEL 1 - VIDEO NUMBER 15 // //
    // // // // // // // // // // // // // // 

// alert("welcome to your bank")
// var deposit = prompt("how much would you like to deposit today?")
// alert("you've depostied: "+deposit)
// console.log("you are a cool person")
/////////////////////////////////////////////////////////////////////////////////////////////////////////

     // // // // // // // // // // // // // // // // // // // 
    // // BASIC EXCERCISE & SOLUTIONS - VIDEO NUMBER 16 // // 
     // // // // // // // // // // // // // // // // // // // 

// var lbs = prompt("what is your weight in (lbs)?");
// var killo = lbs * 0.453592;
// alert("your weight in killos is: " +killo);
// console.log("Conversion Completed");
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // // // // // // // // // // // // //
    // // OPERATORES - VIDEO NUMBER 17 // //
    // // // // // // // // // // // // // //

// 1 === 1
// true

// 2 === 2
// true

// 2 == "2"
// true

// 2 === "2"
// false
// the reason these two - [2 == "2"] [2 === "2"] - results are diffrent is...
// becouse the two == means the same thing,
// and the three === means the same type,
// that why the three === came false, a string isn't the same as an integer

// // and
// 1 === 1 && 2 === 2
// true

// 1 === 1 && 2 === 2 && 1 === 2
// false

// // AND - && - must all be true to get true


// // OR - || -
// 1 === 2 || 1 === 1
// true

// // NOT - ! -
// undefined

// (1 === 1)
// true

// !(1 === 1)
// false

// !!(1 === 1)
// true

// !!!!!!!!(10 === 10)
// true

// var x = 1
// undefined

// var y = 2
// undefined

// "2" == y && x === 1
// true
// x >= 0 || y === "2";
// true
// !(x !== 1) && y === (1+1)
// true
// y !== "2" && x < 10
// true
// y !== x || y == "2" || x === 3;
// true
/////////////////////////////////////////////////////////////////////////////////////////////////////////

   // // // // // // // //  
   // // CONTROL FLOW // // 
   // // // // // // // //  

// var hot = false
// var temp = 40

    // if Statment
// if (temp>80) {
//     console.log("its hot outside!");
// }

    // if, else statment
// if (temp>80) {
//     console.log("its hot outside!");
// }else {
//     console.log("its not very hot today!");
// }

    // if, else if, else
// if (temp>80) {
//     console.log("its hot outside!");
// }else if (temp <= 80 && temp >= 50) {
//     console.log("Average temp Outside");
// }else if (temp < 50 && temp >= 32) {
//     console.log("it's pretty cold outside");
// } else {
//     console.log("it is very cold out");
// }

    // another exersize
// var ham = 0;
// var chees = 0;

// var report = "blank";

// if (ham >= 10 && chees >= 10) {
//     report = "strong sales of both ham and cheese!"
// }else if (ham === 0 && chees === 0) {
//     report = "nothing sold!"
// }else {
//     report = "we had some sales of items"
// }

// console.log(report);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

   // // // // // // // //  
   // // WHILE LOOPS // // 
   // // // // // // // //

// var x = 0;

// while (x < 5) {
//     console.log("x is currently: "+x);

//     if (x===3) {
//         console.log("x is equal to 3!");
//         break;
//     }

//     console.log("x is still less than 5, adding 1 to x");
    
//     x = x+1;
// }

// EXERSIE //
//////////// My Answer ////////////
// var y = 2

// while (y < 12) {
//     console.log(y);
//     y = y+2;
// }

//////////// The Answer ////////////
// var num = 1;

// while (num < 11) {
//     if (num%2 === 0) {
//         console.log(num);
//     }
//     num = num+1;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

  // // // // // // // //  
   // // FOR LOOPS // // 
  // // // // // // // //

// for (var i = 0;i<5;i++){
//     console.log("i Equals: "+i);
    
// }

// var word = "ABCDEFGHIJK"

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// var word = "ABABABABAB"

// for (var i = 0; i < word.length; i=i+2) {
//     console.log(word[i]);
// }

// LOOPS-EXERSIES //
//////////// Answers ////////////

// 1 //
// var y = 0 

// while (y < 5) {
//     console.log("Hello!");
//     y=y+1
// }

// for (var y = 0; y < 5 ; y++) {
//     console.log("Hello with For Loop!");
        
// }

// 2 //
// var x = 1

// while (x<25) {
//     if (x%2 !== 0) {
//         console.log(x);
//     }
//     x=x+1
// }

// for (var x = 1; x < 25; x++) {
//     if (x%2 !== 0) {
//         console.log(x);
//     }
// }

///// First Project /////

//////////// My Answer ////////////
// var FirstName = prompt("Hello There! Please Enter Your First Name to Proceed: ");
// var LastName = prompt("Please Enter Your Last Name to Proceed: ");
// var age = prompt("Please Enter your Age: ");
// var hieght = prompt("Pleas Enter your Hieght: ");
// var pet = prompt("if you'll Excuse Me, What's the Name of Your Pet? ");

// if (N == "y"+"y" ) {
//     console.log("hi spy");
    
// }
//////////// The Answer ////////////

// var FirstName = prompt("Hello There! Please Enter Your First Name to Proceed: ");
// var LastName = prompt("Please Enter Your Last Name to Proceed: ");
// var age = prompt("Please Enter your Age: ");
// var height = prompt("Pleas Enter your Height: ");
// var pet = prompt("if you'll Excuse Me, What's the Name of Your Pet? ");

// // Four Condeitions
// var nameCond = null;
// var ageCond = null;
// var heightCond = null;
// var petCond = null;

// // NAME CONDITION
// if (FirstName[0] === LastName[0]) {
//     nameCond = true;
// }else {
//     nameCond = false;
// }

// // AGE CONDITION
// if (age > 18 && age < 30) {
//     ageCond = true;
// }else {
//     ageCond = false;
// }

// // HEIGHT CONDITION
// if (height >= 170) {
//     heightCond = true;
// }else {
//     heightCond = false;
// }

// // PET CONDITION
// if (pet[pet.length-1] === "y" ) {
//     petCond = true;
// }else {
//     petCond = false;
// }
// if (pet[pet.length-1] === "y" ) {
//     allTime();
// }

// // THE MESSAGE
// if (nameCond && ageCond && heightCond) {
//     console.log("Bring Me $1,000,000,000 in CASH! or i'll Kill Your Dog!! hehehehehahahahahahعععععععععععععععع!!!!!!!!");
// }else {
//     console.log("Get Outta Here B****!  |-_-|");
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // // // // // // // // // // // // //
    // // my degging for  more knoledge // //
    // // // // // // // // // // // // // //
    
                ///// Cart Quantity Practic /////

// let cartQuantity = 0;

// function first1() {
//     console.log("hello");
//     console.log(2+2);
// }

// first1();
// first1();


                ///// Rock, Paper, Scissor Game Practic /////
// let computerMove = " ";

// function pickComputerMove() {
//     const randomNumber = Math.random();
  

//     if (randomNumber >= 0 && randomNumber < 1 / 3) {
//         computerMove = "rock"
//     }else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//         computerMove = "paper"
//     }else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//         computerMove = "scissors"
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // // // // // // // // // // // // //
    // // DOM (Document Object Modules) // //
    // // // // // // // // // // // // // //

// i used the function allTime to make the whole color and bold button work if the spy questions were answerde currectly
// function allTime() {
//     setTimeout(allTime, 500)

    // this function choses random hex numbers to change the color
    // function getRandomColor() {
    //     let letters = "0123456789ABCDEF";
    //     let color = '#'; 
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random()*16)];
    //     }
    //     return color
    // }


    // Select the button and paragraph elements
    // const paragraph = document.querySelector("p")
    // const bb = document.getElementById("bb");


    // here we used another function to call the getRandomColor function every 250 millseconde
    // function changeParagraphColor() {
    //     let = colorInput = getRandomColor()
    //     paragraph.style.color = colorInput;
    // }
    // setInterval(changeParagraphColor,500);


    // Check Local Storage on page load
    // if (localStorage.getItem("isBold") === "true") {
    //     paragraph.style.fontWeight = "bold";
    // }


    // Add event listener to the button
//     bb.addEventListener("click", function() {
//         // Toggle bold style
//         if (paragraph.style.fontWeight === "bold") {
//             paragraph.style.fontWeight = "normal";
//             localStorage.setItem("isBold", "false"); // Save state as not bold
//         } else {
//             paragraph.style.fontWeight = "bold";
//             localStorage.setItem("isBold", "true"); // Save state as bold
//         }
//     });
// }

    // // // // // // // // // // // // // // // // // // // // // // // // 
    // // // // // // // // // Jquery practic // // // // // // // // // // 
    // // // // // // // // // // // // // // // // // // // // // // // // 

// $('p').addClass("selected")
// $(document).ready(function(){
//     $('button').eq(-1).addClass('turnBlue');
//     $('button').eq(-1).on('mouseenter',function(){
//         $('p').css('color', 'blue');
//     }).on('mouseleave', function() {
//         $('p').css('color', ''); // Reset color on mouse leave
//     });
// });

// $("#bb").on("click", function(){
//     $("p").slideUp(2000)
// })

    // // // // // // // // // // // // // // // // // // // // // // // // 
    // // // // // // // // // Front End Project // // // // // // // // // // 
    // // // // // // // // // // // // // // // // // // // // // // // // 

let button = document.getElementsByTagName('button')
let tableSlot = document.querySelector('.class');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.button}, ${e.target.button}`);
        
    })
}


let player1 = prompt("Player One: Enter Your Nmae, You'll be Blue");
let player1Color = 'red';

let player2 = prompt("Player Two: Enter Your Name, You'll be Yellow");
let player2Color = 'yellow'
 
let game_on = true;
let table = $("table tr");

let gameActive = true;





// START WITH PLAYER 1
let currentPlayer = 1;
let currentName = player1;
let currentColor = player1Color;
$('h3').text(player1+" it is your turn, pick a column to drop in!")

// this is the main game function the button clicking
$('.button').on('click', function() {


    // this if loop doesn't allow players to keep placing chips after the game is over
    if (!gameActive) {
        console.log("Game is over. No more moves allowed.");
        return;
    }

    let col = $(this).closest('td').index();
    if (returnColor(0, col) !== "rgb(236, 236, 238)") {
        console.log(`Column ${col} is full. no more chips can be placed here.`);
        return;
    }


    
    let bottomAvail = checkBottom(col);
    changeColor(bottomAvail,col,currentColor)

    // this one shows the result
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
        $('h1').text(currentName+" You've won!")
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        console.log("We have a winner!");
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer * -1;
    
    // this one switch the turns
    if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName+" it is your turn")
        currentColor = player1Color;
    }else {
        currentName = player2;
        $('h3').text(currentName+" it is your turn")
        currentColor = player2Color;
    }
})


function checkBottom(col) {
    for (let row = 5; row >= 0; row--) {
        if (returnColor(row, col) === 'rgb(236, 236, 238)') { // Default slot color
            return row;
        }
    }
    return -1;
}

function changeColor(row, col, color) {
    table.eq(row).find('td').eq(col).find('button').css('background-color', color);
}

function returnColor(row, col) {
    return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(236, 236, 238)' && one !== undefined);
}




















function reportWin(rowNum,colNum) {
    console.log("You Won Starting at This Row,Col");
    console.log(rowNum);
    console.log(colNum);
}







// check for Horizontal Wins
function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row, col + 1),
                returnColor(row, col + 2),
                returnColor(row, col + 3)
            )) {
                console.log("Horizontal win");
                reportWin(row, col);
                return true;
            }else {
                continue;
            }
        }
    }
}

// Check for Vertical wins
function verticalWinCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row + 1, col),
                returnColor(row + 2, col),
                returnColor(row + 3, col)
            )) {
                console.log("Vertical win");
                reportWin(row, col);
                return true;
            }else {
                continue;
            }
        }
    }
}

// check for Diagonal wins
function diagonalWinCheck() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row + 1, col + 1),
                returnColor(row + 2, col + 2),
                returnColor(row + 3, col + 3)
                )) {
                console.log("Diagonal win (BL-TR)");
                reportWin(row, col);
                return true;
                }else if (colorMatchCheck(
                returnColor(row, col),
                returnColor(row - 1, col + 1),
                returnColor(row - 2, col + 2),
                returnColor(row - 3, col + 3)
                )) {
                console.log("Diagonal win (TL-BR)");
                reportWin(row, col);
                return true;
                }else {
                    continue;
                }
        }
    }
}







































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////     THE END     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

