import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from "./components/Tabs"

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Tabs />, document.getElementById('dashboard'));
}
