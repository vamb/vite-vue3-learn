<template>
  <div
    class="main-content"
    :style="{width: `${clientWidth}px`, height: `${clientHeight}px`}"
  >
    <a-form
      :model="formState"
      name="basic"
      class="login-content"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <div class="inline-items">
        <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 18 }" style="width: 200px">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 6, span: 16 }" style="width: 200px">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </div>

    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, onUnmounted, onUpdated } from 'vue'
import { userLogin } from '@/utils/utils'

export default defineComponent({
  components: {

  },
  setup() {
    const clientWidth = ref(document.documentElement.clientWidth)
    const clientHeight = ref(document.documentElement.clientHeight)
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = values => {
      userLogin(values)
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    const resizePage = () => {
      clientWidth.value = document.documentElement.clientWidth
      clientHeight.value = document.documentElement.clientHeight
    }
    onMounted(()=>{
      resizePage()
      window.addEventListener('resize', resizePage)
    })
    onUnmounted(()=>{
      window.removeEventListener('resize', resizePage)
    })
    return {
      clientWidth,
      clientHeight,
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  /*padding-top: 8%;*/
}
.inline-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
  padding: 10px;
  background-color: lightgoldenrodyellow;
  border: 1px solid lightslategray;
  border-radius: 10px;
  width: 500px;
  height: 188px;
}
.login-content > div {
  flex-grow: 1;
}
</style>
