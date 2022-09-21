/* Creacion de class Productos */
class Productd {
    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.float = item.float;
        this.status = item.status;
        this.img = item.img;
    }
}
/* Inicialización de array de productos */
let arrayProducts = [
    {id: 1,name: "AK-47 | AQUAMARINA", price: 3200, float: 0.429, status: "Algo Desgastado", img: "ak aquamarina.png", quantity: 1},
    {id: 2,name: "AK-47 | PIZARRA", price: 1000, float: 0.093, status: "Casi Nuevo", img: "ak pizarra.png" , quantity: 1},
    {id: 3,name: "AWP | WILDFIRE", price: 10500, float: 0.221, status: "Algo desgastado", img: "awp wildfire.png" , quantity: 1},
    {id: 4,name: "AK-47 | FRENTE BRUMOSO", price: 2000, float: 0.527, status: "Deplorable", img: "ak frente brumoso.png" , quantity: 1},
    {id: 5,name: "M4A4 | EMPERADOR", price: 2800, float: 0.217, status: "Algo desgastado", img: "m4a4 emperador.png" , quantity: 1},
    {id: 6,name: "AWP | Gatetes y Perretes", price: 300, float: 0.385, status: "Algo desgastado", img: "awp gatetes y perretes.png" , quantity: 1}
];





