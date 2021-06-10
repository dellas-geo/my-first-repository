let setImg = 1;

document.getElementById(0).src = document.getElementById(setImg).src;

document.getElementById(setImg).className = "thumb selected";

function preview(img) {
    document.getElementById(setImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    setImg = img.id;
}