//totalWordCount(["aaaa", "z", "zzzzz", "z", "1", "y"]);
//var textInTheBox = $('#user-text').val();

$('.js-button').click(function(event) {
	event.preventDefault();
	//prevents default behavior of the button we are clicking
	var textInTheBox = $('#user-text').val();
	var textArray = textInTheBox.split(/[ "().+,?]/).filter(Boolean);
	console.log(totalWordCount(textArray));
	console.log(uniqueWordCount(textArray));
	console.log(avgWordLength(textArray));
	});


function totalWordCount(text) {
	var measureTotalIndexNum = [];
	for (var i=0; i<text.length; i++) {
	}
	return "Word count: " + i;
}

function uniqueWordCount(text) {
	var measureTotalUnique = [];
	for (var i=0; i<text.length; i++) {
		if(measureTotalUnique.indexOf(text[i]) == -1){
        measureTotalUnique.push(text[i]);
        }   
    }
    var uniqueWord = [];
    for (var u=0; u<measureTotalUnique.length; u++) {
    }
    return "Unique word count: " + u;
}

function avgWordLength (text) {
	var measureTotalArray = [];
	for (var i=0; i<text.length; i++) {
		measureTotalArray = i + 1;
	}
	var totalStringLength = 0;
	var strLength = [];
	for (var i=0; i<text.length; i++) {
		strLength[i] = text[i].length;
		totalStringLength += text[i].length;
	}
	return totalStringLength / text.length;
}
