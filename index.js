/* htmlからidで要素取得 */
const form = document.getElementById("form");
const input = document.getElementById("input");

/* イベントが起きた時の処理 = ここではsubmit(エンター)された時の処理 */
form.addEventListener("submit", function (event) {
    event.preventDefault();   //フォームをsubmitした時のブラウザのリロードの中断
    console.log(input.value); //入力された文字や数値の出力
})