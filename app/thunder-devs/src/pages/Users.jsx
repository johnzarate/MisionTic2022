
import React from 'react'
function Users(){
    return <div> 
 <main>
        <section class="tablaInfo">
            <table>
                <thead>
                    <th>ID</th><th>NOMBRE COMPLETO</th><th>CORREO ELECTRÓNICO</th><th>ROL</th><th>CONFIGURACIONES</th>
                </thead>
                <tr>
                    <td>4191450</td>
                    <td>SARHA MELISSA CHICA OTALVARO</td>
                    <td>SARHACHICA@GMAIL.COM</td>
                    <td>ADMINISTRADOR</td>
                    <td><button class= "botonEditar"> Editar </button> <button class= "botonEliminar"> Eliminar </button></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>1849560</td>
                    <td>DIANA CAROLINA BERNAL MONTENEGRO</td>
                    <td>DIANABERNAL@GMAIL.COM</td>
                    <td>VENDEDOR</td>
                    <td><button class= "botonEditar"> Editar </button> <button class= "botonEliminar"> Eliminar </button></td>
                </tr>
                <tr>
                    <td>4191450</td>
                    <td>ALEJANDRO BERRIO GALLEGO</td>
                    <td>ALEJANDROBERRIO@GMAIL.COM</td>
                    <td>ADMINISTRADOR</td>
                    <td><button class= "botonEditar"> Editar </button> <button class= "botonEliminar"> Eliminar </button></td>
                </tr>
                <tr>
                    <td>4191450</td>
                    <td>IVÁN JOSÉ ROJAS ACOSTA</td>
                    <td>IVANROJAS@GMAIL.COM</td>
                    <td>VENDEDOR</td>
                    <td><button class= "botonEditar"> Editar </button> <button class= "botonEliminar"> Eliminar </button></td>
                </tr>
                <tr>
                    <td>4191450</td>
                    <td>JOHN JAIRO ZARATE PAVAS</td>
                    <td>JOHNZARATE@GMAIL.COM</td>
                    <td>ADMINISTRADOR</td>
                    <td><button class= "botonEditar"> Editar </button> <button class= "botonEliminar"> Eliminar </button></td>
                </tr>
            </table>

        </section>
    </main>

    </div>;
}

export default Users;