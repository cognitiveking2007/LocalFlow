import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CustomerLayout from "../../layouts/CustomerLayout";
import ProductCard from "../../components/cards/ProductCard";

import { getStore } from "../../api/storeAPI";
import { getProducts } from "../../api/productAPI";

function StoreDetails() {

  const { id } = useParams();

  const [store, setStore] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {

    loadStore();

    loadProducts();

  }, [id]);



  async function loadStore() {

    try {

      const res = await getStore(id);

      setStore(
        res.data
      );

    }
    catch (err) {

      console.log(err);

    }

  }



  async function loadProducts() {

    try {

      const res =
        await getProducts(id);

      setProducts(
        res.data
      );

    }
    catch (err) {

      console.log(err);

    }

  }



  if (!store) {

    return (

      <CustomerLayout>

        <div className="p-8">

          Loading...

        </div>

      </CustomerLayout>

    );

  }



  return (

    <CustomerLayout>

      <div className="max-w-6xl mx-auto p-4 md:p-6">

        <div>

          <p className="text-slate-400">

            {store.category}

          </p>

          <h1 className="text-4xl font-bold mt-2">

            {store.name}

          </h1>

          <p className="text-slate-400 mt-2">

            ⭐ {store.ratings} • 15 min delivery

          </p>

        </div>



        <div

          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          mt-8
          "

        >

          {

            products.map(product => (

              <ProductCard

                key={product._id}

                id={product._id}

                image={

                  product.image ||

                  "📦"

                }

                name={product.name}

                price={product.price}

              />

            ))

          }

        </div>

      </div>

    </CustomerLayout>

  );

}

export default StoreDetails;