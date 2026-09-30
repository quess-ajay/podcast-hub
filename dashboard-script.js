// Navigation
const navItems = document.querySelectorAll('.nav-item');
const pageContainers = document.querySelectorAll('.page-container');

navItems.forEach(item => {
  if (!item.classList.contains('settings') && !item.classList.contains('upgrade')) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = item.dataset.page;
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Update active page
      pageContainers.forEach(page => page.classList.remove('active'));
      document.getElementById(pageName + '-page').classList.add('active');
      
      // Update page title
      const titles = {
        'dashboard': 'Dashboard',
        'episodes': 'Episodes',
        'record': 'Record New Episode',
        'analytics': 'Analytics',
        'monetize': 'Monetization'
      };
      document.querySelector('.page-title').textContent = titles[pageName];
    });
  }
});

// Wizard functions
function goToStep(stepNumber) {
  const steps = document.querySelectorAll('.wizard-step');
  steps.forEach(step => step.classList.remove('active'));
  document.getElementById('step-' + stepNumber).classList.add('active');
}

function publishEpisode() {
  alert('Episode published successfully! 🎉');
  // Reset wizard
  goToStep(1);
}

// Chart filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Upload area click
const uploadArea = document.querySelector('.upload-area');
if (uploadArea) {
  uploadArea.addEventListener('click', () => {
    document.querySelector('.file-input').click();
  });
}

// Button interactions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Table row interactions
document.querySelectorAll('.table-row').forEach(row => {
  row.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(99, 102, 241, 0.1)';
  });
  
  row.addEventListener('mouseleave', function() {
    this.style.background = '';
  });
});
