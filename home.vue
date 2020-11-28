<template>
	<el-container>
		<el-main class="hs-main">
			<el-row :gutter="20">
				<el-col :span="16">
					<el-row :gutter="20">
						<el-col :span="24">
							<el-card shadow="always" class="hs-card m-b-md" :style="leftTopChart.style">
								<div slot="header" class="clearfix">
									<span class="title">投资概览-投资类别</span>
								</div>
								<category :_style="leftTopChart.chartHeight" :color="color" ></category>
							</el-card>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-card class="hs-card m-b-md" :style="leftBottomChart.style">
								<div slot="header" class="clearfix">
									<span class="title">投资概览-项目行业分布</span>
								</div>
								<pie :_style="leftBottomChart.chartHeight" :color="color" ></pie>
							</el-card>
						</el-col>
						<el-col :span="12">
							<el-card class="hs-card" :style="leftBottomChart.style">
								<div slot="header" class="clearfix">
									<span class="title">下城国投各直投项目阶段分布</span>
								</div>
								<funnel :_style="leftBottomChart.chartHeight" :color="color" ></funnel>
							</el-card>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	import category from "./category";
	import pie from "./pie";
  import funnel from "./funnel";
  export default {
		data() {
			return {
        color: ['#7383EB', '#5DCDFC', '#A3E3BE', '#44A6FC', '#6DD6A5', '#FFCEB8'],
        curHeight:0,
        leftTopChart:{"style":'',"chartHeight":''},
        leftBottomChart:{"style":'',"chartHeight":''},
        rightTable:{"style":'',"chartHeight": 0},
      };
		},
		components: {
      category,
      pie,
      funnel,
		},

		methods: {
      getSize(){
        this.curHeight=  document.documentElement.clientHeight
        console.log(this.curHeight)
        this.setConfig()
      },
      setConfig() {
        this.leftTopChart.style = "height:" + (this.curHeight-182) * 0.54 + "px";
        this.leftTopChart.chartHeight = "width:100%;height:" + (this.curHeight-182-162) * 0.5412 + "px";

        this.leftBottomChart.style = "height:" + (this.curHeight-185) * 0.46 + "px";
        this.leftBottomChart.chartHeight = "width:100%;height:" + (this.curHeight-182-210) * 0.4898 + "px";
        this.rightTable.style = "height:" + (this.curHeight-125) + "px";
        this.rightTable.chartHeight = this.curHeight-210;
      },
		},
    mounted(){
      let _this = this
      window.onresize = function temp() {
        _this.getSize()
      }
      _this.getSize()
    },
	};
</script>

<style scoped>
	.hs-main {
		background: #eff1f4;
		padding: 15px;
		min-height: calc(100vh - 64px);
	}

	.hs-card .title {
		color: #004fe6;
		font-size: 18px;
		font-weight: 500;
		margin: 0 0 15px 0;
	}

	.el-tag {
		cursor: pointer;
	}

	.el-tag--dark {
		background-color: #004fe6;
		border-color: #004fe6;
	}

	.el-card__header {
			border-bottom-width: 0px;
		}
  .el-icon-refresh-left{
    cursor: pointer;
    float: right;
  }
  .information{
    background-color: #fff;
    color: #004fe5;
    font-size: 18px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    border-radius: 4px;
  }
</style>
<style>
	.select-data .el-radio-button__inner{
				width:72px;
				height:32px;
				text-align: center;
				line-height: 32px;
				padding: 0;
				background:rgba(247,247,247,1);
				border-radius:16px!important;
				color: #000000;
				border-width: 0;
				margin-right: 8px;
				border-left-width: 0px
	}
  .select-data .el-radio-button:first-child .el-radio-button__inner {
    border-left-width: 0px
  }
</style>

