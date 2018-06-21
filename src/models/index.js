const delay = (time) => {
  return new Promise(function(reslove, reject){
    setTimeout(function(){
      console.log(new Date());
      reslove();
    },time)
  })
  
};


export default {
  namespace: 'test',
  state: [],
  reducers: {
    delete(state, { payload: id}) {
      return state.filter(item => item.id !== id);
    }
  },
  effects: {
    *delayDelete ({ payload: id},{call, put, select}) {
      yield select(state => {
        console.log(state);
      })
      yield call(delay, 1000);
      yield put({type:'delete',payload: id})
    }
  }
}