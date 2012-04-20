var self = Ti.UI.currentWindow;

	//Left Column
	
	var buttonNobody = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Nobody'),
		top:10,
		left:10

	});
	var buttonColdPop = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Cold Pop'),
		top:60,
		left:10
	});
	var buttonBBQ = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('BBQ'),
		top:110,
		left:10
	});
	var buttonBronch = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Bronchitis'),
		top:160,
		left:10
	});
	var buttonButThenI = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('But Then'),
		top:210,
		left:10
	});
	var buttonDidntGrab = Ti.UI.createButton({
		height:44,
		width:95,
		title:L("Didn't Grab"),
		top:260,
		left:10
	});
	var buttonGot = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Got'),
		top:310,
		left:10
	});
	
	// Middle Column
	var buttonItsAFire = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Fire'),
		top:10,
	});
	var buttonGoGetMe = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Go Get Me'),
		top:60,
	});
	var buttonNothing = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Nothing'),
		top:110,
	});
	var buttonWell = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Well'),
		top:160,
	});
	var buttonRanForMyLife = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('My Life'),
		top:210,
	});
	var buttonOhLord = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Oh Lord'),
		top:260,
	});
	var buttonNoShoes = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('No Shoes'),
		top:310,
	});
	// Right Column
	
	var buttonWokeUp = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Woke Up'),
		top:10,
		right:10
	});
	var buttonSaid = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('I Said'),
		top:60,
		right:10
	});
	var buttonRan = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Ran'),
		top:110,
		right:10
	});
	var buttonJesus = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Jesus'),
		top:160,
		right:10
	});
	var buttonSmoke = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Smoke'),
		top:210,
		right:10
	});
	var buttonOhLordJesus = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Lord Jesus'),
		top:260,
		right:10
	});
	var buttonThought = Ti.UI.createButton({
		height:44,
		width:95,
		title:L('Thought'),
		top:310,
		right:10
	});
	
	self.add(buttonNobody);
	self.add(buttonColdPop);
	self.add(buttonBBQ);
	self.add(buttonBronch);
	self.add(buttonButThenI);
	self.add(buttonDidntGrab);
	self.add(buttonGot);
	self.add(buttonItsAFire);
	self.add(buttonJesus);
	self.add(buttonNoShoes);
	self.add(buttonNothing);
	self.add(buttonWell);
	self.add(buttonOhLordJesus);
	self.add(buttonOhLord);
	self.add(buttonThought);
	self.add(buttonSmoke);
	self.add(buttonRanForMyLife);
	self.add(buttonGoGetMe);
	self.add(buttonWokeUp);
	self.add(buttonRan);
	self.add(buttonSaid);

	
	var soundColdPop = Titanium.Media.createSound({url:'/sound/sb-a_cold_pop.mp3'});
	var soundNobody = Titanium.Media.createSound({url:'/sound/sb-aint_nobody_got_time_for_that.mp3'});
	var soundBBQ = Titanium.Media.createSound({url:'/sound/sb-bbq.mp3'});
	var soundBronch = Titanium.Media.createSound({url:'/sound/sb-BRONCHITIS.mp3'});
	var soundButThenI = Titanium.Media.createSound({url:'/sound/sb-but_then_i.mp3'});
	var soundDidntGrab = Titanium.Media.createSound({url:'/sound/sb-i_didnt_grab.mp3'});
	var soundGot = Titanium.Media.createSound({url:'/sound/sb-i_got.mp3'});
	var soundRan = Titanium.Media.createSound({url:'/sound/sb-i_ran.mp3'});
	var soundWokeUp = Titanium.Media.createSound({url:'/sound/sb-i_woke_up.mp3'});
	var soundSaid = Titanium.Media.createSound({url:'/sound/sb-i_said.mp3'});
	var soundItsAFire = Titanium.Media.createSound({url:'/sound/sb-its_a_fire.mp3'});
	var soundJesus = Titanium.Media.createSound({url:'/sound/sb-jesus.mp3'});
	var soundNoShoes = Titanium.Media.createSound({url:'/sound/sb-no_shoes.mp3'});
	var soundNothing = Titanium.Media.createSound({url:'/sound/sb-nothing.mp3'});
	var soundOhLordJesus = Titanium.Media.createSound({url:'/sound/sb-oh_lord_jesus.mp3'});
	var soundOhLord = Titanium.Media.createSound({url:'/sound/sb-oh_lord.mp3'});
	var soundRanForMyLife = Titanium.Media.createSound({url:'/sound/sb-ran_for_my_life.mp3'});
	var soundSmokeGotMe = Titanium.Media.createSound({url:'/sound/sb-the_smoke_got_me.mp3'});
	var soundThoughtSomebodyWas = Titanium.Media.createSound({url:'/sound/sb-thought_somebody_was.mp3'});
	var soundGoGetMe = Titanium.Media.createSound({url:'/sound/sb-to_go_get_me.mp3'});
	var soundWell = Titanium.Media.createSound({url:'/sound/sb-well.mp3'});
	
	
	buttonNobody.addEventListener('click', function() {
		soundNobody.play();
	});
	buttonColdPop.addEventListener('click', function() {
		soundColdPop.play();
	});
	buttonBBQ.addEventListener('click', function() {
		soundBBQ.play();
	});
	buttonBronch.addEventListener('click', function() {
		soundBronch.play();
	});
	buttonButThenI.addEventListener('click', function() {
		soundButThenI.play();
	});
	buttonDidntGrab.addEventListener('click', function() {
		soundDidntGrab.play();
	});
	buttonGot.addEventListener('click', function() {
		soundGot.play();
	});
	buttonItsAFire.addEventListener('click', function() {
		soundItsAFire.play();
	});
	buttonJesus.addEventListener('click', function() {
		soundJesus.play();
	});
	buttonNoShoes.addEventListener('click', function() {
		soundNoShoes.play();
	});
	buttonNothing.addEventListener('click', function() {
		soundNothing.play();
	});
	buttonWell.addEventListener('click', function() {
		soundWell.play();
	});
	buttonOhLordJesus.addEventListener('click', function() {
		soundOhLordJesus.play();
	});
	buttonOhLord.addEventListener('click', function() {
		soundOhLord.play();
	});
	buttonThought.addEventListener('click', function() {
		soundThoughtSomebodyWas.play();
	});
	buttonSmoke.addEventListener('click', function() {
		soundSmokeGotMe.play();
	});
	buttonRanForMyLife.addEventListener('click', function() {
		soundRanForMyLife.play();
	});
	buttonGoGetMe.addEventListener('click', function() {
		soundGoGetMe.play();
	});
	buttonWokeUp.addEventListener('click', function() {
		soundWokeUp.play();
	});
	buttonSaid.addEventListener('click', function() {
		soundSaid.play();
	});
	buttonRan.addEventListener('click', function() {
		soundRan.play();
	});
