<template>
  <div>
    <MyHeader
      title="我的购物车"
      backgroundColor="pink"
      color="green"
    ></MyHeader>
    <div style="margin-top: 45px">
      <MyGoods v-for="(item, index) in list" :key="index" :obj="item"></MyGoods>
    </div>
    <MyFooter></MyFooter>
    1234567 1234567 123456123456
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyGoods from "./components/MyGoods";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      this.list = res.data.list;
    });
  },
};
</script>

<style></style>
