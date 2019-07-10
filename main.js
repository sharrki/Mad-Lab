//javascript commands

function getText(){
    let one = document.getElementById("box1").value;
    let two = document.getElementById("box2").value; 
    let three = document.getElementById("box3").value; 
    let four = document.getElementById("box4").value;
    let five = document.getElementById("box5").value;

    document.getElementById("result").innerHTML= "'There are too many " + one + " " + two + " on this " + three + " airplane!', I screamed. 'Somebody has to " + four + " on the " + five + " to solve this problem!'";
}

document.getElementById("click").addEventListener("click", getText);