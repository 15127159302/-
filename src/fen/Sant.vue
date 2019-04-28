<template>
  <div class="data">
    <div>
      <!-- 头部 -->
      <div class="D-header">
        <p>数据统计</p>
        <div class="D-1">
          <ul>
            <li>当日数据:</li>
            <li>{{ newregistereduser}}新增用户</li>
            <li>{{newindent}}新增订单</li>
            <li>{{newAdministrator}}新增管理员</li>
          </ul>
        </div>
        <div class="D-2">
          <ul>
            <li>总数据:</li>
            <li>{{registereduser}}注册用户</li>
            <li>{{ inden}}订单</li>
            <li>{{Administrator}}管理员</li>
          </ul>
        </div>
      </div>

      <!-- 走势图 -->
      <div class="D-chart" id="Mychart"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newregistereduser:"",
            newindent:"",
            newAdministrator:"",
            registereduser:"",
            inden:"",
            Administrator:"",
            nowTime:"",
            SxTime:"",
            FeTime:"",
            FrTime:"",
            TeTime:"",
            TwTime:"",
            OnTime:"",
            S1:"",
            S2:"",
            S3:"",
            F1:"",
            F2:"",
            F3:"",
            Fe1:"",
            Fe2:"",
            Fe3:"",
            Te1:"",
            Te2:"",
            Te3:"",
            Tw1:"",
            Tw2:"",
            Tw3:"",
            On1:"",
            On2:"",
            On3:"",
            J1:"",
            J2:"",
            J3:"",
        }
   },
   beforeMount(){
        
       
   },
    mounted(){
        
        //调用时间
         this.nowTimes();
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.nowTime+"/count").then((res)=>{
            if(res.data){
                this.newregistereduser=res.data.count
            }
        })
         this.axios.get("https://elm.cangdu.org/statis/order/"+this.nowTime+"/count").then((res)=>{
           if(res.data){
               this.newindent=res.data.count
           }
           
        })
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.nowTime+"/count").then((res)=>{
           if(res.data){
               this.newAdministrator=res.data.count
           }
           
        })
        this.axios.get("https://elm.cangdu.org/v1/users/count").then((res)=>{
           if(res.data){
               this.registereduser=res.data.count
           }
           
        })
        this.axios.get("https://elm.cangdu.org/bos/orders/count").then((res)=>{
           if(res.data){
               this.inden=res.data.count
           }
           
        })
        this.axios.get("https://elm.cangdu.org/admin/count").then((res)=>{
           if(res.data){
               this.Administrator=res.data.count
           }
           
        })
          
        //调用走势图 数据
        //获取走势图里面的数据
        //前6天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.SxTime+"/count").then((res)=>{
            if(res.data){
                this.S1=res.data.count
                console.log(this.S1)
            }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.SxTime+"/count").then((res)=>{
            if(res.data){
                this.S2=res.data.count
            }
        })
        // 新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.SxTime+"/count").then((res)=>{
           if(res.data){
                this.S3=res.data.count 
           }
        })
       

        //前5天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.FeTime+"/count").then((res)=>{
            if(res.data){
               this.F1=res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.FeTime+"/count").then((res)=>{
            if(res.data){
               this.F2=res.data.count
           }
        })
        // 新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.FeTime+"/count").then((res)=>{
            if(res.data){
               this.F3=res.data.count
           }
        })



        //前4天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.FrTime+"/count").then((res)=>{
            if(res.data){
               this.Fe1=res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.FrTime+"/count").then((res)=>{
            if(res.data){
               this.Fe2=res.data.count
           }
        })
        // 新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.FrTime+"/count").then((res)=>{
            if(res.data){
               this.Fe3=res.data.count
           }
        })


        //前3天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.TeTime+"/count").then((res)=>{
            if(res.data){
                this.Te1= res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.TeTime+"/count").then((res)=>{
            if(res.data){
               this.Te2= res.data.count
           }
        })
        // 新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.TeTime+"/count").then((res)=>{
            if(res.data){
               this.Te3= res.data.count
           }
        })

        //前2天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.TwTime+"/count").then((res)=>{
            if(res.data){
              this.Tw1= res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.TwTime+"/count").then((res)=>{
            if(res.data){
                this.Tw2= res.data.count
           }
        })
        // 新增管理员
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.TwTime+"/count").then((res)=>{
            if(res.data){
                this.Tw3= res.data.count
           }
        })


        //前1天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.OnTime+"/count").then((res)=>{
             if(res.data){
                this.On1= res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.OnTime+"/count").then((res)=>{
             if(res.data){
                 this.On2= res.data.count
           }
        })
        // 新增管理员
        
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.OnTime+"/count").then((res)=>{
           if(res.data){
               this.On3= res.data.count
           }
        })


        //今天
         //新注册用户
        this.axios.get("https://elm.cangdu.org/statis/user/"+this.nowTime+"/count").then((res)=>{
             if(res.data){
               this.J1= res.data.count
           }
        })
        //新增订单
        this.axios.get("https://elm.cangdu.org/statis/order/"+this.nowTime+"/count").then((res)=>{
             if(res.data){
               this.J2= res.data.count
           }
        })
        // 新增管理员
        
        this.axios.get("https://elm.cangdu.org/statis/admin/"+this.nowTime+"/count").then((res)=>{
           if(res.data){
               this.J3= res.data.count
               //  当 J3 不等于空的 时候 调用走势图
               if(this.J3!=""){
                    this.drawLine()
               }
           }
           
        })
        
         
    },
    methods:{
        // 走势图
       timeFormate(timeStamp) {
          let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      this.nowTime = year + "-" + month + "-" + date ;
      this.SxTime= year + "-" + month + "-" + (date-6)
      this.FeTime= year + "-" + month + "-" + (date-5)
      this.FrTime= year + "-" + month + "-" + (date-4)
      this.TeTime= year + "-" + month + "-" + (date-3)
      this.TwTime= year + "-" + month + "-" + (date-2)
      this.OnTime=year + "-" + month + "-" + (date-1)
    },
    nowTimes(){
      this.timeFormate(new Date());
     
    },
       drawLine(){
            
           
           // 基于准备好的 dom 初始化 echarts 实例
           var mychart=this.$echarts.init(document.getElementById('Mychart'))
           // 绘制图表
           mychart.setOption({
                title: {
        text: '走势图',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新注册用户','新增订单','新增管理员']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: [this.SxTime,this.FeTime,this.FrTime,this.TeTime,this.TwTime,this.OnTime,this.nowTime]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    
    series: [
        {
            name:'新注册用户',
            type:'line',
            data:[this.S1,this.F1,this.Fe1,this.Te1,this.Tw1,this.On1,this.J1],
            
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'新增订单',
            type:'line',
            data:[this.S2,this.F2,this.Fe2,this.Te2,this.Tw2,this.On2,this.J2],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        // this.S1,this.F1,this.Fe1,this.Te1,this.Tw1,this.On1,this.J1
        {
            name:'新增管理员',
            type:'line',
            data:[this.S3,this.F3,this.Fe3,this.Te3,this.Tw3,this.On3,this.J3],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
    


           })
       },
       
    },
   
    

}
</script>

<style scoped >
@import "./style/Sant.css";
</style>
