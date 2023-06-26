<template>
  <div>
    <h1>EX3. 데이터 가져오기</h1>
    <h3>가져온 데이터</h3>
    <p>{{ dataArr }}</p>
    <hr />
    <h4>
      <label for="category">카테고리를 선택하세요.</label>&nbsp;&nbsp;<select
        name="category"
        id="category"
        v-model="inCate"
      >
        <option id="category" value="노트북/테블릿" selected>
          노트북/테블릿
        </option>
        <option id="category" value="스마트폰">스마트폰</option>
        <option id="category" value="스피커">스피커</option>
      </select>
    </h4>
    <h4>
      얼마 이상의 물품을 출력할까요?&nbsp;&nbsp;<input
        type="number"
        v-model="inUser"
        placeholder="숫자만 입력하세요"
      />
    </h4>
    <table>
      <tr>
        <th>카테고리</th>
        <th>품명</th>
        <th>가격</th>
        <th>배송비</th>
      </tr>
      <template v-for="ab in dataArr" :key="ab.price">
        <tr v-if="ab.price > inUser && ab.category === inCate">
          <!-- <tr v-for="ab in dataArr" :key="ab"> -->
          <td>{{ ab.category }}</td>
          <td>{{ ab.product_name }}</td>
          <td>{{ ab.price }}</td>
          <td>{{ ab.delivery_price }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>
<script>
import data from '../assets/productData.js'
export default {
  name: 'app',
  data() {
    return {
      dataArr: data,
      inUser: 0,
      inCate: 0
    }
  }
}
</script>
<style>
table {
  text-align: center;
  margin: auto;
  border-collapse: collapse;
}
tr:first-child {
  background-color: rgb(231, 231, 168);
}
th,
td {
  border: 1px solid black;
  width: 150px;
  height: 30px;
}
</style>
