function showBox () {
	// show result box
	document.getElementById("resultBox").style.display = "block"
	//focus on input 
	document.getElementById("inputVal").focus()
	// hide intro
	$(".intro").hide()
	// // scroll to box
	// $("html, body").animate({
 //        scrollTop: $("#autoscroll").offset().top
 //      	}, 400, "easeInCubic");
}

var scifiName = function  () {

	//validate input 
	if (document.getElementById("inputVal").value.trim() === ""){
		document.getElementById("result").innerHTML = "please enter your first name in the search field above!"
		showBox()
		return
	}

	// convert input to lowercase
	var inputVal = document.getElementById("inputVal").value.toLowerCase()
	console.log(inputVal)

	// create array from all characters of input value
	var inputSplit = []
	inputSplit = inputVal.split("")
	var lastChInput = inputSplit.length -1 
	console.log(inputSplit)

	
	var matchVal
	var matchSplit = []

	do {

		do {
		// generate name using name_generator.js
		matchVal = generate_name("data").toLowerCase()
		console.log(matchVal)

		// create array from all characters of match value
		matchSplit = matchVal.split("")
		lastChMatch = matchSplit.length -1 
		console.log(matchSplit)
		} while ( inputSplit[0] !== matchSplit[0])

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

	// show result in result box
	document.getElementById("result").innerHTML = matchVal
	document.getElementById("autoscroll").innerHTML = "Keep clicking for more results!"
	showBox()

} // ./ scifiName

// BB8

var $w = $( window ).width();
var $dW = $('.bb8').css('width');
$dW = $dW.replace('px', '');
$dW = parseInt($dW);
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 4;
var $dAccel = 1.04;
var $dRot = 0;
var $mPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = false;

function moveDroid(){
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(moveDroid, 10);

$( document ).on( "mousemove", function( event ) {
  $('h2').addClass('hide');
  $mPos = event.pageX;
  return $mPos;
});

