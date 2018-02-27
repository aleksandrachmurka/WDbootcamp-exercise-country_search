$(function() {

	var url = "https://restcountries.eu/rest/v2/name/";
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
		console.log(resp);
		resp.forEach(function(item){
			var flag = item.flag;
			var name = item.name;
			var currency = item.currencies[0].name;
			var languages = item.languages[0].name;
			var borders = item.borders;
			var text = name + " currency: " + currency + " languages: " + languages + " borders with: " + borders;
			$('<li>').text(text).appendTo(countriesList);
			$('<img>').attr("src", flag).appendTo(countriesList);
		});
	}




});




