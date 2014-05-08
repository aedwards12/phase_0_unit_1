// I worked on this challenge [by myself, with:]
 fahia mohamed
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 pseudocode

// Rescue Mission
// move down 2x
// move right 2x
// move down 2x
// attack enemy 1

	this.moveXY(30, 26);  // Move into range
	this.attackXY(46, 5);  // Shoot once in the middle of the ogres

	// If they survive a hit, ogres retaliate!	
	// Larger ogres take more than one hit...
	// So, position and aim carefully.
	this.moveXY(40,40);
	this.attackXY(48,61);
	this.attackXY(47,53);
	this.moveXY(46,34);
	this.attackXY(67,54);
	this.attackXY(59,47);

// Grab the mushroom
// move up 1x
// move right 1x
// Defeat Org
// move right 1x
// move up 1x
// attack enemry 1

	this.moveUp();
	this.moveRight();
	this.moveLeft();
	this.moveUp();
	this.attackNearbyEnemy();

// Drink me
// move right 1x
// attack enemy 1x
// move right 1x
// move down 1x
// move up 1x
// move right 1x
// attack enemy 1x 

	this.moveRight();
	this.attackNearbyEnemy();
	this.moveRight();
	this.moveDown();
	this.moveUp();
	this.moveRight();
	this.attackNearbyEnemy();

// Taunt the Gaurds 
// move right 2x 
// move up 1x 
// move right 1x
// say hey there
// move down 1x 
// move right 1x 
// move up 1x 
// move right 1x 

	this.moveRight();
	this.bustDownDoor();
	 //Delete the "//" in front of each line below.	
	this.moveRight();
	this.say("Hey there!");
	this.moveLeft();
	this.moveLeft();
	this.say("Attack!");

	// Now get Phoebe to follow through the dungeon.
	this.moveRight();
	this.say("Follow me.");
	this.moveRight();
	this.moveRight();
	this.moveUp();
	this.moveRight();
	this.say("Hey there!");
	this.moveDown();
	this.moveRight(); 
	this.moveUp();
	this.moveRight();

// It's a trap! 
// move down 2x
// say hey there
// move up 2x
// say attack 1x 

	this.moveDown();
	this.moveDown();
	this.say("Hey there!");
	this.moveUp();
	this.moveUp();


//taunt 
// say hey 
// say hey over here
// hellooo
// heeey 

	this.say("Hey!");
	// Lure the ogre right into your arrow trap
	// by saying a few more things at him.
	// Anything works!
	this.say("hey");
	this.say("hey you");
	this.say("you over there");


//Cowaradly taunt
// moveXY to (50,16)
// say hey you 
// moveXY to (70,10)


	this.moveXY(50, 16);
	this.moveXY(63, 20);
	this.moveXY(70, 10);  // This is a safe spot.
	this.say("I can lure them in here.");

	// Run your soldier out where the ogres can hear you.
	this.moveXY(50,16);

	// Say something!
	// Then run back behind the arrow towers for safety.
	this.moveXY(70,10);
	// You can shift+click on the map to insert coordinates.

//commanding followers
//say follow
// move to (70,30) XY coordinates 
// say attack
// move to (75,63) XY coordinates 

	this.moveXY(49, 66);
	this.moveXY(60, 63);
	this.moveXY(75, 63);
	this.say("Hail, friends!");

	// Saying anything with "follow" in it will get nearby soldiers
	// to follow you
	this.say("follow me");
	// Saying anything with "attack" will send nearby troops into
	// a battle mode.
	this.moveXY(70,30);
	this.say("attack");
	this.moveXY()
	// Make sure Tharin is safe!

// Move Artillery 
// this.move to (40,43);
// this.attack at (48,61);
// this.attack at (43,53);
// this.move to (46,34);
// this.attack at (67,54);
// this.attack at(67,54);
// this.attack at (54,40);

	this.moveXY(30, 26);  // Move into range
	this.attackXY(46, 5);  // Shoot once in the middle of the ogres

	// If they survive a hit, ogres retaliate!
	// Larger ogres take more than one hit...
	// So, position and aim carefully.
	this.moveXY(40,40);
	this.attackXY(48,61);
	this.attackXY(47,53);
	this.moveXY(46,34);
	this.attackXY(67,54);
	this.attackXY(59,47);

 
// Reflection:
// Write your reflection here.

For this challenge I worked with fahia mohamed;  I found this challenge very tedious only because I have learned about object oriented programming before. 
Writing down the same functions over and over to complete the game was alittle too much but to a new programmer I can understand how it is necessary to learn from this site. 
The main issues i had was understanding what exactly I was supposed to do in order to complete these missions. I did like the last mission though, which was to use the canon 
and plot XY coordinates to defeat the enemey. For this challenge I did not learn any new tricks but for the next challenge I am sure i will. 

the '()' represents a method or function call the can be used by the object
the 'this.' represents the object being used at the time
the ';' semicolon is used as a delimiter during compile time to make the end of a statments or declaration 
