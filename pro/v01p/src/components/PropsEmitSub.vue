<template>
  <div id="inner">
    <h3>Sub의 내용입니다.</h3>
    <div>{{ downdata }}</div>
    <button @click="$emit('updata', '아래에서 위로 던져진 데이터')">
      데이터 위로 던지기
    </button>
    <button @click="$emit('updata', 111)">위로 111 던지기</button>
    <button @click="$emit('updata', 999)">위로 999 던지기</button>
    <button @click="$emit('updata', '안녕')">위로 '안녕' 던지기</button><br />
    <!-- @click="$emit('updata', '안녕','반가워','고마워','어디니')" -->
    v-on:keyup형식:<input
      type="text"
      @keyup="$emit('updata', $event.target.value)"
    />
    v-model형식:
    <input type="text" v-model="upup" />
  </div>
</template>
<script>
export default {
  name: 'insub',
  props: ['downdata'],
  data() {
    return {
      upup: ''
    }
  },
  watch: {
    upup: function () {
      this.$emit('updata', this.upup)
    }
  }
}
</script>
<style scoped>
#inner {
  border: 1px dashed red;
  margin: 10px;
  padding: 10px;
  background-color: honeydew;
}
</style>
