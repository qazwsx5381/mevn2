<template>
  <div>
    <h1>2. 양방향데이터 예제</h1>
    <p>1) 입출력 예제</p>
    <input type="text" v-model="data" />
    <button @click="print()">console 전송</button>
    <button @click="setData">변수 입력</button>
    <hr />
    <p>2) 계산하기 예제</p>
    <span>방식 1: </span>
    <input type="text" v-model="num1" />+<input type="text" v-model="num2" />=
    <span>{{ num1 + num2 }}</span>
    <br />
    <span>방식 2: </span>
    <input type="text" v-model.number="num3" />+<input
      type="text"
      v-model.number="num4"
    />=
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '기본데이터',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    print() {
      console.log(this.data)
    },
    setData() {
      this.data = '초기화 함'
    }
  }
}
</script>
<style scoped>
input,
button {
  margin: 0 10px;
}
</style>
