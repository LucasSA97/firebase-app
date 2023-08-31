import { useState, createContext, useContext } from 'react';

import Header from './components/Header';
import  Footer  from './components/Footer';
import TaskList from './components/TaskList';

import { app, messaging } from './firebase/index'
import { onMessage } from 'firebase/messaging';

import Home from './routes/Home';
import Login from './routes/Login';
import Shopping from './routes/Shopping';
import Register from './routes/Register';

import { Toaster, toast } from 'react-hot-toast';


export const AppContext = createContext(null)

onMessage(messaging, payload => {
  //console.log('Nueva notificacion', payload)
  toast.custom((t) => (
    <div className="bg-sky-300 p-4">
      <h1 className="bg-sky-700 text-lg">{payload.notification.title}</h1>
      <p className="bg-sky-600 text-sm">{payload.notification.body}</p>
    </div>
  ));
})

function App() {
  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null)
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <div className='h-screen'>
      <Toaster />
        <Header />
        <main className="p-6 pt-24 pb-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {route === "tasklist" && <TaskList />}
          {user && <p>Usuario logeado {user.email}</p>}
        </main>
        <Footer>

        </Footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
