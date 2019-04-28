<template>
  <div> 
    <div class="overallSituation">
      <div class="left">
        <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      font-size="14px"
      active-text-color="#ffd04b" >
      <!-- 第一个首页 -->
      <el-submenu index="1">
        <template slot="title" >
          <!-- aat 跳转到首页   Sant 首页 路由 -->
         <span   @click="aat">首页</span>
        </template>
      </el-submenu>
      <!-- 2 -->
      <el-submenu index="2">
        <template slot="title">
          
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
            <!-- aas 跳转到首页   Sans 用户列表 路由 -->
            <el-menu-item index="2-1" @click="aas">用户列表</el-menu-item>
            <!-- aad 跳转到商家列表页 Sank路由 -->
            <el-menu-item index="2-2" @click="aak">商家列表</el-menu-item>
            <!-- aaj 跳转到 食品列表 Sanj -->
            <el-menu-item index="2-3" @click="aaj">食品列表</el-menu-item>
            <!-- aap 跳转到 订单列表 Sanp -->
            <el-menu-item index="2-4" @click="aap">订单列表</el-menu-item>
            <!-- aal 跳转到 管理员页面 Sanl -->
            <el-menu-item index="2-5" @click="aal">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 3 -->
      <el-submenu index="3">
        <template slot="title">
          
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
            <!-- Kank 跳转到 添加商铺页面 -->
            <el-menu-item index="3-1" @click="Kank">添加商铺</el-menu-item>
            <!-- Kans 跳转到 添加商铺页面 -->
            <el-menu-item index="3-2" @click="Kans">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 4 -->
      <el-submenu index="4">
        <template slot="title">
          
          <span>图表</span>
        </template>
        <el-menu-item-group>
            <!-- chart 跳转到 用户分布  页面 -->
            <el-menu-item index="4-1" @click="chart">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 5 -->
      <el-submenu index="5">
        <template slot="title">
          
          <span>编辑</span>
        </template>
        <el-menu-item-group>
            <!-- compile 跳转到 文本编辑页面 -->
            <el-menu-item index="5-1" @click="compile">文本编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     <!-- 6 -->
     <el-submenu index="6">
        <template slot="title">
          
          <span>设置</span>
        </template>
        <el-menu-item-group>
            <!-- set 跳转到管理员设置  页面 -->
            <el-menu-item index="6-1" @click="set">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 7 -->
      <el-submenu index="7">
        <template slot="title">
          
          <span>说明</span>
        </template>
        <el-menu-item-group>
            <!-- explain 跳转到 说明页面  -->
            <el-menu-item index="7-1" @click="explain">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>



    </el-menu>
  </el-col>
</el-row>
      </div>
     
            
 <div class="right">
        <div class="rheader">

        </div>
        <router-view/>
</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
   methods: {
      handleOpen(key, keyPath) {
        
      },
      handleClose(key, keyPath) {
        
      },
      aat(){
        this.$router.push({path:"/Sant"})
      },
      aas(){
        this.$router.push({path:"/Sans"})
      },
      aak(){
        this.$router.push({path:"/Sank"})
      },
      aaj(){
        this.$router.push({path:"/Sanj"})
      },
      aap(){
        this.$router.push({path:"/Sanp"})
      },
      aal(){
        this.$router.push({path:"/Sanl"})
      },
      Kank(){
        this.$router.push({path:"/Kank"})
      },
      Kans(){
        this.$router.push({path:"/Kans"})
      },
      chart(){
        this.$router.push({path:"/chart"})
      },
      compile(){
        this.$router.push({path:"/compile"})
      },
      set(){
        this.$router.push({path:"/set"})
      },
      explain(){
        this.$router.push({path:"/explain"})
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import "./Hello.css"

</style>
