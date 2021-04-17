zingchart.maps.loadGeoJSON({
  id: 'california', // Give the map an id
  url: 'https://www.zingchart.com/resources/calif_geo.json', // GeoJSON object for CA
  style: { //Optional styling options
    poly: {
      label: {
        visible: false
      }
    }
  },
  callback: function() { // Function called when GeoJSON is loaded
    //$.get('https://www.zingchart.com/resources/zingMap.json', function(data) {
        $.get("countyData.json", function(data) {
      var items = data; //style JSON generated from geoJSON && countyAvgs
      zingchart.render({
        id: 'myChart',
        width: '100%',
        height: '100%',
        data: {
          "title": {
            "text": "<strong>Innovation Ecosystem Heat Map</strong>",
            "font-size": 16,
            "text-align": "right",
            "font-weight": "normal"
          },
          "legend":{
            "toggle-action": "none",
            "vertical-align": "middle",
            "align": "right",
            "border-width":0,
            "background-color":"none",
            "item": {
              "font-size":16
            }
          },
          "source": {
            "text": "Source: Center for Social Innovation, UCR",
            "url": "https://socialinnovation.ucr.edu/",
            "text-align": "left"
          },
          "subtitle": {
            "y": 50,
            "text": "Number of Headquarters Per County in California <br>",
            "text-align": "right",
            "font-weight": "normal",
          },
          "shapes": [{
            "type": "zingchart.maps", // Set shape to map type
            "options": {
              "name": "california", // Reference to the id set in loadGeoJSON()
              "scale": true,
              "style": {
                items: items
              } // Automatically scale to correct proportions
            }
          }],
          "series": [ // for legend items
              {
                "legend-item" :{
                  "text":"< = 50%"
                },
                "legend-marker": {
                  "background-color": "#C9C9C9",
                }
              },
              {
                "legend-item" :{
                  "text":"51 - 60%"
             },
                "legend-marker": {
                  "background-color": "#f2f0f7",
                }
              },
              {
                "legend-item" :{
                  "text":"61 - 70%"
                },
                "legend-marker": {
                  "background-color": "#cbc9e2",
                }
              },
              {
                "legend-item" :{
                  "text":"71 - 80%"
                },
                "legend-marker": {
                  "background-color": "#9e9ac8",
                }
              },
              {
                "legend-item" :{
                  "text":"81 - 90%"
                },
                "legend-marker": {
                  "background-color": "#756bb1",
                }
              },
              {
                "legend-item" :{
                  "text":"91 - 100%"
                },
                "legend-marker": {
                  "background-color": "#54278f",
                }
              }
          ]
        }
      })
    });
  }
});