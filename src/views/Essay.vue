<template>
	<div>
	<div class="col-8">
	  <div class="col-12" v-for="(item, index) in userVo.articleList" :key="index">
	    <div class="media-wraaper shadow" @click="showDetail(item.article.id)">
	      <div class="media-left">
	        <img :src="item.article.thumbnail" class="thumnail-xs"/>
	      </div>
	      <div class="media-middle">
	        <p class="title">{{ item.article.title }}</p>
	        <p class="sub-title">{{ item.article.summary }}</p>
	      </div>
	      <button @click.stop="clickdelete(item.article.id)" class="btn-botton">刪除</button>
	    </div>
	
	  </div>
	</div>
	
	</div>
</template>

<script>
export default {
	data() {
		return {
			userVo: {
				user: {},
				articleList: {},
			
			}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get(this.GLOBAL.baseUrl + '/user/' + id).then(res => {
			console.log(res.data.data);
			this.userVo = res.data.data;
		});
	},
	methods: {
		delect(articleid) {
						this.axios({
							method: 'delete',
							url: this.GLOBAL.baseUrl + '/article/' + articleid,
							data: JSON.stringify(articleid),
						}).then(res => {
							if (res.data.msg === '成功') {
		
								alert('删除成功');
								this.reload();
								this.$router.push('/personal/' + user.id);
							} else {
								alert(res.data.msg);
							}
						});
					}
	}

};
</script>

<style scoped="scoped">
.btn-follow {
	background-color: rgb(232, 181, 152);
	font-weight: 400;
	font-size: 15px;
	color: #fff;
	padding: 5px 0;
	width: 120px;
	height: 30px;
	border-radius: 10px;
	display: inline-block;
	text-align: center;
	border: none;
	outline: none;
	box-shadow: 2px 2px 5px #aaa; 
	margin-top: 10px;
	margin-bottom: 5px;
}
.btn-botton {
        width: 100px;
		height: 50px;
	    color: #f56c6c;
	    background: rgb(232, 181, 152,0.3);
	    border: 3px solid rgb(232, 181, 152,0.3);
	    border-radius: 10px;
	    padding: 10px 25px;
	    text-align: center;
	    font-size: 16px;
		margin-top: 120px;
	    -webkit-transform: scale(0.7);
	  
	
}
.sub-tit{
	margin-left: 380px;
	margin-top: -20px;
}
.tit{
	padding-top: 55px;
}
</style>
