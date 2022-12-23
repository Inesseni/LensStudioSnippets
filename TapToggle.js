/*
Mini Script by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets
//////////////////////////////////////////////////
*/

//@input SceneObject[] ObjectsToToggle


function toggle(){
    for(i = 0; i < script.ObjectsToToggle.length; i++){
        if(script.ObjectsToToggle[i].enabled == false) {
           script.ObjectsToToggle[i].enabled = true; 
        } else{
            script.ObjectsToToggle[i].enabled = false; 
        }
        print(script.ObjectsToToggle[i].enabled);
    }
}


var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(toggle);