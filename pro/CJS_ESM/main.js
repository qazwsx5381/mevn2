// CJS 방식
// const fs = require('fs')

// ESM방식
import fs from 'fs' //ESM
import express from 'express'
import logger from 'morgan'

// CJS, ESM 같이 쓰기
// ESM방식에서 CJS방식을 사용가능하게 만드는 코드
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// const logger = require('morgan')

const exp = require('./a.cjs')
console.log(exp)
// import { b1, b2 } from './b.mjs'
import * as ESM from './b.mjs'
console.log(ESM)

fs.readdir('./', (e, list) => {
  console.log(list)
})
const app = express()
app.use(logger('tiny'))
app.listen(3005, () => {
  console.log('3005 port Open')
})
