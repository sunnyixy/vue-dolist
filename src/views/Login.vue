<template>
  <div class="login">
	<label for="email">邮箱：</label>
	<input id="email" type="email" v-model="email"/>
	<br />
	<label for="pwd">密码：</label>
	<input id="pwd" type="password" v-model="password"/>
	<br />
	<input type="submit" @click="login" value="登录"/>
  </div>
</template>

<script>
	import {ref} from 'vue';
	import { Storage } from '../assets/js/login.js';
	import { useRouter } from 'vue-router';
	export default {
		name: 'login',
		setup(){
			const email = ref('');
			const password = ref('');
			const router = useRouter();

			var login = () =>{
				if(email.value==''||password.value==''){
					alert("请输入有效信息")
				}else{
					if(Storage.get(email.value)){
						if(Storage.get(email.value)==password.value){
							//将这个用户的信息传递给todo.vue页面
							router.push({name:'Todo',params: { email:email.value} })
						}else{
							alert("账号或密码错误")
						}
					}else{
						Storage.set(email.value,password.value);
						alert("欢迎您"+email.value)
						router.push({name:'Todo',params: { email:email.value} })
					}
					email.value = ''
					password.value = ''
				}
			}	
			return{
				login,email,password
			}
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>