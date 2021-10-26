import React from "react";
import "styles/styleregistroventas.css"
function VentasRegistro() {
return (
  <section class="form-register">
    <h4>Formulario registro de venta </h4> 
    <input class="controls" type="date" date="fecha" placeholder="Fecha de venta"/>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese ID del comprador"/>
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese nombre del comprador"/>
    <input class="controls" type="text" numero="numeroventa" placeholder="No. de venta"/>
    <input class="controls" type="text" numero="codigoproducto" placeholder="Código producto"/>
    <input class="controls" type="text" numero="cantidad" placeholder="Cantidad"/>
    <button type="button"  class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span>Registrar</button> 
    <button type="button"  class="btn btn-primary"><span class="glyphicon glyphicon-remove"></span>Cancelar</button>
  </section>
);
}
export default VentasRegistro;