
		window.addEventListener('scroll', () => {
			document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
		}, false);
		function openNav() {
		  document.getElementById("mySidebar").style.width = "300px";
		}

		function closeNav() {
		  document.getElementById("mySidebar").style.width = "0";
		}
		var dropdown01 = document.getElementsByClassName("dropdown-btn01");
		var i;
		for (i = 0; i < dropdown01.length; i++) {
		  dropdown01[i].addEventListener("click", function() {
		  this.classList.toggle("active");
		  var dropdownContent = this.nextElementSibling;
		  if (dropdownContent.style.display === "block") {
		  dropdownContent.style.display = "none";
		  } else {
		  dropdownContent.style.display = "block";
		  }
		  });
		}

		function change(){
			document.getElementById("qs").style.opacity = "0"
			document.getElementById("qs").style.cursor = "default"
			document.getElementById("ans").style.opacity = "1"
		}
