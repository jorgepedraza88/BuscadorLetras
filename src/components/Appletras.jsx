import Formulario from "./Formulario"
import Letra from "./Letra"
import Alerta from './Alerta'
import useLetras from "../hooks/useLetras"


const Appletras = () => {

    const { alerta, letra, nombre, cargando } = useLetras()
    

  return (
    <>
        <header>Búsqueda de Letras de Canciones</header>
            <Formulario />
        <main>
            
            {alerta ? <Alerta>{alerta}</Alerta> : 
            letra ? 
            <div>
                <p className="titulo-cancion">{nombre.artista} - {nombre.cancion}</p> 
                <Letra/>
            </div> 
            : cargando ? 'Cargando...' :
            <p className="text-center">Buscar letras de tus artistas favoritos</p>}
        </main>
    </>
  )
}

export default Appletras