"use strict";
class Cliente {
    constructor(nif, nombre, apellidos, telefono) {
        this.nif = nif;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "</tr>";
        return row;
    }
}

class Venta {
    constructor(cliente, vehiculo, importe, fechaVenta) { //importe es float
        this.cliente = cliente;
        this.vehiculo = vehiculo;
        this.importe = importe;
        this.fechaVenta = fechaVenta;
    }

    toHtmlRow() { // Necesita acceso a las compras
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.importe + "</td>";
        row += "<td>" + this.fechaVenta + "</td>";
        row += "</tr>";
        return row;
    }
}

class Compra {
    constructor(cliente, vehiculo, importe, fechaCompra) {
        this.cliente = cliente;
        this.vehiculo = vehiculo;
        this.importe = importe;
        this.fechaCompra = fechaCompra;
    }

    toHtmlRow() { // Necesita acceso a las ventas
        let row = "<tr>";
        row += "<td>" + this.nif + "</td>";
        row += "<td>" + this.nombre + "</td>";
        row += "<td>" + this.apellidos + "</td>";
        row += "<td>" + this.telefono + "</td>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.importe + "</td>";
        row += "<td>" + this.fechaCompra + "</td>";
        row += "</tr>";
        return row;
    }
}

class Vehiculo {
    constructor(matricula, marca, modelo, combustible) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.combustible = combustible;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "</tr>";
        return row;
    }
}

class Turismo extends Vehiculo {
    constructor(matricula, marca, modelo, combustible, abs, descapotable, numPuertas) {
        super(matricula, marca, modelo, combustible);
        this.abs = abs;
        this.descapotable = descapotable;
        this.numPuertas = numPuertas;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.abs + "</td>";
        row += "<td>" + this.descapotable + "</td>";
        row += "<td>" + this.numPuertas + "</td>";
        row += "</tr>";
        return row;
    }
}

class V4x4 extends Vehiculo {
    constructor(matricula, marca, modelo, combustible, pendienteMax) {
        super(matricula, marca, modelo, combustible);
        this.pendienteMax = pendienteMax;
    }

    toHtmlRow() {
        let row = "<tr>";
        row += "<td>" + this.matricula + "</td>";
        row += "<td>" + this.marca + "</td>";
        row += "<td>" + this.modelo + "</td>";
        row += "<td>" + this.combustible + "</td>";
        row += "<td>" + this.pendienteMax + "</td>";
        row += "</tr>";
        return row;
    }
}

class QuintoCar {
    constructor() {
        this.clientes = [];
        this.ventas = [];
        this.compras = [];
        this.vehiculos = [];
    }

    altaCliente(cliente) {
        if (this.clientes.filter(clienteTemp => clienteTemp.nif == cliente.nif).length == 0) {
            this.clientes.push(cliente);
            return "Cliente dado de alta";
        }
        return "El cliente ya existe";
    }

    altaVehiculo(vehiculo) {
        if (this.vehiculos.filter(vehiculoTemp => vehiculoTemp.matricula == vehiculo.matricula).length == 0) {
                this.vehiculos.push(vehiculo);
                return "Vehiculo dado de alta";
        }
        return "El vehiculo ya existe";
    }

    buscarCliente(nif) {
        this.clientes.forEach(compara);

        function compara(cliente, index) {
            if (cliente.nif == nif) {
                return cliente;
            }
        }
    }

    buscarCompra(vehiculo) {
        let c;
        this.compras.forEach(compara);
        function compara(compra, index) {
            if (compra.vehiculo.matricula == vehiculo.matricula) {
               c = compra;
            }
        }
        return c;
    }

    buscarVenta(vehiculo) {
        let v;
        this.ventas.forEach(compara);
        function compara(venta, index) {
            if (venta.vehiculo.matricula == vehiculo.matricula) {
               v = venta;
            }
        }
        return v;
    }

    comprar(matricula, nif, importe, fecha) {
    	

        return String;
    }

    vender(matricula, nif, importe, fecha) {
        return String;
    }

    listadoALaVenta() {

        let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th></tr></thead><tbody>";
        this.vehiculos.forEach( function(vehiculo) {
           tabla += "<tr><td scope='col'>"+vehiculo.matricula+"</td><td scope='col'>"+vehiculo.marca+"</td><td scope='col'>"+vehiculo.modelo+"</td><td scope='col'>"+vehiculo.combustible+"</td>";
           if(vehiculo instanceof Turismo)
           {
            tabla+="<td>"+(vehiculo.abs?"Sí":"No")+"</td><td>"+(vehiculo.descapotable?"Sí":"No")+"</td><td>"+vehiculo.numPuertas+"</td><td></td>";
           }
           else
           {
            tabla+="<td></td><td></td><td></td><td>"+vehiculo.pendienteMax+"</td>";
           }
        });
        tabla += "</tbody></table>";
        return tabla;
    }

