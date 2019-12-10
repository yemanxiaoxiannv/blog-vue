<template>
	<div>
		<div class="container">
			<div class="right">

			</div>
			<div class="left">
				<div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
						<li v-for="(item,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
							<a :href="item.url">
								<img :src="item.image" :alt="item.description">
							</a>
						</li>
					</transition-group>
					<div class="carousel-items">
						<span v-for="(item,index) in slideList" :class="{active:index===currentIndex}" @mouseover="change(index)"></span>
					</div>
				</div>
			</div>
		</div>


		<div class="container">
			<div class="l-left">
				<div class="tab">
					
					<router-link to="/index/Tab1">
						<h2>每日精选</h2>
					</router-link>
				</div>
				<div class="tab">
					
					<router-link to="/index/Tab2">
						<h2>关注动态</h2>
					</router-link>
				</div>
			</div>
			<div class="l-right">
				<router-view />
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
				timer: null,
				slideList: [{
						"url": "#",
						"description": "one",
						"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkVUZ1y6l5ldgikMVWuqVY_iOGKpnAo-EUqFA_Jgp44hbyDyC&s"
					},
					{
						"url": "#",
						"description": "two",
						"image": "https://images.idgesg.net/images/article/2019/05/java_gears_moving_parts_working_together_binary_code_coding_programming_development_by_shivendu_jauhari_gettyimages-1142383890_2400x1600-100795802-large.jpg"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://images.idgesg.net/images/article/2019/03/javaworld_jvm_jdk_jre_explainer_java_runtime_environment_monitoring_and_configuration_3x2_2400x1600_by_idg_oracle_vasabii_gettyimages-100790550-large.jpg"
					},
					{
						"url": "#",
						"description": "four",
						"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5Oau0EPZnxFV9v9n6rTRPQEIzWEj5piyUXlY1iultWW7jaIFSg&s"
					},
					{
						"url": "#",
						"description": "five",
						"image": "https://www.elegantthemes.com/blog/wp-content/uploads/2019/08/000-Semantic-HTML.png"
					}

				]
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

			change() {
				this.bg_color = "#ff9999";
				this.ft_color = "#fef0f0";
			},
			goback() {
				if (this.liked) {
					this.bg_color = "#f56c6c";
					this.ft_color = "#fef0f0";
				} else {
					this.bg_color = "#fef0f0";
					this.ft_color = "#f56c6c";
				}
			},

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


<style scoped="scoped">
	.left {
		flex: 0 0 90%;
		height: 100%;
		background-color: #eee;
		border-bottom-left-radius: 8px;
		border-top-left-radius: 8px;
		color: #FFFFFF;
	}

	.right {
		flex: 0 0 20px;
		height: 100%;
		margin-left: 0px;
		width: 80%;
		border-bottom-right-radius: 8px;
		border-top-right-radius: 8px;
		background-color: #aaa;
	}
	.tab{
		width: 500px;
		height: auto;
		
	}

	
</style>
