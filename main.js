function checkResult() {

	var box0 = document.getElementById('box-0').value;
	var box1 = document.getElementById('box-1').value;
	var box2 = document.getElementById('box-2').value;
	var box3 = document.getElementById('box-3').value;
	var box4 = document.getElementById('box-4').value;
	var box5 = document.getElementById('box-5').value;
	var box6 = document.getElementById('box-6').value;
	var box7 = document.getElementById('box-7').value;
	var box8 = document.getElementById('box-8').value;

	var resultText = document.getElementById('result');

		resultText.innerHTML = 'Draw or Insufficient Data!';

	//Capital O
	if (box0 == 'O' && box1 == 'O' && box2 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box3 == 'O' && box4 == 'O' && box5 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box6 == 'O' && box7 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box3 == 'O' && box6 == 'O') {

		resultText.innerHTML = 'O Won!';
	}
	if (box1 == 'O' && box4 == 'O' && box7 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box5 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'O' && box4 == 'O' && box8 == 'O') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'O' && box4 == 'O' && box6 == 'O') {
		resultText.innerHTML = 'O Won!';
	}

	//Small o  
	if (box0 == 'o' && box1 == 'o' && box2 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box3 == 'o' && box4 == 'o' && box5 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box6 == 'o' && box7 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box3 == 'o' && box6 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box1 == 'o' && box4 == 'o' && box7 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box5 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	if (box0 == 'o' && box4 == 'o' && box8 == 'o') {
		resultText.innerHTML = 'O Won!';
	}
	if (box2 == 'o' && box4 == 'o' && box6 == 'o') {
		resultText.innerHTML = 'O Won!';
	}

	//Capital X
	if (box0 == 'X' && box1 == 'X' && box2 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box3 == 'X' && box4 == 'X' && box5 == 'X') {

		resultText.innerHTML = 'X Won!';
	}
	if (box6 == 'X' && box7 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box3 == 'X' && box6 == 'X') {

		resultText.innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box5 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'X' && box4 == 'X' && box8 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'X' && box4 == 'X' && box6 == 'X') {
		resultText.innerHTML = 'X Won!';
	}

	//Small x
	if (box0 == 'x' && box1 == 'x' && box2 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box3 == 'x' && box4 == 'x' && box5 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box6 == 'x' && box7 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box3 == 'x' && box6 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box1 == 'x' && box4 == 'X' && box7 == 'X') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box5 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

	if (box0 == 'x' && box4 == 'x' && box8 == 'x') {
		resultText.innerHTML = 'X Won!';
	}
	if (box2 == 'x' && box4 == 'x' && box6 == 'x') {
		resultText.innerHTML = 'X Won!';
	}

}

function reset() {

	var box0 = document.getElementById('box-0');
	var box1 = document.getElementById('box-1');
	var box2 = document.getElementById('box-2');
	var box3 = document.getElementById('box-3');
	var box4 = document.getElementById('box-4');
	var box5 = document.getElementById('box-5');
	var box6 = document.getElementById('box-6');
	var box7 = document.getElementById('box-7');
	var box8 = document.getElementById('box-8');

	box0.value = "";
	box1.value = "";
	box2.value = "";
	box3.value = "";
	box4.value = "";
	box5.value = "";
	box6.value = "";
	box7.value = "";
	box9.value = "";
}

setInterval(checkResult, 700);
