// ─── Section navigation ───────────────────────────────────────────────────────

function showSection(id, clickedLink) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(function(s) {
    s.classList.remove('active');
  });
  // Show target section
  var target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.remove('active');
  });
  if (clickedLink) {
    clickedLink.classList.add('active');
  } else {
    // Find the link that matches and activate it
    document.querySelectorAll('.nav-link').forEach(function(l) {
      if (l.getAttribute('href') === '#' + id) l.classList.add('active');
    });
  }

  // Close mobile menu
  document.getElementById('nav-links').classList.remove('open');

  // Scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Prevent default href jump
  return false;
}

// ─── Nav link click handler ────────────────────────────────────────────────────

document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var href = link.getAttribute('href');
    var id   = href.replace('#', '');
    showSection(id, link);
  });
});

document.querySelector('.nav-logo').addEventListener('click', function(e) {
  e.preventDefault();
  showSection('home', null);
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#home') l.classList.add('active');
  });
});

// ─── Mobile menu toggle ────────────────────────────────────────────────────────

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ─── Photo grid: show placeholder text if image fails to load ─────────────────

document.querySelectorAll('.photo-cell img').forEach(function(img) {
  img.addEventListener('error', function() {
    img.style.display = 'none';
    img.parentElement.classList.add('photo-empty');
  });
});
