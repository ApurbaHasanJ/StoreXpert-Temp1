import { useEffect, useState } from "react"
import products = 


const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        setLoading(false)
      });
  }, []);
  console.log(products)

  return {products, loading}
}

export default useProducts
