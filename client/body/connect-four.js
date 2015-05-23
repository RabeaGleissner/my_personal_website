 var tr;
 var td;
 var button;
 var col1 = [];
 var col2 = [];
 var col3 = [];
 var col4 = [];
 var col5 = [];
 var col6 = [];
 var col7 = [];

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
   "click button.col1": function () {
    console.log('col1 button clicked');
    col1.push('black');
    console.log(col1);
    computerPlay();
   },
   "click button.col2": function () {
    console.log('col2 button clicked');
    col2.push('black');
    computerPlay();
   },
   "click button.col3": function () {
    console.log('col3 button clicked');
    col3.push('black');
    computerPlay();
   },
   "click button.col4": function () {
    console.log('col4 button clicked');
    col4.push('black');
    computerPlay();
   },
   "click button.col5": function () {
    console.log('col5 button clicked');
    col5.push('black');
    computerPlay();
   },
   "click button.col6": function () {
    console.log('col6 button clicked');
    col6.push('black');
    computerPlay();
   }

   });

  function computerPlay() {
    var column = Math.floor((Math.random() * 7) + 1);
    switch (column) {
      case 1:
        col1.push('pink');
        break;
      case 2:
        col2.push('pink');
        break;
      case 3:
        col3.push('pink');
        break;
      case 4:
        col4.push('pink');
        break;
      case 5:
        col5.push('pink');
        break;
      case 6:
        col6.push('pink');
        break;
      case 7:
        col7.push('pink');
        break;
    }
  }


