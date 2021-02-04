import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header           from "../components/Header";
import CreateTripPage   from "../pages/CreateTripPage";
import HomePage         from "../pages/HomePage";
import ListTripsPage    from "../pages/ListTripsPage";
import LoginPage        from "../pages/LoginPage";
import TripDetailsPage  from "../pages/TripDetailsPage";
import ErrorPage        from "../pages/ErrorPage";
import ApplyTrip from "../pages/ApplyTrip";

export default function Router() {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/CreateTripPage">
                    <CreateTripPage/>
                </Route>
                <Route exact path="/ListTripsPage">
                    <ListTripsPage/>
                </Route>
                <Route exact path="/LoginPage">
                    <LoginPage/>
                </Route>
                <Route exact path="/TripDetailsPage">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/ApplyTrip/:id/:trip/:planet">
                    <ApplyTrip/>
                </Route>
                <Route >
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}