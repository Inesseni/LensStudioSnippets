/*
Mini Script by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets

//////////////////////////////////////////////////
*/
//@input SceneObject[] FrontContent
//@input SceneObject[] BackContent

function init(){
    if (global.scene.getCameraType() == "back") { 
        BackActive();
    }else{
       FrontActive();
    }
}

var frontCamEvent = script.createEvent("CameraFrontEvent");
frontCamEvent.bind(FrontActive);
var backCamEvent = script.createEvent("CameraBackEvent");
backCamEvent.bind(BackActive);


function FrontActive(){
    print("front cam active");
            for(i = 0; i < script.FrontContent.length; i++){
            script.FrontContent[i].enabled = true;
        }
        for(i = 0; i < script.BackContent.length; i++){
            script.BackContent[i].enabled = false;
        }
}

function BackActive(){    
    print("back cam active");
            for(i = 0; i < script.FrontContent.length; i++){
            script.FrontContent[i].enabled = false;
        }
        for(i = 0; i < script.BackContent.length; i++){
            script.BackContent[i].enabled = true;
        }
}
