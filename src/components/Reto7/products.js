import ProductCard from "./product_card"  

  export default function Products({ characters }) {
    return (
      <div>
        <div className="mx-auto">
          <h2 className="sr-only">Characters</h2>
  
          <div id="gridProductsContainer" className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {characters.map((character) => (
                <ProductCard character={character}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    )
  }
  