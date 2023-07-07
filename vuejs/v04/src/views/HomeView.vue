<template>
  <h1>Vuejs에서 mongoDB로 CRUD 실습하기</h1>
  <div>
    <hr />
    <h3>
      1. MongoDB로
      <mark style="background-color: rgb(0, 255, 115)">C</mark>reate하기
    </h3>
    제목: <input type="text" v-model="title1" /> | 날짜:
    <input type="date" v-model="date1" /><br />
    내용: <input type="text" style="width: 400px" v-model="content1" />
    <button @click="dbc">전송</button>
    <h4>{{ data1 }}</h4>
    <hr />
    <h3>
      2. MongoDB로
      <mark style="background-color: rgb(255, 60, 0)">R</mark>ead하기
    </h3>
    날짜: <input type="date" v-model="date2" /><br />
    <button @click="dbr">불러오기</button>
    <h4>{{ data2 }}</h4>
    <hr />
    <h3>
      3. MongoDB로
      <mark style="background-color: rgb(0, 255, 221)">U</mark>pdate하기
    </h3>
    제목: <input type="test" v-model="title3" /> | 날짜:
    <input type="date" v-model="date3" /><br />
    내용: <input type="text" style="width: 400px" v-model="content3" />
    <button @click="dbu">1개 수정하기</button>
    <h4>{{ data3 }}</h4>
    <hr />
    <h3>
      4. MongoDB로
      <mark style="background-color: rgb(195, 0, 255)">D</mark>elete하기
    </h3>
    날짜: <input type="date" v-model="date4" /><br />
    <button @click="dbd">삭제</button>
    <h4>{{ data4 }}</h4>
    <hr />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      title1: '',
      title3: '',
      date1: new Date().toISOString().substring(0, 10),
      date2: new Date().toISOString().substring(0, 10),
      date3: new Date().toISOString().substring(0, 10),
      date4: new Date().toISOString().substring(0, 10),
      content1: '',
      content3: '',
      data1: '해당 날짜의 데이터를 입력하세요.',
      data2: '해당 날짜의 데이터를 읽어옵니다.',
      data3: '해당 날짜의 데이터를 수정합니다.',
      data4: '해당 날짜의 데이터를 삭제합니다.'
    }
  },
  methods: {
    dbc() {
      this.data1 = 'DB에 저장중...'
      axios
        .post('/dbc', {
          title: this.title1,
          content: this.content1,
          date: this.date1
        })
        .then((res) => {
          this.data1 = res.data
          setTimeout(() => {
            this.data1 = '해당 날짜의 데이터를 입력하세요.'
          }, 2000)
        })
    },
    dbr() {
      this.data2 = 'DB 데이터 로딩중...'
      axios.get('/dbr/' + this.date2).then((res) => {
        this.data2 = res.data
        this.title3 = res.data.title
        this.content3 = res.data.content
        this.date3 = res.data.date.substring(0, 10)
      })
    },
    dbu() {
      this.data3 = '저장된 DB 수정중...'
      axios
        .post('/dbu', {
          title: this.title3,
          content: this.content3,
          date: this.date3
        })
        .then((res) => {
          this.data3 = res.data
          setTimeout(() => {
            this.data3 = '해당 날짜의 데이터를 수정합니다.'
          }, 2000)
        })
    },
    dbd() {
      this.data4 = '저장된 DB 삭제중...'
      axios
        .post('/dbd', {
          del_date: this.date4
        })
        .then((res) => {
          this.data4 = res.data
        })
    }
  }
}
</script>
<style>
input {
  display: inline-block;
  text-align: left;
  border-style: none;
  border-bottom: 1px solid gray;
  margin: 5px;
}
</style>
