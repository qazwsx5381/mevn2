<template>
  <div>
    <h1>6. 리스트와 예제</h1>
    <select name="" id="sel_city" v-model="city">
      <option v-for="cty in city_arr" :key="cty">{{ cty }}</option>
    </select>
    <div>선택하신 배송지역은 : {{ city }}</div>
    <div v-if="city === '제주'">
      ※ 제주산간지방은 배송료 5,000원이 추가됩니다.
    </div>
    <hr />
    <table>
      <tr>
        <th class="number">No.</th>
        <th class="category">카테고리</th>
        <th class="product">제품명</th>
        <th class="price">가격</th>
        <th class="delivery_price">배송료</th>
        <th class="count">수량</th>
        <th class="total">합계</th>
      </tr>
      <template v-for="(v, i) in arr" :key="v">
        <tr v-if="city === '제주'">
          <td>{{ i + 1 }}</td>
          <td>{{ v.category }}</td>
          <td>{{ v.product_name }}</td>
          <td>{{ v.price }}</td>
          <td>{{ v.delivery_price + 5000 }}</td>
          <td><input type="number" min="0" v-model.number="num_count[i]" /></td>
          <td v-if="num_count[i] == 0">
            {{ (total[i] = 0) }}
          </td>
          <td v-else>
            {{ (total[i] = v.price * num_count[i] + v.delivery_price + 5000) }}
          </td>
        </tr>
        <tr v-else>
          <td>{{ i + 1 }}</td>
          <td>{{ v.category }}</td>
          <td>{{ v.product_name }}</td>
          <td>{{ v.price }}</td>
          <td>{{ v.delivery_price }}</td>
          <td><input type="number" min="0" v-model.number="num_count[i]" /></td>
          <td v-if="num_count[i] == 0">
            {{ (total[i] = 0) }}
          </td>
          <td v-else>
            {{ (total[i] = v.price * num_count[i] + v.delivery_price) }}
          </td>
        </tr>
      </template>
      <tr>
        <th colspan="6" class="total_last">총합</th>
        <th class="total_price">{{ total.reduce((v, i) => v + i) }}</th>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: '',
      city: '서울',
      city_arr: ['서울', '부산', '제주', '창원', '대구'],
      arr: [
        {
          product_name: '기계식 키보드',
          price: 25000,
          category: '악세사리',
          delivery_price: 5000
        },
        {
          product_name: '무선 마우스',
          price: 12000,
          category: '악세사리',
          delivery_price: 3000
        },
        {
          product_name: '아이패드',
          price: 725000,
          category: '노트북/테블릿',
          delivery_price: 10000
        },
        {
          product_name: '갤럭시탭s8',
          price: 32000,
          category: '노트북/테블릿',
          delivery_price: 5000
        },
        {
          product_name: '블루투스 이어폰',
          price: 51000,
          category: '이어폰',
          delivery_price: 4000
        },
        {
          product_name: '무선충전기',
          price: 42000,
          category: '악세사리',
          delivery_price: 4000
        }
      ],
      num_count: ['0', '0', '0', '0', '0', '0'],
      total: ['0', '0', '0', '0', '0', '0']
    }
  }
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 750px;
  margin: auto;
}
th,
td {
  border: 1px solid black;
}
th {
  background-color: aquamarine;
}
input {
  border: none;
}
input:focus {
  outline-style: none;
}
th.number {
  width: 5%;
}
th.category {
  width: 15%;
}
th.product {
  width: 20%;
}
th.price {
  width: 10%;
}
th.delivery_price {
  width: 10%;
}
th.count {
  width: 5%;
}
th.total {
  width: 15%;
}
input {
  text-align: center;
  width: 40px;
}
th.total_last {
  background-color: rgb(255, 191, 168);
}
th.total_price {
  background-color: white;
}
</style>
