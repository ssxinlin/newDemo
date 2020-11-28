<template>
	<div>
		<div id="category" :style="_style"></div>
	</div>
</template>
<script>
  import { timeEffectOfDepart } from '@/api/reportInfo'
  import { parseTime } from '@/utils/index'
  const { categoryData } = require('./data.js');
	export default {
    props: {
      required: true,
      _style:String,
      color:Array,
    },
    data() {
      return {
      };
    },
		mounted() {
			this.timeEffectOfDepart();
		},
		methods: {
			drawLine(res) {

        // 基于准备好的dom，初始化echarts实例
        const chart = document.getElementById("category");
        let myChart = this.$echarts.getInstanceByDom(chart);
        // 解决内存泄漏问题
        if (myChart == undefined) {
          myChart = this.$echarts.init(chart);
        }
        // segments为y轴显示的段数，取两个数组的最大值/段数*段数 = max（y轴方向上最大的显示值）
        let segments = 5

        // 绘制图表
        myChart.setOption({
          color: this.color,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            },
          },
          legend: {
            type: 'scroll',
            itemWidth: 15,
            itemGap: 25,
          },
          xAxis: [{
            type: 'category',
            data: res.nameList,
            triggerEvent: true,
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              interval: 0,
            }
          }],
          yAxis: [{
            type: 'value',
            name: '数量(个)',
            min: 0,
            max: 500,
            interval: 500 / segments,
          },
            {
              type: 'value',
              name: '金额(亿元)',
              min: 0,
              max: 10,
              interval: 10 / segments,
            }
          ],
          series: [{
            name: '项目数',
            type: 'bar',
            yAxisIndex: 0,
            data: res.numberList,
          }, {
            name: '认缴金额',
            type: 'bar',
            yAxisIndex: 1,
            data: res.rMoneyList
          }, {
            name: '实缴金额',
            type: 'bar',
            yAxisIndex: 1,
            data: res.sMoneyList,
          }]
        });

        window.addEventListener("resize", () => myChart.resize(), false)
      },
      timeEffectOfDepart() {
        setTimeout(() => {
          let res = categoryData
          this.drawLine(res);
        }, 100)
      },
      compare(property, desc) {
        return function(a, b) {
          let value1 = a[property];
          let value2 = b[property];
          if (desc == true) {
            // 升序排列
            return value1 - value2;
          } else {
            // 降序排列
            return value2 - value1;
          }
        }
      }
		},

    destroyed() {
      window.onresize = null
    }
	};
</script>
