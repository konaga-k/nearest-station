#!/usr/bin/env node

const NearestStationFinder = require('./lib/nearest-station-finder.js')

const finder = new NearestStationFinder(process.argv[2])

finder.exec().then(station => {
  console.log(station)
}).catch(error => {
  console.error(error)
})
