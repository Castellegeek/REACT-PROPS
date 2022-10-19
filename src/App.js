import './App.css';
import Profil from './profil/Profil';


function App() {
  function handle (fullName) {
    alert(fullName)
};
  return (
    <>
    <Profil fullName='KonanAlex' bio='Description' profession= 'Student' handleName={handle} /> 
      <h1>Et voila</h1>
    </>
  );
}

export default App;
