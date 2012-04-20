
var win = Titanium.UI.currentWindow;
var options = {
	url: '/video/interview.mp4',
	backgroundColor: '#000',
	scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
    mediaControlMode: Titanium.Media.VIDEO_CONTROL_NONE  
};


var activeMovie = Titanium.Media.createVideoPlayer(options);
win.add(activeMovie);


win.addEventListener('close', function() {
	activeMovie.stop();
});

activeMovie.addEventListener('complete', function(e){
    if (e.reason == 0) {
        win.close();
    };
});
 
activeMovie.addEventListener('fullscreen', function(e){
    if (e.entering == 0) {
        win.close();
    };
});

activeMovie.play();

win.addEventListener('close', function() 
{
	
	windowClosed = true;
	activeMovie.stop();
	
});
