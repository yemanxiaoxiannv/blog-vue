<template>
	<div>
		<div class="row">
					<div class="col-3" v-for="(item, index) in topics" :key="index">
						<div class="card link shadow">
							<router-link :to="{ path: '/topic/' + item.id }"><img :src="item.logo" class="logo" /></router-link>
							<p class="title">{{ item.topicName }}</p>
							<p class="sub-title">{{ item.description.slice(0, 20) }}...</p>
							<p class="meta">
								<span class="gutter">{{ item.articles }}篇文章,</span>
								<span>{{ item.follows }}人关注</span>
							</p>
						</div>
					</div>
				</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [],
				users: [],
				topics: [],
				currentIndex: 0,
				timer: null
			};
		},
		created() {
			this.axios.get(this.GLOBAL.baseUrl + '/article').then(res => {
				// console.log(res.data.data);
				this.articles = res.data.data;
			});
			this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {
				// console.log(res.data.data);
				this.users = res.data.data;
			});
			this.axios.get(this.GLOBAL.baseUrl + '/topic').then(res => {
				// console.log(res.data.data);
				this.topics = res.data.data;
			});
		},
		methods: {
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.slideList.length - 1) {
					this.currentIndex = 0
				}
			}
		}
	};
</script>

<style>
</style>
