import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/quartz/bootstrap.css';
import './App.css';
import ContactsPage from './components/ContactsPage';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <ContactsPage/>
    </div>
  );
}

export default App;
