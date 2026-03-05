export const Settings = () => (
  <div className="form-container">
    <span className="card-title">System Settings</span>
    <form style={{ marginTop: '20px' }}>
      <div className="form-group">
        <label className="form-label">Store Name</label>
        <input type="text" className="form-input" defaultValue="Bughao Official Store" />
      </div>
      
      <div className="form-group">
        <label className="form-label">Email Notifications</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="button" className="nav-item active" style={{ width: 'auto' }}>Enabled</button>
          <button type="button" className="nav-item" style={{ width: 'auto', border: '1px solid var(--border-color)' }}>Disabled</button>
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '30px' }}>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Save Preferences</button>
      </div>
    </form>
  </div>
);