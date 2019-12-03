<template>
	<div>
		<div class="row">
		<div class="carousel-wrap">
			<transition-group tag="ul" class="slide-ul" name="slide">
				<li v-for="(item,index) in slideList"
				 :key="index"
				  v-show="index===currentIndex" 
				  @mouseenter="stop"
				   @mouseleave="go">
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

		<div class="row">
			<div class="col-8">
				<h3>热门文章</h3>
				<div v-for="(item, index) in articles" :key="index" class="col-12">
					<div class="media-wraaper border">
						<div class="media-left">
							<router-link :to="{ path: '/user/' + item.article.userId }">
							<img :src="item.author.avatar" class="avatar-lg link" />
							</router-link>
							<p>{{ item.author.nickname }}</p>
							<strong>来自</strong>
							<p>{{ item.topic.topicName }}</p>
						</div>
						<div class="media-middle flex flex-around flex-left">
							<router-link :to="{ path: '/article/' + item.article.id }" class="subtitle">
								 {{ item.article.title }} 
							</router-link>
							<p class="sub-title link">{{ item.article.summary }}</p>
							<p>
								<span class="meta gutter">{{ item.article.comments }}评论</span>
								<span class="meta">{{ item.article.likes }}喜欢</span>
							</p>
						</div>
						<div class="media-right"><img :src="item.article.thumbnail" alt="" /></div>
					</div>
				</div>
			</div>
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
						<div class="flex-center-y"><button class="btn btn-follow">关注</button></div>
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
			timer: null,
			slideList: [
				{
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
.logo {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.logo:hover {
	opacity: 0.6;
}
.box {
	display: flex;
	justify-content: space-around;
	height: 70px;
	padding: 10px;
}
.btn-follow {
	background-color: #42c02e;
	font-weight: 400;
	font-size: 15px;
	color: #fff;
	padding: 5px 0;
	width: 80px;
	height: 30px;
	border-radius: 40px;
	display: inline-block;
	text-align: center;
}
.carousel-wrap {
	position: relative;
	width: 65%;
	height: 350px;
    overflow: hidden;
}
.slide-ul {
	width: 100%;
	height: 100%;
}
.slide-ul li {
	position: absolute;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
}
			
.slide-ul li img {
	width: 100%;
	height: 100%;
}
			
.carousel-items {
	z-index: 100;
	position: relative;
	top: -80px;
	text-align: center;
	font-size: 0;
}
			
.carousel-items span {
	display: inline-block;
	width: 50px;
	height: 6px;
	margin: 0 5px;
	background-color: #eee;
	cursor: pointer;
}
			
.carousel-items .active {
	background-color: #FFA500;
}
			
/* 动画 */
.slide-enter-to {
	transition: all 1s ease;
	transform: translateX(0);
}
			
.slide-leave-active {
	transition: all 1s ease;
	transform: translateX(-100%)
}
			
.slide-enter {
	transform: translateX(100%)
}
			
.slide-leave {
	transform: translateX(0)
}
</style>
