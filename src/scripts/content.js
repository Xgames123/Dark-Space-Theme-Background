const targetTags = ["div", "footer", "body", "header", "main", "section", "aside"]

var query = ""
var first = true
for (tag of targetTags){
	if(first){
		query = tag;
		first = false
		continue
	}
	query+=(", "+tag)
}


function TransformAll(){
	const elements = document.querySelectorAll(query)
	for(element of elements){
		TransformElement(element)
	}
}

function TransformElement(element){
	var col = window.getComputedStyle(element).background
	var rgbstr = col.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
	var rgb = undefined;
	if(rgbstr.length == 3){
		rgb = {r: parseInt(rgbstr[0]), g:parseInt(rgbstr[1]), b:parseInt(rgbstr[2])}
	}
	
	if (rgb != undefined && rgb.r < 140 && rgb.g < 140 && rgb.b < 140 ){
		
		console.log("set bg")
		element.style.background = "url(https://raw.githubusercontent.com/nicoth-in/Dark-Space-Theme/master/img/background.gif)"
	}
}

function checkDOMChange(){
	TransformAll();
	setTimeout( checkDOMChange, 2000 );
}
checkDOMChange()