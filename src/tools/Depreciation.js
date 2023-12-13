import apiObject from "../api/DBfirestore";

export function Depreciation(dia, mes, año, ufv, assets) {

    const fecha_final = new Date(`${mes}/${dia}/${año}`);
    const fecha_almacenaje = `${mes}/${dia}/${año}`;
    const ufv_final = Number(ufv);

    const AssetsTotal = assets;

    AssetsTotal.forEach((assets) => {
        assets.forEach((asset) => {

            let fecha_inicial = new Date(`${asset.Mes_I}/${asset.Dia_I}/${asset.Año_I}`);
            let ufv_inicial = asset.UFV_Inicial;
            let valor_inicial = asset.Valor_Inicial;
            let porcentaje_depreciacion = asset.Coefficient;

            let formula = (valor_inicial * (ufv_final / ufv_inicial)) - (((valor_inicial * (ufv_final / ufv_inicial)) * porcentaje_depreciacion) / 360) * ((Math.round((fecha_final.getTime() - fecha_inicial.getTime()) / (24 * 60 * 60 * 1000))) - 1);

            let valor_depreciado = formula.toFixed(2);

            apiObject.updateDepreciation(asset.Tipo, asset.id, fecha_almacenaje, ufv_final, valor_depreciado)
        });
        alert('Depreciado con exito');
    });

}