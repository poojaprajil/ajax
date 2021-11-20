//Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Event Listener
xhttp.onreadystatechange = function () {
  //condition
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    //    console.log(response);
    var list = response.list;
    // console.log(list.length);

    for (var i = 0; i < list.length; i++) {
      // output =list[i].SerialNumber;
      document.getElementById("SlNo" + [i]).innerHTML = list[i].id;
      document.getElementById("name" + [i]).innerHTML = list[i].item;
      document.getElementById("qty" + [i]).innerHTML = list[i].quantity;
      document.getElementById("unit" + [i]).innerHTML = list[i].unit;
      document.getElementById("dept" + [i]).innerHTML = list[i].department;
      document.getElementById("note" + [i]).innerHTML = list[i].notes;
    }
  }
};
xhttp.open("GET", "grocery.json", true);
xhttp.send();
