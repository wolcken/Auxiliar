import apiObject from "../api/DBfirestore";

function ListAssets(categoria) {
    const assets = apiObject.useAssets(categoria);
    const listAsset = [];
    assets.map((asset) => (
        listAsset.push({
            value: asset.id,
            label: asset.Codigo
        })
    ));
    return {
        listAsset,
        assets
    }
}

export default ListAssets;