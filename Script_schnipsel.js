///////// My code snippet library for Lens Studio
///////// PROTIP : Ctrl + f // search this page for anything to find the right snippet
---------------------------------------------------------------------------------------------------------------------------

//Custom Script UI for the inspector:
{
https://docs.snap.com/lens-studio/references/guides/lens-features/adding-interactivity/custom-script-ui#general-ui-controls

//seperator:
// @ui {"widget":"separator"}

//Label:
//@ui {"widget":"label", "label":"Color Controls"}

// Empty label, adds empty space
//@ui {"widget":"label"}

//Group:
//@ui {"widget":"group_start", "label":"My Group"}
// inner content...
//@ui {"widget":"group_end"}
    
//@input int Options = 1 {"widget":"combobox", "values":[{"label":"Option 1", "value":"1"}, {"label":"Option 2", "value":"2"}]}
//@input string OptionOnes {"showIf":"Options", "showIfValue":"1"}
//@input string OptionTwo {"showIf":"Options", "showIfValue":"2"}
    
//@input vec3 myColor {"widget":"color"}
}

//touch blocking disables all snapchat native touch/tap interactions like doube tap to switch camera, swipe to get to other Tab in the app itself
global.touchSystem.touchBlocking = true;
//you can make exceptions to still have some of the snapchat native interactions 
global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);



//catch custom Trigger that is sent from Behaviour script and call my_function
global.behaviorSystem.addCustomTriggerResponse("my_custom_Trigger", my_function);

//sends a custom trigger to behaviour scripts in inspektor
global.behaviorSystem.sendCustomTrigger("my_custom_trigger");

    
//this exposes the function to other scripts like behaviour or custom
script.api.nameOfMyFunction = function () { }

//call a script.api function like this:
myScriptReference.api.nameOfMyFunction();


//Makes this function glbally accessable, no reference to the script needed
global.myGlobalFunction = function () {
    print("im here");
}
    
//call global functions from anywhere like this:
global.myGlobalFunction();




//Update function
var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    //do stuff here, happens EVERY FRAME use carefully
});




// Bind a function to the tap event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(my_function_name_here);

// other event examples: 
// SnapImageCaptureEvent , SnapRecordStartEvent , SmileStartedEvent , CameraBackEvent , CameraFrontEvent
// Get the full event list here: https://lensstudio.snapchat.com/api/Events




//Delay function
var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function (eventData) {
    //Do stuff here 
});
delayedEvent.reset(2);  //amount of seconds to delay



    
//ForEach Loop through array
for (var i = 0; i < script.myArray.length; i++) {
    script.myArray[i].enabled = true;
}



//shift right ONLY 1 POSITION
script.myArray.unshift(script.myArray.pop());

//shift left ONLY 1 POSITION
script.myArray.push(script.myArray.shift());


//shift array more than 1 position requires a while loop
var i = null;
var shiftAmount = 3;

while (i < shiftAmount) {
    i++;
    script.myArray.push(script.myArray.shift());
}

//shuffle an Array in-place using Durstenfeld shuffle algorithm
var myArray = ["a","b","c","d"]
function shuffleArray(myArray) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
print(myArray);     // result something like c,d,a,b



// Function to clear the current material and add a new one
function setMaterial(material) {
    script.meshVisual.clearMaterials();
    script.meshVisual.addMaterial(material);
}
setMaterial(script.materials[0]); //set material based on index of Materials list




// Play AnimationMixer
var animationWeight = 1;
var animationStartOffset = 0;
var numberOfLoops = 1;  // -1 would be infinite loops
myAnimationMixer.setWeight("animationLayerName", animationWeight);
myAnimationMixer.start("animationLayerName", animationStartOffset, numberOfLoops);
//or:
myAnimationMixer.startWithCallback("animationLayerName", animationStartOffset, numberOfLoops, CallAfter);
function CallAfter(){
print("This function will get called after the animation finished playing");
}



//Sets a new texture
//@input Asset.Texture myTexture
script.myImage.mainPass.baseTex = script.myTexture;

// Texture controls
//@input Component.Image 
script.Image.mainMaterial.mainPass.baseTex.control.play(-1, 0);
script.Image.mainMaterial.mainPass.baseTex.control.stop();
var animationDuration = script.Image.mainMaterial.mainPass.baseTex.control.duration;

/// Get Texture sizes
//@input Asset.Texture myTexture
var textureWidth = myTexture.control.getWidth();
var textureHeight = myTexture.control.getHeight();



