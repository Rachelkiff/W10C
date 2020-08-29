function clearSelection() {
    Cookies.remove('selection');
    window.open("index.html", "_self");
}

function attackone(){

}
var userSelection = Cookies.get("selection");

if(userSelection == 'Grizzly Bear') {
    document.getElementById("selection-container").innerHTML = '<img src="https://gohunt-assets-us-west-2.s3.amazonaws.com/Grizzly-bear-protections-west-OG.jpg" alt="Grizzly Bear">';

}else if(userSelection == 'Polar Bear') {
    document.getElementById("selection-container").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg" alt="Polar Bear">';

}else if(userSelection == 'Black Bear') {
    document.getElementById("selection-container").innerHTML = '<img src="https://saugeentimes.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-20-at-1.46.02-PM-300x240.png" alt="Black Bear">';

}else {
    document.getElementById("selection-container").innerHTML = "<p>Not a correct selection</p>";
}