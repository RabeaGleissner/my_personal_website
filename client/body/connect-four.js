Template.connectFour.rendered = function(){
   var table;
   var tr;
   var td;
   
   table = this.$(".table");

   for (var i = 1; i < 8; i++){
      var tr = $(document.createElement('tr'));
      tr.addClass( "myClass yourClass" );
      table.append(tr);

      for (var j = 1; j < 8; j++){
      var td = $(document.createElement('td'));
    
      tr.append(td);
      }
  }

  $('#col1').click(function(){
    console.log('clicked');
  });


}