//Get a component of a scene Object (here an Image)
script.objectWithImage.getComponent("Component.Image");



//Checks camera type
if (global.scene.getCameraType() == "back") { }// oder "front"




// Create an AudioComponent on this sceneObject and set the audio track + some audio controls
//@input Asset.AudioTrackAsset tapAnimAudio

//create new audio component and set the track
myAudioComponent = script.getSceneObject().createComponent("Component.AudioComponent");
myAudioComponent.audioTrack = script.tapAnimAudio;

myAudioComponent.play(1);   //play once
myAudioComponent.play(-1);  //play in a loop
//If it is already playing, stop
if (myAudioComponent.isPlaying()) {
    myAudioComponent.stop(true);
}
// Set a callback for when the sound stops playing
myAudioComponent.setOnFinish(function () {
    print("sound finished playing");
});

myAudioComponent.pause();   //pauses the audio
myAudioComponent.resume();  //resumes audio if pauseds



//Get Child obj from MySceneObj with index starting from 0
var MyScneObject_Child = script.MySceneObj.getChild(0);




//gets a random number between 1 and 10 - You can change the numbers
var min = 1;
var max = 10;
var randomINT = Math.floor(Math.random() * (max - min + 1) + min)
var randomFLOAT = Math.random() * (max - min) + min;

//random float between -3 and 3
var rangeX = 3;
var randomX = Math.random() * (rangeX - (-rangeX)) + (- rangeX);

// dice function:
function dice(min, max) {
    if(!min && !max){
        min = 0;
        max = 1;
    }
  var result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}
print(dice());  // result will be 0 or 1
print(dice(0, 5)); //result will be between 0 and 5
//get a random bool outcome:
var myBool = !!dice();
print(myBool);  // 0 = false, 1 = true



//ROUND a number to an integer
var myNumber = 0.834
var roundedInt = Math.round(myNumber);   // roundedInt = 1
//round a number to the first decimal
var roundedDecimal = Math.round(myNumber * 10) / 10       // roundedDecimal = 0.8




//Change the color of the default confetti particle system (or any other property)
//@input vec3 myParticleColor_Start {"widget":"color"}
//@input vec3 myParticleColor_End {"widget":"color"}
//@input Asset.Material Particle_material
script.Particle_material.mainPass.colorStart = script.myParticleColor_Start;
script.Particle_material.mainPass.colorEnd = script.myParticleColor_End;
script.Particle_material.mainPass.spawnMaxParticles = 200;
//hover over property in the material to get the Property name you need


// set a parameter in a VFX Asset
//@input Asset.VFXAsset myVfxAsset
script.myVfxAsset.properties["yourParamName"] = 1234;




