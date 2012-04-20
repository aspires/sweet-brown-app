var win = Ti.UI.currentWindow;

var movieUrl = "http://www.youtube.com/watch?feature=player_embedded&v=SKWfvsxd9gs";
webview = Ti.UI.createWebView({
	url : movieUrl
});

win.add(webview);
