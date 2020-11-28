<template>
  <div>
    <div id="pei" :style="_style"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import { proportionOfFactory } from '@/api/reportInfo'
  const { pieData } = require('./data.js');
  export default {
    props: {
      _style:String,
      color:Array,
    },
    mounted() {
      this.proportionOfFactory();
    },
    methods: {
      drawLine(res) {
        // 基于准备好的dom，初始化echarts实例
        const chart = document.getElementById("pei");
        let myChart = echarts.getInstanceByDom(chart);
        // 解决内存泄漏问题
        if(myChart == undefined){
          myChart = echarts.init(chart);
        }
        // 绘制图
        let option ={
          color: this.color,
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            itemWidth: 15,
            itemGap: 25,
          },
          series: [{
            name:'',
            type: 'pie',
            data: res,
          }]
        };
        myChart.setOption(option, true)
        // 自适应
        window.addEventListener("resize", () => myChart.resize(), false);
      },
      proportionOfFactory() {
        setTimeout(() => {
          let res = pieData
          this.drawLine(res);
        }, 100)
      },

    },
    destroyed() {
      window.onresize = null
    }
  };
</script>
