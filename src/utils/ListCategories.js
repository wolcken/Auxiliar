import apiObject from "../api/DBfirestore";

function ListCategories() {
    const categories = apiObject.useCategories();
    const listCategory = [];
    categories.map((asset) => (
        listCategory.push({
            value: asset.Name,
            label: asset.Name
        })
    ));
    return listCategory
}

export default ListCategories;