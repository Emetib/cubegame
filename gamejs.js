// JavaScript Document defines game behaviour.
//The Game

$(function () //document.ready function shorthand
{

			
	$('#closeInstructionDialog').bind('tap', function () //on exit button click
	{ 
		$('.ui-dialog').dialog('close'); //closes instruction dialog
	});		
		
	$('#startGame').bind('tap', function () // when game window opened
	{

//STEP ONE: TIMER

		var score = 0; //Define score variable
		$("#score").text(score); //show on screen
		var seconds = 60; // define game time
		setTimeout(updateCountdown, 1000); //run function after a second

		function updateCountdown()
		{
			seconds--; //remove second from timer
			if (seconds > 0)
			{
				$("#countdown").text(+seconds + " Seconds"); //update screen countdown
				setTimeout(updateCountdown, 1000); // run function again after a second passes
			}
			else
			{
				endgame(score); //end game
			}
		}

//STEP TWO: ASIGN RANDOM START COlOURS

		$('.face').children().each(function () //for each tile on each face
		{ 

			var child = $(this);
			var childColour = child.css('background-color'); //get background colour
			var colours = 3; // number of possible colours add more options to array if increased.
			var random = Math.floor(Math.random() * colours); // get random number inside range of colours
			var arrayColours = ["rgba(255, 0, 0, 0.7)", "rgba(0, 255, 0, 0.7)", "rgba(0, 0, 255, 0.7)"] // array of colour options

			if (childColour == "rgba(0, 0, 0, 0)") //if colour is unnassigned
			{ 
				childColour = arrayColours[random]; //get random colour from array
				child.css('background-color', childColour); //assign colour to background
			}

			child.bind('tap', function (event) //bind event listener for tap on tile
			{ 
				child.css('border', "6px outset yellow"); //changes border to simulate pressed button
				matchTiles(child); //run match function on tap
			});
		});

//STEP THREE: MATCH TILES

		function matchTiles(child)
		{
			var mColour = child.css('background-color'); // get colour to match
			var mTiles = [child]; //create tile checking array and add user selected item
			var count = 0; //keep count of matched tiles
			count = 0; // reset count on each tile press

			while (mTiles.length != 0) //loop while objects in array
			{ 
				switch (mTiles[0].attr('id')) //switch by first object in array
				{ 
					case 'F1':
						//case Front Top Left
						var match1 = $(document.getElementById("L3"));
						var match2 = $(document.getElementById("F2")); // define four tiles in contact with
						var match3 = $(document.getElementById("T7")); // array object
						var match4 = $(document.getElementById("F4"));

						if (match1.css('background-color') == mColour)
						{ //check tile for colour match 
							mTiles.push(match1) //add tile to array
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)'); // remove checked tile colour
						mTiles.splice(0, 1); //remove checked tile from array
						count++; //add one to tile count
						break; //exit switch, restart while loop.

					case 'F2':
						//all cases same, skip to line ~1640.
						var match1 = $(document.getElementById("F1"));
						var match2 = $(document.getElementById("F3"));
						var match3 = $(document.getElementById("T8"));
						var match4 = $(document.getElementById("F5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F3':

						var match1 = $(document.getElementById("F2"));
						var match2 = $(document.getElementById("R1"));
						var match3 = $(document.getElementById("T9"));
						var match4 = $(document.getElementById("F6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F4':

						var match1 = $(document.getElementById("L6"));
						var match2 = $(document.getElementById("F5"));
						var match3 = $(document.getElementById("F1"));
						var match4 = $(document.getElementById("F7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F5':

						var match1 = $(document.getElementById("F4"));
						var match2 = $(document.getElementById("F6"));
						var match3 = $(document.getElementById("F2"));
						var match4 = $(document.getElementById("F8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;

						break;

					case 'F6':

						var match1 = $(document.getElementById("F5"));
						var match2 = $(document.getElementById("R4"));
						var match3 = $(document.getElementById("F3"));
						var match4 = $(document.getElementById("F9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F7':

						var match1 = $(document.getElementById("L9"));
						var match2 = $(document.getElementById("F8"));
						var match3 = $(document.getElementById("F4"));
						var match4 = $(document.getElementById("U1"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F8':

						var match1 = $(document.getElementById("F7"));
						var match2 = $(document.getElementById("F9"));
						var match3 = $(document.getElementById("F5"));
						var match4 = $(document.getElementById("U2"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'F9':

						var match1 = $(document.getElementById("F8"));
						var match2 = $(document.getElementById("R7"));
						var match3 = $(document.getElementById("F6"));
						var match4 = $(document.getElementById("U3"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L1':

						var match1 = $(document.getElementById("B7"));
						var match2 = $(document.getElementById("L2"));
						var match3 = $(document.getElementById("T1"));
						var match4 = $(document.getElementById("L4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L2':

						var match1 = $(document.getElementById("L1"));
						var match2 = $(document.getElementById("L3"));
						var match3 = $(document.getElementById("T4"));
						var match4 = $(document.getElementById("L5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L3':

						var match1 = $(document.getElementById("L2"));
						var match2 = $(document.getElementById("F1"));
						var match3 = $(document.getElementById("T7"));
						var match4 = $(document.getElementById("L6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L4':

						var match1 = $(document.getElementById("B6"));
						var match2 = $(document.getElementById("L5"));
						var match3 = $(document.getElementById("L1"));
						var match4 = $(document.getElementById("L7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L5':

						var match1 = $(document.getElementById("L4"));
						var match2 = $(document.getElementById("L6"));
						var match3 = $(document.getElementById("L2"));
						var match4 = $(document.getElementById("L8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L6':

						var match1 = $(document.getElementById("L5"));
						var match2 = $(document.getElementById("F4"));
						var match3 = $(document.getElementById("L3"));
						var match4 = $(document.getElementById("L9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L7':

						var match1 = $(document.getElementById("B1"));
						var match2 = $(document.getElementById("L8"));
						var match3 = $(document.getElementById("L4"));
						var match4 = $(document.getElementById("U7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L8':

						var match1 = $(document.getElementById("L7"));
						var match2 = $(document.getElementById("L9"));
						var match3 = $(document.getElementById("L5"));
						var match4 = $(document.getElementById("U4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'L9':

						var match1 = $(document.getElementById("L8"));
						var match2 = $(document.getElementById("F7"));
						var match3 = $(document.getElementById("L6"));
						var match4 = $(document.getElementById("U1"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;
						
					case 'R1':

						var match1 = $(document.getElementById("F3"));
						var match2 = $(document.getElementById("R2"));
						var match3 = $(document.getElementById("T9"));
						var match4 = $(document.getElementById("R4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R2':

						var match1 = $(document.getElementById("R1"));
						var match2 = $(document.getElementById("R3"));
						var match3 = $(document.getElementById("T6"));
						var match4 = $(document.getElementById("R5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R3':

						var match1 = $(document.getElementById("R2"));
						var match2 = $(document.getElementById("B9"));
						var match3 = $(document.getElementById("T3"));
						var match4 = $(document.getElementById("R6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R4':

						var match1 = $(document.getElementById("F6"));
						var match2 = $(document.getElementById("R5"));
						var match3 = $(document.getElementById("R1"));
						var match4 = $(document.getElementById("R7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R5':

						var match1 = $(document.getElementById("R4"));
						var match2 = $(document.getElementById("R6"));
						var match3 = $(document.getElementById("R2"));
						var match4 = $(document.getElementById("R8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R6':

						var match1 = $(document.getElementById("R5"));
						var match2 = $(document.getElementById("B6"));
						var match3 = $(document.getElementById("R3"));
						var match4 = $(document.getElementById("R9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R7':

						var match1 = $(document.getElementById("F9"));
						var match2 = $(document.getElementById("R8"));
						var match3 = $(document.getElementById("R4"));
						var match4 = $(document.getElementById("U3"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R8':

						var match1 = $(document.getElementById("R7"));
						var match2 = $(document.getElementById("R9"));
						var match3 = $(document.getElementById("R5"));
						var match4 = $(document.getElementById("U6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'R9':

						var match1 = $(document.getElementById("R8"));
						var match2 = $(document.getElementById("B3"));
						var match3 = $(document.getElementById("R6"));
						var match4 = $(document.getElementById("U9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;
						
					case 'T1':

						var match1 = $(document.getElementById("L1"));
						var match2 = $(document.getElementById("T2"));
						var match3 = $(document.getElementById("B7"));
						var match4 = $(document.getElementById("T4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T2':

						var match1 = $(document.getElementById("T1"));
						var match2 = $(document.getElementById("T3"));
						var match3 = $(document.getElementById("B8"));
						var match4 = $(document.getElementById("T5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T3':

						var match1 = $(document.getElementById("T2"));
						var match2 = $(document.getElementById("R3"));
						var match3 = $(document.getElementById("B9"));
						var match4 = $(document.getElementById("T6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T4':

						var match1 = $(document.getElementById("L2"));
						var match2 = $(document.getElementById("T5"));
						var match3 = $(document.getElementById("T1"));
						var match4 = $(document.getElementById("T7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T5':

						var match1 = $(document.getElementById("T4"));
						var match2 = $(document.getElementById("T6"));
						var match3 = $(document.getElementById("T2"));
						var match4 = $(document.getElementById("T8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T6':

						var match1 = $(document.getElementById("T5"));
						var match2 = $(document.getElementById("R2"));
						var match3 = $(document.getElementById("T3"));
						var match4 = $(document.getElementById("T9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T7':

						var match1 = $(document.getElementById("L3"));
						var match2 = $(document.getElementById("T8"));
						var match3 = $(document.getElementById("T4"));
						var match4 = $(document.getElementById("F1"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T8':

						var match1 = $(document.getElementById("T7"));
						var match2 = $(document.getElementById("T9"));
						var match3 = $(document.getElementById("T5"));
						var match4 = $(document.getElementById("F2"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'T9':

						var match1 = $(document.getElementById("T8"));
						var match2 = $(document.getElementById("R1"));
						var match3 = $(document.getElementById("T6"));
						var match4 = $(document.getElementById("F3"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B1':

						var match1 = $(document.getElementById("L7"));
						var match2 = $(document.getElementById("B2"));
						var match3 = $(document.getElementById("U7"));
						var match4 = $(document.getElementById("B4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B2':

						var match1 = $(document.getElementById("B1"));
						var match2 = $(document.getElementById("B3"));
						var match3 = $(document.getElementById("U8"));
						var match4 = $(document.getElementById("B5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B3':

						var match1 = $(document.getElementById("B2"));
						var match2 = $(document.getElementById("R9"));
						var match3 = $(document.getElementById("U9"));
						var match4 = $(document.getElementById("B6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B4':

						var match1 = $(document.getElementById("L4"));
						var match2 = $(document.getElementById("B5"));
						var match3 = $(document.getElementById("B1"));
						var match4 = $(document.getElementById("B7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B5':

						var match1 = $(document.getElementById("B4"));
						var match2 = $(document.getElementById("B6"));
						var match3 = $(document.getElementById("B2"));
						var match4 = $(document.getElementById("B8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++
						break;

					case 'B6':

						var match1 = $(document.getElementById("B5"));
						var match2 = $(document.getElementById("R6"));
						var match3 = $(document.getElementById("B3"));
						var match4 = $(document.getElementById("B9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B7':

						var match1 = $(document.getElementById("L1"));
						var match2 = $(document.getElementById("B8"));
						var match3 = $(document.getElementById("B4"));
						var match4 = $(document.getElementById("T1"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B8':

						var match1 = $(document.getElementById("B7"));
						var match2 = $(document.getElementById("B9"));
						var match3 = $(document.getElementById("B5"));
						var match4 = $(document.getElementById("T2"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'B9':

						var match1 = $(document.getElementById("B8"));
						var match2 = $(document.getElementById("R3"));
						var match3 = $(document.getElementById("B6"));
						var match4 = $(document.getElementById("T3"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;
						
					case 'U1':

						var match1 = $(document.getElementById("L9"));
						var match2 = $(document.getElementById("U2"));
						var match3 = $(document.getElementById("F7"));
						var match4 = $(document.getElementById("U4"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U2':

						var match1 = $(document.getElementById("U1"));
						var match2 = $(document.getElementById("U3"));
						var match3 = $(document.getElementById("F8"));
						var match4 = $(document.getElementById("U5"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U3':

						var match1 = $(document.getElementById("U2"));
						var match2 = $(document.getElementById("R7"));
						var match3 = $(document.getElementById("F9"));
						var match4 = $(document.getElementById("U6"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U4':

						var match1 = $(document.getElementById("L8"));
						var match2 = $(document.getElementById("U5"));
						var match3 = $(document.getElementById("U1"));
						var match4 = $(document.getElementById("U7"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U5':

						var match1 = $(document.getElementById("U4"));
						var match2 = $(document.getElementById("U6"));
						var match3 = $(document.getElementById("U2"));
						var match4 = $(document.getElementById("U8"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U6':

						var match1 = $(document.getElementById("U5"));
						var match2 = $(document.getElementById("R8"));
						var match3 = $(document.getElementById("U3"));
						var match4 = $(document.getElementById("U9"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U7':

						var match1 = $(document.getElementById("L7"));
						var match2 = $(document.getElementById("U8"));
						var match3 = $(document.getElementById("U4"));
						var match4 = $(document.getElementById("B1"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U8':

						var match1 = $(document.getElementById("U7"));
						var match2 = $(document.getElementById("U9"));
						var match3 = $(document.getElementById("U5"));
						var match4 = $(document.getElementById("B2"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;

					case 'U9':

						var match1 = $(document.getElementById("U8"));
						var match2 = $(document.getElementById("R9"));
						var match3 = $(document.getElementById("U6"));
						var match4 = $(document.getElementById("B3"));

						if (match1.css('background-color') == mColour)
						{
							mTiles.push(match1)
						}
						if (match2.css('background-color') == mColour)
						{
							mTiles.push(match2)
						}
						if (match3.css('background-color') == mColour)
						{
							mTiles.push(match3)
						}
						if (match4.css('background-color') == mColour)
						{
							mTiles.push(match4)
						}

						$(mTiles[0]).css('background-color', 'rgba(0, 0, 0, 0)');
						mTiles.splice(0, 1);
						count++;
						break;
				}
			}
			child.css('border', '6px outset white'); //resets tile border
			scoreMath(count); //run score function
			replaceTiles(); // run replace tile function
		}

//STEP FOUR: SCORE

		function scoreMath(count)
		{
			if (count > 1)
			{
			score = score + (count * count); //calculates new score
			$("#score").text(score); //displays new score
			}
		}
		
//STEP FIVE: REPLACE TILES

		function replaceTiles()
		{
			$('.face').children().each(function () //for each tile on each face
			{ 
				var child = $(this);
				var childColour = child.css('background-color'); //get background colour
				var colours = 3; // number of possible colours add more options to array if increased.
				var random = Math.floor(Math.random() * colours); // get random number inside range of colours
				var arrayColours = ["rgba(255, 0, 0, 0.7)", "rgba(0, 255, 0, 0.7)", "rgba(0, 0, 255, 0.7)"] // array of colour options

				if (childColour == "rgba(0, 0, 0, 0)") //if colour is unnassigned
				{ 
					childColour = arrayColours[random]; //get random colour from array
					child.css('background-color', childColour); //assign colour to background
				}
			})
		}
		
//STEP SIX: END GAME

		function endgame(score)
		{
			$('.face').children().each(function () //for each tile on each face
			{ 
				child = $(this);
				child.unbind() //unbind tap listener
			})
			alert("The Game Has Ended, Your Score Was:" + score + " Well Done!"); //alert final score.
			seconds = undefined; //removes game counter from memory
			$('.ui-dialog').dialog('close'); //closes game dialog
		}
		
//step Extra: close game (added during testing in response to bug)

		$('#closeDialog').bind('tap', function () //on exit button click
		{ 
			seconds = undefined; //removes game counter from memory
			$('.ui-dialog').dialog('close'); //closes game dialog
		});
		
	});
});