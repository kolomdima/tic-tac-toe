document.addEventListener("DOMContentLoaded", function (event) {
    const tdCollection = document.getElementsByTagName("td");
    let clickCounter = 0;
    let symbol = 'x';
    let className = 'player1' ;
    let gameOver = false;
    for (let index = 0; index < tdCollection.length; index++) {
        const element = tdCollection[index];
        element.addEventListener("click", function () {
            if (element.textContent || gameOver) {
                return;
            }
            if (clickCounter % 2) {
                symbol = 'x';
                className = 'player1';
            } else {
                symbol = 'o';
                className = 'player2';
            }
            element.textContent = symbol;
            element.classList.add(className);
            clickCounter++;
            // Win case 
            if (
                (tdCollection[0].className ) && (tdCollection[0].className == tdCollection[1].className && tdCollection[0].className == tdCollection[2].className) || 
                (tdCollection[0].className ) && (tdCollection[0].className == tdCollection[4].className && tdCollection[0].className == tdCollection[8].className) ||
                (tdCollection[0].className ) && (tdCollection[0].className == tdCollection[3].className && tdCollection[0].className == tdCollection[6].className) ||
                (tdCollection[1].className ) && (tdCollection[1].className == tdCollection[4].className && tdCollection[1].className == tdCollection[7].className) ||
                (tdCollection[2].className ) && (tdCollection[2].className == tdCollection[5].className && tdCollection[2].className == tdCollection[8].className) ||
                (tdCollection[2].className) && (tdCollection[2].className == tdCollection[4].className && tdCollection[2].className == tdCollection[6].className) ||
                (tdCollection[3].className) && (tdCollection[3].className == tdCollection[4].className && tdCollection[3].className == tdCollection[5].className) ||
                (tdCollection[6].className) && (tdCollection[6].className == tdCollection[7].className && tdCollection[6].className == tdCollection[8].className)
                ) {
                alert(element.className + ' WIN!');
                gameOver = true;   
            }
            // Draw case
            if (tdCollection[0].className && tdCollection[1].className && tdCollection[2].className && tdCollection[3].className && tdCollection[4].className && tdCollection[5].className && tdCollection[6].className && tdCollection[7].className && tdCollection[8].className) {
                alert('DRAW');
                gameOver = true; 
            }
        });

    };
});

