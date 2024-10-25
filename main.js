// 14 - masala
{
  console.log(`14 - masala`);
  // Ixtiyoriy object yarating => {a:1,b:22}
  //value larinig yig'indisini toping => 23
  //value larining yigindising raqamlar yig'indisini toping => 2 + 3 = 5
  function foo(obj) {
    let yigindi = 0;
    let yigindiRaqam = 0;

    for (let item in obj) {
      yigindi += obj[item];
    }
    arr = String(yigindi).split("");
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      yigindiRaqam += +element;
    }
    return `yigindi - ${yigindi}, raqamlarYigindisi - ${yigindiRaqam}`;
  }
  let object = {
    s: 3,
    g: 6,
    yu: 9,
    r: 1,
  };

  console.log(foo(object));
}
console.log(4 > 1 ? "true" : "false");
console.log(`salom`);
