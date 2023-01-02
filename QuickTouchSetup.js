/*
Mini Script by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets
//////////////////////////////////////////////////

Drag script on a Scene Object with a RenderMeshComponant. It will fire the onTapEvent if you click it!
Super mini script to easily make things interactive.
*/


var myObj = script.getSceneObject();
var myInteractionComp = myObj.createComponent("Component.InteractionComponent");
if(myObj.getComponent("Component.RenderMeshVisual") == null) return print("Attach a RenderMeshVisual Component to " + myObj.name + " for the QuickTouchSetup");
myInteractionComp.addMeshVisual(myObj.getComponent("Component.RenderMeshVisual"));

var onTapEvent = myInteractionComp.onTouchStart.add(function(tapEventArgs){
    print(myObj.name + " tapped!")
});


