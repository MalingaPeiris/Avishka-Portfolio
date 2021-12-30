let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 100 + 'px';
    mountains_behind.style.top = value * 0.5 + (-100) + 'px';
    text1.style.right = value * 0.25 + 'px';
    text2.style.left  = value * 0.25 + 'px';


})

var animation = anime.timeline({});

            animation
            .add({
                targets:'#stars',
                top:'0px',
                duration: 1000,
                easing:'easeInOutSine'
            })

            .add({
                targets:'.moon',
                top:'80px',
                duration: 1000,
                easing:'easeInOutBack'
            })

            .add({
                targets:'#mountains_behind',
                bottom:'0px',
                duration: 800,
                easing:'easeInOutBack'
            })
                
            .add({
                targets:'#text1',
                right:0,
                duration: 800,
                easing:'easeInOutBack'
            })
                
            .add({
                targets:'#text2',
                right:0,
                duration: 800,
                easing:'easeInOutBack'
            })
                
            

            

            .add({
                targets:'#button',
                opacity:1,
                duration: 2000,
                easing:'easeInOutBack'
            })