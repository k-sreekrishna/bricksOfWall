const bricks = document.getElementsByClassName('brick');
const randColors = ['cyan', 'gold', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];


for (let i = 0; i < bricks.length; i++) {
    bricks[i].addEventListener('click', function (e) {
        const myElement = e.target;
        if (myElement.classList.contains('white'))
            return;
        myElement.style.background = randColors[Math.floor(Math.random() * randColors.length)];
        const EleStyle = getComputedStyle(myElement);
        var rs = parseInt(EleStyle.gridRowStart);
        var cs = parseInt(EleStyle.gridColumnStart);
        var re = parseInt(EleStyle.gridRowEnd);
        var ce = parseInt(EleStyle.gridColumnEnd);
        const empty = document.getElementsByClassName('white');
        for (let j = 0; j < empty.length; j++) {
            var emptyStyle = getComputedStyle(empty[j]);
            const ers = parseInt(emptyStyle.gridRowStart);
            const ere = parseInt(emptyStyle.gridRowEnd);
            const ecs = parseInt(emptyStyle.gridColumnStart);
            const ece = parseInt(emptyStyle.gridColumnEnd);
            if ((ers == rs - 1 && ecs == cs && ere == re - 1 && ece == ce) ||
                (ers == rs + 1 && ecs == cs && ere == re + 1 && ece == ce) ||
                (ers == rs && ecs == cs - 1 && ere == re && ece == ce - 1) ||
                (ers == rs && ecs == cs + 1 && ere == re && ece == ce + 1)) {
                empty[j].style.gridRowStart = rs;
                empty[j].style.gridColumnStart = cs;
                empty[j].style.gridRowEnd = re;
                empty[j].style.gridColumnEnd = ce;
                myElement.style.gridRowStart = ers;
                myElement.style.gridColumnStart = ecs;
                myElement.style.gridRowEnd = ere;
                myElement.style.gridColumnEnd = ece;
                return;
            }
            else if ((ers == rs && ecs == cs + 2 && ere == re && ece == ce + 1)) {
                // empty[j].style.gridRowStart = rs;
                empty[j].style.gridColumnStart = cs;
                // empty[j].style.gridRowEnd = re;
                empty[j].style.gridColumnEnd = ce - 1;
                // myElement.style.gridRowStart = rs;
                myElement.style.gridColumnStart = ecs - 1;
                // myElement.style.gridRowEnd = ere;
                myElement.style.gridColumnEnd = ece;
                return;
            }
            else if ((ers == rs && ecs == cs - 1 && ere == re && ece == ce - 2)) {
                // empty[j].style.gridRowStart = rs;
                empty[j].style.gridColumnStart = cs + 1;
                // empty[j].style.gridRowEnd = re;
                empty[j].style.gridColumnEnd = ce;
                // myElement.style.gridRowStart = ers;
                myElement.style.gridColumnStart = ecs;
                // myElement.style.gridRowEnd = ere;
                myElement.style.gridColumnEnd = ece + 1;
                return;
            }
            else if ((ers == rs + 2 && ecs == cs && ere == re + 1 && ece == ce)) {
                empty[j].style.gridRowStart = rs;
                // empty[j].style.gridColumnStart = cs;
                empty[j].style.gridRowEnd = re - 1;
                // empty[j].style.gridColumnEnd = ce;
                myElement.style.gridRowStart = ers - 1;
                // myElement.style.gridColumnStart = ecs;
                myElement.style.gridRowEnd = ere;
                // myElement.style.gridColumnEnd = ece;
                return;
            }
            else if ((ers == rs - 1 && ecs == cs && ere == re - 2 && ece == ce)) {
                empty[j].style.gridRowStart = rs + 1;
                // empty[j].style.gridColumnStart = cs;
                empty[j].style.gridRowEnd = re;
                // empty[j].style.gridColumnEnd = ce;
                myElement.style.gridRowStart = ers;
                // myElement.style.gridColumnStart = ecs;
                myElement.style.gridRowEnd = ere + 1;
                // myElement.style.gridColumnEnd = ece;
                return;
            }
        }
    });
}


