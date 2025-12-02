'use client';

import styles from './TodoList.module.css';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📝</div>
        <p className={styles.emptyText}>No tasks yet. Create your first task above!</p>
      </div>
    );
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todoItem}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onUpdate(todo.id, e.target.checked)}
            className={styles.checkbox}
          />
          
          <div className={styles.todoContent}>
            <p className={`${styles.todoText} ${todo.completed ? styles.todoTextCompleted : ''}`}>
              {todo.todo}
            </p>
          </div>

          <button
            onClick={() => onDelete(todo.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
