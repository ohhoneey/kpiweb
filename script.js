function manipulateImage(flag){
    let imageToUpdate = document.getElementById("scalableImage");
    if (flag === 1){
        imageToUpdate.src = "https://static.riafan.ru/upload/images/2022/10/10/1020294_full.jpeg";
    } else if (flag === 2){
        imageToUpdate.style.transform = 'scale(1.1)';
        imageToUpdate.style.transition = 'transform 0.25s ease';
    } else if (flag === 3){
        imageToUpdate.style.transform = 'scale(0.8)';
        imageToUpdate.style.transition = 'transform 0.25s ease';
    }
    if (flag === 4){
        imageToUpdate.src = "";
    }
}

function changeColor(){
    let elementToChange = document.getElementById("firstDynamicElement");
    let elementStyle = window.getComputedStyle(elementToChange, "")
    if (elementStyle.color === "rgb(0, 0, 0)") {
        elementToChange.style.setProperty("color", "white");
        elementToChange.style.setProperty("background-color", "blue")
    } else {
        elementToChange.style.setProperty("color", "black");
        elementToChange.style.setProperty("background-color", "white")
    }
}

function changeColorWithQuery(){
    let x = document.querySelectorAll("p");
    let elementToChange = x[3];
    let elementStyle = window.getComputedStyle(elementToChange, "")
    if (elementStyle.color === "rgb(0, 0, 0)") {
        elementToChange.style.setProperty("color", "white");
        elementToChange.style.setProperty("background-color", "green")
    } else {
        elementToChange.style.setProperty("color", "black");
        elementToChange.style.setProperty("background-color", "white")
    }
}
