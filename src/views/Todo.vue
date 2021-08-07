<template>
  <div id="con_todo" class="con_todo">
    <input type="text" v-model="todo" />
    <button v-on:click="submit" style="margin:10px">提交</button>
  </div>

  <div id="con_email">
    <h3>{{email}}的记事本</h3>
  </div>

  <div id="con_do" class="con_do">
    <h2>待办事项</h2>
    <ul>
      <template v-for="(v,index) in dolist" :key="index">
        <li>
          <h5>{{index+1}}...{{v}}
            <span class="con_do_li">
              <svg class="icon" aria-hidden="true" @click="done(v,index)">
                <use xlink:href="#icon-duigreen"></use>
              </svg>
            </span>
          </h5>
        </li>
      </template>
    </ul>
  </div>

  <div id="con_done" class="con_done">
    <h2>已完成事项</h2>
    <ul>
      <template v-for="(v,index) in list" :key="index">
        <li>
          <h5>{{index+1}}..&nbsp;&nbsp;{{v}}
            <span class="con_do_li">
              <svg class="icon" aria-hidden="true" @click="clear(index)">
                <use xlink:href="#icon-cuo"></use>
              </svg>
            </span>
          </h5>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue';
import '../../public/iconfont.js';
import {useRoute} from 'vue-router'
export default {
  name: 'App',
  setup(){
    const route = useRoute();
    const email = route.params.email;
    // 事项
    const todo = ref('');
    // 待办事项
    const dolist = ref([]);
    // 已完成事项 
    const list = ref([]); 

    // 提交事件
    const submit = ()=>{
      //判读用户提交的内容是否为空
      if(todo.value != ""){
        // 追加至待办事项
        dolist.value.push(...[todo.value])
        // 清空todo
        todo.value = ''
      }else{
        alert("请输入事项后提交！")
      }
      
    }
    // 完成待办事项
    const done = (v,index)=>{
      list.value.push(...[v])       // 追加至已完成
      dolist.value.splice(index,1)  // 根据索引删除数组
    }
    //删除已完成事项
    const clear = (index)=>{
      list.value.splice(index,1) // 根据索引删除数组
    }
    
    return {
		todo,dolist,list,submit,done,clear,email
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
@import url("../assets/css/style.css");
</style>
