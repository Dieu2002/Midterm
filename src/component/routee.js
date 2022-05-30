import React from 'react';
import List from '../component/Admin/List';
import Contact from '../component/About/Contact';
import About from '../component/About/About';
import Home from '../component/Content/Home/Home';

const routes = [{
    path: '/',
    exact: true,
    main: () => <Home />
},
{
    path: '/About',
    exact: true,
    main: ({ history }) => <About history={history} />
},
{
    path: '/Contact',
    exact: true,
    main: ({ history }) => <Contact history={history} />
},
{
    path: '/Admin',
    exact: true,
    main: ({ history }) => <List history={history} />
}
];
export default routes;