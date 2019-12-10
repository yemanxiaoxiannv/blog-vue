<!DOCTYPE html>
<html>
<template>
	<div class="row">
		<div v-for="(item, index) in articles" :key="index" class="col-6">
			<div class="media-wraaper bg shadow">
				
				<div class="media-middle flex flex-left">
					<router-link :to="{ path: '/article/' + item.article.id }">
						<p>
							<span>{{ item.article.id }}</span>
							{{ item.article.title }}
						</p>
					</router-link>
					<p class="sub-title link">{{ item.article.summary }}</p>
					<p>
						<span class="meta">{{ item.article.comments }}评论</span>
						<span class="meta">{{ item.article.likes }}喜欢</span>
					</p>
				</div>
				<div class="media-right"><img :src="item.article.thumbnail" /></div>
			</div>
		</div>

		<div class="col-12"><button class="btn btn-lg warning-fill" @click="loadMore">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			currentPage: 1,
			count: 20
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/article', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.articles = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.articles.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.articles.length);
				});
		}
	}
};
</script>

<style scoped="scoped">
.bg {
	
	background-size: contain;
	background-position-y: 100px;
}
</style>

	<body>
	</body>
</html>
