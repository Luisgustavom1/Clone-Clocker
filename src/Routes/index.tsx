import { ComponentType, useContext } from "react";
import { Component } from "react";
import { BrowserRouter, Redirect, Route, RouteComponentProps, RouteProps, Switch } from "react-router-dom";
import AppContext from "../context/AppContext";
import HoursPage from "../pages/Hours";
import HoursDetails from "../pages/HoursDetails";
import InitialPage from "../pages/InitialPage";

interface PrivateRouteProps {
    component: React.ComponentType<RouteComponentProps<any>>
    path: string
    exact: boolean
}

export default function Routes() {

    const { isAuthenticated } = useContext(AppContext)

    const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
        return <Route 
                    render = { props =>
                        isAuthenticated ? 
                        <Component {...props}/> :
                        <Redirect to={{ pathname: '/' }} />
                    }
                    {...rest}    
        />
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={InitialPage}/>
                <PrivateRoute path='/hours' exact component={HoursPage}/>
                <PrivateRoute path='/hours/details' exact component={HoursDetails}/>
            </Switch>
        </BrowserRouter>
    )
}