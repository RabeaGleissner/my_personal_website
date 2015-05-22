 
 // var table = this.$(".table");
 var tr;
 var td;

   Template.connectFour.events({
     
   "click .new-game": function (event) {
    event.preventDefault();
    console.log('button clicked');

    for (var i = 1; i < 8; i++){
       var tr = $(document.createElement('tr'));
       $(".connect-four-table").append(tr);

       for (var j = 1; j < 8; j++){
       var td = $(document.createElement('td'));
     
       tr.append(td);
       }
   }
 
   }
   });
  

  $('#col1').click(function(){
    console.log('clicked');
  });

