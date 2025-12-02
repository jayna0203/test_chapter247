'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useAutoLogout } from '@/hooks/useAutoLogout';
import { useRouter } from 'next/navigation';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import LogoutWarningModal from '@/components/LogoutWarningModal';
import { api } from '@/utils/api';
import styles from './dashboard.module.css';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const { showWarning, countdown, handleStayLoggedIn, handleLogoutNow } = useAutoLogout();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    fetchTodos();
  }, [isAuthenticated, router]);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await api.getTodos();
      setTodos(data.todos || []);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoText: string) => {
    try {
      const newTodo = await api.createTodo({
        todo: todoText,
        completed: false,
      });
      setTodos([newTodo, ...todos]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id: number, completed: boolean) => {
    try {
      const updatedTodo = await api.updateTodo(id, { completed });
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await api.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.userInfo}>
              {user?.image && (
                <img 
                  src={user.image} 
                  alt={user.username}
                  className={styles.avatar}
                />
              )}
              <div className={styles.userDetails}>
                <h1>Welcome, {user?.firstName || user?.username}!</h1>
                <p>Manage your tasks efficiently</p>
              </div>
            </div>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Create New Task</h2>
              <TodoForm onAdd={addTodo} />
            </div>

            <div className={styles.section}>
              <div className={styles.todoListHeader}>
                <h2 className={styles.todoListTitle}>Your Tasks</h2>
                <div className={styles.todoStats}>
                  {todos.filter(t => !t.completed).length} pending, {todos.filter(t => t.completed).length} completed
                </div>
              </div>
              
              {loading ? (
                <div className={styles.loader}>
                  <div className={styles.spinner}></div>
                </div>
              ) : (
                <TodoList 
                  todos={todos}
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                />
              )}
            </div>
          </div>
        </main>

        <div className={styles.autoLogoutInfo}>
          <p>🔒 Auto-logout: 10 min inactivity</p>
        </div>
      </div>

      <LogoutWarningModal
        isOpen={showWarning}
        countdown={countdown}
        onStayLoggedIn={handleStayLoggedIn}
        onLogout={handleLogoutNow}
      />
    </>
  );
}
