
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
}

programs ={
	sugget_programs:{
		program1:"Loss Fat",
		program2:1,
		program3:1,
		program4:1,
		program5:1,
		program6:1,
	}
}

var main = $('main').css('paddig-top','20px');

var program = $('<div class="card-deck">');
var suggets_prog = programs.sugget_programs;

function add_program(){
	for (obj in suggets_prog){
	var img = $('<img class="rounded mx-auto d-block" width="200px" height="148px">')
		.attr('src',`images/${obj}.png`);
	var card = $('<div class="card text-center">')
		.css('width','200px');
	var button = $('<a href="#" class="btn btn-dark">choose!</a>').on('click',choose);
	card.append(img);
	card.append(
		$('<div class="card-body">')
			.append('<h4 class="card-title">' + suggets_prog[obj] + '</h4>')
			.append('<p class="card-text"><small class="text-muted">')
			.append(button)
		)
	$('main .row').append(card);
	}
}

function choose(){
	var element = $(this).siblings().get(0);
	var text = $(element).text();
	console.log('you choose: ',text);
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

