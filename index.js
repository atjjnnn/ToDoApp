/* htmlからidで要素取得 */
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

/* local storageからキーtodosの値を取得する */
const todos = JSON.parse(localStorage.getItem("todos"));

/* リロードされてもリストが消えないようにする */
/* →local storageにキーtodosがあればtodosの値をlsタグとして画面に追加する(add関数をコール) */
if (todos) {
    todos.forEach(todo => {
        add(todo);
    })
}

/* イベントが起きた時の処理 = ここではsubmit(エンター)された時の処理 */
form.addEventListener("submit", function (event) {
    /* フォームをsubmitした時のブラウザのリロードの中断 */
    event.preventDefault();
    /* エンターを押されたらリストを追加する */
    add();
});

/* ユーザがフォームに入力したテキストをliタグとして画面に追加する */
function add(todo) {
    let todoText = input.value; 

    if (todo) {
        todoText = todo;
    }
    /* 文字が入力されているかチェック */
    if (todoText.length > 0) {
        /* liタグを作る */
        const li = document.createElement("li");
        /* liをテキストとしてユーザが入力した値を入れる */
        li.innerText = todoText;
        /* liタグにデザインを当てる */
        li.classList.add("list-group-item");

        /* 右クリックされると、liタグのリストが削除される */
        li.addEventListener("contextmenu", function
        (event) {
            event.preventDefault();
            li.remove();
            saveData();
        })

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
    });
    /* todosの値を”todos"という名前でlocal storageに保存 */
    localStorage.setItem("todos", JSON.stringify(todos));
}