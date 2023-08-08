// 定数にHTML要素btnのidを代入する
const eventBtn = document.getElementById('btn');

// 定数にHTML要素textのidを代入する
const changeText = document.getElementById('text');

// btnをクリックしたらイベント処理を行う
eventBtn.addEventListener('click', () =>{
// ２秒後に実施する
setTimeout(() => {
  // h2の文章を書き換える
  changeText.textContent = 'ボタンをクリックしました';
}, 2000);

}) ;