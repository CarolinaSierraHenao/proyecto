import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListarClientes from "../paginas/ListarClientes";
import FormCrearCliente from "../paginas/FormCrearCliente";
import FormEditarCliente from '../paginas/FormEditarCliente';
import ListarPlanesdepago from '../paginas/ListarPlanesdepago';
import FormCrearPlandepago from '../paginas/FormCrearPlandepago';
import FormEditarPlandepago from '../paginas/FormEditarPlandepago';
import ListarProductos from '../paginas/ListarProductos';
import FormCrearProducto from '../paginas/FormCrearProducto';
import FormEditarProducto from '../paginas/FormEditarProducto';
import ListarNegociaciones from '../paginas/ListarNegociaciones';
import FormCrearNegociacion from "../paginas/FormCrearNegociacion";
import FormEditarNegociacion from '../paginas/FormEditarNegociacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Clientes */}
        <Route path="/listaclientes" element={<ListarClientes />}></Route>
        <Route path="/crearcliente" element={<FormCrearCliente />}></Route>
        <Route path="/editarcliente/:id" element={<FormEditarCliente />}></Route>
        {/* Planes de pago */}
        <Route path="/listaplandepago" element={<ListarPlanesdepago />}></Route>
        <Route path="/crearplandepago" element={<FormCrearPlandepago />}></Route>
        <Route path="/editarplandepago/:id" element={<FormEditarPlandepago />}></Route>
        {/* Productos */}
        <Route path="/listaproductos" element={<ListarProductos />}></Route>
        <Route path="/crearproducto" element={<FormCrearProducto />}></Route>
        <Route path="/editarproducto/:id" element={<FormEditarProducto />}></Route>
        {/* Negociaciones */}
        <Route path="/listanegociaciones" element={<ListarNegociaciones />}></Route>
        <Route path="/crearnegociacion" element={<FormCrearNegociacion />}></Route>
        <Route path="/editarnegociacion/:id" element={<FormEditarNegociacion />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
