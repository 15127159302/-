<template>
    <div class="user">
        <div class="user-body">
            <div class="user-header">
                <ul>
                    <li>#</li>
                    <li>注册日期</li>
                    <li>用户姓名</li>
                    <li>注册地址</li>
                </ul>
            </div>
            <div class="user-content">
                <ul v-for="(res,index) in list" class="at">
                    <li>{{index}}</li>
                    <li>{{res.registe_time}}</li>
                    <li>{{res.username}}</li>
                    <li>{{res.city}}</li>
                </ul>
                <!-- 分页-->
                <el-pagination
                @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
              

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            isShow:false
        }
    },
    methods:{
         handleSizeChange(val){
           this.axios.get("https://elm.cangdu.org/v1/users/list?offset="+val+"&limit=20").then((res)=>{
            if(res.data){
                this.list=res.data    
            }
            console.log(this.list)
        })
       },
       // 当前改变----当前页码改变之后，触发这个函数
       handleCurrentChange(val){
           this.axios.get("https://elm.cangdu.org/v1/users/list?offset="+val+"&limit=20").then((res)=>{
            if(res.data){
                this.list=res.data    
            }
            console.log(this.list)
        })
       }

    },
    mounted(){
        this.axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then((res)=>{
            if(res.data){
                this.list=res.data    
            }
        })

    }
}
</script>

<style scoped>
@import "../style/Sans.css"
</style>
