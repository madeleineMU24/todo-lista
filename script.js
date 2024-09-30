const inputBox = document.querySelector('#inputBox'); //hämat lägg till rutan
const button = document.querySelector('#button'); //hämtar knappen
const listan = document.querySelector('.listan'); //hämtar listan

function addCheckBoxEventListerner(checkBox) { //funtionen som lyssnar på klick och trycker i boxen
    checkBox.addEventListener('click', () => {
        checkBox.parentElement.classList.toggle('checked'); //parent för ul är förälder till li och hör till classen checked så den stryks
    });
}

/*checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', () => { //ett event för klickandet
        checkBox.parentElement.classList.toggle('checked');
    })
})
*/

button.addEventListener('click', () =>{ //När man klickar på knappen körs funktionen
    const uppgiftText = inputBox.value/*.trim()*/; //trim gör att man inte kan skriva bara space tillexempel
if(uppgiftText !== ""){ //inte-lika med tom stäng
    const li = document.createElement('li'); //vi gör en lista
    const checkBox = document.createElement('input');
        checkBox.type = 'checkBox';
        checkBox.className = 'checkBox';
        
        li.appendChild(checkBox); //det läggs till en checkbox på "barnet" i li
        li.appendChild(document.createTextNode(uppgiftText)); //skapar en textnod "barnet" som lägg till i li
        listan.appendChild(li); //när det är klart lägg det till så det syns
            
inputBox.value = "";

addCheckBoxEventListerner(checkBox); //texten stryks över när vi klickar i boxen
}
})