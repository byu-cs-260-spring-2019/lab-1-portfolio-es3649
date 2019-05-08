
var mischeifManaged = false;
    
function doMischief() {
    console.log("Hello!");
    if (!mischeifManaged) {
        document.getElementById("mischiefBox").style.display = "inherit";
        mischeifManaged = true;
    } else {
        document.getElementById("mischiefBox").style.display = "none";
        mischeifManaged = false;
    }
}
