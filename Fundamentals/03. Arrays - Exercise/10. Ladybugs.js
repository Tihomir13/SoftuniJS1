function Ladybug(info) {
    let field = [];
    let string = info[1].split(` `);
    let moving = [];

    //starting field
    for (let i = 0; i < info[0]; i++) {
        field.push(0);
    }
    //taken indexed by tmoovingsi    
    for (let i = 0; i < string.length; i++) {
        let a = Number(string[0]);
        string.push(a);
        string.shift(0);
    }
    //bugs tooked places
    for (let i = 0; i < string.length; i++) {
        field[string[i]] += 1;
    }
    console.log(field);
    //push-vame elementite 
    for (let i = 2; i < info.length; i++) {
        moving.push(info[i])
    }
    console.log(moving);
    //pushvame vsqko po otdelno
    mvL = moving.length;
    for (let i = 0; i < mvL; i++) {
        let str = moving[i];
        let a = ``;
        for (let p = 0; p < str.length; p++) {
            if (str[p].includes(` `)) {
                moving.push(a)
                a = ``;
            }
            else {
                a += str[p];
            }
        }
        moving.push(a);
    }
    for (let i = 0; i < mvL; i++) {
        moving.shift(i);
    }
    console.log(moving);

    for (let i = 1; i < moving.length; i += 3) {
        if (moving[i] == `right`) {
            field[i - 1] -= 1;
        }
    }
    console.log(field);
}
Ladybug([3, '0 1',
    '0 right 1',
    '2 right 1']
);