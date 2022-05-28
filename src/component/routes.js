import React from 'react';
import Homee from './Homee';
import About from './About';
import Contact from './Contact';
const routes = [{
    path: '/',
    exact: true,
    main: () => <Homee />
},
{
    path: '/about',
    exact: true,
    main: ({ history }) => <About history={history} />
},
{

    path: '/contact',
    exact: true,
    main: ({ history, match }) => <Contact match={match} history={history} />
}
];
export default routes;