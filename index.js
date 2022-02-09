/* htmlからidで要素取得 */
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

/* イベントが起きた時の処理 = ここではsubmit(エンター)された時の処理 */
form.addEventListener("submit", function (event) {
    /* フォームをsubmitした時のブラウザのリロードの中断 */
    event.preventDefault();
    /* エンターを押されたらリストを追加する */
    add();
});

/* ユーザがフォームに入力したテキストをliタグとして画面に追加する */
function add() {
    let todoText = input.value; 
    /* 文字が入力されているかチェック */
    if (todoText.length > 0) {
        /* liタグを作る */
        const li = document.createElement("li");
        /* liをテキストとしてユーザが入力した値を入れる */
        li.innerText = todoText;
        /* liタグにデザインを当てる */
        li.classList.add("list-group-item");
        /* ulタグの子供にliタグを追加する */
        ul.appendChild(li);
        /* 入力フォームを空にする */
        input.value = "";
        /* liタグのデータを保存する */
        saveData();
    }
}

/* liタグのデータを保存する */
function saveData() {
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        /* 配列todosに要素lsをプッシュしていく */
        todos.push(list.innerText);
    })
}