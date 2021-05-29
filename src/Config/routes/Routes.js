import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from '../../Components/Pages/Home/Home'



const Routes = () => {
    return (
        <Router>
            <Switch>

                <Layout>

                    <Route path="/" component={Home}></Route>

                </Layout>
            </Switch>
        </Router>

    );
}
export default Routes
