// map



    // Define your locations: HTML content for the info window, latitude, longitude
    var locations = [
      ['<h4 class="title-map">"Zajazd Dworek"<br>ul. Hrubieszowska 16<br>22-530 Mircze</h4>', 50.68118,24.0546372],
     
    ];
    
    // Setup the different icons and shadows
    var iconURLPrefix = '';
    
    var icons = [
      iconURLPrefix + '../img/mark.png',
   


    ]
    var iconsLength = icons.length;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(50.68118,24.0546372),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      scrollwheel: false,
                          styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"color":"#6e3a35"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#efebea"},{"saturation":"0"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#af9d94"},{"saturation":"0"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#ff0000"},{"saturation":"34"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"lightness":"60"},{"gamma":"1.00"},{"hue":"#ff0000"},{"saturation":"-90"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"saturation":"0"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"},{"weight":"0.01"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#bfb1a9"},{"saturation":"0"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"color":"#bfb1a9"},{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"-90"},{"lightness":"0"},{"gamma":"1.00"},{"weight":"1"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dfd8d4"},{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#6e3a35"},{"saturation":"0"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}],
      zoomControlOptions: {
         position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    });

    var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });

    var markers = new Array();
    
    var iconCounter = 0;
    
    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: icons[iconCounter]
      });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);

        }
      })(marker, i));
     

      
      
      iconCounter++;
      // We only have a limited number of possible icon colors, so we may have to restart the counter
      if(iconCounter >= iconsLength) {
        iconCounter = 0;
      }
    }

    function autoCenter() {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      for (var i = 0; i < markers.length; i++) {  
        bounds.extend(markers[i].position);
      }
      //  Fit these bounds to the map
      
    }
    autoCenter();

