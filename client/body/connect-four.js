 var tr;
 var td;

   Template.connectFour.events({
     
   "click .new-game": function (event) {
    event.preventDefault();
    console.log('button clicked');

    for (var i = 1; i < 8; i++){
       tr = $(document.createElement('tr'));
       var cssClass = i;

       $(".connect-four-table").append(tr);

       for (var j = 1; j < 8; j++){
       var td = $(document.createElement('td'));
     
       tr.append(td);
       }
   }
   $('tr:nth-child(1)').addClass('1');
   $('tr:nth-child(2)').addClass('2');
   $('tr:nth-child(3)').addClass('3');
   $('tr:nth-child(4)').addClass('4');
   $('tr:nth-child(5)').addClass('5');
   $('tr:nth-child(6)').addClass('6');
   $('tr:nth-child(7)').addClass('7');

   $('td:nth-child(1)').addClass('a');
   $('td:nth-child(2)').addClass('b');
   $('td:nth-child(3)').addClass('c');
   $('td:nth-child(4)').addClass('d');
   $('td:nth-child(5)').addClass('e');
   $('td:nth-child(6)').addClass('f');
   $('td:nth-child(7)').addClass('g');

  
   }
   });
  

  $('#col1').click(function(){
    console.log('clicked');
  });

