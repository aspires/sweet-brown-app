var win = Ti.UI.currentWindow;

var movieUrl = "http://www.youtube.com/watch?feature=player_embedded&v=YlAIUCsEqqk";
webview = Ti.UI.createWebView({
	url : movieUrl
});

win.add(webview);
