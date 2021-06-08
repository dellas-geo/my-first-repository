let x=0

   document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = x++ ;
  });

  document.getElementById("myBtnMin").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = x-- ;
  });