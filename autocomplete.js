﻿var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia", 
"Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium", "Belize","Benin",
"Bhutan","Bolivia","Bosnia And Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
"Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia", "Comoros", 
"Democratic Republic of the Congo", "Republic of the Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
"Denmark","Djibouti","Dominica","Dominican Republic", "East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea",
"Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland", "France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
"Grenada", "Guatemala","Guinea","Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary","Iceland","India","Indonesia",
"Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan", "Kazakhstan", "Kenya", "Kiribati", 
"North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
"Liechtenstein", "Luxembourg", "Lithuania", "Madagascar","Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
"Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
"Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
"Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan","Palau","Palestine", "Panama", "Papua New Guinea", "Paraguay",
"Peru", "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
"Saint Vincent and the Grenadines", "Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia",
"Seychelles","Sierra Leone", "Singapore","Slovakia","Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan",
"Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo",
"Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
"United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
"Zimbabwe"];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
    var list = document.getElementById(this.id + "autocomplete-list");
    if (list) {
      x = list.getElementsByTagName("div");
      if (e.keyCode === 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode === 38) { 
        currentFocus--;
        addActive(x);
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    } else {
      if (e.keyCode === 13) {
        guess();
      }
    }
  });
  function addActive(x) {
    if (!x) {
      return false;
    }
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    } else if (currentFocus < 0)  {
      currentFocus = (x.length - 1);
    } 
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(element) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (element !== x[i] && element !== inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("guess"), countryList);

