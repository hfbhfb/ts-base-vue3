<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 :style="{ background: color }">{{ count }}</h1>
    <h1>计算属性 : {{ reverseCount }}</h1>
    <button @click="Add(2)">增加</button>
    <button @click="sendMsg()">发送信息到父组件</button>
  </div>
</template>

<script lang="ts">
import { Watch, Emit } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  // data() {
  //   return {
  //     count: 1,
  //   };
  // },
})
export default class HelloWorld extends Vue {
  msg!: string;
  count!: number;
  color!: string;
  constructor(props: any) {
    super(props);
    this.count = 39;
  }
  public Add(m: number): void {
    this.count += m;
  }
  @Watch("count", { deep: true, immediate: true })
  private onChangeCount(newValue: string, oldValue: string) {
    console.log(newValue);
    console.log(oldValue);
    let red: number = Math.floor(Math.random() * 255);
    let green: number = Math.floor(Math.random() * 255);
    let blue: number = Math.floor(Math.random() * 255);
    this.color = `rgba(${red},${green},${blue})`;
  }
  // 计算属性
  public get reverseCount(): string {
    return this.count.toString().split("").reverse().join("");
  }
  // 生命周期函数
  public created(): void {
    console.log("created");
  }

  public mounted(): void {
    console.log("mounted");
  }
  @Emit("childEmit")
  public sendMsg() {
    return "你好父组件,我是子组件";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
