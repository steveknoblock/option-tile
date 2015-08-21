
// optionTile
// Transforms marked select inputs into option tile menus
// using them as data sources.
// Steve Knoblock 2015
// MIT License

var optionTiles = '';

// iterate over source selects
$('select.option-tile-source').each(function(ind, val){

	// this contains the selected element and all of its children
	optionTiles += '<div class="option-surface">';

	optionTiles += '    <ul id="' + $( this ).attr( 'id' ) + '" class="option-tiles">';

	$.each(this, function(index, value) {
	
		optionTiles += '        <li id="hello" data-select-index="' + $( this ).attr( 'value' ) + '"><span>' + $( this ).text() + '</span></li>';

	})

	optionTiles += '</ul></div>';

});

$("body").append(optionTiles);

$('.option-tiles li').each(function(index) {
	console.log("Adding click handler.");
	$(this).on('click', function(event) {
		event.stopPropagation();
		var data = $(this).attr('data-select-index');
		var id = $(this).parent().attr('id');
		//console.log("Id: " + id);
		//console.log("Data: " + data);
		$('#' + id).val(data);
		text = map[data];
		$(this).children().text(text);
	});
});