FilterItem("all")
function FilterItem(c) {
    var x, i;
    x = document.getElementsByClassName("Filtering");
        if (c == "all") c = "";
            for (i = 0; i < x.length; i++) {
                RemoveItem(x[i], "show");
        if (x[i].className.indexOf(c) > -1) SelectItem(x[i], "show");
    }
}

function SelectItem(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function RemoveItem(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

var FilterContainer = document.getElementById("FilterContainer");
var FilterButton = FilterContainer.getElementsByClassName("FilterButton");

for (var i = 0; i < FilterButton.length; i++) {
    FilterButton[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}

