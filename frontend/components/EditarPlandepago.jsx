import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Editarplandepago = () => {
    const { id } = useParams();
    // Hooks
    const [fechaPago, setFechaPago] = useState('');
    const [valorPago, setValorPago] = useState('');
    const [cumplioPago, setCumplioPago] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4000/api/plandepago/obtenerdataplandepago/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error al obtener los datos del plan de pago');
                }
                return res.json();
            })
            .then((dataplandePago) => {
                setFechaPago(dataplandePago.fechaPago);
                setValorPago(dataplandePago.valorPago);
                setCumplioPago(dataplandePago.cumplioPago);

                // Actualiza los demás campos con los valores correspondientes
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    // Función para actualizar
    const actualizarPlandePago = async () => {

        // Verificar que todos los campos sean llenados
        if (fechaPago === '' || valorPago === '' || cumplioPago === '') {
            console.error('Todos los campos son obligatorios');
            return;
        }

        const plandePagoActualizado = {
            fechaPago,
            valorPago,
            cumplioPago,
        };

        try {
            const response = await fetch(`http://localhost:4000/api/plandepago/actualizarplandepago/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plandePagoActualizado)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // plan de pago actualizado correctamente
            } else {
                throw new Error('Error al actualizar el plan de');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="d-flex">
                <aside className="">
                    <ul className="d-flex flex-column justify-content-start w-100 px-0 my-0 mx-0">
                        <div className="d-flex justify-content-start align-items-center px-3 py-2">
                            <i className="py-3">
                                <img className="rounded-circle" src="https://e7.pngegg.com/pngimages/164/153/png-clipart-donut-the-simpsons-tapped-out-doughnut-homer-simpson-bart-simpson-krusty-the-clown-donut-food-bagel.png" alt="batman " title="batman" width="40" height="40" />
                            </i>
                            <p className="mb-0 mx-3 text-icon-menu">Nombre</p>
                        </div>
                        <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="listarClientes.html">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-user-tie mx-4" title="Usuarios"></i>
                                <p className="text-icon-menu my-0">Usuarios</p>
                            </div>
                        </Link>
                        <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/listaclientes">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-user mx-4" title="Clientes"></i>
                                <p className="text-icon-menu my-0">Clientes</p>
                            </div>
                        </Link>
                        <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/listaproductos">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-box-open mx-4" title="Productos"></i>
                                <p className="text-icon-menu my-0">Productos</p>
                            </div>
                        </Link>
                        <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/listanegociaciones">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-sack-dollar mx-4" title="Negociaciones"></i>
                                <p className="text-icon-menu my-0">Negociaciones</p>
                            </div>
                        </Link>
                        <Link className="d-flex justify-content-start py-2 border-bottom border-dark" to="/listaplandepago">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-money-bill-1-wave mx-4" title="Planes de pago"></i>
                                <p className="text-icon-menu my-0">Planes de pago</p>
                            </div>
                        </Link>
                        <Link className="d-flex justify-content-between py-2 border-bottom border-dark" to="listarClientes.html">
                            <div className="d-flex align-items-center">
                                <i className="icon-menu fa-solid fa-book-open mx-4" title="Catálogo"></i>
                                <p className="text-icon-menu my-0">Catálogo de productos</p>
                            </div>
                        </Link>
                    </ul>
                </aside>
                <main className="d-flex flex-column">
                    <h1 className="text-center py-0 pt-5 my-0">EDITAR PLAN DE PAGO</h1>
                    <Link to="/listaplandepago" style={{ color: 'black', textDecoration: 'none' }}>
                        <div className="controles d-flex align-items-center">
                            <i className="icon-menu fa-solid fa-angles-left"> Volver </i>
                        </div>
                    </Link>
                    <form className="formulario" action="">
                        <div className="contenedores d-flex justify-content-center flex-lg-row flex-column flex-sm-column mx-5 gap-5">
                            <div className="contenedores__div1 d-flex flex-column align-items-center ms-sm-0 w-100">
                                <div className="mb-3 w-100">
                                    <label className="form-label fw-bold">Fecha Pago</label>
                                    <input type="date" className="form-control" id="fechaPago" placeholder="Fecha Pago" required value={fechaPago} onChange={(e) => { setFechaPago(e.target.value) }} />
                                </div>
                                <div className="mb-3 w-100">
                                    <label className="form-label fw-bold">Valor Pago</label>
                                    <input type="number" className="form-control" placeholder="Valor Pago" required value={valorPago} onChange={(e) => { setValorPago(e.target.value) }} />
                                </div>
                            </div>
                            <div className="contenedores__div2 d-flex flex-column align-items-center me-5 me-sm-0 w-100">
                                <div className="mb-3 w-100">
                                    <label className="form-label fw-bold">Cumplió</label>
                                    <select className="form-select" value={cumplioPago} onChange={(e) => { setCumplioPago(e.target.value) }}>
                                        <option value="Cumplió">Cumplió</option>
                                        <option value="No cumplió">No cumplió</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor__botones d-flex justify-content-center flex-lg-row flex-column flex-sm-column my-3 mx-5 gap-5">
                            <div className="d-flex justify-content-center w-100">
                                <div className="div_botones ms-sm-0 w-100">
                                    <button type="submit" className="btn btn-dark w-100 btn-styles" onClick={actualizarPlandePago}>Guardar</button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="div_botones me-sm-0 w-100">
                                    <button type="reset" className="btn btn-dark w-100 btn-styles">Limpiar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </main>
            </section>

        </>
    );
};

export default Editarplandepago;