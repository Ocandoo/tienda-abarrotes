// EscogerTienda.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// Importa aquí los íconos si es necesario

function EscogerTienda() {

    const navigate = useNavigate();

    const handleSelectTienda = () => {
        navigate('/'); // Asegúrate de que la ruta coincide con la definida en tus rutas
    };

    return (
        <div className="flex h-screen justify-center items-center" style={{ backgroundImage: "url('/background2.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="bg-principal p-10 rounded-lg shadow-xl">
                <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="Logo de la tienda" className="mb-4 w-48" />
                    <h1 className="text-2xl text-white font-bold mb-6">Escoger Tienda</h1>
                    <table className="flex justify-around border-separate">
                        <tbody>
                            <tr>
                                <td><button onClick={handleSelectTienda} className="border border-gray-300 rounded-md text-white font-bold py-6 px-6">
                                    <FontAwesomeIcon icon={faShop} size="7x" style={{ color: "#FFFFFF", }} className='py-2' />
                                    <div>Tienda</div><div>Abarrotes</div>
                                </button>
                                </td>
                                <td className='px-4'></td>
                                <td><button className="border border-gray-300 rounded-md text-white font-bold py-6 px-6">
                                    <FontAwesomeIcon icon={faPlus} size="7x" style={{ color: "#ffffff", }} className='py-2' />
                                    <div>Agregar<div></div>Tienda</div>
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EscogerTienda;
