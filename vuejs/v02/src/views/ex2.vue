<template>
  <div>
    <h1>EX2. 데이터 양방향/단방향 바인딩</h1>
    <h2>1.v-model을 사용하여 양방향을 구현</h2>
    <span>v-model:</span> <input type="text" v-model="inData" />
    <h3>{{ inData }}</h3>
    <button @click="inData = outData">꺼내오기:{{ inData }}</button>
    <hr />
    <h2>2.v-bind와 v-on을 사용하여 단방향(2가지로 양방향)을 구현</h2>
    <span>v-bind / v-on:</span>
    <input
      type="text"
      v-bind:value="inValue"
      v-on:input="(e) => (inValue = e.target.value)"
    />
    <h3>{{ inValue }}</h3>
    <button @click="setData()">데이터 저장</button>
    <button @click="getData()">데이터 출력</button>
    <hr />
    <h3>3.localStorage에 저장 후 가져오기</h3>
    <input
      type="text"
      v-bind:placeholder="localData"
      v-on:input="(e) => (localData = e.target.value)"
      v-on:keydown.enter="saveLocaldata(localData)"
    /><br />
    <button @click="saveLocaldata(localData)">저장하기</button>
    <button @click="loadData()">불러오기</button>
    <button @click="delLoaddata()">불러온 리스트 삭제하기</button>
    <button @click="delLocaldata()">저장된 삭제하기</button>
    <div id="load"></div>
  </div>
</template>
<script>
export default {
  name: 'ex2',
  data() {
    return {
      inData: undefined,
      inValue: '읽기만 함',
      outData: '꺼내온 값이에요',
      temp: null,
      localData: '값을 입력하세요.'
    }
  },
  methods: {
    upValue: function (e) {
      this.inValue = e.target.value
    },
    setData: function () {
      alert('v-bind 된 값 :' + this.inValue + ' 를 저장함')
      this.temp = this.inValue
      this.inValue = ''
    },
    getData: function () {
      alert('v-on으로 저장된 값 불러오기:' + this.temp)
      this.inValue = this.temp
    },
    getLocaldata: function () {
      let localString = localStorage.getItem('post')
      if (localString) {
        return JSON.parse(localString)
      } else {
        return []
      }
    },
    saveLocaldata: function (data) {
      let getData = this.getLocaldata()
      getData.push(data)
      localStorage.setItem('post', JSON.stringify(getData))
      this.localData = ''
      console.log(this.localData)
      console.log(getData)
    },
    loadData: function () {
      let loadData = this.getLocaldata()
      if (loadData.length > 0) {
        document.getElementById('load').innerHTML = `<ul>`
        loadData.forEach((v) => {
          document.getElementById('load').innerHTML += `<li>${v}</li>`
        })
        document.getElementById('load').innerHTML += `</ul>`
      } else {
        alert('저장된 데이터가 없습니다.')
      }
    },
    delLocaldata: function () {
      let getData = []
      localStorage.setItem('post', JSON.stringify(getData))
      console.log(this.getLocaldata())
      document.getElementById('load').innerHTML = ``
    },
    delLoaddata: function () {
      document.getElementById('load').innerHTML = ``
    }
  }
}
// console.log(getLocaldata())
</script>
<style>
button,
li {
  margin: 10px;
}
</style>
