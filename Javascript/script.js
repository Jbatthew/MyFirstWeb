

function runProgram() { 
    let namePrompt = prompt("please enter your name", "do it!!");
    console.log(namePrompt);
    const nameHeader = document.querySelector("#name");
    if (namePrompt == "Jessi" || namePrompt == "jessi") {
        nameHeader.textContent = `JESSI!!!!!!`;
    }
    else {
        nameHeader.textContent = `hello ${namePrompt}, welcome to kitty!`;
    }
    // ps, Jessi is the name of the friend I made this for :)
}
document.addEventListener('DOMContentLoaded', runProgram);
