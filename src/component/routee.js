import React from 'react';
import List from './List';
import Contact from './Contact';
import About from './About';
import Homee from './Homee';

const routes = [{
    path: '/',
    exact: true,
    main: () => <Homee />
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