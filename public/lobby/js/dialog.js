$(document).ready(function(){	
	if(use=="0"){
	use="1";
	$.ajax({
	    method: "POST",
	    url: "dialog.php",
	    dataType: 'text',
	    data: {call: DialogID,actions: "fetchdialog"}
	    }).done(function(data){
		if(data.charAt(0)=="{"){	       	   
	       	DialogSet = data;
			NewsetGame();
	    }
	    else window.alert(data);
	});
	}
});
function next(){
	if((JSON.parse(DialogSet)[DialogID].Next["Next1"].Txt=="N"&&option==0)||optChoice=="done"){
		DialogID = JSON.parse(DialogSet)[DialogID].Next["Next"+index.toString()].ID;
		optChoice="no";
		index=1;
		$.ajax({
			method: "POST",
			url: "dialog.php",
			dataType: 'text',
			data: {call: DialogID,actions: "fetchdialog"}
		}).done(function(data){
		   if(data.charAt(0)=="{")
	       {
	       		DialogSet = data;
				NewsetGame();
	       }
	       else window.alert(data);
        });
	}
	else if(JSON.parse(DialogSet)[DialogID].Next["Next1"].Txt!="N"&&option==0){
		for(var i = 1;JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt!="N";i++){
			diaNumber++;
			option=1;
			var content = document.createElement("div");
			var t = document.createTextNode(JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt);
			var opt='option'+i.toString();
			content.setAttribute('class',opt);
			content.appendChild(t);
			document.getElementById("all").appendChild(content);
			content.onclick = o;
			diaMaintain();
		}
	}
}
function o(){
	if(option==1){
		if(this .className == "option1"){
			index=1;
			option=0;
			optChoice="done";
		}else if(this .className == "option2"){
			index=2;
			option=0;
			optChoice="done";
		}else if(this .className == "option3"){
			index=3;
			option=0;
			optChoice="done";
		}else if(this .className == "option4"){
			index=4;
			option=0;
			optChoice="done";
		}
	}
}
function NewsetGame()
{
	if(JSON.parse(DialogSet)[DialogID].CharacterName=="n"){
		diaNumber++;
		var content = document.createElement("div");
		var t = document.createTextNode(JSON.parse(DialogSet)[DialogID].Content);
		content.setAttribute('class', 'left_dia');
		content.appendChild(t);
		document.getElementById("all").appendChild(content);
		diaMaintain();
	}
	else{
		diaNumber++;
		var content = document.createElement("div");
		var t = document.createTextNode(JSON.parse(DialogSet)[DialogID].Content);
		content.setAttribute('class', 'right_dia');
		content.appendChild(t);
		document.getElementById("all").appendChild(content);
		diaMaintain();
	}
	if(DialogID==""){
		mapName="fu";
	}else if(DialogID==""){
		mapName="zheng";
	}else if(DialogID==""){
		mapName="jan";
	}else if(DialogID==""){
		mapName="fu";
	}else if(DialogID==""){
		mapName="zheng";
	}else if(DialogID==""){
		mapName="jan";
	}else if(DialogID==""){
		mapName="fu";
	}else if(DialogID==""){
		mapName="zheng";
	}
}  

 function diaMaintain(){
	for(;diaNumber>4;diaNumber--){
        document.getElementById("all").removeChild( document.getElementById("all").firstChild);
	}
 }
 

//var first_span = document.createElement('span');
//var second_span = document.createElement('span');
//var first_spanClass = first_span.setAttribute('class', 'bot');
//var second_spanClass = second_span.setAttribute('class', 'top');
//content.appendChild(first_span);
//content.appendChild(second_span);
