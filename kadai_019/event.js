// HTML要素btnのidを定数に代入する
const eventBtn = document.getElementById('btn');

// HTML要素textのidを定数に代入する
const changeText = document.getElementById('text')

// btnをクリックしたら、イベント処理を行う
eventBtn.addEventListener('click', () => {
  // textの内容を更新する
  changeText.textContent = 'ボタンをクリックしました';
  
});
