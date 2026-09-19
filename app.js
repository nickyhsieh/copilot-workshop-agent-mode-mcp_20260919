// 這個檔案負責處理待辦清單的資料、渲染與交互邏輯。
const STORAGE_KEY = 'todo-list-data';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const todoCount = document.getElementById('todo-count');

// 取得本地儲存中的待辦資料，若不存在則回傳空陣列。
function getTodos() {
  const storedTodos = localStorage.getItem(STORAGE_KEY);

  if (!storedTodos) {
    return [];
  }

  try {
    return JSON.parse(storedTodos);
  } catch (error) {
    console.error('解析 localStorage 資料失敗:', error);
    return [];
  }
}

// 儲存待辦資料到 localStorage。
function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 計算未完成的項目數量。
function getRemainingCount(todos) {
  return todos.filter((todo) => !todo.completed).length;
}

// 依照資料渲染待辦列表。
function renderTodos() {
  const todos = getTodos();

  // 若清單為空，顯示提示訊息並隱藏列表。
  if (todos.length === 0) {
    todoList.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    todoList.innerHTML = todos
      .map(
        (todo) => `
          <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <div class="todo-main">
              <input
                class="todo-checkbox"
                type="checkbox"
                ${todo.completed ? 'checked' : ''}
                aria-label="標記為完成"
              />
              <span class="todo-text">${escapeHtml(todo.text)}</span>
            </div>
            <button class="delete-btn" type="button" aria-label="刪除待辦">刪除</button>
          </li>
        `
      )
      .join('');
  }

  todoCount.textContent = `未完成: ${getRemainingCount(todos)} 項`;
}

// HTML 字串轉義，避免使用者輸入破壞 DOM。
function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 新增待辦事項。
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();

  // 若輸入為空白，直接忽略，不新增。
  if (!text) {
    todoInput.focus();
    return;
  }

  const todos = getTodos();
  const newTodo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos(todos);
  todoInput.value = '';
  renderTodos();
});

// 處理勾選狀態變更。
todoList.addEventListener('change', (event) => {
  const target = event.target;

  if (!target.classList.contains('todo-checkbox')) {
    return;
  }

  const todoItem = target.closest('.todo-item');
  const todoId = todoItem.dataset.id;
  const todos = getTodos();

  const updatedTodos = todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, completed: target.checked };
    }

    return todo;
  });

  saveTodos(updatedTodos);
  renderTodos();
});

// 處理刪除按鈕點擊。
todoList.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.classList.contains('delete-btn')) {
    return;
  }

  const todoItem = target.closest('.todo-item');
  const todoId = todoItem.dataset.id;
  const todos = getTodos().filter((todo) => todo.id !== todoId);

  saveTodos(todos);
  renderTodos();
});

// 頁面載入時先渲染目前資料。
renderTodos();
