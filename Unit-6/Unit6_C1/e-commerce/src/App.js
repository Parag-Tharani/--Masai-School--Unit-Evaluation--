import React from 'react';
import './App.css';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductListing';

function App() {

  const [pageSwitch, setPageSwitch] = React.useState(false)

  return (
    <div className="App">
      <h1>Clothing Verse</h1>
      <button onClick={() => setPageSwitch(!pageSwitch)}>{pageSwitch?<p>Show Product</p>:<p>Add Products</p>}</button>
      {pageSwitch? <ProductForm /> : <ProductList />}
    </div>
  );
}

export default App;
