
      
      function lighttheme(){
        document.body.style.background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
        document.form.style.background="white";
      };
      function darktheme(){
        document.body.style.background="grey";
        document.body.form.style.background="grey";
        document.getElementbyId('2').style.background="#04AA6D"
       
      };
     function myVibrate() {
    window.navigator.vibrate(30 , 40 , 30 , 60,);
     } ;
  
   function myVibrateR() {
    window.navigator.vibrate(30 , 40 , 30 , 60,);
       alert('not connected to tor browser');
   };
   
   function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}
  