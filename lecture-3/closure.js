let a = 'Global';

function outerPrint() {
    let b = 'OuterPrint';

    return function innerPrint() {
        let c = 'innerPrint';
        return `${a} -> ${b} -> ${c}`;
    };

    //const show = innerPrint();
    //console.log(show);
}
//outerPrint();
const show = outerPrint();
console.log(show);
const innerPrint = show();
console.log(innerPrint);
