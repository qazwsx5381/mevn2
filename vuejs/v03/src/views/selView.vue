<template>
  <div>
    <h1>3. 셀렉터 예제</h1>
    <p>방법 1(객체로)</p>
    <select name="" id="" v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
        {{ city }}
      </option>
    </select>
    <span>{{ selData }}</span>
    <p>방법 2(배열, 객체로)</p>
    <select name="" id="" v-model="selData2">
      <template v-for="(da, i) in arr" :key="da">
        <option v-if="i === 0" value="0" disabled>선택하세요</option>
        <option v-else :value="da.num">
          {{ da.name }}
        </option>
      </template>
    </select>
    <span v-if="selData2 === '0'"></span>
    <span v-else>{{ selData2 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selData: '051',
      selData2: '0',
      obj: {
        부산: '051',
        서울: '02',
        제주: '064',
        창원: '055',
        대구: '053'
      },
      arr: [
        {},
        { name: '부산', num: '051' },
        { name: '서울', num: '02' },
        { name: '제주', num: '064' },
        { name: '창원', num: '055' },
        { name: '대구', num: '053' }
      ]
    }
  }
}
</script>
<style scoped>
select,
span {
  margin: 0 10px;
}
</style>
