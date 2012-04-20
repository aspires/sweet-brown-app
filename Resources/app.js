/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else if (Ti.Platform.osname === 'mobileweb') {
	alert('Mobile web is not yet supported by this template');
}
else {
	var tabGroup = Titanium.UI.createTabGroup();
	
	var win1 = Titanium.UI.createWindow({  
    	title:'Phrases',
    	url:'/ui/PhraseWindow.js',
    	backgroundImage: "/images/sb-bg5.png",

	});
	var tab1 = Ti.UI.createTab({
		title: 'Phrases',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	
	
	var win2 = Titanium.UI.createWindow({  
    	title:'Videos',
    	url:'/ui/AppWindow.js',
    	backgroundImage: "/images/sb-bg5.png",

	});
	
	var tab2 = Ti.UI.createTab({
		title: 'Videos',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	
	tabGroup.open();
}