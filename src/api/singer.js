import jsonp from 'common/js/jsonp';
import {commonParams} from './config';

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