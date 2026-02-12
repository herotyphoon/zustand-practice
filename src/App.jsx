import './App.css'
import {useHabitStore} from './store/store.js';

function App() {

    const habits = useHabitStore();
    console.log(habits);

  return (
    <div>
        <h1>App</h1>
    </div>
  )
}

export default App
