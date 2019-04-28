<template>
    <div class="adminset">
        <header>管理员信息</header>
        <div class="adminlist">
            <ul>
                <li>
                    <span>姓名:</span>
                    <span></span>
                </li>
                <li>
                    <span>注册时间:</span>
                    <span></span>
                </li>
                <li>
                    <span>管理员权限:</span>
                    <span></span>
                </li>
                <li>
                    <span>管理员 ID:</span>
                    <span></span>
                </li>
                <li>
                    <span>更换头像:</span>
                    <div class="avatar_uploader">
                        <div class="el_upload el_upload_text">
                            <img src="//elm.cangdu.org/img/16a1feddd0a31056.png" class="avatar">
                            <input type="file" name="file" class="el_upload_input">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            admin:[]
        }
    },
    mounted(){
        this.axios
        .get('https://elm.cangdu.org/admin/info')
        .then((res)=>{
            console.log(res)
             this.admin=res.data
        })
    }
}
</script>

<style scoped>
@import "../style/Set.css"
</style>
