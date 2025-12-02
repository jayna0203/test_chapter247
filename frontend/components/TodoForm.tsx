'use client';

import { useState } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (todo: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim()) {
      onAdd(todoText.trim());
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="What needs to be done?"
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Add Task
      </button>
    </form>
  );
}
