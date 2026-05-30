import { renderSidebar } from './components/sidebar.js'
import { renderNavbar } from './components/navbar.js'
import { renderBottomNav } from './components/bottomnav.js'

import { initTheme } from './config.js'
import { initPWA } from './pwa.js'

window.addEventListener('DOMContentLoaded', async () => {

  initTheme()

  renderSidebar()
  renderNavbar()
  renderBottomNav()

  initPWA()

  lucide.createIcons()

  console.log('About Me OS Loaded')

})