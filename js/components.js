/**
 * InternHub Components Data
 * Stores HTML fragments as strings to avoid CORS issues when opening via file://
 */

window.INTERNHUB_COMPONENTS = {
    'header-home': `
<nav>
  <a href="index.html" class="logo">
    <div class="logo-icon">I</div>
    <div class="logo-text">Intern<span>Hub</span></div>
  </a>
  <div class="nav-links">
    <a href="index.html#features">Features</a>
    <a href="index.html#how-it-works">How It Works</a>
    <a href="index.html#testimonials">Reviews</a>
    <a href="admin-dashboard.html">Admin</a>
  </div>
  <div class="nav-cta">
    <a href="login.html" class="btn-outline">Sign In</a>
    <a href="register.html" class="btn-primary">Get Started</a>
  </div>
</nav>`,

    'footer': `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon">I</div>
        <div class="logo-text" style="color:white">Intern<span>Hub</span></div>
      </a>
      <p>The complete internship management solution for modern companies and ambitious interns.</p>
    </div>
    <div class="footer-col">
      <h4>Platform</h4>
      <a href="dashboard.html">Dashboard</a>
      <a href="submit-task.html">Submit Task</a>
      <a href="view-tasks.html">View Tasks</a>
    </div>
    <div class="footer-col">
      <h4>Admin</h4>
      <a href="admin-dashboard.html">Admin Panel</a>
      <a href="admin-manage.html">Manage Tasks</a>
      <a href="#">Analytics</a>
    </div>
    <div class="footer-col">
      <h4>Account</h4>
      <a href="login.html">Sign In</a>
      <a href="register.html">Register</a>
      <a href="#">Settings</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 InternHub. All rights reserved.</p>
    <div style="display:flex;gap:8px;align-items:center">
      <div style="width:12px;height:8px;background:#DC2626;border-radius:2px"></div>
      <div style="width:12px;height:8px;background:white;border-radius:2px"></div>
      <div style="width:12px;height:8px;background:#1D4ED8;border-radius:2px"></div>
    </div>
  </div>
</footer>`,

    'sidebar-intern': `
<aside class="sidebar">
  <a href="index.html" class="sidebar-logo">
    <div class="logo-icon">I</div>
    <div class="logo-text">Intern<span>Hub</span></div>
  </a>
  <nav class="sidebar-nav">
    <div class="nav-section-title">Main</div>
    <a href="dashboard.html" class="nav-item" id="nav-dashboard">
      <span class="nav-icon">📊</span> Dashboard
    </a>
    <a href="submit-task.html" class="nav-item" id="nav-submit-task">
      <span class="nav-icon">📤</span> Submit Task
    </a>
    <a href="view-tasks.html" class="nav-item" id="nav-view-tasks">
      <span class="nav-icon">📋</span> My Tasks
      <span class="nav-badge">3</span>
    </a>
    <div class="nav-section-title">Account</div>
    <a href="#" class="nav-item" id="nav-profile">
      <span class="nav-icon">👤</span> Profile
    </a>
    <a href="#" class="nav-item" id="nav-notifications">
      <span class="nav-icon">🔔</span> Notifications
      <span class="nav-badge">2</span>
    </a>
    <a href="#" class="nav-item" id="nav-settings">
      <span class="nav-icon">⚙️</span> Settings
    </a>
  </nav>
  <div class="sidebar-bottom">
    <div class="user-profile">
      <div class="user-avatar">AK</div>
      <div class="user-info">
        <div class="user-name">Ahmed Khan</div>
        <div class="user-role">🎓 Intern</div>
      </div>
    </div>
    <a href="login.html" class="nav-item logout-link" style="margin-top:8px;color:rgba(255,100,100,.7)">
      <span class="nav-icon">🚪</span> Sign Out
    </a>
  </div>
</aside>`,

    'sidebar-admin': `
<aside class="sidebar">
  <a href="index.html" class="sidebar-logo">
    <div class="logo-icon">I</div>
    <div class="logo-text">Intern<span>Hub</span></div>
    <span class="admin-badge">Admin</span>
  </a>
  <nav class="sidebar-nav">
    <div class="nav-section-title">Admin Panel</div>
    <a href="admin-dashboard.html" class="nav-item" id="nav-admin-dashboard"><span class="nav-icon">📊</span> Dashboard</a>
    <a href="admin-manage.html" class="nav-item" id="nav-admin-manage"><span class="nav-icon">📋</span> Manage Tasks<span class="nav-badge">5</span></a>
    <a href="#" class="nav-item" id="nav-manage-interns"><span class="nav-icon">👥</span> Manage Interns</a>
    <a href="#" class="nav-item" id="nav-analytics"><span class="nav-icon">📈</span> Analytics</a>
    <div class="nav-section-title">System</div>
    <a href="#" class="nav-item" id="nav-admin-notifications"><span class="nav-icon">🔔</span> Notifications<span class="nav-badge">3</span></a>
    <a href="#" class="nav-item" id="nav-admin-settings"><span class="nav-icon">⚙️</span> Settings</a>
    <a href="index.html" class="nav-item"><span class="nav-icon">🌐</span> View Site</a>
  </nav>
  <div class="sidebar-bottom">
    <div class="user-profile">
      <div class="user-avatar">RA</div>
      <div><div class="user-name">Rania Al-Farsi</div><div class="user-role">⚙️ Administrator</div></div>
    </div>
    <a href="login.html" class="nav-item logout-link" style="margin-top:8px;color:rgba(255,100,100,.7)"><span class="nav-icon">🚪</span> Sign Out</a>
  </div>
</aside>`
};
