<template>
	<div>
		<div class="col-4">
						<h3>热门作者</h3>
						<div v-for="(item, index) in users" :key="index" class="row">
							<div class="col-12 border box">
								<div class="flex-center-y">
									<router-link :to="{ path: '/user/' + item.id }">
									<img :src="item.avatar" class="avatar-xs link" />
									</router-link>
									<p class="sub-title">{{ item.nickname }}</p>
								</div>
								<div class="flex-center-y">
									<p class="meta">{{ item.fans }}个粉丝</p>
									<p class="meta">写了{{ item.articles }}篇文章</p>
								</div>
								<div class="flex-center-y">
								      <button   @click="favor"
								               class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
								               @mouseenter="change()" @mouseleave="goback()">
								        {{content}}
								      </button>
								    </div>
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
