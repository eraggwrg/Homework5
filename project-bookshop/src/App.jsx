import { useReducer, useState } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'
import { ProductContext, initialState, reducer } from './ProductContext'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className='row'>
        <ProductContext.Provider value={{ state, dispatch }}>
          <ProductList />
          <Basket />
        </ProductContext.Provider>

      </div>
    </>
  )
}

export default App
