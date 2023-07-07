<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $myname }}</h1>
    <button @click="$myfn">눌러봐</button>
  </div>
</template>
<script>
export default {
  name: 'test Global variable',
  data() {
    return {}
  },
  methods: {}
}
</script>
