let array = ['Ioannis', 'Bill', 'Alex', 'Marcel', 'George', ];
array.forEach((Number) => { $('ul').append($("<li>").append(Number))})

console.log('Part 2')

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('div').append("<h1 class='bottom'>Added with javascript</h1> <p>This block was added using JavaScript's jQuery library. How awesome!</p>")
  $('.bottom').css('color', 'black')