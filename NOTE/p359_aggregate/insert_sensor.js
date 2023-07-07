const csv = require('csvtojson')
const path = require('path')
const _path = path.join(__dirname, './sensor.csv')
const Sensor = require('./sensor_ori.js')

const main = async () => {
  const sensorList = await csv().fromFile(_path)
  console.log(sensorList)
  Sensor.insertMany(sensorList).then(() => {
    console.log('데이터 삽입완료')
  })
}

main()
