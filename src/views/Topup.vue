<template>
	<div>
		<h2>VIP会员</h2>
		<div class="row">
			<div  class="col-3">
				<div class="card shadow">
					<p class="tit1">连续包月首月</p>
					<i class="iconfont">&#xe62e;</i>
					<span class="tet">12</span>
					<p class="tit2">之后15元/月续费，可随时关闭</p>
				</div>
				<div class="icon">首月12元</div>
			</div>
			<div  class="col-3">
				<div class="card shadow">
					<p class="tit1">连续包季</p>
					
					<i class="iconfont">&#xe62e;</i>
					<span class="tet">45</span>
					<p class="tit2">每季自动续费，可随时关闭</p>
				</div>
			</div>
			<div  class="col-3">
				<div class="card shadow">
					<p class="tit1">连续包年首年</p>
					<i class="iconfont">&#xe62e;</i>
					<span class="tet">118</span>
					<p class="tit2">之后178元/年续费，可随时关闭</p>
				</div>
				<div class="icon">首年118元</div>
			</div>
			<div  class="col-3">
				<div class="card shadow">
					<p class="tit1">12个月</p>
					
					<i class="iconfont">&#xe62e;</i>
					<span class="tet">128</span>
					<p class="tit2">原价198元</p>
				</div>
				<div class="icon">限时特惠</div>
			</div>
		</div>
		<h2>VIP+特权</h2>
		<div class="row">
		<div  class="col-3">
			<div class="card shadow">
				
			</div>
		</div>
		<div  class="col-3">
			<div class="card shadow">
			</div>
		</div>
		<div  class="col-3">
			<div class="card shadow">
			</div>
		</div>
		<div  class="col-3">
			<div class="card shadow">
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		created() {
			
				
		},
		methods: {
			
		}
	};
</script>
<style scoped>
	@font-face {
	  font-family: 'iconfont';  /* project id 1432498 */
	  src: url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.eot');
	  src: url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1432498_lp5q1mqibi.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		margin-left: 85px;
		color: rgb(232, 181, 152);
	}
	.icon{
		height: 25px;
		width: 75px;
		font-size: 15px;
		text-align: center;
		margin-top: -180px;
		margin-left: 8px;
		background-color: rgb(239, 108, 0,0.5);
		border-bottom-left-radius: 15px;
		/* border-top-right-radius: 10px; */
	}
	.tet{
		font-size: 32px;
		color: rgb(232, 181, 152);
	}
	.tit1{
		margin-top: 30px;
		font-size: 25px;
		text-align: center;
	}
	.tit2{
		text-align: center;
		margin-top: 10px;
		color: #555555;
		
	}
	.card {
		width: 85%;
		height: 170px;
	}

</style>
