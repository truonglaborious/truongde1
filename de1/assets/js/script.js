var slide_index = 1;
var slide_count_max = 3;
$(document).ready(
	function(){		    
		let width = $(window).width();
		$(".wrap").css("visibility", "hidden");
		$(".nav-bar").click(function () {
    		if($(".menu-content").is(":hidden")) {
        		$(".menu-content").show();
    		}else {
        	$(".menu-content").hide();
    		}
  		})
		$(window).resize(function () {
		    // console.log(width);
		    if(width >= 1280){
		        slide_count_max = 3;
		    }else if(width >= 1024){
		        slide_count_max = 2;
		    }else {
		        slide_count_max = 1;
		    }
		    showSlide(slide_index);
		})

		if(width >= 1280){
			slide_count_max = 3;
		}else if(width > 600){
			slide_count_max = 2;
		}else {
			slide_count_max = 1;
		}
		showSlide(slide_index);
	}
);

function search_box(){
	$('.wrap').css("visibility","visible");
}
function close_search(){
 	$('.wrap').css("visibility","hidden");
}

function showSlide(index) {
  slide_index = index;
  var slides = document.getElementsByClassName("list-item");
  for (var i = 1; i <= slides.length; i++) {
      if (i >= index && i <= index + slide_count_max - 1) {
          slides[i - 1].style.display = "block";
      } else {
          slides[i - 1].style.display = "none";
      }
  }
  var dotSlide = document.getElementById("content-three-dots");
  dotSlide.innerHTML = "";
  for (var i = 0; i < slides.length - slide_count_max + 1; i++) {
      var elDot = document.createElement("i");
      elDot.className = "fas fa-circle dot";
      elDot.setAttribute("onclick", `showSlide(${i + 1})`);
      dotSlide.appendChild(elDot);
  }
  var dots = document.getElementsByClassName("dot");
  for (var i = 1; i <= dots.length; i++) {
      dots[i - 1].className = dots[i - 1].className.replace("dot-active", "");
  }
  dots[index - 1].className += "dot-active";
}