    listadoVendidosperiodo(fechaInicio, fechaFin) {
        // Cabecera de la tabla
        let tabla = "<div class='table-responsive'><table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th><th>Fecha Compra</th><th>Importe Venta</th><th>Importe Compra</th><th>Fecha Venta</th><th>Beneficio</th></tr></thead><tbody>";
        // Línea de cada venta
        this.ventas.forEach( (venta) => {
            let compraCoche = this.buscarCompra(venta.vehiculo); // Busca la compra del coche que se ha vendido
            if(venta.fechaVenta > fechaInicio && venta.fechaVenta < fechaFin){ // Comprueba si se vendió en el periodo dado
                tabla += "<tr><td>"+venta.vehiculo.matricula+"</td><td>"+venta.vehiculo.marca+"</td><td>"+venta.vehiculo.modelo+"</td><td>"+venta.vehiculo.combustible+"</td>"; // Añade los datos básicos de vehículo
                if(venta.vehiculo instanceof Turismo){ // Añade los datos específicos de su tipo
                    tabla+="<td>"+(venta.vehiculo.abs?"Sí":"No")+"</td><td>"+(venta.vehiculo.descapotable?"Sí":"No")+"</td><td>"+venta.vehiculo.numPuertas+"</td><td>-</td>";
                }
                else{ // Deja vacías las celdas que no son de su tipo
                    tabla+="<td>-</td><td>-</td><td>-</td><td>"+venta.vehiculo.pendienteMax+"</td>";
                }
                tabla+="<td>"+compraCoche.fechaCompra.toLocaleDateString()+"</td><td>"+venta.fechaVenta.toLocaleDateString()+"</td><td>"+compraCoche.importe+"</td><td>"+venta.importe+"</td><td>"+(venta.importe - compraCoche.importe)+"</td></tr>";
           }
        });
        tabla += "</tbody></table></div>";
        return tabla;
    }

    listadoComprasperiodo(fechaInicio, fechaFin) {
        // Cabecera de la tabla
        let tabla = "<div class='table-responsive'><table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th><th>Fecha Compra</th><th>Importe Venta</th><th>Importe Compra</th><th>Fecha Venta</th><th>Beneficio</th></tr></thead><tbody>";
        // Línea de cada compra
        this.compras.forEach( (compra) => {
            if(compra.fechaCompra > fechaInicio && compra.fechaCompra < fechaFin){ // Comprueba si se compró en el periodo dado
                tabla += "<tr><td>"+compra.vehiculo.matricula+"</td><td>"+compra.vehiculo.marca+"</td><td>"+compra.vehiculo.modelo+"</td><td>"+compra.vehiculo.combustible+"</td>"; // Añade los datos básicos de vehículo
                if(compra.vehiculo instanceof Turismo){ // Añade los datos específicos de su tipo
                    tabla+="<td>"+(compra.vehiculo.abs?"Sí":"No")+"</td><td>"+(compra.vehiculo.descapotable?"Sí":"No")+"</td><td>"+compra.vehiculo.numPuertas+"</td><td>-</td>";
                }
                else{ // Deja vacías las celdas que no son de su tipo
                    tabla+="<td></td><td></td><td></td><td>"+compra.vehiculo.pendienteMax+"</td>";
                }
                tabla+="<td>"+compraCoche.fechaCompra.toLocaleDateString()+"</td><td>"+compra.fechaCompra.toLocaleDateString()+"</td><td>"+compraCoche.importe+"</td><td>"+venta.importe+"</td><td>"+(venta.importe - compraCoche.importe)+"</td></tr>";
           }
        });
        tabla += "</tbody></table></div>";
        return tabla;    }

    listadoVehiculos(tipo,combustible) {
        if(tipo=="turismo"){
            let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th></tr></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo instanceof Turismo && (vehiculo.combustible == combustible  || combustible == "todos")){
                    tabla+=vehiculo.toHtmlRow();
                }
            });
        }
        else if(tipo=="V4x4"){
            let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>Pendiente Máxima</th></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo instanceof V4x4 && (vehiculo.combustible == combustible || combustible == "todos")){
                    tabla+=vehiculo.toHtmlRow();
                }
            });
        }
        else{
            let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>Matricula</th><th scope='col'>Marca</th><th scope='col'>Modelo</th><th scope='col'>Combustible</th><th>ABS</th><th>Descapotable</th><th>Nº Puertas</th><th>Pendiente Máxima</th></tr></thead><tbody>";
            this.vehiculos.forEach( (vehiculo) => {
                if(vehiculo.combustible == combustible || combustible == "todos"){
                    tabla+=vehiculo.toHtmlRow();
                }
            });
        }
    }

    listadoClientes() {
        this.clientes.sort(function(cliente,otroCliente)
        {
            if (cliente.apellidos > otroCliente.apellidos) {return 1;}
            if (cliente.apellidos < otroCliente.apellidos) {return -1;}
            return 0;
        });

        let tabla = "<table class='table'><thead class='thead-dark'><tr><th scope='col'>NIF</th><th scope='col'>Nombre</th><th scope='col'>Apellidos</th><th scope='col'>Teléfono</th></tr></thead><tbody>";
        this.clientes.forEach( function(cliente) {
            tabla+=cliente.toHtmlRow();
        });
        tabla += "</tbody></table>";
        return tabla;
    }
}