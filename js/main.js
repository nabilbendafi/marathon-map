$(function(){
  $.getJSON('data.json', function(data){
    var marathons = data.races.marathons;
    var count_marathons = _.countBy(marathons, 'country_code2');
    $('#world-map').vectorMap({
      map: 'world_mill',
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
      }
    });
  });
});
