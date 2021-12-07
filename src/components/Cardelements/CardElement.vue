<template>
  <base-card class="base-card-main-container">
    <div class="base-card-container">
      <h2 class="card-title">Заголовок</h2>
      <p class="card-description">описание</p>
    </div>
    <base-btn class="btn-container"> Жми мну </base-btn>
  </base-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-title {
  margin-bottom: 0;
}
.base-card-main-container {
  max-width: 50%;
  margin: 0 auto;
  border: 2px solid red;
  border-radius: 5px;
}
.base-card-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.btn-container {
  padding: 0 10px 10px 0;
  display: flex;
  justify-content: flex-end;
}
</style>
