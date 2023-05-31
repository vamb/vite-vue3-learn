<template>
  home test page
</template>

<script>
  import { checkLogin } from '@/utils/utils'

  export default {
    beforeCreate() {
      checkLogin()
    }
  }
</script>

<style scoped>
</style>
