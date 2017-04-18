$('.js-button').click(function(event) {
	event.preventDefault();
	//prevents default behavior of the button we are clicking
	var textInTheBox = $('#user-text').val();
	//what is val()?
	var textArray = textInTheBox.split(/[ "().+,?]/).filter(Boolean);
	$('.hidden').removeClass('hidden');
	$('.js-total').append(totalWordCount(textArray));
	$('.js-unique').append(uniqueWordCount(textArray));
	$('.js-avg').append(avgWordLength(textArray));
	//console.log(totalWordCount(textArray));
	//console.log(uniqueWordCount(textArray));
	//console.log(avgWordLength(textArray));
	});



function totalWordCount(text) {
	var measureTotalIndexNum = [];
	for (var i=0; i<text.length; i++) {
	}
	return i;
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
