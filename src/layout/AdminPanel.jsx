import {
    UserIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import FormProductsAdmin from "../components/FormProductsAdmin";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ButtonDelete from "../components/ButtonDelete";
import ButtonEdit from "../components/ButtonEdit";
import EditProductForm from "../components/EditProductForm";
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const url = 'https://684089405b39a8039a586600.mockapi.io/api/products'

export default function AdminPanel() {
    const { products, reloadList, setProducts } = useContext(CartContext);
    const [selectedProduct, setSelectedProduct ] = useState(null)
    const [edit, setEdit] = useState(false)
    const [newProduct, setNewProduct] = useState(false)
    const addProduct = async (products) => {
        try {
            const response = await fetch( url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(products),
                }
            );
            if (!response.ok) {
                throw new Error("Hubo un problema al agregar el producto");
            }
            const data = await response.json();
            // console.log(data);
            
            toast.success('Producto agregado Correctamente')
            setNewProduct(false)
            reloadList()
        } catch (error) {
            console.log(error);
        }
    };

    const updateProduct = async (product) => {
      try {
        const response = await fetch(`${url}/${product.id}`, 
          {method: "PUT",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
            }
          )
          if(!response.ok) {
            throw new Error('Hubo un problema al actualizar el producto')
          }
          const data = await response.json()

          toast.success('Producto actualizado correctamente')
          setEdit(false)
          setSelectedProduct(null)
          reloadList()
      } catch (error) {
        console.log(error)
      }
    }

    const deleteProduct = async (id) => {
        const confirm = window.confirm(
            "Desea eliminar el producto de la lista ?"
        );

        if (confirm) {
            try {
                const response = await fetch(
                    `${url}/${id}`,
                    {
                        method: "DELETE",
                    }
                );
                if (!response)
                    throw new Error("Hubo un error al eliminar el producto");

                toast.success('Producto eliminado correctamente')
                reloadList()
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="h-[150px] bg-fuchsia-700 flex items-center justify-around">
                <h2 className="text-white text-3xl text-center">
                    Admin Control Panel
                </h2>
                <nav className="flex gap-2 items-center w-1/3">
                    <div className="flex items w-full gap-2 justify-center">
                        <UserIcon className=" text-white w-6 h-6" />
                        <p className="text-white italic font-semibold">Admin</p>
                    </div>
                    <div className="flex items-center w-full gap-2 justify-center">
                        <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-white" />
                        <p className="text-white italic font-semibold">
                            Cerrar Sesion
                        </p>
                    </div>
                </nav>
            </div>
            <h3 className="text-center text-2xl mt-5">Registro de Productos</h3>
            
            <button 
              className="flex gap-2 bg-fuchsia-300 font-semibold px-2 py-1 mt-10 mx-auto  items-center cursor-pointer outline-0 hover:ring-1 hover:ring-fuchsia-600 rounded transition-all"
              onClick={() => setNewProduct(true)}
            >
              + Agregar nuevo producto
            </button>
            {newProduct && (
              <FormProductsAdmin submitProduct={addProduct} />
            )}

            {edit && (
              <EditProductForm selectedProduct={selectedProduct} updateProduct={updateProduct} />
            )}

            <ul className="space-y-2 my-10 w-[90%] mx-auto">
                {products.map((item) => (
                    <li
                        key={item.id}
                        className="flex bg-gray-300 items-center justify-around p-2 rounded"
                    >
                        <p className="w-15 text-center">ID: {item.id}</p>
                        <p className="w-40 text-center uppercase">
                            {item.name}
                        </p>
                        <p className="w-20  text-center">${item.price}</p>
                        <ButtonDelete
                            deleteProduct={() => deleteProduct(item.id)}
                        />
                        <ButtonEdit 
                          onEdit={() => {
                            setSelectedProduct(item)
                            setEdit(true)
                          }}
                        />
                    </li>
                ))}
            </ul>
            <ToastContainer 
              autoClose={3000}
              pauseOnHover={false}
            />
        </>
    );
}
