import jsonp from 'common/js/jsonp';
import {commonParams,options} from './config';

export function getSingerList(){
	const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
	const data = Object.assign({},commonParams,{
		g_tk:5381,
		loginUin:0,
		hostUin:0,
		platfrom:'yqq',
		needNewCode:0,
		data:'{"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":2,"sex":-100,"genre":-100,"index":-100,"sin":1,"cur_page":1}}}'
	})
	return jsonp(url,data,{param:'callback'})
}

export function getSingerDetail(singerId){
	const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

	const data = Object.assign({},commonParams,{
		hostUin:0,
		needNewCode:0,
		platfrom:'yqq',
		order:'Listen',
		begin:0,
		num:30,
		songstatus:1,
		g_tk:1664029744,
		singermid:singerId
	})
	return jsonp(url,data,options)
}