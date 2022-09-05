//My code snippet library for Lens Studio


//touch blocking disables all snapchat native touch/tap interactions like doube tap to switch camera, swipe to get to other Tab in the app itself
global.touchSystem.touchBlocking = true;
//you can male exceptions to still have some of the snapchat native interactions 
global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);



//catch custom Trigger that is sent from Behaviour script and call my_function
global.behaviorSystem.addCustomTriggerResponse("my_custom_Trigger", my_function);

//sends a custom trigger to behaviour scripts in inspektor
global.behaviorSystem.sendCustomTrigger("my_custom_trigger");

//this makes the function global and visible for other components (behaviour scripts)to call it
script.api.nameOfMyFunction = function(){   }


//call any global function
global.myGlobalFunction();
//Any global function in different script:
global.myGlobalFunction = function(){   
    print("im here");
}




//Update function
var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData)
{
    //do stuff here, happens EVERY FRAME use carefully
});




// Bind a function to the tap event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(my_function_name_here);
//Other event types: https://lensstudio.snapchat.com/api/Events/
//zb: 
// SnapImageCaptureEvent , SnapRecordStartEvent , SmileStartedEvent , CameraBackEvent , CameraFrontEvent





//Delay function
var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function(eventData)
{    
    //Do stuff here // call other functions etc 
});
delayedEvent.reset(2);  //amount of seconds to delay




//ForEach Loop through array
for(var i = 0; i < script.myArray.length; i++){
    script.myArray[i].enabled = true;
} 



//shift right ONLY 1 POSITION
script.myArray.unshift(script.myArray.pop());

//shift left ONLY 1 POSITION
script.myArray.push(script.myArray.shift());


//shift array more than 1 position requires a while loop
var i = null;
var shiftAmount = 3;

while (i < shiftAmount){
        i++;
        script.myArray.push(script.myArray.shift());
}



// Function to clear the current material and add a new one
function setMaterial(material){
    script.meshVisual.clearMaterials();
    script.meshVisual.addMaterial(material);
   }
setMaterial(script.materials[0]); //set material based on index of Materials list




//gets a Image and plays the animated texture on it
//@input Component.Image 
script.Image.mainMaterial.mainPass.baseTex.control.play(-1,0);




//Get a component of a scene Object (here a Image)
script.objectWithImage.getComponent("Component.Image");




//Sets a new texture
script.myImage.mainPass.baseTex = script.myTexture;




//Checks camera type
if (global.scene.getCameraType() == "back" ){}// oder "front"





// Create an AudioComponent on this sceneObject and set the audio track + some audio controls
//@input Asset.AudioTrackAsset tapAnimAudio

//create new audio component and set the track
myAudioComponent = script.getSceneObject().createComponent("Component.AudioComponent");
myAudioComponent.audioTrack = script.tapAnimAudio;
    
myAudioComponent.play(1);   //play once
myAudioComponent.play(-1);  //play in a loop
//If it is already playing, stop
if(myAudioComponent.isPlaying()){
    myAudioComponent.stop(true);
}
// Set a callback for when the sound stops playing
myAudioComponent.setOnFinish(function()
{
    print("sound finished playing");
});

myAudioComponent.pause();   //pauses the audio
myAudioComponent.resume();  //resumes audio if pauseds



//Get Child obj from MySceneObj with index starting from 0
var MyScneObject_Child = script.MySceneObj.getChild(0);




//gets a random number between 1 and 10 - You can change the numbers
var randomINT = Math.floor(Math.random() * 10) + 1;
var randomFLOAT = Math.random() * (10 - 1) + 1;

//random float between -3 and 3
var rangeX = 3;
var randomX = Math.random() * (rangeX - (-rangeX)) + (- rangeX);




//Change the color of the default confetti particle system (or any other property)
//@input vec3 myParticleColor_Start {"widget":"color"}
//@input vec3 myParticleColor_End {"widget":"color"}
//@input Asset.Material Particle_material
script.Particle_material.mainPass.colorStart = script.myParticleColor_Start;
script.Particle_material.mainPass.colorEnd = script.myParticleColor_End;
script.Particle_material.mainPass.spawnMaxParticles = 200; 
//hover over property in the material to get the Property name you need





