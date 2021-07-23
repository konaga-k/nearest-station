const axios = require('axios')

module.exports = class NearestStationFinder {
  constructor (address) {
    this.address = address
  }

  async exec () {
    const [longitude, latitude] = await this.convertAddressToLongitudeLatitude()
    const station = await this.findNearestStationByLongitudeLatitude(longitude, latitude)

    return `${station.name}駅 (${station.distance})`
  }

  async findNearestStationByLongitudeLatitude (longitude, latitude) {
    const res = await axios.get('https://express.heartrails.com/api/json', {
      params: {
        method: 'getStations',
        x: longitude,
        y: latitude
      }
    })

    const stations = res.data.response.station
    if (stations.length === 0) {
      throw new Error('最寄り駅が見つかりませんでした')
    }

    return stations[0]
  }

  async convertAddressToLongitudeLatitude () {
    const appid = process.env.YAHOO_APP_ID
    const res = await axios.get('https://map.yahooapis.jp/geocode/V1/geoCoder', {
      params: {
        appid: appid,
        query: this.address,
        output: 'json'
      }
    })
    if (res.data.ResultInfo.Count === 0) {
      throw new Error('住所が見つかりませんでした')
    }
    return res.data.Feature[0].Geometry.Coordinates.split(',')
  }
}
