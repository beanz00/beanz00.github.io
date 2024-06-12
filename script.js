
document.getElementById('harhar').load();

function play(){
    var audio = document.getElementById("harhar");
    audio.play();
}

function jumpscare(){
    var jumpscareaud = document.getElementById("harhar");
    jumpscareaud.play();
    setTimeout(() => {
        var fail = document.getElementById('fail');
        let harhar = document.createElement('img');
        document.body.style.backgroundColor = "#ffffff";
        harhar.src = "jumpscare.gif"
        harhar.classList.add('size');
        harhar.style.margin = "0 200px";
        harhar.style.textAlign = "center";
        document.body.appendChild(harhar);
        setTimeout(() => {
            harhar.classList.add('father');
            fail.classList.remove('father');
        }, 840);
    }, 200);
}

function checkAnswerq1() {
    const input1 = document.getElementById('q1');
    const input2 = document.getElementById('q2');
    const input3 = document.getElementById('q3');
    var q1score = parseInt(document.querySelector('input[name="question1"]:checked').value);
    input1.classList.add('father');
    if (q1score == "1") {
        jumpscare();
    } else {
        input2.classList.remove('father');
    }
}

function checkAnswerq2() {
    const input1 = document.getElementById('q1');
    const input2 = document.getElementById('q2');
    const input3 = document.getElementById('q3');
    var q2ans = document.getElementById('question2').value;
    input2.classList.add('father');
    if (q2ans == "2") {
        input3.classList.remove('father');
    } else if (q2ans == "4") {
        window.location.replace('flashbang.html');
    } else {
        jumpscare();
    }
}

function checkAnswerq3() {
    const input1 = document.getElementById('q1');
    const input2 = document.getElementById('q2');
    const input3 = document.getElementById('q3');
    var q3ans = document.getElementById('question3').value;
    input3.classList.add('father');
    if (q3ans == "🗿") {
        window.location.replace('question4.html');
    } else {
        jumpscare();
    }
}

