<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld @childEmit="fm" msg="Welcome to Your Vue.js + TypeScript App" />
    <div>这是子组件传入进来的数据:{{ childMsg }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  childMsg: string = "";
  public fm(value: string): void {
    this.childMsg = value;
  }
}
</script>
