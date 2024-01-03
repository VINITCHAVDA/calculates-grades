function percentage() {
  let web = document.querySelector("#web").value;
  let maths = document.querySelector("#maths").value;
  let php = document.querySelector("#php").value;
  let phy = document.querySelector("#phy").value;

  let to =
    parseFloat(web) + parseFloat(maths) + parseFloat(php) + parseFloat(phy);
  let per = (to * 100) / 400;
  if (per >= 90) {
    document.querySelector(".gar").innerHTML = "A+";
  } else if (per >= 80) {
    document.querySelector(".gar").innerHTML = "B+";
  } else if (per >= 70) {
    document.querySelector(".gar").innerHTML = "B";
  } else if (per >= 60) {
    document.querySelector(".gar").innerHTML = "C+";
  } else if (per >= 50) {
    document.querySelector(".gar").innerHTML = "C";
  } else if (per >= 40) {
    document.querySelector(".gar").innerHTML = "D";
  } else {
    document.querySelector(".gar").innerHTML = "failed";
  }

  document.querySelector(".to").innerHTML = to;
  document.querySelector(".per").innerHTML = per;
  if (per > 33) {
    document.querySelector(".result h2").innerHTML = "your passed";
  } else {
    document.querySelector(".result h2").innerHTML = "your failed";
  }
}
