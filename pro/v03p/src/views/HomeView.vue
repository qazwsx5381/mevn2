<template>
  <div class="body">
    <div class="container" @drop.prevent="drop($event)" @dragover.prevent>
      <button id="pbox" draggable="true" @dragstart="drag($event)">🎁</button>
    </div>
    <div
      class="container2"
      @drop.prevent="drop($event)"
      @dragover.prevent
    ></div>
    <div
      class="container3"
      @drop.prevent="drop($event)"
      @dragover.prevent
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
function showEvent(event) {
  if (document.querySelectorAll('p').length === 10) {
    document.querySelectorAll('p').forEach((e) => e.remove())
  }
  const p = document.createElement('p')
  p.textContent = event
  document.body.append(p)
}
function drag(ev) {
  ev.dataTransfer.setData('some', ev.target.id)
}
function drop(ev) {
  const data = ev.dataTransfer.getData('some')
  ev.currentTarget.append(document.getElementById(data))
}
onMounted(() => {
  const pbox = document.getElementById('pbox')
  const container2 = document.querySelector('.container2')
  // 드래그 시작
  pbox.addEventListener('dragstart', () => {
    showEvent('드래그를 시작하면 발생하는 이벤트')
  })
  // 드래그 유지
  // pbox.addEventListener('drag', () => {
  //   showEvent('드래그를 하는동안 발생하는 이벤트')
  // })
  // 드래그가 요소에 닿으면
  // container2.addEventListener('dragenter', () => {
  //   showEvent('드래그가 이 요소에 닿으면 발생하는 이벤트')
  // })
  // 드래그가 요소에 위치하면
  // container2.addEventListener('dragover', () => {
  //   showEvent('드래그가 이 요소에 위치하면 발생하는 이벤트')
  // })
  container2.addEventListener('dragleave', () => {
    showEvent('드래그가 이 요소에 벗어나면 발생하는 이벤트')
  })
  container2.addEventListener('dragover', (event) => {
    event.preventDefault()
  })
  container2.addEventListener('drop', () => {
    showEvent('드래그가 이 요소에 드롭하면 발생하는 이벤트')
  })
  pbox.addEventListener('dragend', () => {
    showEvent('드래그가 멈추면 발생하는 이벤트')
  })
})
</script>
<style scoped>
.body {
  display: flex;
  justify-content: center;
}

button {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin: 12px;
  cursor: move;
  font-size: 2em;
  background-color: aqua;
}
.container,
.container2,
.container3 {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  background-color: rgb(255, 227, 136);
  border-radius: 20px;
}
</style>
