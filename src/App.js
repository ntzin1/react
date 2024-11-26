import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div aluno sergio rennan="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <Menu />
        <div>Aluno: sergio rennan </div>
 </div>
 </Navbar>
    </div>
  );
}

export default App;
