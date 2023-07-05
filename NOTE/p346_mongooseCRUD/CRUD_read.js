const mycol = require('./CRUD_ori')

const main = async () => {
  const t = await mycol.find(
    {
      title: { $eq: '홍길동' }
    },
    { _id: 0 }
  ).lean()
  console.log(t)
}

main()
