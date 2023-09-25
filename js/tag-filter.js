filterTags()

function filterTags() {
    var currTag = document.getElementById("tags");
    var x = document.getElementsByClassName("project");
    for (var i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        // if (x[i].className.indexOf(currTag.value) > -1) addClass(x[i], "show");
        if (x[i].className.indexOf("") > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}