//show Lens studio native Hint (automatically translated in the device language) 
//@input string hintId {"widget":"combobox","values":[{"label":"Raise your hand","value":"lens_hint_show_your_hand"},{"label":"Aim camera at the sky","value":"lens_hint_aim_camera_at_the_sky"},{"label":"Blow a kiss","value":"lens_hint_blow_a_kiss"},{"label":"Blow a kiss voice changer","value":"lens_hint_blow_a_kiss_voice_changer"},{"label":"Come closer","value":"lens_hint_come_closer"},{"label":"Do not smile","value":"lens_hint_do_not_smile"},{"label":"Do not try with a friend","value":"lens_hint_do_not_try_with_a_friend"},{"label":"Draw with your finger","value":"lens_hint_draw_with_your_finger"},{"label":"Find face","value":"lens_hint_find_face"},{"label":"Find image","value":"lens_hint_find_image"},{"label":"Find marker","value":"lens_hint_find_marker"},{"label":"Find snapcode","value":"lens_hint_find_snapcode"},{"label":"Kiss","value":"lens_hint_kiss"},{"label":"Kiss again","value":"lens_hint_kiss_again"},{"label":"Look around","value":"lens_hint_look_around"},{"label":"Look down","value":"lens_hint_look_down"},{"label":"Look left","value":"lens_hint_look_left"},{"label":"Look right","value":"lens_hint_look_right"},{"label":"Look up","value":"lens_hint_look_up"},{"label":"Make some noise!","value":"lens_hint_make_some_noise"},{"label":"Move your head","value":"lens_hint_move_your_head"},{"label":"Nod your head","value":"lens_hint_nod_your_head"},{"label":"Now kiss","value":"lens_hint_now_kiss"},{"label":"Now open your mouth","value":"lens_hint_now_open_your_mouth"},{"label":"Now raise your eyebrows","value":"lens_hint_now_raise_your_eyebrows"},{"label":"Now smile","value":"lens_hint_now_smile"},{"label":"Open your mouth","value":"lens_hint_open_your_mouth"},{"label":"Open your mouth again","value":"lens_hint_open_your_mouth_again"},{"label":"Open your mouth voice changer","value":"lens_hint_open_your_mouth_voice_changer"},{"label":"Pick a face","value":"lens_hint_pick_a_face"},{"label":"Pick a photo","value":"lens_hint_pick_a_photo"},{"label":"Pick an image","value":"lens_hint_pick_an_image"},{"label":"Raise your eyebrows","value":"lens_hint_raise_your_eyebrows"},{"label":"Raise your eyebrows again","value":"lens_hint_raise_your_eyebrows_again"},{"label":"Raise your eyebrows or open your mouth","value":"lens_hint_raise_eyebrows_or_open_mouth"},{"label":"Raise your eyebrows voice changer","value":"lens_hint_raise_your_eyebrows_voice_changer"},{"label":"Rotate your phone","value":"lens_hint_rotate_your_phone"},{"label":"Say something","value":"lens_hint_say_something"},{"label":"Smile","value":"lens_hint_smile"},{"label":"Smile again","value":"lens_hint_smile_again"},{"label":"Smile voice changer","value":"lens_hint_smile_voice_changer"},{"label":"Swap camera","value":"lens_hint_swap_camera"},{"label":"Tap a surface","value":"lens_hint_tap_a_surface"},{"label":"Tap ground to place","value":"lens_hint_tap_ground_to_place"},{"label":"Tap surface to place","value":"lens_hint_tap_surface_to_place"},{"label":"Tap the ground","value":"lens_hint_tap_ground"},{"label":"Tap!","value":"lens_hint_tap"},{"label":"Tilt your head","value":"lens_hint_tilt_your_head"},{"label":"Try it with a friend","value":"lens_hint_try_friend"},{"label":"Try it with your rear camera","value":"lens_hint_try_rear_camera"},{"label":"Turn around","value":"lens_hint_turn_around"},{"label":"Voice changer","value":"lens_hint_voice_changer"},{"label":"Walk through the door","value":"lens_hint_walk_through_the_door"}]}

if (!script.initialized) {
    script.hintComponent = script.getSceneObject().createComponent("Component.HintsComponent");    // Create the hint component
}
var showDuration = 1; // -1 für unendlich
script.hintComponent.showHint(script.hintId, -1);

//Hint that repeats
var repeatHint = script.createEvent("DelayedCallbackEvent");
repeatHint.bind(function (eventData) { script.hintComponent.showHint(script.hintId, 1); });
repeatHint.reset(4);




//function to change SceneObject of a behaviour script, place inside the bahviour script at the bottom
//@input SceneObject myNewSceneObject
function changeSceneObject() {
    script.api.sceneObject = script.myNewSceneObject;
    print("new SceneObject is: " + script.api.sceneObject.name);
    startTween();
}


//set a new start and / or end value for a tween script
//@input SceneObject myObjectWithTweenScript
var newStartValue = new vec3(0,0,0);
var newEndValue = new vec3(1,2,3);
global.tweenManager.setStartValue( script.myObjectWithTweenScript, "myTweenName", newStartValue)
global.tweenManager.setEndValue( script.myObjectWithTweenScript, "myTweenName", newEndValue);
//start the tween
global.tweenManager.startTween( script.myObjectWithTweenScript, "myTweenName");

//set new tween time (restart of tween needed possibly):
//@input Component.ScriptComponent TweenScriptToChange
script.TweenScriptToChange.api.time = 10;




//Calculate distance between two Vector3
function CalcDistance(Vec1, Vec2) {
    distX = Vec2.x - Vec1.x;
    distY = Vec2.y - Vec1.y;
    distZ = Vec2.z - Vec1.z;
    distance = Math.sqrt(distX * distX + distY * distY + distZ * distZ);
    return distance;
}
var distance = CalcDistance(Point1, Point2);
    
// Or EASIER:
var distance = pointA.distance(pointB);



//Create Euler from Values :
fromEulerAngles(Number_x, Number_y, Number_z);
    
//Convert EULER(vec3) to QUAT(vec4) (to use in a setRotation() for example)
var rotationEuler = quat.fromEulerVec(myVec3);


//Convert QUAT to EULER(vec3):
var rotationQuat = rotationEuler.toEulerAngles();



