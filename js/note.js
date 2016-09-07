//let const ブロックスコープ
var testFunc = () => {
    let xx = true;
    if(xx == true) {
        let x = 300;   // if/for/whileなどが独自のスコープを作る
    }
    console.log(x);//x is not defined
};