//show Lens studio native Hint (wird übersetzt in jeweilige sprache) 
//@input string hintId {"widget":"combobox","values":[{"label":"Raise your hand","value":"lens_hint_show_your_hand"},{"label":"Aim camera at the sky","value":"lens_hint_aim_camera_at_the_sky"},{"label":"Blow a kiss","value":"lens_hint_blow_a_kiss"},{"label":"Blow a kiss voice changer","value":"lens_hint_blow_a_kiss_voice_changer"},{"label":"Come closer","value":"lens_hint_come_closer"},{"label":"Do not smile","value":"lens_hint_do_not_smile"},{"label":"Do not try with a friend","value":"lens_hint_do_not_try_with_a_friend"},{"label":"Draw with your finger","value":"lens_hint_draw_with_your_finger"},{"label":"Find face","value":"lens_hint_find_face"},{"label":"Find image","value":"lens_hint_find_image"},{"label":"Find marker","value":"lens_hint_find_marker"},{"label":"Find snapcode","value":"lens_hint_find_snapcode"},{"label":"Kiss","value":"lens_hint_kiss"},{"label":"Kiss again","value":"lens_hint_kiss_again"},{"label":"Look around","value":"lens_hint_look_around"},{"label":"Look down","value":"lens_hint_look_down"},{"label":"Look left","value":"lens_hint_look_left"},{"label":"Look right","value":"lens_hint_look_right"},{"label":"Look up","value":"lens_hint_look_up"},{"label":"Make some noise!","value":"lens_hint_make_some_noise"},{"label":"Move your head","value":"lens_hint_move_your_head"},{"label":"Nod your head","value":"lens_hint_nod_your_head"},{"label":"Now kiss","value":"lens_hint_now_kiss"},{"label":"Now open your mouth","value":"lens_hint_now_open_your_mouth"},{"label":"Now raise your eyebrows","value":"lens_hint_now_raise_your_eyebrows"},{"label":"Now smile","value":"lens_hint_now_smile"},{"label":"Open your mouth","value":"lens_hint_open_your_mouth"},{"label":"Open your mouth again","value":"lens_hint_open_your_mouth_again"},{"label":"Open your mouth voice changer","value":"lens_hint_open_your_mouth_voice_changer"},{"label":"Pick a face","value":"lens_hint_pick_a_face"},{"label":"Pick a photo","value":"lens_hint_pick_a_photo"},{"label":"Pick an image","value":"lens_hint_pick_an_image"},{"label":"Raise your eyebrows","value":"lens_hint_raise_your_eyebrows"},{"label":"Raise your eyebrows again","value":"lens_hint_raise_your_eyebrows_again"},{"label":"Raise your eyebrows or open your mouth","value":"lens_hint_raise_eyebrows_or_open_mouth"},{"label":"Raise your eyebrows voice changer","value":"lens_hint_raise_your_eyebrows_voice_changer"},{"label":"Rotate your phone","value":"lens_hint_rotate_your_phone"},{"label":"Say something","value":"lens_hint_say_something"},{"label":"Smile","value":"lens_hint_smile"},{"label":"Smile again","value":"lens_hint_smile_again"},{"label":"Smile voice changer","value":"lens_hint_smile_voice_changer"},{"label":"Swap camera","value":"lens_hint_swap_camera"},{"label":"Tap a surface","value":"lens_hint_tap_a_surface"},{"label":"Tap ground to place","value":"lens_hint_tap_ground_to_place"},{"label":"Tap surface to place","value":"lens_hint_tap_surface_to_place"},{"label":"Tap the ground","value":"lens_hint_tap_ground"},{"label":"Tap!","value":"lens_hint_tap"},{"label":"Tilt your head","value":"lens_hint_tilt_your_head"},{"label":"Try it with a friend","value":"lens_hint_try_friend"},{"label":"Try it with your rear camera","value":"lens_hint_try_rear_camera"},{"label":"Turn around","value":"lens_hint_turn_around"},{"label":"Voice changer","value":"lens_hint_voice_changer"},{"label":"Walk through the door","value":"lens_hint_walk_through_the_door"}]}

if (!script.initialized) {
    script.hintComponent = script.getSceneObject().createComponent("Component.HintsComponent");    // Create the hint component
}
var showDuration = 1; // -1 für unendlich
script.hintComponent.showHint(script.hintId, -1);

//Hint that repeats
var repeatHint = script.createEvent("DelayedCallbackEvent");
repeatHint.bind(function(eventData)
{   script.hintComponent.showHint(script.hintId, 1); });
repeatHint.reset(4);




//function to change SceneObject of a behaviour script, place inside the bahviour script at the bottom
//@input SceneObject myNewSceneObject
function changeSceneObject(){
    script.api.sceneObject = script.myNewSceneObject;
    print("new SceneObject is: " + script.api.sceneObject.name);
    startTween();
}




//Calculate distance between two Vector3
function CalcDistance(Vec1, Vec2){
    distX = Vec2.x - Vec1.x;
    distY = Vec2.y - Vec1.y;
    distZ = Vec2.z - Vec1.z;
    distance = Math.sqrt(distX * distX + distY * distY + distZ * distZ);
    return distance;
}
var distance = CalcDistance(Point1, Point2);




//Convert Quaternion(vec3) to EULER (to use in a setRotation())
var rotationEuler = quat.fromEulerVec(myVec3);

//Create Euler from Values :
fromEulerAngles(Number_x, Number_y, Number_z );

//Convert EULER to Quaternion(vec3):
var rotationQuat = rotationEuler.toEulerAngles();