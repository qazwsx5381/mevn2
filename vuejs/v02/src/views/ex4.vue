<template>
  <div>
    <button v-for="p in pages" :key="p" @click="page = p">{{ p }}</button>
  </div>
  <div v-for="(p, i) in pages" :key="p" :class="p">
    <div>
      <img v-if="p === page" :src="'./sample' + (i + 1) + '.jpg'" alt="사진" />
    </div>
  </div>
</template>
<script>
// import test from '../assets/sample'
export default {
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
      // pages: [page1, page2, page3, page4]
    }
  }
}
</script>
<style>
img {
  background-color: rgba(248, 250, 122, 0.616);
  width: 70%;
  height: 70%;
  margin: 20px;
  border: 1px double black;
  border-width: thin;
  padding: 20px;
  box-shadow: 20px 10px 15px gray;
}
button {
  margin: 0 20px;
  scale: 150%;
  background-color: aqua;
  border: 3px solid rgb(255, 255, 255);
  cursor: pointer;
}
button:hover {
  background-color: brown;
}
button:active {
  color: white;
  background-color: black;
}
</style>
