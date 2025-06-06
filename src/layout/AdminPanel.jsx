import {
    UserIcon,
    ArrowLeftStartOnRectangleIcon,
    BuildingStorefrontIcon
} from "@heroicons/react/24/solid";
import FormProductsAdmin from "../components/FormProductsAdmin";
import ButtonDelete from "../components/ButtonDelete";
import ButtonEdit from "../components/ButtonEdit";
import EditProductForm from "../components/EditProductForm";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

export default function AdminPanel() {
    const { products, logOut, addProduct, updateProduct, deleteProduct, setEdit, setNewProduct, setSelectedProduct, newProduct, edit, selectedProduct } = useContext(AdminContext)

    return (
        <>
            <div className="h-[150px] bg-fuchsia-700 flex items-center justify-around">
                <h2 className="text-white text-3xl text-center">
                    Admin Control Panel
                </h2>
                <nav className="flex gap-2 items-center w-1/4 py-2">
                    <div className="flex items w-full gap-2 justify-center">
                        <UserIcon className=" text-white w-6 h-6" />
                        <p className="text-white italic font-semibold">Admin</p>
                    </div>
                        <Link
                            to={'/'}
                            className="flex items w-full gap-1 justify-center relative group"
                        >
                            <BuildingStorefrontIcon className=" text-white w-6 h-6" />
                            <p className="text-white italic font-semibold">Ir a la tienda</p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full group-hover:transition-all"></span>
                        </Link>
                        <Link
                            className="flex items w-full gap-1 justify-center relative group"
                            onClick={logOut}
                        >
                            <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-white" />
                            <p className="text-white italic font-semibold">
                                Cerrar Sesion
                            </p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full group-hover:transition-all"></span>

                        </Link>
                </nav>
            </div>
            <h3 className="text-center text-2xl mt-5">Registro de Productos</h3>
            
            <button 
              className="flex gap-2 bg-fuchsia-300 font-semibold px-2 py-1 mt-10 mx-auto  items-center cursor-pointer outline-0 hover:ring-1 hover:ring-fuchsia-600 rounded transition-all"
              onClick={() => {setNewProduct(true), setEdit(false)}}
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
                            setNewProduct(false)
                          }}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
