<template>
  <div class="about">
    <header>
      <div>기본 헤더의 글</div>
    </header>
    <div ref="scrollLine"></div>
    <br />
    <div>------------------이 곳이 사라지면------------------</div>
    <div>
      <div v-for="n in 100" :key="n">{{ n }}</div>
    </div>
  </div>
  <header class="header_Fixed" v-if="isFixed">
    <div>ref의 지정라인지점 : {{ line }}</div>
    <div>상단에 고정되어있는 글</div>
    <div>scrollY : {{ scrollY }}</div>
    <div>뷰높이 innerHeight : {{ innerHeight }}</div>
    <div>라인의 끝 : {{ lineEnd }}</div>
    <div>body의 높이 : {{ offsetHeight }}</div>
    <button @click="goTop">최상위로</button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isFixed: false,
      scrollY: '',
      innerHeight: '',
      line: '',
      lineEnd: '',
      offsetHeight: ''
    }
  },
  mounted() {
    console.log('마운트됨')
    document.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      this.line = this.$refs.scrollLine.offsetTop
      this.scrollY = window.scrollY
      this.innerHeight = window.innerHeight
      this.lineEnd = this.innerHeight + this.scrollY
      this.offsetHeight = document.body.offsetHeight
      window.scrollY > 150 ? (this.isFixed = true) : (this.isFixed = false)
    },
    goTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
.header_Fixed {
  position: fixed;
  left: 0;
  top: 0;
  /* right: 0; */
  width: 100%;
  background-color: blanchedalmond;
  padding: 5px;
  z-index: 1000;
}
</style>
