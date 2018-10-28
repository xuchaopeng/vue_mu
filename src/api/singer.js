import jsonp from 'common/js/jsonp';
import {commonParams,options} from './config';
import axios from 'axios'

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

export	function getMusic1(mid='003r7EDv3uLKM8'){
	const url = '/api/music'
	const data = Object.assign({},commonParams,{
		songmid:mid,
		filename:'C400'+mid+'.m4a',
		guid:1819638027,
		platform:'yqq',
		loginUin:0,
		hostUin:0,
		needNewCode:0,
		g_tk:5381,
		uin:0,
		cid:205361747,
		format:'json'
	})

	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}

export function getMusic(mid='003r7EDv3uLKM8'){
	const url = '/api/music'
	const data = Object.assign({},commonParams,{
		callback: 'getplaysongvkey9261877576066908',
		jsonpCallback: 'getplaysongvkey9261877576066908',
		loginUin:0,
		hostUin:0,
		g_tk:5381,
		format:'jsonp',
		platform:'yqq',
		needNewCode:0,
		data:encodeURIComponent(`{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"2602010120","songmid":["003r7EDv3uLKM8"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":20,"cv":0}}`)
	})
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}