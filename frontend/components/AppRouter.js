// import React from "react";
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { authRoutes, publicRoutes } from "../pages/routes";
// import { REGISTRATION_ROUTE } from "../utils/consts";


// export default function AppRouter () {
//     const isAuth = true;
//     return (
//         <Switch>
//             {isAuth && authRoutes.map(({ path, Component }) => 
//                 <Route key={ path } path={ path } component={ Component } exact />
//             )}
//             {publicRoutes.map(({ path, Component }) => 
//                 <Route key={ path } path={ path } component={ Component } exact />
//             )}

//             <Redirect to={REGISTRATION_ROUTE} />
//         </Switch>
//     );
// }