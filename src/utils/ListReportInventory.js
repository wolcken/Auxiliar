import { Categories } from './Categories';
import apiObject from '../api/DBfirestore';

const ListReportInventory = () => {

    const categories = Categories;

    const reportInventory = [];

    categories.forEach((category) => {
        if (category.value === 'Muebles') {
            reportInventory.push(apiObject.useAssets(category.value, category.label))
        }
        if (category.value === 'Equipos') {
            reportInventory.push(apiObject.useAssets(category.value, category.label))
        }
        if (category.value === 'Vehiculos') {
            reportInventory.push(apiObject.useAssets(category.value, category.label))
        }
    });

    return (
        reportInventory
    )
}

export default ListReportInventory