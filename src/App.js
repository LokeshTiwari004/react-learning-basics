import './App.css';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
// import FunctionClick from './Components/FunctionClick';
// import Counter from './Components/Counter';
// import {Greet} from './Components/Greet';
// import Greet from './Components/Greet';
// import Message from './Components/Message';
// import Hello from './Components/Hello';
// import Welcome from './Components/Welcome';


function App() {
  // const name1 ='lokesh';
  return (
    <div className="App">
      {/* <Greet name={name1}/> */}
      {/* <Greet name="Medha">
        <p>This is children prop</p>
      </Greet> */}
      {/* <Welcome name="Deepak" /> */}
      {/* <Welcome name="Jagdesh" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
