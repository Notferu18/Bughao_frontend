export const Users = () => {
  const userList = [
    { id: 1, name: "Juan Dela Cruz", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "Maria Clara", email: "maria@example.com", role: "Editor" },
    { id: 3, name: "Pedro Penduko", email: "pedro@example.com", role: "User" },
  ];

  return (
    <div className="dash-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span className="card-title">User Management</span>
        <button className="btn-primary">+ Add User</button>
      </div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '13px' }}>
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>Role</th>
            <th style={{ padding: '12px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '14px' }}>
              <td style={{ padding: '12px' }}>
                <div style={{ fontWeight: '600' }}>{user.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{user.email}</div>
              </td>
              <td style={{ padding: '12px' }}>{user.role}</td>
              <td style={{ padding: '12px' }}>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginRight: '10px' }}>Edit</button>
                <button style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};