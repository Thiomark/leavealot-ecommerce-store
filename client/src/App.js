import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Container} from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'
import CartScreen from './views/CartScreen'
import LoginScreen from './views/LoginScreen'
import RegisterScreen from './views/RegisterScreen'
import ProfileScreen from './views/ProfileScreen'
import Messsage from './components/Messsage';

function App() {

    const alerts = useSelector(state => state.alerts.errorMessages)

    return (
        <Router>
            <Header title="Leavealot"/>
            <main className='py-3'>
                <Container>
                    {alerts && (alerts.map(alert => (<Messsage key={alert._id} variant={alert.errorType}>{alert.errorMessage}</Messsage>)))}
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/' component={CartScreen} />
                    <Route path='/login' component={LoginScreen} exact/>
                    <Route path='/register' component={RegisterScreen} exact/>
                    <Route path='/profile' component={ProfileScreen} exact/>
                    <Route path='/search/:keyword' component={HomeScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
  }
  
  export default App;