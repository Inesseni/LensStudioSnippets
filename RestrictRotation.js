/*
Mini Script #1 by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets
*/
///////


//@input bool specifyTarget {"label":"Specify Target" ,"hint":"On default this scene object is the target"}
//@input SceneObject newTarget { "showIf":"specifyTarget"}

// @ui {"widget":"separator"}

//@input bool restrictX
//@input bool restrictY
//@input bool restrictZ


//DEFINE THE TARGET OBJECT
var myTarget = null;
if(script.specifyTarget && script.newTarget){
    myTarget = script.newTarget;
}else{
    myTarget = script.getSceneObject();
}
var myTransform = myTarget.getTransform();


//RESTRICT ROTATION
var Update_event = script.createEvent("UpdateEvent");
Update_event.bind(function (eventData) {
    
    //get quat rotation from target
    var myQuatRot = myTransform.getWorldRotation();
    
    //convert quat to euler
    var myEulerRot = myQuatRot.toEulerAngles();

    //set 0 values for each restriction
    if(script.restrictX){
      myEulerRot.x = 0; 
    }
    if(script.restrictY){
      myEulerRot.y = 0;  
    }
    if(script.restrictZ){
       myEulerRot.z = 0;
    }

    //convert euler back to quat
    var myRestrictedRotation = quat.fromEulerVec(myEulerRot);
    
    //set new restricted Rotation every frame
    myTransform.setWorldRotation(myRestrictedRotation);
    
});
