export const Orders = () => {
  const orderList = [
    { id: "#8821", customer: "Alice Green", total: "₱1,200", status: "Pending" },
    { id: "#8822", customer: "Bob Ross", total: "₱3,500", status: "Completed" },
  ];

  return (
    <div className="dash-card">
      <span className="card-title">Recent Orders</span>
      <div style={{ marginTop: '20px' }}>
        {orderList.map(order => (
          <div key={order.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px', 
            background: 'var(--input-bg)', 
            borderRadius: '8px', 
            marginBottom: '10px',
            border: '1px solid var(--border-color)' 
          }}>
            <div>
              <div style={{ fontWeight: '700' }}>{order.id} - {order.customer}</div>
              <div style={{ color: 'var(--laravel-red)', fontSize: '14px' }}>{order.total}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ 
                fontSize: '11px', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                background: order.status === 'Pending' ? '#f59e0b22' : '#10b98122',
                color: order.status === 'Pending' ? '#f59e0b' : '#10b981',
                border: `1px solid ${order.status === 'Pending' ? '#f59e0b' : '#10b981'}`
              }}>
                {order.status}
              </span>
              <button className="logout-btn" style={{ padding: '5px 10px', fontSize: '12px' }}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};