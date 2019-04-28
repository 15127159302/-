<template>

    <div class="shop">
        <div class="shop-header">
            <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销量">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
         <el-form-item label="分类">
            <span>{{ props.row.description }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="category">
    </el-table-column>
    <el-table-column
      label="操作"
      >
                        <span class="ct">编辑</span>
                        <span class="cb">添加商品</span>
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
        return{
           
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
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20").then((res)=>{
            if(res.data){
                this.tableData=res.data
            }
        })
    }
}
</script>

<style scoped>
@import "../style/SanK.css";
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
   
  }
  .el-table-column{
      background: #eef1f6;
  }
  .el-table__header-wrapper{
    background: #eef1f6;  
    }
.el-table__header{
    background: #eef1f6;  
}
 .ct{
     text-align: center;
    display: inline-block;
    width: 40px;
    border: 1px solid ;
    border-radius: 6px;
}
.cd{
text-align: center;
    display: inline-block;
    width: 40px;
    background: red;
    border-radius: 6px;
}
.cb{
text-align: center;
    display: inline-block;
    width: 70px;
     border: 1px solid ;
    border-radius: 6px;
}
   

</style>
