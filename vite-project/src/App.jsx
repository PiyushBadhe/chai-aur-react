import { useState } from 'react'
import './App.css'
import Button from './component/Button'

function App() {
  return (
    <>
      {/* <figure className="bg-gray-100 rounded-xl p-8">
        <img className="w-32 h-32 rounded-full mx-auto"
          src="https://images.pexels.com/photos/27495825/pexels-photo-27495825/free-photo-of-flower-and-agate-flat-lay-with-delicate-petals.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption >
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      <Button 
        btnText='Visit g00gle'
        link='https://google.com'
      />
    </>
  )
}

export default App
