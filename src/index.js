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

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
