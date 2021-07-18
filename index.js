#!/usr/bin/node

const NearestStationFinder = require('./lib/nearest-station-finder.js')

const finder = new NearestStationFinder(process.argv[2])

finder.findNearestStation().then(station => {
  console.log(station)
}).catch(error => {
  console.error(error)
})
