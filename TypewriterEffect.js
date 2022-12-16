/*
Mini Script #7 by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets
///////

How to use it: call this function from anywhere in your project:
    global.typeText("Example text");

By default, if you call the function again, the new text will be added at the end of the last text. 
Set bool to true, if you want to replace the last text and type a brand new text: 
    global.typeText("This text will Replace the last text", true);

///////
*/

//@input Component.Text targetText
//@input float delayBetweenChars  = 0.2
var i  = 0;
var currentlyTyping = false;

global.typeText = function(myText, replaceText){
    
    //check if target text is set
    if(!script.targetText) return print("No target text for typewriter set");
    //check if another text is currently typed..
    if(currentlyTyping)return print("Another text is being typed already, '" + myText + "' not typed");
    
    //..if not, set bool to true
    currentlyTyping = true;

    // if replaceText specifically set to true, it "deletes"" the text by setting it to an emopty string
    if(replaceText == true){
        script.targetText.text = "";
    }
    
    //Coroutine that get's called every "delayBetweenChars" seconds
    var delayedEvent = script.createEvent("DelayedCallbackEvent");
    delayedEvent.bind(function (eventData) {
        
        script.targetText.text =  script.targetText.text.concat(myText.charAt(i));
        //if the text is not spelled completely...
        if(i < myText.length){
            
            //...run the coroutine again
            delayedEvent.reset(script.delayBetweenChars);
            //and add 1 to the index
            i++;
        }else{
            //if the text is completed, set this bool to false and don't call the coroutine again
           currentlyTyping = false;
        }
    });
  
    // starts the corourine for the first time
    delayedEvent.reset(script.delayBetweenChars);
    
}

global.typeText(" example text");
