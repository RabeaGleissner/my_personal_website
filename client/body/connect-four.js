 var tr;
 var td;
 var div;
 var button;
 var col1 = [];
 var col2 = [];
 var col3 = [];
 var col4 = [];
 var col5 = [];
 var col6 = [];
 var col7 = [];
 var num = 6;

   Template.connectFour.events({
     
  // Create game grid and buttons on click

   "click .new-game": function () {
    $('.new-game').hide();
    
    for (var k = 1; k < 8; k++){
    button = $(document.createElement('button'));
    $(".coin-selectors").append(button);
    }

    for (var i = 1; i < 7; i++){
       tr = $(document.createElement('tr'));
       $(".connect-four-table").append(tr);

       for (var j = 1; j < 8; j++){
       td = $(document.createElement('td'));
       tr.append(td);
       td.append('<div class="coin"></div>');

       }
    }
   $('.coin-selectors button:nth-child(1)').addClass('col1');
   $('.coin-selectors button:nth-child(2)').addClass('col2');
   $('.coin-selectors button:nth-child(3)').addClass('col3');
   $('.coin-selectors button:nth-child(4)').addClass('col4');
   $('.coin-selectors button:nth-child(5)').addClass('col5');
   $('.coin-selectors button:nth-child(6)').addClass('col6');
   $('.coin-selectors button:nth-child(7)').addClass('col7');
   $('tr:nth-child(1)').addClass('row1');
   $('tr:nth-child(2)').addClass('row2');
   $('tr:nth-child(3)').addClass('row3');
   $('tr:nth-child(4)').addClass('row4');
   $('tr:nth-child(5)').addClass('row5');
   $('tr:nth-child(6)').addClass('row6');
   $('td:nth-child(1)').addClass('col1');
   $('td:nth-child(2)').addClass('col2');
   $('td:nth-child(3)').addClass('col3');
   $('td:nth-child(4)').addClass('col4');
   $('td:nth-child(5)').addClass('col5');
   $('td:nth-child(6)').addClass('col6');
   $('td:nth-child(7)').addClass('col7');
   },
   // Methods to place a coin by clicking a button
   "click button.col1": function () {
    col1.push('black');
    placeCoin(1, "black filled");
    computerPlay();
   },
   "click button.col2": function () {
    col2.push('black');
    placeCoin(2, "black filled");
    computerPlay();
   },
   "click button.col3": function () {
    col3.push('black');
    placeCoin(3, "black filled");
    computerPlay();
   },
   "click button.col4": function () {
    col4.push('black');
    placeCoin(4, "black filled");
    computerPlay();
   },
   "click button.col5": function () {
    col5.push('black');
    placeCoin(5, "black filled");
    computerPlay();
   },
   "click button.col6": function () {
    col6.push('black');
    placeCoin(6, "black filled");
    computerPlay();
   },
   "click button.col7": function () {
    col6.push('black');
    placeCoin(7, "black filled");
    computerPlay();
   }
   });

 // Computer play function randomly selects a column to place a coin
  function computerPlay() {
    var column = Math.floor((Math.random() * 7) + 1);
    switch (column) {
      case 1:
        col1.push('pink');
       placeCoin(1, "pink filled");
        break;
      case 2:
        col2.push('pink');
         placeCoin(2, "pink filled");
        break;
      case 3:
        col3.push('pink');
        placeCoin(3, "pink filled");
        break;
      case 4:
        col4.push('pink');
        placeCoin(4, "pink filled");
        break;
      case 5:
        col5.push('pink');
        placeCoin(5, "pink filled");
        break;
      case 6:
        col6.push('pink');
        placeCoin(6, "pink filled");
        break;
      case 7:
        col7.push('pink');
        placeCoin(7, "pink filled");
        break;
    }
  }

  // Place coin function adds a coin in the correct column, checking from bottom up if space is already filled. If space is filled it checks one space above.
  function placeCoin(col, colour) {
   if ( !$('tr:nth-child(6) td:nth-child(' +col+ ')').hasClass("filled") ) {
     $('tr:nth-child(6) td:nth-child(' +col+ ')').addClass(colour);
   } else if ( !$('tr:nth-child(5) td:nth-child(' +col+ ')').hasClass("filled") ){
     $('tr:nth-child(5) td:nth-child(' +col+ ')').addClass(colour);
   } else if ( !$('tr:nth-child(4) td:nth-child(' +col+ ')').hasClass("filled") ){
     $('tr:nth-child(4) td:nth-child(' +col+ ')').addClass(colour);
   } else if ( !$('tr:nth-child(3) td:nth-child(' +col+ ')').hasClass("filled") ){
     $('tr:nth-child(3) td:nth-child(' +col+ ')').addClass(colour);
   } else if ( !$('tr:nth-child(2) td:nth-child(' +col+ ')').hasClass("filled") ){
     $('tr:nth-child(2) td:nth-child(' +col+ ')').addClass(colour);
   } else if ( !$('tr:nth-child(1) td:nth-child(' +col+ ')').hasClass("filled") ){
     $('tr:nth-child(1) td:nth-child(' +col+ ')').addClass(colour);
   }
  }

