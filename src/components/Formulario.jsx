import { useState } from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra, setNombre } = useLetras()


    //* Creamos un State que es un Objeto para rellenar desde el Formulario
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    
    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre del artista y canción')
            return
        }

        busquedaLetra(busqueda)
        setNombre(busqueda)
        setAlerta('')
    }

  return (
    <form 
        onSubmit={handleSubmit}
    >
        <legend>Busca por Artistas y Canción</legend>

        <div className="form-grid">
            <div>
                <label>Artista</label>
                <input
                    type='text'
                    name='artista'
                    placeholder="Nombre del Artista"
                    //? El value es = artista dentro del objeto del State llamado busqueda.
                    value={busqueda.artista}
                    //? Al cambio, copia lo que hay en el objeto busqueda y edita key y valor.
                    onChange={ e => setBusqueda({
                        ...busqueda, [e.target.name] : e.target.value
                    })}
                />
            </div>
            <div>
                <label>Canción</label>
                <input
                    type='text'
                    name='cancion'
                    placeholder="Nombre de la Canción"
                    value={busqueda.cancion}
                    onChange={ e => setBusqueda({
                        ...busqueda, [e.target.name] : e.target.value
                    })}
                />
            </div>
            <input type='submit' value='buscar'/>
        </div>
    </form>
  )
}

export default Formulario