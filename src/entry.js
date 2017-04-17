import san from 'san'
import App from './components/App.san'
import TextField from './components/TextField.san'
import {router, Link} from 'san-router'

router.setMode('hash')

router.add({
    rule: '/',
    Component: App,
    target: 'body'
});

router.add({
    rule: '/wd/:word',
    Component: App,
    target: 'body'
});

router.start();