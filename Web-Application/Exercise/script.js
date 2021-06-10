// Object //

let data = {
    photo: 'Images/Elephant.jpg',
    title: ' African Elephant',
    description: 'A nice African Elephant'};

// Variables //

let currentTitle= 0;
let currentPhoto = 0;
let currentDesc = 0;

// Arrays //

let imagesData = ['Images/Elephant.jpg', 'Images/Bird.jpg', 'Images/Deer.jpg', 'Images/Owl.jpg']
let titleData = ['African Elephant', 'Woodpecker', 'Reindeer', 'Owl']
let descData = [ 'The African elephant (Loxodonta) is a genus comprising two living elephant species, the African bush elephant (L. africana) and the smaller African forest elephant (L. cyclotis). Both are social herbivores with grey skin, but differ in the size and color of their tusks and in the shape and size of their ears and skulls.',
 'Woodpeckers are part of the family Picidae, that also includes the piculets, wrynecks, and sapsuckers. Members of this family are found worldwide, except for Australia, New Guinea, New Zealand, Madagascar, and the extreme polar regions.',
 'The reindeer (Rangifer tarandus), also known as caribou in North America,[3] is a species of deer with circumpolar distribution, native to Arctic, subarctic, tundra, boreal, and mountainous regions of northern Europe, Siberia, and North America. ',
 'Owls are birds from the order Strigiformes /ˈstrɪdʒɪfɔːrmiːz/, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.']

// Functions //

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', imagesData[photoNumber]);}
loadPhoto(currentPhoto);

let loadTitle = (titleNumber) => {
$('#photo-title').text(titleData[titleNumber]);}
loadTitle(currentTitle);

let loadDesc = (descNumber) => {
$('#photo-description').text(descData[descNumber]);}
loadDesc(currentDesc);

// Click Functions //

$('#next').click(() => {
    if(currentPhoto < 3){
    currentPhoto++;}else{currentPhoto=0}
    loadPhoto(currentPhoto);})

$('#next').click(() => {
    if(currentTitle < 3){
    currentTitle++;}else{currentTitle=0}
    loadTitle(currentTitle);})

$('#next').click(() => {
    if(currentDesc < 3){
    currentDesc++;}else{currentDesc=0}
    loadDesc(currentDesc);})

$('#previous').click(() => {
    if(currentPhoto > 0){
    currentPhoto--;}else{currentPhoto=3}
    loadPhoto(currentPhoto);})

$('#previous').click(() => {
    if(currentTitle > 0){
    currentTitle--;}else{currentTitle=3}
    loadTitle(currentTitle);})

$('#previous').click(() => {
    if(currentDesc > 0){
    currentDesc--;}else{currentDesc=3}
    loadDesc(currentDesc);})


// Thumbnails

$('#zero').click(() => {
    loadPhoto(0), loadTitle(0), loadDesc(0)
})

$('#one').click(() => {
    loadPhoto(1), loadTitle(1), loadDesc(1)
})

$('#two').click(() => {
    loadPhoto(2), loadTitle(2), loadDesc(2)
})

$('#three').click(() => {
    loadPhoto(3), loadTitle(3), loadDesc(3)
})
