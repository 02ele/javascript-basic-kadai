
//配列
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log('=====以下for文=====');

//for文でコンソールに祝日を出力
for (const val of holidays) {
  console.log(val);
}

console.log('=====以下while文=====');

//while文でコンソールに祝日を出力
let val = 0
while (val < holidays.length) {
  console.log(holidays[val++]);
}