import apiObject from "../api/DBfirestore";
import { Categories } from "./Categories";

const ListRetireds = () => {

    const categories = Categories;

    const reportInventory = [];

    categories.forEach((category) => {
        if (category.value === 'Muebles') {
            reportInventory.push(apiObject.useRetireds(category.value))
        }
        if (category.value === 'Equipos') {
            reportInventory.push(apiObject.useRetireds(category.value))
        }
        if (category.value === 'Vehiculos') {
            reportInventory.push(apiObject.useRetireds(category.value))
        }
    });

    return (
        reportInventory
    )

}

export default ListRetireds;