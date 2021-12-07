<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>
<style scoped>
.btn {
  padding: 8px 20px;
  background-color: salmon;
  border-radius: 4px;
}
</style>
