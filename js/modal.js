var iModal = document.getElementById("myModal");
var iBtn = document.getElementById("myBtn");
var iSpan = document.getElementsByClassName("close")[0];
iBtn.onclick = function() { iModal.style.display = "block"; }
iSpan.onclick = function() { iModal.style.display = "none"; }
