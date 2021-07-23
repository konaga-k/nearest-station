# Nearest Station
This is the npm package to find the nearest station by address.

## Install
Please issue your Yahoo Application ID in advance. For instructions, please refer to the following URL.
https://support.yahoo-net.jp/PccDeveloper/s/article/H000006131

```sh
$ npm install -g @konaga/nearest-station
$ export YAHOO_APP_ID=#{Yahoo Application ID}
```

## Usage
```sh
$ nearest-station 東京都千代田区千代田1番1号
桜田門駅 (740m)
```

## Credit
- [Yahoo!ジオコーダAPI](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/geocoder.html)
- [HeartRails Express](https://express.heartrails.com/api.html)
