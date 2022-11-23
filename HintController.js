/*
Mini Script #5 by Ines Hilz
More scripts and code snippets here -> https://github.com/Inesseni/LensStudioSnippets
//////////////////////////////////////////////////

Show a hint from the list from any script with:
global.showHint();

You can pass in your own HintID to overwrite your defalut hint;
global.showHint("lens_hint_blow_a_kiss");

You can also passs in a duration, if hint should only be shown for a certain amount of time:
global.showHint("lens_hint_blow_a_kiss", 1);

Hide the current Hint with:
global.hideHint();


All hint IDS:
lens_hint_aim_camera_at_the_sky
lens_hint_blow_a_kiss
lens_hint_blow_a_kiss_voice_changer
lens_hint_come_closer
lens_hint_do_not_smile
lens_hint_do_not_try_with_a_friend
lens_hint_draw_with_your_finger
lens_hint_find_face
lens_hint_find_image
lens_hint_find_marker
lens_hint_find_snapcode
lens_hint_kiss
lens_hint_kiss_again
lens_hint_look_around
lens_hint_look_down
lens_hint_look_left
lens_hint_look_right
lens_hint_look_up
lens_hint_make_some_noise
lens_hint_move_your_head
lens_hint_nod_your_head
lens_hint_now_kiss
lens_hint_now_open_your_mouth
lens_hint_now_raise_your_eyebrows
lens_hint_now_smile
lens_hint_open_your_mouth
lens_hint_open_your_mouth_again
lens_hint_open_your_mouth_voice_changer
lens_hint_pick_a_face
lens_hint_pick_a_photo
lens_hint_pick_an_image
lens_hint_raise_your_eyebrows
lens_hint_raise_your_eyebrows_again
lens_hint_raise_eyebrows_or_open_mouth
lens_hint_raise_your_eyebrows_voice_changer
lens_hint_rotate_your_phone
lens_hint_say_something
lens_hint_smile
lens_hint_smile_again
lens_hint_smile_voice_changer
lens_hint_swap_camera
lens_hint_tap_a_surface
lens_hint_tap_ground_to_place
lens_hint_tap_surface_to_place
lens_hint_tap_ground
lens_hint_tap
lens_hint_tilt_your_head
lens_hint_try_friend
lens_hint_try_rear_camera
lens_hint_turn_around
lens_hint_voice_changer
lens_hint_walk_through_the_door
*/
//@input bool chooseFromList = true
//@input string Hint = lens_hint_show_your_hand {"widget":"combobox", "showIf":"chooseFromList" , "values":[{"label":"Raise your hand","value":"lens_hint_show_your_hand"},{"label":"Aim camera at the sky","value":"lens_hint_aim_camera_at_the_sky"},{"label":"Blow a kiss","value":"lens_hint_blow_a_kiss"},{"label":"Blow a kiss voice changer","value":"lens_hint_blow_a_kiss_voice_changer"},{"label":"Come closer","value":"lens_hint_come_closer"},{"label":"Do not smile","value":"lens_hint_do_not_smile"},{"label":"Do not try with a friend","value":"lens_hint_do_not_try_with_a_friend"},{"label":"Draw with your finger","value":"lens_hint_draw_with_your_finger"},{"label":"Find face","value":"lens_hint_find_face"},{"label":"Find image","value":"lens_hint_find_image"},{"label":"Find marker","value":"lens_hint_find_marker"},{"label":"Find snapcode","value":"lens_hint_find_snapcode"},{"label":"Kiss","value":"lens_hint_kiss"},{"label":"Kiss again","value":"lens_hint_kiss_again"},{"label":"Look around","value":"lens_hint_look_around"},{"label":"Look down","value":"lens_hint_look_down"},{"label":"Look left","value":"lens_hint_look_left"},{"label":"Look right","value":"lens_hint_look_right"},{"label":"Look up","value":"lens_hint_look_up"},{"label":"Make some noise!","value":"lens_hint_make_some_noise"},{"label":"Move your head","value":"lens_hint_move_your_head"},{"label":"Nod your head","value":"lens_hint_nod_your_head"},{"label":"Now kiss","value":"lens_hint_now_kiss"},{"label":"Now open your mouth","value":"lens_hint_now_open_your_mouth"},{"label":"Now raise your eyebrows","value":"lens_hint_now_raise_your_eyebrows"},{"label":"Now smile","value":"lens_hint_now_smile"},{"label":"Open your mouth","value":"lens_hint_open_your_mouth"},{"label":"Open your mouth again","value":"lens_hint_open_your_mouth_again"},{"label":"Open your mouth voice changer","value":"lens_hint_open_your_mouth_voice_changer"},{"label":"Pick a face","value":"lens_hint_pick_a_face"},{"label":"Pick a photo","value":"lens_hint_pick_a_photo"},{"label":"Pick an image","value":"lens_hint_pick_an_image"},{"label":"Raise your eyebrows","value":"lens_hint_raise_your_eyebrows"},{"label":"Raise your eyebrows again","value":"lens_hint_raise_your_eyebrows_again"},{"label":"Raise your eyebrows or open your mouth","value":"lens_hint_raise_eyebrows_or_open_mouth"},{"label":"Raise your eyebrows voice changer","value":"lens_hint_raise_your_eyebrows_voice_changer"},{"label":"Rotate your phone","value":"lens_hint_rotate_your_phone"},{"label":"Say something","value":"lens_hint_say_something"},{"label":"Smile","value":"lens_hint_smile"},{"label":"Smile again","value":"lens_hint_smile_again"},{"label":"Smile voice changer","value":"lens_hint_smile_voice_changer"},{"label":"Swap camera","value":"lens_hint_swap_camera"},{"label":"Tap a surface","value":"lens_hint_tap_a_surface"},{"label":"Tap ground to place","value":"lens_hint_tap_ground_to_place"},{"label":"Tap surface to place","value":"lens_hint_tap_surface_to_place"},{"label":"Tap the ground","value":"lens_hint_tap_ground"},{"label":"Tap!","value":"lens_hint_tap"},{"label":"Tilt your head","value":"lens_hint_tilt_your_head"},{"label":"Try it with a friend","value":"lens_hint_try_friend"},{"label":"Try it with your rear camera","value":"lens_hint_try_rear_camera"},{"label":"Turn around","value":"lens_hint_turn_around"},{"label":"Voice changer","value":"lens_hint_voice_changer"},{"label":"Walk through the door","value":"lens_hint_walk_through_the_door"}]}

if (!script.initialized) {
    script.hintComponent = script.getSceneObject().createComponent("Component.HintsComponent");    // Create the hint component
}
var currentHint = null;


//show hint
global.showHint = function(HintID, duration){
    if(!HintID){
        if(!script.chooseFromList){
            return print("no HintID passed into function");
        }else{
            HintID = script.Hint;
        }
    } 
    if(!duration) duration = -1;    //duration defaults to infinite if not set to specific value
    
    currentHint = HintID;
    script.hintComponent.showHint(currentHint, duration);
    print("hint is shown: " + currentHint);
}


//hide hint
global.hideHint = function(){
    if(!currentHint) return;
    
    script.hintComponent.hideHint(currentHint);
    print("hiding the hint: " + currentHint);
}




