# Marathon map

A simple vector map representing all the marathons I've run so far.

[Online demo](https://nabilbendafi.github.io/marathon-map)

## Lat/Lng

[photon](http://photon.komoot.de/) is used to retrive city's coordinates

ex. for Dublin (Ireland)
```bash
curl "photon.komoot.de/api/?q=Dublin&limit=1" | jq '.features[0].geometry.coordinates'
```

## Libraries
 * [jVectorMap](http://jvectormap.com)
