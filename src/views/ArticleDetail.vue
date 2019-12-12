<template>
	<div class="container border">
		<h2 class="title">{{ articleVo.article.title }}</h2>
		<div class="box">
			<img :src="articleVo.author.avatar" class="avatar-xs" />
			<span class="meta gutter">{{ articleVo.author.nickname }}</span>
			<span class="meta gutter">
				{{ articleVo.article.createTime.date.year }}年{{ articleVo.article.createTime.date.month }}月{{ articleVo.article.createTime.date.day }}日 {{ articleVo.article.createTime.time.hour }}:{{
					articleVo.article.createTime.time.minute
				}}:{{ articleVo.article.createTime.time.second }}
			</span>
		</div>
		<div v-html="articleVo.article.content"></div>
		<div class="table">
			<img :src="articleVo.author.avatar" class="avatar" />
			
		<input type="text" class="input1" placeholder="留下你的评论"  />
		</div>
		<div>
			<h2>精彩评论</h2>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleVo: {}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get(this.GLOBAL.baseUrl + '/article/' + id).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style scoped="scoped">
	.avatar{
		width:60px;
		border-radius: 50%;
		position: relative;
		top: -10px;
		padding: 5px;
	}
	.table{
		margin-top: 20px;
		
	}
	.input1{
		
		width: 50%;
		height: 80px;
		border: 1px solid darkcyan;
		border-radius: 5px;
		
	}
	.box{
		height: 50px;
		line-height: 50px;
	}
</style>
