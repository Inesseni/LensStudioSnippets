/*
Mini Script #6 by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets
*/
///////

//@ui {"widget":"label", "label":"Restrict transform values of this scene object to 0 or"}
//@ui {"widget":"label", "label":"copy the position / rotation of another object"}
// @ui {"widget":"separator"}

//@input bool RestrictRotation
//@ui {"widget":"group_start","label":"Set to 0", "showIf":"RestrictRotation"}
//@input bool X_Rot
//@input bool Y_Rot
//@input bool Z_Rot
// @ui {"widget":"separator"}
//@ui {"widget":"group_end"}

//@input bool mirrorRotation {"label":"Copy Rot from obj"}
//@input SceneObject RotMirrorTarget {"label":"Copy Rot from", "showIf":"mirrorRotation"}


// @ui {"widget":"separator"}

//@input bool RestrictPosition
//@ui {"widget":"group_start","label":"Set to 0", "showIf":"RestrictPosition"}
//@input bool X_Pos
//@input bool Y_Pos
//@input bool Z_Pos
// @ui {"widget":"separator"}
//@ui {"widget":"group_end"}


//@input bool mirrorPosition  {"label":"Copy Pos from obj"}
//@input SceneObject PosMirrorTarget {"label":"Copy Pos from","showIf":"mirrorPosition"}

//TODO: Scale?


//DEFINE VARIABLES
var myTarget = script.getSceneObject();
var myTransform = myTarget.getTransform();


if(script.mirrorRotation && !script.RotMirrorTarget) return print("No object set to copy rotation from");
if(script.mirrorPosition && !script.PosMirrorTarget) return print("No object set to mirror position from");




var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    
    // ROTATION
    if(script.RestrictRotation){
        if(script.X_Rot || script.Y_Rot || script.Z_Rot) restrictRotation();
    }
    if(script.mirrorRotation && script.RotMirrorTarget) copyRotationData();
    
    // POSITION 
    if(script.RestrictPosition){
       // if(script.X_Pos || script.Y_Pos || script.Z_Pos) restrictPosition(); // TODO
    } 
    if(script.mirrorPosition && script.PosMirrorTarget) copyPositionData();
    
});




//RESTRICT ROTATION
function restrictRotation(){
   
    //get quat rotation from target
    var myQuatRot = myTransform.getWorldRotation();
    
    //convert quat to euler
    var myEulerRot = myQuatRot.toEulerAngles();

    //set 0 values for each restriction
    if(script.X_Rot){
      myEulerRot.x = 0; 
    }
    if(script.Y_Rot){
      myEulerRot.y = 0;  
    }
    if(script.Z_Rot){
       myEulerRot.z = 0;
    }

    //convert euler back to quat
    var myRestrictedRotation = quat.fromEulerVec(myEulerRot);
    
    //set new restricted Rotation every frame
    myTransform.setWorldRotation(myRestrictedRotation);
}

// COPY ROTATION FROM OBJECT
function copyRotationData(){
    //get target Position data
    var targetRot = script.PosMirrorTarget.getTransform().getWorldRotation();
    
    //set targetPos as new Position for our object
    myTransform.setWorldRotation(targetRot);
}


// COPY POSITION FROM OBJECT
function copyPositionData(){
    
    //get target Position data
    var targetPos = script.PosMirrorTarget.getTransform().getWorldPosition();
    
    //set targetPos as new Position for our object
    myTransform.setWorldPosition(targetPos);
}


