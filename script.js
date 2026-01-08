// Pastikan iframe selalu menyesuaikan ukuran layar
function resizeIframe() {
  const iframe = document.getElementById('uploadFrame');
  iframe.style.height = window.innerHeight + 'px';
  iframe.style.width = window.innerWidth + 'px';
}

// Resize saat halaman pertama kali dibuka
window.addEventListener('load', resizeIframe);

// Resize saat layar berubah (rotate HP / resize desktop)
window.addEventListener('resize', resizeIframe);
