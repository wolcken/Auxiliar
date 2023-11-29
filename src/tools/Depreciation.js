export function Depreciation() {

    const fecha1 = new Date('12/31/2021');
    const ufv_inicial = 2.37376;

    const fecha2 = new Date('06/30/2022');
    const ufv_final = 2.38412;

    const valor_inicial = 171355.21;

    const porcentaje_depreciacion = 0.200;

    const valor_neto = (valor_inicial * (ufv_final / ufv_inicial)) - (((valor_inicial * (ufv_final / ufv_inicial)) * porcentaje_depreciacion) / 360) * ((Math.round((fecha2.getTime() - fecha1.getTime()) / (24 * 60 * 60 * 1000))) - 1);

    return ({
        valor_neto,
        ufv_final
    })

}