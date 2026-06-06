// Theme toggle
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    btn.textContent = '🌙 Темна тема';
  } else {
    body.classList.replace('light', 'dark');
    btn.textContent = '☀️ Світла тема';
  }
}

// Checklist progress
function updateProgress() {
  const boxes = document.querySelectorAll('#checklist-list input[type="checkbox"]');
  const checked = Array.from(boxes).filter(b => b.checked).length;
  const total = boxes.length;
  document.getElementById('progress-fill').style.width = (checked / total * 100) + '%';
  document.getElementById('progress-label').textContent = checked + ' / ' + total;
}

// Context tabs
function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  document.querySelector('.tab[onclick="switchTab(\'' + name + '\')"]').classList.add('active');
}

// Tech info cards — toggle on click
function showInfo(tech) {
  const info = document.getElementById('info-' + tech);
  info.classList.toggle('hidden');
}
