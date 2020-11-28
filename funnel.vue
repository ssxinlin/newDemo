  <template>
	<div>
		<div id="MonitoringDevice" :style="_style"></div>
	</div>
</template>
<script>
  import { proportionOfFactory } from '@/api/reportInfo'
  const { funnelData } = require('./data.js');
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
        const chart = document.getElementById("MonitoringDevice");
        let myChart = this.$echarts.getInstanceByDom(chart);
        // 解决内存泄漏问题
        if(myChart == undefined){
          myChart = this.$echarts.init(chart);
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
            itemGap: 20,
          },
            series: [
              {
                name:'',
                type:'funnel',
                sort: 'descending',
                data: res
              }
            ]
				};
        myChart.setOption(option, true)
				// 自适应
        window.addEventListener("resize", () => myChart.resize(), false);
			},
      proportionOfFactory() {
        setTimeout(() => {
          let res = funnelData
          this.drawLine(res);
        }, 100)
      },

		},
    destroyed() {
      window.onresize = null
    }
	};
</script>
