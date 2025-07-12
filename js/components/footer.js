export default function loadFooter() {
  fetch('components/footer.html')
    .then(res => res.text())
    .then(html => {
      document.querySelector('#footer-container').innerHTML = html;
    })
    .catch(err => console.error('Error loading footer:', err));
}