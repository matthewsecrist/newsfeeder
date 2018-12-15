import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.locale(en)

ReactDOM.render(<App />, document.getElementById('root'))
