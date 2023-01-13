
/*
Mini Script by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets

///////
How to use it: 
Have this script somewhere in the scene.
Set up a screen image in your orthographic camera with a render target as the texture. 
To shake it, call this function from anywhere in your project:
    global.shakeScreen();

If you want to have different properties of the screen shake, pass new values into the function:
    global.shakeScreen(float Speed, float Y_Offset, float damping)   
 -> global.shakeScreen(30, 0.1, 2);


ImageToShake    = Reference to the ScreenImage on a orthographic camera that uses a render target as a texture
Y_Offset        = the amount the image gets moved to left and right
speed           = the speed at which the image gets moved
damping         = how fast the screenshake normalizes back to 0

///////
*/

// @input  Component.ScreenTransform ImageToShake
// @input float Y_Offset = 0.2
// @input float speed = 50
// @input float damping = 0.05



var shakeIt = false;
var shakeSpeed = null;
var shakeOffset = null;
var shakeDamping = null;
var currentPos = script.ImageToShake.getTransform().getLocalPosition();

script.yPos = currentPos.y
script.ZPos = currentPos.z


var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    
    //if shakeAmount is <= 0, return out of update
    if(shakeOffset <= 0 )return;
    
        //change the x value smoothly over time
        var newX = Math.sin(getTime() * shakeSpeed) * shakeOffset;
        var newY = script.yPos;
        var newZ = script.ZPos;
    
        //sets the Image position every frame
        script.ImageToShake.position = new vec3(newX, newY, 0);
    
        //reduce the shakeOffset every frame slightly based on damping factor
        shakeOffset = shakeOffset - shakeDamping;
});

global.shakeScreen = function(newSpeed, newAmount, newDamping){
    
    //check if any of these values got passed into the funtion manually, if not, use the ones set in the inspector
    if(!newSpeed) newSpeed = script.speed;
    if(!newAmount) newAmount = script.Y_Offset;
    if(!newDamping) newDamping = script.damping / 1000;
    
    // set new values
    shakeSpeed = newSpeed;
    shakeOffset = newAmount;
    shakeDamping = newDamping;
}
