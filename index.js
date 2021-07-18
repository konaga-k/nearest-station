#!/usr/bin/node

const fs = require('fs')
const NearestStationFinder = require('./lib/nearest-station-finder.js')

const stdin = fs.readFileSync('/dev/stdin', 'utf8')
const finder = new NearestStationFinder(stdin)

finder.findNearestStation().then(station => {
  console.log(station)
}).catch(error => {
  console.error(error)
})
