import "./styles.css";
/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 ="let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数は上書き";
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name:"じゃけえ",
//   age: 28,

// };
// val4.name = "jak";
// val4.addres = "hiroshima";
// console.log(val4)

// constで定義した配列はプロパティの変更可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "aka";
// const age = 23;
// //私の名前はakaです。年齢は23際です。

// //従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age +  "です。";
// // console.log(message1);

// //テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function fun1(str) {
//   return str;
// }

// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// // const func2 = (str) =>{

// //   return str;
// // }
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }

// const func3 = (num1, num2) => num1+num2;
// console.log(func3(10,20));

////分割代入
// const myProfile = {
//   name: "seki",
//   age: 23
// };
// const message1 = `名前は${myProfile.name}。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}。年齢は${age}です。`;
// console.log(message2);
// const myProfile = ['aka',23];

// const message3 = `名前は${myProfile[0]}。年齢は${myProfile[1]}`;

// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}。年齢は${age}です。`;
// console.log(message4);

////デフォルトを入れる
// const sayHello = (name="名無し") => console.log(`こんにちは！${name}さん`);
// sayHello("aka");
// sayHello();

//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) =>console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const[num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

//mapやfilterを使った配列の処理

// const nameArr = ["田中", "山田", "関"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
// return name;
// })

// console.log(nameArr2);

// nameArr.map((name,index) =>console.log(`${index+1}番目は${name}desu`));

// nameArr.map((name) => console.log(name));
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2 ===1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name === "じゃけえ"){
//   return name
// } else {
//   return `${name}san`
// }
// })
// console.log(newNameArr);

//

/**
 *
 * 三項演算子
 * ある条件？条件がtrueの時:条件がfalseの時
 *
 */
// const val1 =1>0 ?`trueです`:`falseです`;
// console.log(val1);

// const num = 1000;

// const formattedNum = typeof num ==='number' ? num.toLocaleString():'数値を入力してください'
// console.log(formattedNum);
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(50, 49));
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }
// if(flag1 && flag2){
//   console.log("1も2も１trueになります");
// }
