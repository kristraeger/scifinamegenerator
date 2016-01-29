
var scifiName = function () {

	// create name from data set using name_generator.js
	var matchVal = generate_name('egyptian').toLowerCase()
	console.log(matchVal)

	// create array from all characters of match value
	var matchSplit = matchVal.split("")
	console.log(matchSplit)

	// convert input to lowercase
	var inputVal = document.getElementById('inputVal').value.toLowerCase()
	console.log(inputVal)

	// create array from all characters of input value
	var inputSplit = inputVal.split("")
	console.log(inputSplit)

	// 

}