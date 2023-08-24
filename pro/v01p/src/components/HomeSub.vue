<template>
  <div><h3>여기는 homeSub 데이터 입니다.</h3></div>
  <div>
    <mark>받은데이터: {{ homesub }}</mark>
  </div>
</template>
<script>
export default {
  props: ['homesub'],
  data() {
    return {
      //   test: '아직테스트중'
    }
  }
}
</script>
<style></style>
