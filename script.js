
var mischeifManaged = false;
    
function doMischief() {
    console.log("Hello!");
    if (!mischeifManaged) {
        // TODO start the video!
        document.getElementById("mischiefBox").style.display = "inherit";
        document.getElementById("trollFrame").play();
        mischeifManaged = true;
    } else {
        document.getElementById("mischiefBox").style.display = "none";
        mischeifManaged = false;
    }
}
