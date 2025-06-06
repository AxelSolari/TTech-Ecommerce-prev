import { useContext, useState } from "react";
import { AdminContext } from "./AdminContext";
import { toast } from "react-toastify";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";
const url = 'https://684089405b39a8039a586600.mockapi.io/api/products'

export const AdminProvider = ({children}) => {
    const {products,  reloadList } = useContext(CartContext);
        const { logOut } = useContext(AuthContext)
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
        <AdminContext.Provider value={{products, logOut, selectedProduct, edit, newProduct, addProduct, updateProduct, deleteProduct, setEdit, setNewProduct, setSelectedProduct}}>
            {children}
        </AdminContext.Provider>
    )
}