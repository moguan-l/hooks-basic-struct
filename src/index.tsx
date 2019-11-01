import React from 'react';
import ReactDOM from 'react-dom';

import '@/utils/init';

import { Store as App } from '@/stores/app';

ReactDOM.render(<App />, document.getElementById('root'));
