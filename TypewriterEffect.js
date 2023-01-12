/*
Mini Script by Ines Hilz
Check out a collection of script snippets here -> https://github.com/Inesseni/LensStudioSnippets
///////

How to use it: call this function from anywhere in your project:
    global.typeText("Example text");

By default, if you call the function again, the new text will be added at the end of the last text. 
Set bool to true, if you want to replace the last text and type a brand new text: 
    global.typeText("This text will Replace the last text", true);

///////
*/

//@input int TextType = 1 {"widget":"combobox", "values":[{"label":"Text", "value":"1"}, {"label":"3D Text", "value":"2"}]}

//@input Component.Text Text { "showIf":"TextType", "showIfValue":"1"}
//@input Component.Text3D Text3D { "showIf":"TextType", "showIfValue":"2"}
//@input float delayBetweenChars  = 0.2

// check what type of text we want and set the correct reference for the variable
var targetText = null;
if(script.TextType == 1 && script.Text){
    targetText =  script.Text;
}else if(script.TextType == 2 && script.Text3D){
    targetText =  script.Text3D;
}


var i  = 0;
var currentlyTyping = false;

global.typeText = function(myText, replaceText){
    
    //check if target text is set
    if(!targetText) return print("No target text for typewriter set");
    //check if another text is currently typed..
    if(currentlyTyping)return print("Another text is being typed already, '" + myText + "' not typed");
    
    //..if not, set bool to true
    currentlyTyping = true;

    // if replaceText specifically set to true, it "deletes"" the text by setting it to an emopty string
    if(replaceText == true){
        targetText.text = "";
    }
    
    //Coroutine that get's called every "delayBetweenChars" seconds
    var delayedEvent = script.createEvent("DelayedCallbackEvent");
    delayedEvent.bind(function (eventData) {
        
       targetText.text = targetText.text.concat(myText.charAt(i));
        //if the text is not spelled completely...
        if(i < myText.length){
            
            //...run the coroutine again
            delayedEvent.reset(script.delayBetweenChars);
            //and add 1 to the index
            i++;
        }else{
            //if the text is completed, set this bool to false and don't call the coroutine again
           currentlyTyping = false;
            //and reset the index
            i = 0;
        }
    });
  
    // starts the corourine for the first time
    delayedEvent.reset(script.delayBetweenChars);
    
}

global.typeText("This example text will get typed", true);
