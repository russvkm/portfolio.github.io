export default function loadNav() {
  fetch('/components/nav.html')
    .then(res => res.text())
    .then(html => {
      document.querySelector('#nav-container').innerHTML = html;
    })
    .catch(err => console.error('Error loading nav:', err));
}
