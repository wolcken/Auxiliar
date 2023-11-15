import apiObject from "../api/DBfirestore";

function ListAssets(categoria) {
    const assets = apiObject.useAssets(categoria);
    const listAsset = [];
    assets.map((asset) => (
        listAsset.push({
            value: asset.id,
            label: asset.Details
        })
    ));
    return listAsset
}

export default ListAssets;