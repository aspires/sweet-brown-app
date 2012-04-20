var win = Ti.UI.currentWindow;

var movieUrl = "http://www.youtube.com/watch?v=8s1J26AqEr8&feature=related";
webview = Ti.UI.createWebView({
	url : movieUrl
});

win.add(webview);
