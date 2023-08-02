// 変数宣言・値代入
let num = 5;

// ３と５の倍数だった場合
if (num % 3 === 0 && num % 5 === 0 && num !== 0) {
  console.log('3と5の倍数です');
}
// ３の倍数だった場合
else if (num % 3 === 0 && num !== 0) {
  console.log('3の倍数です');
}
// ５の倍数だった場合
else if (num % 5 === 0 && num !== 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}

