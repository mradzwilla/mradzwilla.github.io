$(document).ready(function(){

jukeCount = 0
music_library = ["JukeboxHero","Circle","WhatAboutLove","ForgotAboutDre", "HumptyDance","Eclipse","Cheatin","PeacefulEasy","Ghostbusters","Smoke","TnF","RealSlimShady", "TeenSpirit","BillyJean","ReallyGotMe", "WalkThisWay", "SweetHome", "StillStanding","CaliforniaLove","Psycho","Dogs"]

var introSong = new Audio("public/music/JukeboxHero.mp3")

var currentSong = new Audio("public/music/" + music_library[Math.floor(Math.random()*(music_library.length))] +".mp3")

var jukeArray = []

introSong.play();

function Jukebox(name){
	this.id = jukeCount
	this.boxName = name
	this.globalPlay = false

	var boxSong = new Audio("public/music/" + music_library[Math.floor(Math.random()*(music_library.length))] +".mp3")

	this.playSong = function(){
		boxSong.play();
		} //Closes playSong

	this.pauseSong = function(){
		boxSong.pause();
		}
}//Closes Jukebox constructor


//The following handles the welcome screen and tutorial
$("#intro").html("<p>Welcome, Jukebox Hero!</p>")
$("#intro").click(function(){
	$(this).html("<p>Here's how this works.</p>")
		$("#intro").click(function(){
				$(this).html("<p>Each Tile will play a random song.<br>Scroll on to play.<br>Scroll off to stop.</p>")
			$("#intro").click(function(){
				$(this).html("<p>Click a Tile to turn on Jam Mode.<br>The Tile will keep playing even when you scroll away. </p>")
						$("#intro").click(function(){
						$(this).html("<p>Just click a Tile again to turn off Jam Mode. </p>")
							$("#intro").click(function(){
							$(this).html("<p>That's it. <br>You're ready to roll.</p>")
								$("#intro").click(function(){
								$(this).html("<p>Keep on rockin', Jukebox Hero.</p>") 
									$("#intro").click(function(){
									$(this).hide();
									})//Closes .hide
									
								})
							})
					})
			})
		})//closes second
})//Closes first intro click


$("#NewJukebox").click(function(){
	$(".jukeboxes_container").append("<div class='jukebox' id='" + jukeCount + "'>" + name + "</div>")
	var jukeID = jukeCount
	jukeArray.push(jukeID = new Jukebox())
	jukeCount++
	
})

$('.jukeboxes_container').on("click", '.jukebox' , function(event) {
		
	var i = (event.target.id)
	
	if (jukeArray[i].globalPlay == false){
		$(this).addClass("on")
		jukeArray[i].globalPlay = true;
	} else {
		jukeArray[i].globalPlay = false
		$(this).removeClass("on")
	}

}); //Closes '.jukeboxes_container.click'

$('.jukeboxes_container').on("mouseenter", '.jukebox' , function(event) {
	introSong.pause();
	var i = (event.target.id)
	jukeArray[i].playSong();

}) //Closes .jukeboxes_container.mouseenter

$('.jukeboxes_container').on("mouseleave", '.jukebox' , function(event) {
	var i = (event.target.id)

	if (jukeArray[i].globalPlay == false){
	jukeArray[i].pauseSong();
	}
}); 



}) //Closes .ready