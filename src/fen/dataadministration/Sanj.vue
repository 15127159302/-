<template>
    <div class="food">
        <div class="food-body">
           <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="餐馆名称">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="食品 ID">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="餐馆 ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
         <el-form-item label="食品分类">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="月销量">
            <span>{{ props.row.month_sales }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating">
    </el-table-column>
    <el-table-column
      label="操作"
      >
                        <span class="ct">编辑</span>
                        
                        <span class="cd">删除</span>
    </el-table-column>
    
    
  </el-table>
   <el-pagination
                @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
  background
  layout="prev, pager, next"
  :total="1000"></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[]
        }
    },
    methods:{
         handleSizeChange(val){
             this.tableData=[]
           this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset="+(val*20)+"&limit=20").then((res)=>{
            if(res.data){
                this.tableData=res.data
            }
            console.log(this.list)
        })
       },
       // 当前改变----当前页码改变之后，触发这个函数
       handleCurrentChange(val){
           this.tableData=[]
            this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset="+(val*20)+"&limit=20").then((res)=>{
            if(res.data){
                this.tableData=res.data
            }
        })
       }
    },
    mounted(){
        this.axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined").then((res)=>{
            if(res.data){
                console.log(res.data)
                this.tableData=res.data
            }
        })
    }
//elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined
}
</script>

<style scoped>
@import "../style/Sanj.css"
</style>
