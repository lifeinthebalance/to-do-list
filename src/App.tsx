import { useState } from 'react'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'
import Clock from './components/Clock'
import Header from './components/Header'


function App() {

  return (
   
      <>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <Clock />
          </section>
          <section>
            <ToDoList />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
  )
}

export default App
