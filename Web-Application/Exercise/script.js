let data = {
    photo: 'Images/Elephant.jpg',
    title: ' African Elephant',
    description: 'A nice African Elephant'
};

$('#photo').attr('src', data.photo);



let currentPhoto = 0;
let imagesData = ['Images/Elephant.jpg', 'Images/Deer.jpg', 'Images/Bird.jpg', 'Images/Owl.jpg',]

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', imagesData[photoNumber]);
}
loadPhoto(currentPhoto);

$('#next').click(() => {
    if(currentPhoto < 3){
    currentPhoto++;}
    loadPhoto(currentPhoto);
})

$('#previous').click(() => {
    if(currentPhoto > 0){
    currentPhoto--;}
    loadPhoto(currentPhoto);
})