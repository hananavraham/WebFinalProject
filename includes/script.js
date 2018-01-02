
var pagePathName;
var name;
var programs;
function init() {		// function that call to all function(addHeader,addNav,addFooter)
	pagePathName = window.location.pathname;
    name = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
	insertHeader();
	insertNav();
    insertFooter();
    showPopUp();
    add_program();
    selectedPage();
}

programs ={
	sugget_programs:{
		program1:"Loss Fat",
		program2:"Loss Fat & Diet",
		program3:"12 Weeks Fat Destroyer",
		program4:"Beginner's Fat-Loss",
		program5:"Metabolic Supercharge",
		program6:"The no-cardio workout",
	}
}

var main = $('main').css('paddig-top','20px');

var program = $('<div class="card-deck">');
var suggets_prog = programs.sugget_programs;

function add_program(){
	for (obj in suggets_prog){
	var img = $('<img class="rounded mx-auto d-block" max-width="200px" height="148px">')
		.attr('src',`images/${obj}.png`);
	var card = $('<div class="card text-center">')
		.css('max-width','200px');
	var button = $('<a href="#" class="btn btn-dark">choose!</a>').on('click',choose);
	card.append(img);
	card.append(
		$('<div class="card-body">')
			.append('<h4 class="card-title"><b>' + suggets_prog[obj] + '</b></h4>')
			.append('<p class="card-text"><small class="text-muted">')
			.append(button)
		)
	$('main .row').append(card);
	}
}

function choose(){
	var element = $(this).siblings().get(0);
}


function showPopUp(){
	if (name == "newtrainee2.html"){
		$("#submit").click(function(){
			console.log("pop");
			$('#popup').css('visibility','visible');    
		});
		$("#ok").click(function(){
			$('#popup').css('visibility','hidden');   
		});
	}	
}

function insertHeader(){
	$("body header").append(header);
}


function insertNav(){
    if (!(name == "index.html" || name == "login.html")){
    	return;
    }
	$("body nav").append(nav);
}

function insertFooter(){
	$("body footer").append(footer);
}

function selectedPage(){
	console.log(name);
	var l = $("nav a");
	$('nav a[href="' + name + '"]').css("color", "#0B2CE9");


}


