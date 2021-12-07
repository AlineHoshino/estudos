function changeH1(input){
  let h1= document.getElementsByTagName("h1")[0]
  h1.innerText = input.value;
 }

  let h2=document.getElementById("um")
  h2.onclick=clicked;

  function clicked(){
    this.innerHTML="dd"
  }