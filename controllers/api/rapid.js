

var gameName = '';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21c95a5179msh4d0d521c922dd0fp1efdc9jsnef84fec80fe8',
		'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com'
	}
};

function apiGet(){
fetch('https://whatoplay.p.rapidapi.com/search?game=' + newSearch.value + '' , options)
fetch('https://whatoplay.p.rapidapi.com/search?game=zelda', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}