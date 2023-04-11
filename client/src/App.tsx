import { sampleProducts } from "./data"

const App = () => {
  return (
    <div>
      <header>Ts Amazona</header>
      <main>
        <ul>
          {sampleProducts.map(product => (
            <li key={product.slug}>
              <img className="product-image" src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}€</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  )
}
export default App