# Marathon map

A simple vector map representing all the marathons I've run so far.

[Online demo](https://nabilbendafi.github.io/marathon-map)

## Lat/Lng

[Google geocoding API](https://developers.google.com/maps/documentation/geocoding) is used to retrive city's coordinates

ex. for Dublin (Ireland)
```bash
curl http://maps.googleapis.com/maps/api/geocode/json?address=Dublin | jq '.results[0].geometry.location'
```

## Libraries
 * [jVectorMap](http://jvectormap.com)
