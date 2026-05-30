export function renderSidebar() {

  document.getElementById('sidebar').innerHTML = `

    <div class="sidebar-container">

      <div class="logo-area">
        <h1>About Me OS</h1>
      </div>

      <nav class="menu-list">

        <a href="dashboard.html">
          <i data-lucide="layout-dashboard"></i>
          Dashboard
        </a>

        <a href="modules/keuangan.html">
          <i data-lucide="wallet"></i>
          Keuangan
        </a>

        <a href="modules/ai.html">
          <i data-lucide="bot"></i>
          AI Assistant
        </a>

        <a href="modules/scanner.html">
          <i data-lucide="scan"></i>
          Scanner
        </a>

      </nav>

    </div>

  `
}