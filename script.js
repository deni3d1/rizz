function yes(){
    document.getElementById('txt').innerHTML = "I love you 😊";
    document.getElementById('img').src = "https://i.pinimg.com/originals/3c/e8/84/3ce884bb29ad1909a2c253354497420f.gif";
    document.getElementById('btn').style.width = 120 + "px";
    document.getElementById('btn').style.height = 50 + "px";
    setTimeout(()=>{
        window.location.href = "https://youtu.be/TdtQE2T31yY?si=N85pCUBqTZ4ml3-Z";
    },1000)
}

let count = 1;
let big = 140;
let big2 = 70;

function no(){
    let message;
    let newSrc;
    switch(count) {
        case 1:
            message = "Think again please, Will you be my girlfriend???";
            newSrc = "https://i.pinimg.com/originals/84/1a/eb/841aeb9f113999616d097b414c539dfd.gif";
            break;
        case 2:
            message = "I don't belive!, Will you be my girlfriend???";
            newSrc = "https://i.pinimg.com/originals/56/a6/14/56a614261d423da1825452363174c685.gif";
            break;
        case 3:
            message = "Tell me the truth, Will you be my girlfriend???";
            newSrc = "https://i.kym-cdn.com/photos/images/newsfeed/002/738/959/060.gif";
            break;
        case 4:
            message = "Try again, Will you be my girlfriend???";
            newSrc = "https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif";
            break;
        case 5:
            message = "Last question, Will you be my girlfriend???";
            newSrc = "https://i.pinimg.com/originals/dd/c2/1f/ddc21f8c278a27abd4be7a0c48f72a26.gif";
            break;
    }
    document.getElementById('txt').innerHTML = message;
    document.getElementById('img').src = newSrc;
    document.getElementById('btn').style.width = big + "px";
    document.getElementById('btn').style.height = big2 + "px";
    if (count<5) {
        count++;
    } else {
        count = 1;
    }
    big = big+20;
    big2 = big2+20;
    
}
