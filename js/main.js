
var scifiName = function  () {

	// convert input to lowercase
	var inputVal = document.getElementById('inputVal').value.toLowerCase()
	console.log(inputVal)

	// create array from all characters of input value
	var inputSplit = []
	inputSplit = inputVal.split("")
	var lastChInput = inputSplit.length -1 
	console.log(inputSplit)

	
	var matchVal
	var matchSplit = []

	do {

		do{
			do {
			// generate name using name_generator.js
			matchVal = generate_name('egyptian').toLowerCase()
			console.log(matchVal)

			// create array from all characters of match value
			matchSplit = matchVal.split("")
			lastChMatch = matchSplit.length -1 
			console.log(matchSplit)
			} while ( inputSplit[0] !== matchSplit[0])
		} while (inputSplit[lastChInput] !== matchSplit[lastChMatch])

		var matchArr = []
		var sorted_matchArr =[]
		
		//loop through sorted arrays and add duplicates to match array
		for (var i= 0; i < inputSplit.length; i++) {
			for(var j =0; j < matchSplit.length; j++)
				if (inputSplit[i] == matchSplit[j]) {
					matchArr.push(inputSplit[i]);
				}
		}

		sorted_matchArr = matchArr.sort()
		console.log(sorted_matchArr)
		var uniqueArr = []

		//loop through array and find unique values
		for(var i=0; i < sorted_matchArr.length; i++) {
			//if two values in sorted match array are not similar
			if( sorted_matchArr[i+1] !== sorted_matchArr[i]) {
				//check if value already exists in unique array
				if(uniqueArr.indexOf(sorted_matchArr[i]) !== sorted_matchArr[i]){
					uniqueArr.push(sorted_matchArr[i])
				}
			}
		}
	} while (uniqueArr.length < 3)

	console.log(uniqueArr)
	console.log(matchVal)

	return matchVal

} // ./ scifiName