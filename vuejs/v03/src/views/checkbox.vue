<template>
  <div>
    <h1>4. checkbox 예제</h1>
    <input type="checkbox" id="inHtml" value="HTML" v-model="chkData" />
    <label for="inHtml">HTML</label>
    <input type="checkbox" id="inCss" value="CSS" v-model="chkData" />
    <label for="inCss">CSS</label>
    <input type="checkbox" id="inJS" value="JavaScript" v-model="chkData" />
    <label for="inJS">JavaScript</label>
    <h3>선택한 내용은 {{ chkData }}입니다.</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chkData: []
    }
  }
}
</script>
<style></style>
