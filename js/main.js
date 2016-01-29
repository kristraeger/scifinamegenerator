
var scifiName = function  () {

	// convert input to lowercase
	var inputVal = document.getElementById('inputVal').value.toLowerCase()
	console.log(inputVal)

	// create array from all characters of input value
	var inputSplit = inputVal.split("")
	console.log(inputSplit)

	// generate name using name_generator.js
	var matchVal = generate_name('egyptian').toLowerCase()
	console.log(matchVal)

	// create array from all characters of match value
	var matchSplit = matchVal.split("")
	console.log(matchSplit)

	//create array to store matching values
	var matchArr = []
	
	//loop through sorted arrays and add duplicates to match array
	for (var i= 0; i < inputSplit.length; i++) {
		for(var j =0; j < matchSplit.length; j++)
			if (inputSplit[i] == matchSplit[j]) {
				matchArr.push(inputSplit[i]);
			}
	}

	var sorted_matchArr = matchArr.sort()
	console.log(sorted_matchArr)

	var uniqueArr = []
	//loop through array and find unique values
	for( i=0; i< sorted_matchArr.length; i++) {
		if( sorted_matchArr[i] !== sorted_matchArr [i+1])
			uniqueArr.push(sorted_matchArr[i])
	}

	console.log(uniqueArr)

	if (uniqueArr.length > 3) {
		var result = matchVal
	}

	console.log(result)

} // ./ scifiName