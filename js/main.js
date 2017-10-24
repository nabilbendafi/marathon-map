$(function(){
  $.getJSON('data.json', function(data){
    var marathons = data.races.marathons;
    var count_marathons = _.countBy(marathons, 'country_code2');
    $('#world-map').vectorMap({
      map: 'world_mill',
      markers: marathons.map(function(marathon) {
        var latLng = [marathon.lat, marathon.lng];
        var name = marathon.name;

        return {latLng: latLng, name: name};
      }),
      markerStyle: {
        initial: {
          fill: '#F8E23B',
          stroke: '#383f47'
        }
      },
      series: {
        regions: [{
          values: count_marathons,
          scale: ['#C8EE00', '#0071A4'],
          min: 0,
          attribute: 'fill'
        }]
      },
      onRegionTipShow: function(e, el, code){
        if (count_marathons[code])
          el.html(el.html() + ': ' + count_marathons[code]);
      },
      onMarkerTipShow: function(e, el, code){
        if (marathons[code]){
          var marathon = marathons[code];
          var text = '(' + marathon.date + ')<br>' + marathon.time;

          el.html(el.html() + ' ' + text);
        }
      }
    });
  });
});
