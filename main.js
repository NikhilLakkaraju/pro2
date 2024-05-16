function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kWt0WW_DW/model.json', modelready);
}


function modelready(){
    classifier.classify(gotResults);
    
}

function gotresults(){
    console.log('gotresults');
    else{
        console.log('error');
    }
}