var self = Ti.UI.currentWindow;
	
	var data = [
	{title:'Original Interview', hasChild:true, test:'interview.js'},
	{title:'Its A Fire Remix', hasChild:true, test:'itsafire.js'},
	{title:'Hall and Oates Remix', hasChild:true, test:'hallandoates.js'},
	{title:'Ran For My Life Remix', hasChild:true, test:'ran.js'},
	{title:'Autotune Remix', hasChild:true, test:'autotune.js'},
	{title:"Sweet Brown's Lament", hasChild:true, test:'lament.js'},
	{title:'The Lost Ogle', hasChild:true, test:'ogle.js'},
	{title:'Cold Pop Delivery', hasChild:true, test:'delivery.js'},

];
// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

self.add(tableview);
	