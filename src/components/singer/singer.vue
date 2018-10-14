<template>
	<div class="singer">
	</div>
</template>

<script type="text/javascript">
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'

	export default {
		data(){
			return {
				singer:[]
			}
		},
		created(){
			this._getSingerList()
		},
		methods:{
			_getSingerList(){
				getSingerList().then((res)=>{
					if(res.code === ERR_OK){
						this.singer = res.singerList.data.singerlist
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style scoped lang="less"></style>