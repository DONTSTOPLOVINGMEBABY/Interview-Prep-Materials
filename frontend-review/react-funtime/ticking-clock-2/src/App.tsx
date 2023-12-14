import './App.css'
import ClockNumber from './number'

function App() {  


  return (
    <div id='clock'>

      <ClockNumber timeID='one' timeNumber={1}/>
      <ClockNumber timeID='two' timeNumber={2}/>
      <ClockNumber timeID='three' timeNumber={3}/>
      <ClockNumber timeID='four' timeNumber={4}/>
      <ClockNumber timeID='five' timeNumber={5}/>
      <ClockNumber timeID='six' timeNumber={6}/>
      <ClockNumber timeID='seven' timeNumber={7}/>
      <ClockNumber timeID='eight' timeNumber={8}/>
      <ClockNumber timeID='nine' timeNumber={9}/>
      <ClockNumber timeID='ten' timeNumber={10}/>
      <ClockNumber timeID='eleven' timeNumber={11}/>
      <ClockNumber timeID='twelve' timeNumber={12}/>
    </div>
  )
}

export default App
