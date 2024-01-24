// -----JS CODE-----
/*
Mini Script by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets
//////////////////////////////////////////////////

Drag script on a Scene Object with a RenderMeshComponant. It will fire the onTapEvent if you click it!
Super mini script to easily make things interactive.
*/


var myObj = script.getSceneObject();
var myInteractionComp = myObj.createComponent("Component.InteractionComponent");
var myRendMeshVis = null;

if(myObj.getComponent("Component.Image") != null && myObj.getComponent("Component.RenderMeshVisual") != null){
    print("Please check " + myObj.name + " and make sure there is only one RenderMeshVisual or Image on the SceneObject")
} 

if(myObj.getComponent("Component.Image") == null) {
    if(myObj.getComponent("Component.RenderMeshVisual") == null) {
        //neither a render Mesh nor an Image is on the Scene Object, return
        return print("Attach a RenderMeshVisual or an Image Component to " + myObj.name + " for the QuickTouchSetup");
    }else{
        myRendMeshVis = myObj.getComponent("Component.RenderMeshVisual");
    }
}else{
    myRendMeshVis = myObj.getComponent("Component.Image");
}


myInteractionComp.addMeshVisual(myRendMeshVis);

var onTapEvent = myInteractionComp.onTouchStart.add(function(tapEventArgs){
    print(myObj.name + " tapped!")
    global.checkIfSelectionIsSpecial(myObj);
});
