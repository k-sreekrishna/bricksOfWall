const bricks = document.getElementsByClassName('brick');
const randColors = ['cyan', 'gold', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];


for (let i = 0; i < bricks.length; i++) {
    bricks[i].addEventListener('click', function (e) {
        const myElement = e.target;
        if (myElement.classList.contains('white'))
            return;
        myElement.style.background = randColors[Math.floor(Math.random() * randColors.length)];
        const EleStyle = getComputedStyle(myElement);
        const rs = parseInt(EleStyle.gridRowStart);
        const cs = parseInt(EleStyle.gridColumnStart);
        const re = parseInt(EleStyle.gridRowEnd);
        const ce = parseInt(EleStyle.gridColumnEnd);
        const empty = document.getElementsByClassName('white');
        const allWhiteSpace = [];
        for (let j = 0; j < empty.length; j++) {
            const emptyStyle = getComputedStyle(empty[j]);
            const ers = parseInt(emptyStyle.gridRowStart);
            const ere = parseInt(emptyStyle.gridRowEnd);
            const ecs = parseInt(emptyStyle.gridColumnStart);
            const ece = parseInt(emptyStyle.gridColumnEnd);
            allWhiteSpace.push([ers, ecs, ere, ece]);
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
                empty[j].style.gridColumnStart = cs + 1;
                empty[j].style.gridColumnEnd = ce;
                myElement.style.gridColumnStart = ecs;
                myElement.style.gridColumnEnd = ece + 1;
                return;
            }
            else if ((ers == rs + 2 && ecs == cs && ere == re + 1 && ece == ce)) {
                empty[j].style.gridRowStart = rs;
                empty[j].style.gridRowEnd = re - 1;
                myElement.style.gridRowStart = ers - 1;
                myElement.style.gridRowEnd = ere;
                return;
            }
            else if ((ers == rs - 1 && ecs == cs && ere == re - 2 && ece == ce)) {
                empty[j].style.gridRowStart = rs + 1;
                empty[j].style.gridRowEnd = re;
                myElement.style.gridRowStart = ers;
                myElement.style.gridRowEnd = ere + 1;
                return;
            }
        }
        if (ce - cs == 2) {
            const s1 = [rs - 1, cs, re - 1, cs + 1].toString();
            const s2 = [rs - 1, cs + 1, re - 1, ce].toString();
            const s3 = [rs + 1, cs, re + 1, cs + 1].toString();
            const s4 = [rs + 1, cs + 1, re + 1, ce].toString();
            let a = -1, b = -1, c = -1, d = -1;
            for (let i = 0; i < allWhiteSpace.length; i++) {
                if (s1 == allWhiteSpace[i].toString()) {
                    a = i;
                }
                else if (s2 == allWhiteSpace[i].toString()) {
                    b = i;
                }
                else if (s3 == allWhiteSpace[i].toString()) {
                    c = i;
                }
                else if (s4 == allWhiteSpace[i].toString()) {
                    d = i;
                }
            }
            if (a != -1 && b != -1) {
                myElement.style.gridRowStart = rs - 1;
                myElement.style.gridColumnStart = cs;
                myElement.style.gridRowEnd = re - 1;
                myElement.style.gridColumnEnd = ce;
                empty[a].style.gridRowStart = rs;
                empty[a].style.gridColumnStart = cs;
                empty[a].style.gridRowEnd = re;
                empty[a].style.gridColumnEnd = cs + 1;
                empty[b].style.gridRowStart = rs;
                empty[b].style.gridColumnStart = cs + 1;
                empty[b].style.gridRowEnd = re;
                empty[b].style.gridColumnEnd = ce;
                return;
            }
            else if (c != -1 && d != -1) {
                myElement.style.gridRowStart = rs + 1;
                myElement.style.gridColumnStart = cs;
                myElement.style.gridRowEnd = re + 1;
                myElement.style.gridColumnEnd = ce;
                empty[c].style.gridRowStart = rs;
                empty[c].style.gridColumnStart = cs;
                empty[c].style.gridRowEnd = re;
                empty[c].style.gridColumnEnd = cs + 1;
                empty[d].style.gridRowStart = rs;
                empty[d].style.gridColumnStart = cs + 1;
                empty[d].style.gridRowEnd = re;
                empty[d].style.gridColumnEnd = ce;
                return;
            }
        } else if (re - rs == 2) {
            const s1 = [rs, cs - 1, rs + 1, ce - 1].toString();
            const s2 = [rs + 1, cs - 1, re, ce - 1].toString();
            const s3 = [rs, cs + 1, rs + 1, ce + 1].toString();
            const s4 = [rs + 1, cs + 1, re, ce + 1].toString();
            let a = -1, b = -1, c = -1, d = -1;
            for (let i = 0; i < allWhiteSpace.length; i++) {
                if (s1 == allWhiteSpace[i].toString()) {
                    a = i;
                }
                else if (s2 == allWhiteSpace[i].toString()) {
                    b = i;
                }
                else if (s3 == allWhiteSpace[i].toString()) {
                    c = i;
                }
                else if (s4 == allWhiteSpace[i].toString()) {
                    d = i;
                }
            }
            if (a != -1 && b != -1) {
                myElement.style.gridRowStart = rs;
                myElement.style.gridColumnStart = cs - 1;
                myElement.style.gridRowEnd = re;
                myElement.style.gridColumnEnd = ce - 1;
                empty[a].style.gridRowStart = rs;
                empty[a].style.gridColumnStart = cs;
                empty[a].style.gridRowEnd = rs + 1;
                empty[a].style.gridColumnEnd = ce;
                empty[b].style.gridRowStart = rs + 1;
                empty[b].style.gridColumnStart = cs;
                empty[b].style.gridRowEnd = re;
                empty[b].style.gridColumnEnd = ce;
                return;
            }
            else if (c != -1 && d != -1) {
                myElement.style.gridRowStart = rs;
                myElement.style.gridColumnStart = cs + 1;
                myElement.style.gridRowEnd = re;
                myElement.style.gridColumnEnd = ce + 1;
                empty[c].style.gridRowStart = rs;
                empty[c].style.gridColumnStart = cs;
                empty[c].style.gridRowEnd = rs + 1;
                empty[c].style.gridColumnEnd = ce;
                empty[d].style.gridRowStart = rs + 1;
                empty[d].style.gridColumnStart = cs;
                empty[d].style.gridRowEnd = re;
                empty[d].style.gridColumnEnd = ce;
                return;
            }
        }
    });
}


