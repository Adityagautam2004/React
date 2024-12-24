import { useState } from 'react'

function App() {
  const [color, selector] = useState("olive")

  return (
     <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}} 
          onClick={() => selector("red")}>Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}} 
          onClick={() => selector("green")}>green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}} 
          onClick={() => selector("blue")}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}} 
          onClick={() => selector("olive")}>Olive</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}} 
          onClick={() => selector("grey")}>Grey</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}} 
          onClick={() => selector("yellow")}>Yellow</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}} 
          onClick={() => selector("pink")}>pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}} 
          onClick={() => selector("purple")}>Purple</button>
          
        </div>
        </div>
     </div>
  )
}

export default App
