const csvFilePath = './sensor.csv'
const csv = require('csvtojson')
const path = require('path')
const _path = path.join(__dirname, csvFilePath)
const Sensor = require('./sensor_ori.js')

const main = async () => {
  const test1 = await Sensor.aggregate([
    { $match: { temp: { $gte: 26 } } }, // 조건설정
    { $group: { _id: '$id', total: { $sum: '$temp' } } } // 조건에 맞는 그룹을 _id, total로 보여줌
  ])
  console.log(test1)
  const test2 = await Sensor.aggregate([
    {
      $match: {
        $or: [{ temp: { $gte: 26, $lte: 27 } }, { humi: { $gte: 80 } }]
      }
    },
    { $group: { _id: '$id', count: { $sum: 1 } } },
    { $project: { _id: 0, count: 1 } }
  ])
  console.log(test2)
  const test3 = await Sensor.aggregate([
    { $match: { $and: [{ temp: { $eq: 26.2 } }, { humi: { $eq: 85.7 } }] } },
    { $sort: { temp: 1 } },
    { $limit: 5 },
    { $project: { _id: 0, temp: 1, time: 1, min: { $minute: '$time' } } },
    { $match: { min: { $eq: 1 } } }
  ])
  console.log(test3)
  /*
  aggregate
  $match : 조건설정 // 마지막에 있을 경우 조건에 맞는 값을 보여줌
  $group : $match에 맞는 그룹을 새로운 키로 매핑해서 보여줌
  $sort : 정렬
  $limit : 갯수 제한
  $project : 프로젝트 내에 time 객체를 가진 data에서 minute 값을 추출
  */
}

main()
