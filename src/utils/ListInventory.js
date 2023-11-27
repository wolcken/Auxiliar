import apiObject from "../api/DBfirestore";
import { Categories } from "./Categories";
import SubCategory from "./SubCategories";

const ListInventory = () => {

    const categories = Categories;
    const muebles = SubCategory.Muebles;
    const equipos = SubCategory.Equipos;
    const vehiculos = SubCategory.Vehiculos;

    const inventories = [];

    categories.forEach((category) => {
        if (category.value === 'Muebles') {
            muebles.forEach((mueble) => {
                inventories.push(apiObject.useInventary(category.value, mueble.label, category.label))
            });
        }
        if (category.value === 'Equipos') {
            equipos.forEach((equipo) => {
                inventories.push(apiObject.useInventary(category.value, equipo.label, category.label))
            });
        }
        if (category.value === 'Vehiculos') {
            vehiculos.forEach((vehiculo) => {
                inventories.push(apiObject.useInventary(category.value, vehiculo.label, category.label))
            });
        }
    });

    return (
        inventories
    )
}

export default ListInventory;
