<template>
	<div class="singer">
		<ListView @select="selectSinger" :data="singers"></ListView>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'
	import Singer from 'common/js/singer'
	import ListView from 'base/listview/listview'

	const HOT_NAME = '热门';
	const HOT_SINGER_LEN = 10 ;

	export default {
		data(){
			return {
				singers:[]
			}
		},
		created(){
			this._getSingerList()
		},
		methods:{
			selectSinger(singer){
				this.$router.push({
					path:`/singer/${singer.id}`
				})
			},
			_getSingerList(){
				getSingerList().then((res)=>{
					if(res.code === ERR_OK){
						this.singers = this._normalizeSinger(res.singerList.data.singerlist)
						console.log(this.singers)
					}
				})
			},
			_normalizeSinger(list){
				let map = {
					hot:{
						title:HOT_NAME,
						items:[]
					}
				}
				list.forEach((item,index) => {
					if(index < HOT_SINGER_LEN){
						map.hot.items.push(new Singer({
							id:item.singer_mid,
							name:item.singer_name,
							avatar:item.singer_pic
						}))
					}
					const key = item.country;
					if(!map[key]){
						map[key] = {
							title:key,
							items:[]
						}
					}
					map[key].items.push(new Singer({
						id:item.singer_mid,
						name:item.singer_name,
						avatar:item.singer_pic
					}))
				})
				let ret = []
				let hot = []
				for(let key in map){
					let val = map[key];
					val.title === HOT_NAME ? hot.push(map[key]) : ret.push(map[key]);
				}
				return hot.concat(ret)
			}

		},
		components:{
			ListView
		}
	}
</script>

<style scoped lang="less">
	.singer{
		position: fixed;
	    top: 88px;
	    bottom: 0;
	    width: 100%;
	}
</style>