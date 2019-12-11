<template>
	<div>
			<div class="cont">
			  <div class="left">
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
			   <div class="right">
			     <h3>社区热点</h3>
				 
				 <div class="button">
				 <button class="btn btn-sm btn-rd">文学</button>
				 <button class="btn btn-sm btn-rd">流行</button>
				 <button class="btn btn-sm btn-rd">文化</button>
				 <button class="btn btn-sm btn-rd">生活</button>
				 <button class="btn btn-sm btn-rd">经管</button>
				 <button class="btn btn-sm btn-rd">科技</button>
				 <button class="btn btn-sm btn-rd">通讯</button>
				 <button class="btn btn-sm btn-rd">交互</button>
			   </div>
			   <h3>关注我们</h3>
			   <i class="iconfont">&#xe620;</i>

			   
			   </div>
			</div>


		<div class="row">
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
	@font-face {
	  font-family: 'iconfont';  /* project id 1432498 */
	  src: url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.eot');
	  src: url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1432498_4tjj1i32zf3.svg#iconfont') format('svg');
	}
	.iconfont{
		color: #4CAF50;
	    font-family:"iconfont" !important;
	    font-size:32px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
    .cont{
      width: 80%;
      margin: 0 auto;
      /* height: 600px; */
      display: flex;
      margin-top: 100px;
	  border: 1px solid #eee;
     
    }
    .left{
      flex: 0 0 70%;
      height: 100%;
    }
    .right{
      flex: 0 0 25%;
      height: 100%;
      margin-left: 15px;
	  margin-top: 5px;
      background-color: #FFFFFF;
    }
	.carousel-wrap {
		position: relative;
		height: 350px;
		overflow: hidden;
		
	}
	.tab{
		margin-left: 115px;
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
