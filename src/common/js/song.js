//参数较多 设计成一个对象类

export default class Song {
	constructor({id,mid,singer,name,albm,duration,image,url}){
		this.id = id
		this.mid = mid
		this.singer = singer
		this.name = name
		this.albm = albm
		this.duration = duration
		this.image = image
		this.url = url
	}
}

export function createSong(musicData){
	return new Song({
		id:musicData.songid,
		mid:musicData.songmid,
		singer:filterSinger(musicData.singer),
		name:musicData.songname,
		albm:musicData.albumname,
		duration:musicData.interval,
		image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
		url:`http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`

	})
}

function filterSinger(singer){
	let ret = []
	if(!singer){
		return ''
	}
	singer.forEach((s) => {
		ret.push(s.name)
	})
	return ret.join('/')
}

//获取播放源头接口
'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=getplaysongvkey8775834335390613&g_tk=5381&jsonpCallback=getplaysongvkey8775834335390613&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%222602010120%22%2C%22songmid%22%3A%5B%22002wKHHm42wVh1%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%220%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A0%2C%22format%22%3A%22json%22%2C%22ct%22%3A20%2C%22cv%22%3A0%7D%7D'
//返回 'http://140.207.247.13/amobile.music.tc.qq.com/' + res.req_0.data.midurlinfo[0].purl

'http://140.207.247.13/amobile.music.tc.qq.com/C400003sYHuC3aBd4r.m4a?guid=2602010120&vkey=CE77F849936F6B8C55FA506CC2801463B5E14DCDD73650FFE58189EC73F9E62E3BA1A0B5AE76395D8DD1FEE583A167676C6E00FB268EFEAF&uin=0&fromtag=66'
