function openNav(event) {
  event.stopPropagation();
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav(event) {
  event.stopPropagation();
  document.getElementById("mySidenav").style.width = "80px";
}

document.querySelector('.sidenav').addEventListener('mouseenter', openNav)
document.querySelector('.sidenav').addEventListener('mouseleave', closeNav)
