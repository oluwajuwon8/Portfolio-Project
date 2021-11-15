function openNav() {
  document.getElementById("mySidebar").style.width = "320px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function hidenavblock() {
  const x = document.getElementById('mySidebar');
  if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
  window.location.reload();
}
