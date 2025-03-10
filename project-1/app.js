document.addEventListener('DOMContentLoaded', function() {
    var botones = document.getElementsByClassName('button');

    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            var p1 = document.getElementById('p1');
            var p2 = document.getElementById('p2');

            if (p1.style.display === 'block') {
                p1.style.display = 'none';
                p2.style.display = 'block';
            } else if (p1.style.display === 'none') {
                p1.style.display = 'block';
                p2.style.display = 'none';
            } else {
                p1.style.display = 'none';
                p2.style.display = 'block';
            }
        });
    }
});
