// -----JS CODE-----
/*
Mini Script #2 by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets

//////////////////////////////////////////////////

// Play a single audio (like a soundeffect) from any other script like this:
global.playSingleAudio(myAudiotrackAsset);

// Play a single audio (like a soundeffect) from any other script like this:
global.playLoopingAudio(myaudioTrackAsset);


//Play a track from the library like this:
global.playSoundFromLibrary("my Audio Name")
(Make sure "my Audio Name" is listed in the AudioName Array)
*/



//@input bool useAudioLibrary {"label":"Use Audio Library" ,"hint":"On default this scene object is the target"}
//@ui {"widget":"label"}


//@ui {"widget":"group_start", "label":"Audio Library", "showIf":"useAudioLibrary"}
//@ui {"widget":"label", "label":"Choose an Audio Name for each Audio Track"}
//@ui {"widget":"label"}
//@input string[] AudioName
//@input Asset.AudioTrackAsset[] AudioTrack
//@ui {"widget":"group_end"}


var myDefaultAudiocComp = script.getSceneObject().createComponent("Component.AudioComponent");




/// PLAY AUDIO TRACK FROM THE LIBRARY
global.playSoundFromLibrary = function(trackName){
    
    //check if Audio Library is enabled
    if(!script.useAudioLibrary){
        print("Audio library not in use! Enable Audio Library to play sound from the array")
        return;
    }
  
    //check if Track Name exists...
    for(i = 0; i<script.AudioName.length; i++){
        if(trackName == script.AudioName[i]){
            //...if yes, check if Sound is in array
            if(script.AudioTrack[i]){
                //...if yes, play sound
                myDefaultAudiocComp.audioTrack = script.AudioTrack[i];
                myDefaultAudiocComp.play(1);
            }else{
                print("no Audio Track for this ID found: " + trackName);
            }
        }else{
            print("No matching Sound found for " + trackName);
        }
    } 
}





//// PLAY AUDIO FROM OTHER SCRIPTS
global.playSingleAudio = function(audioTrack){
    if(audioTrack){
        myDefaultAudiocComp.audioTrack = audioTrack;
        myDefaultAudiocComp.play(1);
    }else{
        print("No Audio track passed into the function")
    }
}

global.playLoopingAudio = function(audioTrack){
    if(audioTrack){
        myDefaultAudiocComp.audioTrack = audioTrack;
        myDefaultAudiocComp.play(-1);
    }else{
        print("No Audio track passed into the function")
    }
}









