import useLetras from "../hooks/useLetras"

const Letra = () => {

    const { letra, cargando } = useLetras()

  return (
    //   El CSS de letra es white-space: pre-wrap;
    cargando ? 'Cargando...' :
    <div className="letra">{letra}</div>
  )
}

export default Letra