

    var navLinks = document.getElementById("navLinks");
    
       
       function showMenu(){
        navLinks.style.left="0";
       } 

       function hideMenu(){
        navLinks.style.left="-200px";
       } ;

  
       //Slider js


    var counter = 1 ;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter ++;
      if(counter > 6){
          counter=1;
      }
    },8000);