const map = document.getElementById("map");
const snake = document.getElementById("snake");
const mapBuild = Array(20).fill(Array(20).fill(0))

let win = false;
let positionSnake = [];
function movement(event)
{
	var topVal = parseInt(window.getComputedStyle(snake).top, 10);
	let leftVal = parseInt(window.getComputedStyle(snake).left, 10);
	let pressed = event.charCode;
	if(pressed == 83 || pressed == 115) // numeros representando a letra (S && s)
	snake.style.top = (topVal + 16) + "px";
	if(pressed == 68 || pressed == 100) // numeros representando a letra (D && d)
	snake.style.left = (leftVal + 16) + "px";
	if(pressed == 64 || pressed == 97) // numeros representando a letra (A && a)
	snake.style.left = (leftVal - 16) + "px";
	if(pressed == 87 || pressed == 119) // numeros representando a letra (W && w)
	snake.style.top = (topVal - 16) + "px";
}


function drawMap()
{
	for (i = 0; i < mapBuild.length; i++)
		for(j = 0; j < mapBuild[i].length; j++)
		{
			if (mapBuild[i][j] == 0)
				mapBuild[i][j] = 5
		}
}

// document.addEventListener("DOMContentLoaded", getClick)
window.onload = function()
{
	addEventListener("keypress", movement);
	console.log("alo");
	console.log(map);
	console.log(mapBuild)
	drawMap()
	setInterval(game, 1000)
	var rect = snake.getBoundingClientRect();
	function game()
	{
		console.log(rect.top, rect.left);
	}

}


