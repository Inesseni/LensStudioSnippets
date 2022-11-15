/*
Mini Script #3 by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets

//////////////////////////////////////////////////
*/
// @input SceneObject target
// @input vec3 offset
// @input float smoothSpeed = 0.05


var transform = script.getTransform();


//CHECK TARGET
if(script.target)
{
    var targetTransform = script.target.getTransform();
}
else
{
    print("No target assigned for SmoothFollow");
}

// SMOOTH FOLLOW VIA LERP
function onUpdateEvent(eventData)
{
    if(script.target)
    {
        var desiredPosition = targetTransform.getWorldPosition().add(script.offset);
        var smoothedPosition = vec3.lerp(transform.getWorldPosition(),desiredPosition, script.smoothSpeed)
        transform.setWorldPosition(smoothedPosition);
    }
}
var event = script.createEvent("UpdateEvent");
event.bind(onUpdateEvent);  