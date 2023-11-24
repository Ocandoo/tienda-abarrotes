import { SetStateAction, useState } from 'react';
import "tailwindcss/tailwind.css"; // Esto puede variar según tu configuración de Tailwind CSS
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"; // para iconos de línea
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value);
  const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => setPassword(event.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();

  //const handleSubmit = (event) => {
  //  event.preventDefault();
  // Aquí iría la lógica para manejar el inicio de sesión
  //};

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aquí normalmente validarías las credenciales del usuario
    // ...

    // Simulamos un inicio de sesión exitoso y redirigimos
    navigate("/escoger-tienda");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex h-screen justify-center items-center"
      style={{
        backgroundImage: "url('/background2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-principal p-10 rounded-lg shadow-xl">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col items-center">
            {/* Logo de la tienda */}
            <img
              src="/logo.png"
              alt="Logo de la tienda"
              className="mb-4 w-48"
            />
            <h2 className="text-white	text-2xl font-bold mb-6">
              Iniciar sesión
            </h2>

            {/* Campo de correo electrónico */}
            <input
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
            />

            {/* Campo de contraseña */}
            <div className="relative w-full">
              <input
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md pr-12" // Añadido pr-12 para más padding
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-3 mb-3" // Puedes ajustar el padding aquí si es necesario
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-700" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox para recordar usuario */}
            <div className="flex items-center mb-3">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-white">
                Recordar usuario
              </label>
            </div>

            {/* Botón de ingreso */}
            <button
              type="submit"
              className="w-full bg-secundario text-white px-3 py-2 rounded-md hover:bg-green-700"
            >
              Ingresar
            </button>

            {/* Enlace para problemas de contraseña */}
            <div className="text-white text-blue-600 mt-4">
              Si tienes problemas con tu contraseña, contacta al administrador
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
