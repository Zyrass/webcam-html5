window.URL = window.URL || window.webkitURL;

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || 
navigator.mozGetUserMedia || navigator.msGetUserMedia;

navigator.getUserMedia({audio: true, video: true}, function(stream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
}, function(error) {
    alert("Une erreur est survenue : ", error);
});