import {playMode} from 'common/js/config'

//state之保留 一些基础数据  需要得到的可以放在getters里面
const state = {
	singer:{},
	playing:false,
	fullScreen:false,
	playlist:[],
	sequenceList:[],
	mode:playMode.sequence,
	currentIndex:-1
}

export default state