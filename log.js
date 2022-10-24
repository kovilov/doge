const cheat = document.getElementById('cheat');
const btn = document.getElementById('buy');

btn.onclick = event => {
    console.log(cheat.selectedIndex);
    let checkedCheat = cheat.options[cheat.selectedIndex].text;

    if (checkedCheat == 'PC') {
        window.location.href = "main.html";
    } 
    else if (checkedCheat == 'Mobile') {
        window.location.href = "phone.html";
    } else {
        alert("Invalid error");
    }

};