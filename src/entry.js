import san from 'san'
import App from './components/App.san'
import TextField from './components/TextField.san'
import {router, Link} from 'san-router'
// import './icon/iconfont.css'

router.setMode('hash')

router.add({
    rule: '/',
    Component: App,
    target: 'body'
})

router.add({
    rule: '/:word',
    Component: App,
    target: 'body'
})

router.start()