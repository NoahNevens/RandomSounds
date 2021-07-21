var sounds = ['http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg', 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav', 
'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav', 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav',
'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg', 'http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.ogg',
'https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg']

var isLoop = false;

$("#start").on("click", function(event) {
    event.preventDefault();
    isLoop = true;
    var rand1 = Math.round(Math.random() * 6.5);
    a = new Audio(sounds[rand1]);
    a.volume = 0.1;
    loop(a);
})

function loop(a) {
    var rand = (Math.random() * 9000) + 3000; // A random value between 1 and 10 seconds

    setTimeout(function() {
            if (isLoop) {
                a.play(); // Play the audio
                var rand1 = Math.round(Math.random() * 6.5);
                a = new Audio(sounds[rand1]);
                a.volume = 0.1;
                loop(a); // Call the loop function again
            }
    }, rand);
};

$("#stop").on("click", function(event) {
    event.preventDefault();
    isLoop = false;
})
