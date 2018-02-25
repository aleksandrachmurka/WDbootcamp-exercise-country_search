$(function() {

	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
	  	var countryName = $('#country-name').val();

	  	if(!countryName.length) countryName = 'Poland';

	  	$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
	}

	function showCountriesList(resp) {
		countriesList.empty();

		resp.forEach(function(item){
			var flag = item.flag;
			var name = item.name;
			var currency = item.currencies;
			var languages = item.languages;
			var text = name + " " + currency + " " + languages;
			$('<li>').text(text).appendTo(countriesList);
			$('<img>').attr("src", flag);
		});
	}




});




