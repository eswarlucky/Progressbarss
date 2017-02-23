var progress;
var firstValue;
var secondValue;
var thirdValue;
var value;

function loadFinished()
{
 firstValue = 62;
 secondValue = 45;
 thirdValue = 62;
 value = 0;
 
 progress = document.getElementById("progress");
 progress.style.width = firstValue + "%";
 progress = document.getElementById("progress2");
 progress.style.width = secondValue + "%";
 progress = document.getElementById("progress3");
 progress.style.width = thirdValue + "%";
 updatePercentages();
}

function updatePercentages()
{
	document.getElementById("percent").innerHTML = firstValue + "%";
	
	
	if (firstValue > 100)
		document.getElementById("progress").style.background = "red";
	else
		document.getElementById("progress").style.background = "#AFD8E5";
		
	document.getElementById("percent2").innerHTML = secondValue + "%";
	if (secondValue> 100)
		document.getElementById("progress2").style.background = "red";
	else
		document.getElementById("progress2").style.background = "#AFD8E5";
		
	document.getElementById("percent3").innerHTML = thirdValue + "%";
	if (thirdValue > 100)
		document.getElementById("progress3").style.background = "red";
	else
		document.getElementById("progress3").style.background = "#AFD8E5";
}

function updateValues(number, change)
{
	switch(number)
	{
		case 1:
			firstValue += change;
			if (firstValue > 230)
				firstValue = 230;
			if (firstValue < 0)
				firstValue = 0;
			value = firstValue;
			break;
		case 2:
			secondValue += change;
			if (secondValue > 230)
				secondValue = 230;
			if (secondValue < 0)
				secondValue = 0;
			value = secondValue;
			break;
		case 3:
			thirdValue += change;
			if (thirdValue > 230)
				thirdValue = 230;
			if (thirdValue < 0)
				thirdValue = 0;
			value = thirdValue;
		default:
			console.log("Invalid progress bar received!");
	}
	
}

function onValueClicked(valueChange)
{
console.log("onValueClicked");
	var progressSelect = document.getElementById("onselect");
	var selectedProgress = progressSelect[progressSelect.selectedIndex].value;
	console.log(selectedProgress);
	if (selectedProgress == "1")
	{
		progress = document.getElementById("progress"); 
		updateValues(1,valueChange);
	}
	else if (selectedProgress == "2")
	{
		progress = document.getElementById("progress2");
		updateValues(2,valueChange);
	}
	else
	{
		progress = document.getElementById("progress3");
		updateValues(3,valueChange);
	}
		
	console.log(progress);
}


function increase(){ 
	onValueClicked(10);
  var valueToBeFilled = value;
	if (valueToBeFilled > 100)
		valueToBeFilled = 100;
  progress.style.width = valueToBeFilled + "%";
  updatePercentages();

}
function increasetwo(){ 
	onValueClicked(38);
  //tb.value = value;   
	var valueToBeFilled = value;
	if (valueToBeFilled > 100)
		valueToBeFilled = 100;
  progress.style.width = valueToBeFilled + "%";
  // document.getElementById("progress2").innerHTML = valueToBeFilled + "%";
updatePercentages();
}

function decrease(){ 
	onValueClicked(-13);
 var valueToBeFilled = value;
	if (valueToBeFilled > 100)
		valueToBeFilled = 100;
  progress.style.width = valueToBeFilled + "%";
updatePercentages();
} 
function decreasetwo(){ 
	onValueClicked(-18);
 var valueToBeFilled = value;
	if (valueToBeFilled > 100)
		valueToBeFilled = 100;
  progress.style.width = valueToBeFilled + "%";
 updatePercentages();

}
