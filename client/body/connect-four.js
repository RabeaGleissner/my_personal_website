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
 var gridArray = [ col1, col2, col3, col4, col5, col6, col7 ];
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
    addCoinToArray(col1, "black");
    placeCoin(1, "black filled");
    hideButton(col1, 1);
    computerPlay();
   },
   "click button.col2": function () {
    addCoinToArray(col2, "black");
    placeCoin(2, "black filled");
    computerPlay();
    hideButton(col2, 2);
   },
   "click button.col3": function () {
    addCoinToArray(col3, "black");
    placeCoin(3, "black filled");
    computerPlay();
    hideButton(col3, 3);
   },
   "click button.col4": function () {
    addCoinToArray(col4, "black");
    placeCoin(4, "black filled");
    computerPlay();
    hideButton(col4, 4);

   },
   "click button.col5": function () {
    addCoinToArray(col5, "black");
    placeCoin(5, "black filled");
    computerPlay();
    hideButton(col5, 5);
   },
   "click button.col6": function () {
    addCoinToArray(col6, "black");
    placeCoin(6, "black filled");
    computerPlay();
    hideButton(col6, 6);
   },
   "click button.col7": function () {
    addCoinToArray(col7, "black");
    placeCoin(7, "black filled");
    computerPlay();
    hideButton(col7, 7);
   }
   });

 // Computer play function randomly selects a column to place a coin
  function computerPlay() {
    var column = Math.floor((Math.random() * 7) + 1);
    
    // placeCoin(column, "pink filled");

    switch (column) {
      case 1:
        addCoinToArray(col1, "pink");
        placeCoin(1, "pink filled");
        hideButton(col1, 1);
        break;
      case 2:
        addCoinToArray(col2, "pink");
        placeCoin(2, "pink filled");
        hideButton(col2, 2);
        break;
      case 3:
        addCoinToArray(col3, "pink");
        placeCoin(3, "pink filled");
        hideButton(col3, 3);
        break;
      case 4:
        addCoinToArray(col4, "pink");
        placeCoin(4, "pink filled");
        hideButton(col4, 4);
        break;
      case 5:
        addCoinToArray(col5, "pink");
        placeCoin(5, "pink filled");
        hideButton(col5, 5);
        break;
      case 6:
        addCoinToArray(col6, "pink");
        placeCoin(6, "pink filled");
        hideButton(col6, 6);
        break;
      case 7:
        addCoinToArray(col7, "pink");
        placeCoin(7, "pink filled");
        hideButton(col7, 7);
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

  function addCoinToArray(col, colour) {
    if ( col.length < 7) {
      col.push(colour);
    } else {
      computerPlay();
      //TODO: fix logic for computer trying to place a coin in a slot that is already in use.
    }

    checkIfWon(gridArray, col);
  }

  function checkIfWon(gridArray, col){
    var flattenedArray = $.map(gridArray, function(n){
       return n;
    });
    if ( flattenedArray.length >= 7) {
    
      console.log('gridArray', gridArray);
      var index = gridArray.indexOf(col);
      console.log('index', index);
      var lastCoinIndex = gridArray[index].length - 1;
      console.log('lastCoinIndex', lastCoinIndex);
      var lastCoinPlaced = gridArray[index][lastCoinIndex];
      console.log('lastCoinPlaced', lastCoinPlaced);


      // take last added coin and check up, down, left, right, diagonally if same coin is next to it.
      // if yes, do the same check again until four are found
    }
  }

  function hideButton(columnArray, colNum){
    if ( columnArray.length >= 6 ) {
      $('.coin-selectors button:nth-child(' +colNum+ ')').addClass("disable");
    }
  }
