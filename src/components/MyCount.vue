<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="objFromGoods.goods_count === 1"
      @click="objFromGoods.goods_count > 1 && objFromGoods.goods_count--"
    >
      -
    </button>
    <input
      type="number"
      class="form-control inp"
      v-model="objFromGoods.goods_count"
    />
    <button
      type="button"
      class="btn btn-light"
      @click="objFromGoods.goods_count++"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    objFromGoods: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
