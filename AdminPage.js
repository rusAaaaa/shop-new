import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', role: 'Admin' },
    { id: 2, name: 'User 2', role: 'User' }
  ]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('User');
  const navigate = useNavigate();

  useEffect(() => {
    // Пример проверки авторизации
    const user = localStorage.getItem('user');
    if (user === 'admin') {
      setIsAuthenticated(true);
      // Загрузка данных для панели управления
      fetchDashboardData();
    } else {
      // Перенаправление на страницу логина, если не администратор
      navigate('/login');
    }
  }, [navigate]);

  const fetchDashboardData = async () => {
    // Здесь можно сделать запрос к API для получения данных
    const data = await fetch('/api/dashboard')
      .then(response => response.json())
      .catch(error => console.error('Ошибка при загрузке данных', error));

    setDashboardData(data || { usersCount: 10, salesCount: 200 }); // Пример данных
  };

  const handleAddUser = () => {
    setUsers([
      ...users,
      { id: users.length + 1, name: newUserName, role: newUserRole }
    ]);
    setNewUserName('');
    setNewUserRole('User');
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Page - Welcome Admin!</h1>

      {/* Панель управления */}
      {dashboardData ? (
        <div>
          <h2>Статистика</h2>
          <p>Пользователей: {dashboardData.usersCount}</p>
          <p>Продаж: {dashboardData.salesCount}</p>
        </div>
      ) : (
        <div>Загрузка данных...</div>
      )}

      {/* Управление пользователями */}
      <div>
        <h2>Управление пользователями</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.role}
            </li>
          ))}
        </ul>

        <h3>Добавить пользователя</h3>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={newUserName}
          onChange={e => setNewUserName(e.target.value)}
        />
        <select
          value={newUserRole}
          onChange={e => setNewUserRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button onClick={handleAddUser}>Добавить</button>
      </div>
    </div>
  );
}
