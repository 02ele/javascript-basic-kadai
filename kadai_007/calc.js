// 変数宣言・値代入
let num = 5;

// 出力確認
console.log(num);

// ３の倍数だった場合
if (num % 3 === 0 && num % 5 === 0 && num !== 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0 && num !== 0) {
  console.log('3の倍数です');
}
else if (num % 5 === 0 && num !== 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}