//Convert HEX color codes to RGBA colors
function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        //return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';  //better to vec4:
        return new vec4((c >> 16) & 255, (c >> 8) & 255, c & 255, 1);      //1 = alpha value, might need to be assigned seperately (?)
    }
    throw new Error('Bad Hex');
}
//Pass a Hex code into the function to get their RGBA value
var myNewRGBA = hexToRgbA('#fbafff');




//Calculate percentage % base outcome:
const a = Math.floor(Math.random() * 11);
if (a >= 8) {
    // 20% chance to land here
} else {
    // 80% chance to land here
}




//Swipe direction (THIS ALSO EXISTS IN THE ASSET LIBRARY :)
var touchStartPos;

var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData){
 touchStartPos = eventData.getTouchPosition();
});

var event = script.createEvent("TouchEndEvent"); 
event.bind(function(eventData){
 if (touchStartPos) {
   var currentPos = eventData.getTouchPosition();
   var posChange = new vec2(currentPos.x - touchStartPos.x, currentPos.y - touchStartPos.y);
 
   if (posChange.y > 0) {
     print("Swiped Down");
   } else {
     print("Swiped Up");
   }

   if (posChange.x > 0) {
     print("Swiped Right");
   } else {
     print("Swiped Left");
   }
 }
});




//// Instantiate a prefab:
//@input SceneObject myPrefab
var mySceneObject = createObjectFromPrefab();
//now you can use mySceneObject as a reference to the newly instantiated object (to change its position or parent etc)

function createObjectFromPrefab(){
    if(script.myPrefab){
        var instanceObject = script.myPrefab.instantiate(script.getSceneObject());
        return instanceObject;
    }
    else{
        return undefined;
    }
}
//copy a material and set it as the new material of instance
//@input Asset.Material myCopyMaterial
var imageMaterial = script.myCopyMaterial.clone();
instanceObject.getComponent("Component.Image").mainMaterial = imageMaterial;
    
    
    
// rotate an object towards a second object 
//@input SceneObject lookingObject
//@input SceneObject lookingTarget
function myLookAt() {
    var objectPosition = script.lookingObject.getTransform().getWorldPosition();    
    var lookAtPosition = script.lookingTarget.getTransform().getWorldPosition(); 
    lookAtPosition.y = objectPosition.y;
    
    var lookAtDirection = lookAtPosition.sub(objectPosition).normalize();
    var rotation = quat.lookAt(lookAtDirection, new vec3(0.0 , 1.0, 0.0));
    
    script.lookingObject.getTransform().setWorldRotation(rotation);
}
    
    
    
    
// Track if the user blinks / blink event:
//@input Asset.RenderMesh myFaceMesh
var blinked = false;

var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    var blinkWeight = script.myFaceMesh.control.getExpressionWeightByName("EyeBlinkRight");
        if(blinkWeight >= 0.6 && blinked == false){
          blinked = true;
          print("blinked!");
          //Put your function you want to call in here!
        }  
    
        if(blinkWeight <= 0.6){
            blinked = false;
        }
});

//Set Blendshape based on Face Expression:
//@input Component.RenderMeshVisual myFaceMesh
var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    var mouthOpenValue = script.myFaceMesh.mesh.control.getExpressionWeightByName("JawOpen");
    script.myFaceMesh.setBlendShapeWeight('Key 2', mouthOpenValue);
});




// Check if device is spectacles:
global.isSpecs = global.deviceInfoSystem.isSpectacles();



// Change background color of a button
//@input vec4 newButtoncolor {"widget":"color"}
//@input Component.ScriptComponent buttonScript
script.buttonScript.api.changeColor(script.newButtoncolor);

// add somewhere in the UIButton.js script:
script.api.changeColor = function(newCol){
    backgroundImage.mainPass.baseColor = newCol;
}



// Switch case:
var fruit = 'Papayas';
switch (fruit) {
  case 'Oranges':
    print('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    print("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    print("No fruit today");
}



// Get slider value
// @input Component.ScriptComponent UIColorPickerScript
var sliderVal = script.UIColorPickerScript.api.getSliderValue();

// get slider value whenever you move the slider
// 1. on the UI Slider -> set Callback to custom function
// 2. set your script as a reference
// 3. add a value for "On Value Changed" (the name of your function in the script, eG sliderChanged
script.api.sliderChanged = function(){
    var sliderVal = script.UIColorPickerScript.api.getSliderValue();
    print(sliderVal) 
}
