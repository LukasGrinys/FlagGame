var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
                    "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
                    "Belize","Benin","Bhutan","Bolivia","Bosnia And Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
                    "Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad",
                    "Chile","China","Colombia","Democratic Republic of the Congo", "Republic of the Congo","Costa Rica",
                    "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic", 
                    "East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
                   "Eswatini","Ethiopia","Fiji","Finland", "France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
                   "Grenada", "Guatemala","Guinea","Guinea-Bissau", "Guyana", "Haiti", "Honduras",
                   "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica",
                   "Japan","Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan",
                   "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya"];

countries[91] = new Country("NORTH KOREA", "flags/91.png",2);
countries[92] = new Country("SOUTH KOREA", "flags/92.png", 1);
countries[93] = new Country("KUWAIT", "flags/93.png",3);
countries[94] = new Country("KYRGYZSTAN", "flags/94.png",3);
countries[95] = new Country("LAOS", "flags/95.png",2);
countries[96] = new Country("LATVIA", "flags/96.png",2);
countries[97] = new Country("LEBANON", "flags/97.png",2);
countries[98] = new Country("LESOTHO", "flags/98.png",3);
countries[99] = new Country("LIBERIA", "flags/99.png",2);
countries[100] = new Country("LIBYA", "flags/100.png",3);

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
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("guess"), countryList);
