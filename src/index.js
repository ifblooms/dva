import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
  initialState: {
    test: [{
      key: 1,
      name: '张三',
      id: 1
      
    },{
      key: 2,
      name: '李四',
      id:2
    }]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/index').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
