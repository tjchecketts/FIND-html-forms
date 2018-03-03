function buttonChange() {
  var txt;

  if (confirm("Pressed a button!") === true) {
    txt = "You pressed ok!";
  } else {
    txt = "You pressed Cancel.";
  }

  document.getElementById("demo").innerHTML = txt;
}