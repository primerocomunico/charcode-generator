function getChar(e) {
  console.log(e);
  let getCharCode = e.keyCode;
  let getKey = e.key;
  let text = e["target"];
  console.log(text);
  document.getElementById("idChar").innerHTML = `${getCharCode}`;
  document.getElementById("idKey").innerHTML = `${getKey}`;
}
//

function applyRequest() {
const requester = new XMLHttpRequest();
requester.onreadystatechange = function () {
    if (this.readyState != 4) {return};

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
  		  console.log(data["value"]);
    }
}
requester.open("GET", "https://api.chucknorris.io/jokes/random");
requester.send();
}

function applyRequest() {
const requester = new XMLHttpRequest();
requester.onreadystatechange = function () {
    if (this.readyState != 4) {return};

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
  		  return data = data;
    }
}
requester.open("GET", "https://api.chucknorris.io/jokes/categories");
requester.send();
return data = data;
}

let data = applyRequest();
//
