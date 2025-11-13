function press(id){
    console.log(id);
}
document.addEventListener('keydown', function(event) {
    dict = {"w":"ArrowUp", "a":"ArrowLeft", "s":"ArrowDown", "d":"ArrowRight"}

    if(event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight"){
        press(event.key);
    }
    if(event.key in dict){
        press(dict[event.key]);
    }
});