/* htmlからidで要素取得 */
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

/* イベントが起きた時の処理 = ここではsubmit(エンター)された時の処理 */
form.addEventListener("submit", function (event) {
    event.preventDefault();   //フォームをsubmitした時のブラウザのリロードの中断
    add();
});

function add() {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}