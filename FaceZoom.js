/*
Mini Script by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets
///////
*/
//@input float zoom = 1.5 {"widget":"slider", "min":1, "max":3, "step":0.01}
// @ui {"widget":"separator"}

//@input Component.Head headBinding {"label":"Target Head Binding", "hint":" "}
//@input Component.ScreenTransform TargetImage {"hint":"Pivot Point will be set to the face Landmark. zoom it in to see the effect"}
//@input int FaceLandmark = 30
// list of all landmarks here : 
// https://docs.snap.com/lens-studio/references/guides/lens-features/tracking/face/face-effects/face-landmark
//@input vec2 offset = {0,0.3}

if(!script.headBinding){
    print("please set a Target Head Binding")
    return;
}
if(!script.TargetImage){
    print("please set a Target Image that you want to zoom in")
    return;
}

var newScale = new vec3(script.zoom, script.zoom,script.zoom)
script.TargetImage.scale = newScale;



//set pivot
var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    if(!faceTracked) return;
    
    //delay necessary to prevent error when head is lost
    var delayedEvent = script.createEvent("DelayedCallbackEvent");
    delayedEvent.bind(function (eventData) {
    //Do stuff here 
        if(!faceTracked) return;
        var landmarksPosition = script.headBinding.getLandmark(script.FaceLandmark);
        
        //making sure there is no gap on the sides if we move the face too far out of frame
        if(landmarksPosition.x >= 1) landmarksPosition.x = 1;
        if(landmarksPosition.x <= 0) landmarksPosition.x = 0;
        if(landmarksPosition.y >= 1) landmarksPosition.y = 1;
        if(landmarksPosition.y <= 0) landmarksPosition.y = 0;
        
        //adding in an offset
        var offsetLandmarkPosition = new vec2(landmarksPosition.x + script.offset.x,landmarksPosition.y + script.offset.y);   
        var parentPos = script.TargetImage.screenPointToParentPoint(offsetLandmarkPosition);
        script.TargetImage.pivot = parentPos;
    });
    delayedEvent.reset(0.1);
    
});

var faceTracked = false;

function faceFound () {
    faceTracked = true;
}
function faceLost () {
    print("face lost")
    faceTracked = false;
}
var ffound = script.createEvent("FaceFoundEvent");
ffound.bind(faceFound);
var flost = script.createEvent("FaceLostEvent");
flost.bind(faceLost);

