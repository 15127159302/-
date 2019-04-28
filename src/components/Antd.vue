<template>
    <div class="Antd">
        <p>elm后台管理系统</p>
        <div class="register">
            <ul>
                
                <li>
                   <el-input v-model="input" placeholder="请输入内容"></el-input>
                </li>
                <li>
                    <el-input placeholder="请输入密码" v-model="inpu" show-password></el-input>
                </li>
                <li>
                    <el-button type="primary" @click="register">主要按钮</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            inpu:""
        }
   },
    methods:{
        register(){
            if(this.input!=""&& this.inpu!=""){
                // 
                let  data={user_name:this.input , password:this.inpu}
                
                console.log(data)
                this.axios.post("https://elm.cangdu.org/admin/login",data).then((res)=>{
                    this.$router.push({path:"/HelloWorld"})
                })
            }
        }
    },
    
    
}
</script>

<style>
@import "./Header.css"
</style>
