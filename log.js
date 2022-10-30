const cheat = document.getElementById('cheat');
const btn = document.getElementById('buy');
const sit = document.getElementById('sit');


btn.onclick = event => {
    console.log(cheat.selectedIndex);
    let checkedCheat = cheat.options[cheat.selectedIndex].text;

    if (checkedCheat == 'PC') {
        window.location.href = "main.html";
    } 
    else if (checkedCheat == 'Mobile') {
        alert("Просим вас понять что сайт пока что не оптимизирован и некоторые style могут быть не настроены под ваш девайс!");
        window.location.href = "phone.html";
    } else {
        alert("Choose an option");
    }


    console.log(sit.selectedIndex);

    let checkedSit = sit.options[sit.selectedIndex].text;

    if (checkedSit == 'Cheats') {

    } 
    else if (checkedSit == 'Forum') {

    }
    else if (checkedSit == 'Another') {

    }
     else {
        alert("Invalid error");
    }

};
const btnn = document.querySelector("custom-select");
const btnnn = document.querySelector("radios");

btnn.onclick = function () {
    let audioo = new Audio('sound.mp3');
    audioo.play();
}
btnnn.onclick = function () {
    let audiooo = new Audio('sound.mp3');
    audiooo.play();
}