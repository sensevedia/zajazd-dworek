// This JSFiddle is part of a tutorial written by Zach Alam (zachalam.com)
// You can view the complete tutorial and more background information
// by visiting the following URL:
// https://zachalam.com/using-ajax-and-jquery-to-load-images-asynchronously/

// verify the DOM is completely loaded.
$(document).ready(function() {

// check for images in view when page loads.
load_images_in_view();
// check for images in view when page scrolls.
$(window).scroll(load_images_in_view); 


function load_images_in_view()
{
  // a scroll was detected - check all images in DOM
  $("img").each(function() {
		// calculate the halfway to the bottom of the object.
		var object_bottom = $(this).offset().top + ($(this).outerHeight()/2);
		// calculate the bottom of the window.
		var window_bottom = $(window).scrollTop() + $(window).height();

		if(window_bottom > object_bottom)
		{      
				// check to see if a flag was set,
				// so we don't constantly reload this image
				if($(this).data("image-loaded") != true)
				{
		      // obtain the image to replace
          var image_source = $(this).data("async-load");
      
          // set image loaded complete flag, and change image src.
          $(this).data("image-loaded",true);
					$(this).attr("src",image_source);
				}      
    }
    
  }); // end $("img").each()  
}

}); // end $(document).ready();