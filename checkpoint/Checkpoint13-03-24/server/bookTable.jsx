

export default function BookTable({data}){

    return(
        <>
        <h1>tabla</h1>
        {data.map(el => {
            return (
                <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>autor</th>
                        <th>año</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{el.titulo}</td>
                    <td>{el.nombre}</td>
                    <td>
                    <button>Eliminar</button>
                    </td>
    
                    </tr>
                </tbody>
            </table>
            )
        })}
        
        </>
    )
}