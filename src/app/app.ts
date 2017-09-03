/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';


import * as angular from 'angular';

import AppComponent from './app.component';
import Components from './components';

/**
 * Import the global styles
 */
import './app.scss';



const app = angular
    .module('app', [
        Components
    ])
    .component('app', AppComponent)
    .name;

export default app;

