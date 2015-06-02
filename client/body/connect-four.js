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

 // Create game grid and buttons on template render
 Template.connectFour.rendered = function() {
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
  };

Template.connectFour.events({
   // Methods to place a coin by clicking a button
   "click button.col1": function () {
    addCoinToArray(col1, "black", 1);
    hideButton(col1, 1);
    computerPlay();
   },
   "click button.col2": function () {
    addCoinToArray(col2, "black", 2);
    computerPlay();
    hideButton(col2, 2);
   },
   "click button.col3": function () {
    addCoinToArray(col3, "black", 3);
    computerPlay();
    hideButton(col3, 3);
   },
   "click button.col4": function () {
    addCoinToArray(col4, "black", 4);
    computerPlay();
    hideButton(col4, 4);
   },
   "click button.col5": function () {
    addCoinToArray(col5, "black", 5);
    computerPlay();
    hideButton(col5, 5);
   },
   "click button.col6": function () {
    addCoinToArray(col6, "black", 6);
    computerPlay();
    hideButton(col6, 6);
   },
   "click button.col7": function () {
    addCoinToArray(col7, "black", 7);
    computerPlay();
    hideButton(col7, 7);
   },
   "click button.refresh": function () {
    location.reload();
   }
   });

  function computerPlay() {
   
    // check how many pink coins are in one column
    function countPinks(array){
      var count = 0;
      for(var i = 0; i < array.length; ++i){
          if(array[i] == "pink")
              count++;
      }
      return count;

    }
    // check how many black coins are in one column
    function countBlacks(array){
      var count = 0;
      for(var i = 0; i < array.length; ++i){
          if(array[i] == "black")
              count++;
      }
      return count;
    }
  
    col1Pinks = countPinks(col1);
    col2Pinks = countPinks(col2);
    col3Pinks = countPinks(col3);
    col4Pinks = countPinks(col4);
    col5Pinks = countPinks(col5);
    col6Pinks = countPinks(col6);
    col7Pinks = countPinks(col7);
    col1Blacks = countBlacks(col1);
    col2Blacks = countBlacks(col2);
    col3Blacks = countBlacks(col3);
    col4Blacks = countBlacks(col4);
    col5Blacks = countBlacks(col5);
    col6Blacks = countBlacks(col6);
    col7Blacks = countBlacks(col7);
    console.log(col1Blacks, col2Blacks);

    // computer to place coin in column when there are three black coins and no pink coin
    // otherwise choose a random column
    if (col1Blacks === 3 && col1Pinks === 0) {
      column = 1;
    } else if (col2Blacks === 3 && col2Pinks === 0) {
      column = 2;
    } else if (col3Blacks === 3 && col3Pinks === 0) {
      column = 3;
    } else if (col4Blacks === 3 && col4Pinks === 0) {
      column = 4;
    } else if (col5Blacks === 3 && col5Pinks === 0) {
      column = 5;
    } else if (col6Blacks === 3 && col6Pinks === 0) {
      column = 6;
    } else if (col7Blacks === 3 && col7Pinks === 0) {
      column = 7;
    } else if (col1[0] === col2[0] && col2[0] === col3[0] && col1[0] !== undefined && col4.length < 5) {
      column = 4;
    } else if (col5[0] === col6[0] && col6[0] === col7[0] && col7[0] !== undefined && col4.length < 5) {
      column = 4;
    } else if (col1[1] === col2[1] && col2[1] === col3[1] && col1[1] !== undefined && col4.length < 5) {
      column = 4;
    } else if (col5[1] === col6[1] && col6[1] === col7[1] && col7[1] !== undefined && col4.length < 5) {
      column = 4;
    }else {
      column = Math.floor((Math.random() * 7) + 1);
    }

    // computer adds coin to array
    switch (column) {
      case 1:
        addCoinToArray(col1, "pink", 1);
        hideButton(col1, 1);
        break;
      case 2:
        addCoinToArray(col2, "pink", 2);
        hideButton(col2, 2);
        break;
      case 3:
        addCoinToArray(col3, "pink", 3);
        hideButton(col3, 3);
        break;
      case 4:
        addCoinToArray(col4, "pink", 4);
        hideButton(col4, 4);
        break;
      case 5:
        addCoinToArray(col5, "pink", 5);
        hideButton(col5, 5);
        break;
      case 6:
        addCoinToArray(col6, "pink", 6);
        hideButton(col6, 6);
        break;
      case 7:
        addCoinToArray(col7, "pink", 7);
        hideButton(col7, 7);
        break;
    }
  }

  function addCoinToArray(col, colour, tableColumn) {
    var columnLength = col.length;
    var cssColumnLength = 6 - columnLength;

    if ( columnLength < 7) {
      col.push(colour);
      $('tr:nth-child(' +cssColumnLength+ ') td:nth-child(' +tableColumn+ ')').addClass(colour);

    } else {
      computerPlay();
    }
    checkIfWon(gridArray, col);
  }

  function checkIfWon(gridArray, col){
    var flattenedArray = $.map(gridArray, function(n){
       return n;
    });

    if ( flattenedArray.length >= 7) {
    
    // identify position and colour of last coin placed
      // console.log('gridArray', gridArray);
      var columnIndex = gridArray.indexOf(col);
      // console.log('columnIndex', columnIndex);
      var rowIndex = gridArray[columnIndex].length - 1;
      // console.log('rowIndex', rowIndex);
      var lastCoinPlaced = gridArray[columnIndex][rowIndex];
      // console.log('lastCoinPlaced', lastCoinPlaced);

      var winner = false;

      // check below lastCoinPlaced
      if (rowIndex >= 3) {
        if (lastCoinPlaced === gridArray[columnIndex][rowIndex-1] && lastCoinPlaced === gridArray[columnIndex][rowIndex-2] && lastCoinPlaced === gridArray[columnIndex][rowIndex-3]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check to the left of last coin
      if (columnIndex >= 3) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex] && lastCoinPlaced === gridArray[columnIndex-2][rowIndex] && lastCoinPlaced === gridArray[columnIndex-3][rowIndex]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check two to the left and one to right
      if (columnIndex >= 2 && columnIndex < 6) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex] && lastCoinPlaced === gridArray[columnIndex-2][rowIndex] && lastCoinPlaced === gridArray[columnIndex+1][rowIndex]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check one on the left and two on the right
      if (columnIndex >= 1 && columnIndex < 5) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex] && lastCoinPlaced === gridArray[columnIndex+1][rowIndex] && lastCoinPlaced === gridArray[columnIndex+2][rowIndex]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check to the right
      if (columnIndex >= 0 && columnIndex < 4) {
        if (lastCoinPlaced === gridArray[columnIndex+1][rowIndex] && lastCoinPlaced === gridArray[columnIndex+2][rowIndex] && lastCoinPlaced === gridArray[columnIndex+3][rowIndex]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check southwest from the coin
      if (columnIndex >= 3 && rowIndex >= 3) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex-1] &&
          lastCoinPlaced === gridArray[columnIndex-2][rowIndex-2] &&
          lastCoinPlaced === gridArray[columnIndex-3][rowIndex-3]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check two southwest from the coin and one northeast
      if (columnIndex >= 2 && columnIndex < 6 && rowIndex >= 2 && rowIndex < 5) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex-1] && lastCoinPlaced === gridArray[columnIndex-2][rowIndex-2] && lastCoinPlaced === gridArray[columnIndex+1][rowIndex+1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check one southwest from the coin and two northeast
      if (columnIndex >= 1 && columnIndex < 5 && rowIndex >= 1 && rowIndex < 4) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex-1] &&
          lastCoinPlaced === gridArray[columnIndex+2][rowIndex+2] &&
          lastCoinPlaced === gridArray[columnIndex+1][rowIndex+1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check northeast
      if (columnIndex >= 0 && columnIndex < 4 && rowIndex >= 0 && rowIndex < 3) {
        if (lastCoinPlaced === gridArray[columnIndex+3][rowIndex+3] &&
          lastCoinPlaced === gridArray[columnIndex+2][rowIndex+2] &&
          lastCoinPlaced === gridArray[columnIndex+1][rowIndex+1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check northwest
      if (columnIndex >= 3 && rowIndex >= 2) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex+1] &&
          lastCoinPlaced === gridArray[columnIndex-2][rowIndex+2] &&
          lastCoinPlaced === gridArray[columnIndex-3][rowIndex+3]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check two northwest and one southeast
      if (columnIndex >= 2 && columnIndex <=5 && rowIndex >= 1 && rowIndex < 4) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex+1] &&
          lastCoinPlaced === gridArray[columnIndex-2][rowIndex+2] &&
          lastCoinPlaced === gridArray[columnIndex+1][rowIndex-1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check one northwest and two southeast
      if (columnIndex >= 1 && rowIndex >= 2 && rowIndex < 4 && columnIndex < 5) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex+1] &&
          lastCoinPlaced === gridArray[columnIndex+2][rowIndex-2] &&
          lastCoinPlaced === gridArray[columnIndex+1][rowIndex-1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
      // check southeast
      if (columnIndex <= 4 && columnIndex >=1 && rowIndex >= 2) {
        if (lastCoinPlaced === gridArray[columnIndex-1][rowIndex+1] &&
          lastCoinPlaced === gridArray[columnIndex+2][rowIndex-2] &&
          lastCoinPlaced === gridArray[columnIndex+1][rowIndex-1]) {
          winner = true;
          announceWinner(winner, lastCoinPlaced);
        }
      }
    }
  }
  function hideButton(columnArray, colNum){
    if ( columnArray.length >= 6 ) {
      $('.coin-selectors button:nth-child(' +colNum+ ')').addClass("disable");
    }
  }
  function announceWinner(winner, lastCoinPlaced) {
    if (winner === true ) {
      $('.winner-text').html('<section class="winner-announcement"><h3>And the winner is:</h3><p>- - ' + lastCoinPlaced + ' - -</p><button class="refresh">Play again!</button></section>');
      $('.coin-selectors').hide();
    }
  }
