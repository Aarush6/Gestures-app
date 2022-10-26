//https://teachablemachine.withgoogle.com/models/Xfadi3hZS/


Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
});

camero = document.getElementById("camero");

Webcam.attach("#camero");

function take_pictura(){
    Webcam.snap(function(data_url){
        document.getElementById("cause").innerHTML = '<img id="pictura_has_been_takened" src="'+data_url+'"/>';
    });
}

console.log("ml5 version", ml5.version);

ordereded = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Xfadi3hZS/model.json',modelLoaded);

function modelLoaded(){
    console.log("MoDeL hAs BeEn CoMpLeTeLy CrEaTiOnEd");
}

function uttered(){
    var photosynthesis = window.speechSynthesis;
    Emoticon_uttered_1 = "The prediction of the first one is " + hypothesis_una;
   
    var Speak = new SpeechSynthesisUtterance(Emoticon_uttered_1);
    photosynthesis.speak(Speak);
}

function figure(){
img= document.getElementById('pictura_has_been_takened');
ordereded.classify(img, answer);
}

function answer(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_prob").innerHTML= results[0].label;
        hypothesis_una=results[0].label;
        uttered();
        if(results[0].label=="thumbs_up"){
            document.getElementById("update_emoticon").innerHTML= "&#128077; Means good job";
            
        }
        if(results[0].label=="okay"){
            document.getElementById("update_emoticon").innerHTML= "&#128076; means its fine";
            
        }
        if(results[0].label=="peace"){
            document.getElementById("update_emoticon").innerHTML= "&#9996; means peace";
            
        }
       
    }
}