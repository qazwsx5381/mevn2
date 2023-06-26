<template>
  <div class="ex1">
    <h1>EX1. 디렉티브 사용하기</h1>
    <h2>1. 변수 머스타치 사용하기</h2>
    <h3>안녕하세요. {{ name }}입니다. {{ age }}살 입니다.</h3>
    <h3>안녕하세요. {{ name2 }}입니다. {{ age2 }}살 입니다.</h3>
    <hr />
    <h2>2. v-on기능 사용하기</h2>
    <button v-on:click="func1('안녕 v-on을 위한 팝업이야')">클릭버튼</button>
    <button @dblclick="func1('안녕 v-on약자로 띄운 팝업이야')">
      더블클릭버튼
    </button>
    <hr />
    <h2>3. v-if 조건문 사용하기, v-show와 비교</h2>
    <!-- v-if -->
    <h3 style="display: none">제가 보일까요</h3>
    <h3 v-if="status">제가 보이나요?</h3>
    <button @:click="status = true">보이게할게요.</button>
    <button @:click="status = false">숨길게요.</button>
    <button @:click="status = !status">토글버튼</button><br />
    <button @:click="name2 === '슈퍼맨' ? (name2 = hero) : (name2 = name2)">
      {{ name2 === '슈퍼맨' ? '아이언맨' : '슈퍼맨' }}을 부를게요.
    </button>
    <hr />
    <h2>4. v-model 양방향 데이터</h2>
    <input
      type="text"
      v-model="inData"
      v-on:keyup.enter="func1(inData + '엔터침요!')"
    />
    <input
      type="text"
      v-model="inData"
      v-on:keyup="func1(inData + '손을 뗏어요~')"
    />
    <h3>{{ inData }}</h3>
    <hr />
    <h2>5. v-for 사용하기</h2>
    <h3>{{ arrData }}</h3>
    <button @:click="add()">추가</button>
    <button @:click="del()">제거</button>
    <ul>
      <li v-for="data in arrData" :key="data">{{ data }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      name: '홍길동',
      name2: '슈퍼맨',
      hero: '아이언맨',
      age: 27,
      age2: 77,
      status: true,
      inData: '',
      arrData: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    func1: function (text) {
      alert(text)
    },
    add: function () {
      this.arrData.push(this.arrData.length + 1)
    },
    del: function () {
      this.arrData.pop()
    }
  }
}
</script>

<style>
li {
  float: left;
  margin: 0 20px 0 10px;
}
input,
button {
  margin: 3px 10px;
}
</style>
