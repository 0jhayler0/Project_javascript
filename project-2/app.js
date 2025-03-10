document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('button');
    var button = buttons[0];


    let clicks = 0;

    button.addEventListener('click', function() {
        clicks++;
        button.textContent = `${clicks}`
    })

})