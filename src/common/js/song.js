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
		url:getSongurl(),
		// url:`http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
	})
}

function getSongurl(){
	const ran = parseInt(Math.random()*10000)
	const songs = [
		'C400002qU5aY3Qu24y.m4a?guid=2602010120&vkey=7789139248F276BB1E1D21BF83D243FF9421F14B093610177BB2862CA8723BEF8223F3112BD3B2847ED32BEA31D5FB04AA68D936C32780E6&uin=0&fromtag=66',
		'C400000ryYx71hFmdF.m4a?guid=2602010120&vkey=F445F7FDA8A641AD0546BB097A066B0D9692DA74DF1EA51833FB5DFB583C0833F52E3B143B177F125B16DA63D127160657F3053D286B337B&uin=0&fromtag=66',
		'C400003UMzjf18kDyK.m4a?guid=2602010120&vkey=9A95C239FB7CC34648D9B1F3BBF9DE667C58E236ADF72E3967550AAED92DC34170D718C88F72780CC88A453C43283837E48A7C4F932914CF&uin=0&fromtag=66',
		'C400001aExsj3BySSC.m4a?guid=2602010120&vkey=01D14CBFF637876AF8D3E1576DE609C620B020782924193B947857B7900CD60140765B80555EA0FCF0AD769DB992D335CAF3CE59A2AB087F&uin=0&fromtag=66',
		'C400003H45Js0bEuid.m4a?guid=2602010120&vkey=1B8A45E7C1A0482A4158C085F8A5E22AC2959E629609A42CB2431715AEEA3F0B214B5CB45A8D8A2A9CB06A4A4F5F35AC4D9ED4CD3F06A316&uin=0&fromtag=66',
		'C400002pLUbY38dqz0.m4a?guid=2602010120&vkey=5B522C603798199C019CB0A2125165868CF269D939683A675B332F5D09A1E12D8F18B11324B74DA2F460EC71547A6C9CD8748DC84807D059&uin=0&fromtag=66'
	]
	const len = songs.length
	const index = parseInt(Math.random()*len)
	return `http://140.207.247.13/amobile.music.tc.qq.com/${songs[index]}&_xuchaopeng=${ran}`
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
