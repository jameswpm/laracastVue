<template lang="html">
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  data(){
     return {

     };
  }
}
</script>

<style lang="css">
  .box {
    backgroud: #e3e3e3;
    padding: 18px;
    border: 1px solid #c5c5c5
  }
</style>
