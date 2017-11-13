//Purpose: Genrates with HTML inputs an empty matrix
function generateMatrix(rows,columns)
{
	
	
	var button 	= document.getElementsByClassName('btnCALC');
	var matrix 	= document.getElementById('matrix');
	var input 	= document.getElementById('usr-input');
	
	//Making buttons "CALCULATE-V1" and "CALCULATE-V2" visible to the user
	button[0].style.visibility = "visible";
	button[1].style.visibility = "visible";

	//Making user input visible
	input.style.visibility = "visible";
	
	//Reset previous Matrix
	matrix.innerHTML = "<h3>" + rows + " x " + columns + " Matrix</h3>";
	
	
	/*
		A basic way to code 2D elements by concertinaing two for loops:
		  C O L U M N
		R x x x x x x
		O x x x x x x
		W x x x x x x
		
		For better clarification:
		ROW: x x x x x x
		
		COLUMN:	x
				x
				x
	*/
	for(var row = 0; row < rows; row++)
	{
		for(var column = 0; column < columns; column++)
		{
			/*
				NOTE:
				The attribute name="elements" is here very important, because
				it provides an array which is later needed.
			*/
			matrix.innerHTML += '<input type="number" name="elements" style="width:30px;" value="0">'; 
		}
		
		matrix.innerHTML += '<br>';
	}
	
}



//Purpose: Shows the calculated result in Browser
function Calculate(fixed, variadic)
{
	var result 		= document.getElementById('result');
	var usrInput 	= document.getElementById('usr-input').value;
	
	//After the matrix is generated, its elements should be accessible
	var matrixElements = document.getElementsByName('elements');
	var StringElements = document.getElementById('usr-input');

	if(fixed)
	{

		result.innerHTML = calcAverageOfMatrix(matrixElements);

	}
	else if(variadic)
	{
		
		(function()
		{
			//Indirect call of "eval"
			(0,eval)(usrInput);
		
		})()

	}
	
}



/*
	ATTENTION:
	This is the fixed-arity function
*/
function calcAverageOfMatrix(matrix)
{
	var sum 		= 0;
	var quantity 	= matrix.length;
	
	
	for(var element = 0; element < quantity; element++)
	{
		//Should be "undefined" if not "true" which skips to "else"
		if(matrix[element].value)
		{

			//"+" sign converts the ".value" from string to number
			sum += (+matrix[element].value);

		}
		else
		{
			//Needed for "eval"
			sum += matrix[element];

		}
		
	}
	
	return (sum/quantity);
}



/*
	ATTENTION:
	This Variadic function is delegated to "calcAverageOfMatrix" by implementing it as a small wrapper.
*/
function calcAverage()
{

	return calcAverageOfMatrix(arguments);

}