<template>
  <div class="container">
    <div v-for="(item, idx) in lists" :key="item.id">
      <div class="col" @drop.prevent="ondrop($event, idx)" @dragover.prevent>
        <div
          class="box"
          v-for="(numItem, index) in item.numberList"
          :key="index"
          draggable="true"
          @dragstart="startDrag($event, numItem)"
        >
          <p>{{ numItem.content }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="disp">
    <hr />
    <div>data : {{ lists }}</div>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { id: 1, numberList: [{ content: 1 }, { content: 4 }, { content: 7 }] },
        { id: 2, numberList: [{ content: 2 }, { content: 5 }, { content: 8 }] },
        { id: 3, numberList: [{ content: 3 }, { content: 6 }, { content: 9 }] }
      ]
    }
  },
  methods: {
    startDrag(event, index) {
      event.dataTransfer.setData('some', index.content)
    },
    ondrop(event, colNum) {
      const selectedItem = event.dataTransfer.getData('some') * 1
      let targetIdex, targetItem
      this.lists.forEach((obj, index) => {
        obj.numberList.forEach((ob) => {
          if (ob.content === selectedItem) {
            targetIdex = index
            targetItem = ob
          }
        })
      })
      this.lists[colNum].numberList.push(targetItem)
      this.lists[targetIdex].numberList.splice(
        this.lists[targetIdex].numberList.indexOf(targetItem),
        1
      )
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  width: 512px;
  margin: 32px auto;
  justify-content: center;
}
.col {
  display: flex;
  height: 500px;
  width: 150px;
  background-color: azure;
  border: 5px solid lightgray;
  margin-left: 5px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}
.box {
  width: 130px;
  height: 50px;
  background-color: rgb(201, 255, 255);
  margin-top: 10px;
  border-radius: 5px;
}
</style>
