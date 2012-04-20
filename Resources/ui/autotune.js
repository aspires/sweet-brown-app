var win = Ti.UI.currentWindow;

var movieUrl = "http://www.youtube.com/watch?feature=player_embedded&v=CEId6Te93YQ";
webview = Ti.UI.createWebView({
	url : movieUrl
});

win.add(webview);
