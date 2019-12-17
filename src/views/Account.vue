<template>
  
  
</template>

<script>
  export default {
    data() {
      return {
        form: {
          userId: 0,
          mobile: '',
          password: '',
          nickname: '',
          avatar: '',
          gender: '',
          birthday: '',
          introduction: '',
        }
      }
    },
    methods: {
      init() {
        this.form.userId = this.$router.currentRoute.params.userId
        this.axios.get(this.GLOBAL.baseUrl + '/user?userId=' + this.form.userId).then(res => {
          const user = res.data.data
          this.form.mobile = user.mobile
          this.form.password = user.password
          this.form.nickname = user.nickname
          this.form.avatar = user.avatar
          this.form.gender = user.gender
          this.form.birthday = '' + user.birthday.year+'-' + user.birthday.month+'-'+user.birthday.day
          this.form.introduction = user.introduction
        });
      },
      onSubmit() {
        console.log('onsubmit -- ')
        let times = this.form.birthday.split('-');
        console.log(times)
        console.log(times[0])
        console.log(times[1])
        console.log(times[2])
        this.axios({
          method: 'post',
          url: this.GLOBAL.baseUrl + '/user/update',
          data: {
            userId: this.form.userId,
            mobile: this.form.mobile,
            password: this.form.password,
            nickname: this.form.nickname,
            avatar: this.form.avatar,
            gender: this.form.gender,
            birthday: {
              year: times[0],
              month: times[1],
              day: times[2]
            },
            introduction: this.form.introduction,
          }
        }).then(() => {
          this.init()
        })
      }
    },
    mounted() {
      this.init()
    },
    created() {

    },
    computed: {},

  };
</script>

<style>
</style>
