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
import {useRoute} from 'vue-router';
import { Storage } from '../assets/js/todo.js';
export default {
  name: 'Todo',
  setup(){
    const route = useRoute();
    // 用户邮箱
    const email = route.params.email;
    //保存待完成事项的键为登录者邮箱加T
    const todo_id = email+'T'
    //保存已完成事项的键为登录者邮箱加F
    const done_id = email+'F'
  
    // 事项
    const todo = ref('');
    // 待办事项
    const dolist = ref([]);
    // 已完成事项 
    const list = ref([]); 

    // 先列出保存过的事项,包括待完成和已完成的
    if(Storage.get(todo_id)==null || Storage.get(done_id)==null ){
      dolist.value.push('快来写下第一个事项吧！')
      list.value.push('欢迎到来！')
      Storage.set(done_id,list.value)
      Storage.set(todo_id,dolist.value)
    }
    dolist.value = Storage.get(todo_id)
    list.value = Storage.get(done_id)



    // 提交事件
    const submit = ()=>{
      //判读用户提交的内容是否为空
      if(todo.value != ""){
        // 追加至待办事项
        dolist.value.push(...[todo.value])
        //添加到代办的localstorage======================
        Storage.set(todo_id,dolist.value)
        // 清空todo
        todo.value = ''
      }else{
        alert("请输入事项后提交！")
      }
      
    }
    // 完成待办事项
    const done = (v,index)=>{
      // 追加至已完成
      list.value.push(...[v])   
      // 根据索引删除数组    
      dolist.value.splice(index,1)  
      // 追加到已完成的localstorage
      Storage.set(done_id,list.value)
      Storage.set(todo_id,dolist.value)
    }
    //删除已完成事项
    const clear = (index)=>{
      list.value.splice(index,1) // 根据索引删除数组
      // 追加到已完成的localstorage
      Storage.set(done_id,list.value)
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
