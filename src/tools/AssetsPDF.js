import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export function AssetsPDF(assets, categoria) {
    const doc = new jsPDF();

    //Encabezado de la Factura
    doc.text('Activos Fijos', 90, 20);
    doc.line(80, 25, 135, 25, 'F');
    doc.text(`${categoria}`, 75, 35);

    //Tabla de Productos
    const columns = ['#', 'Codigo', 'Detalles', 'Valor Neto', 'Estado'];
    const data = assets

    doc.autoTable({
        startY: 40,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save(`Activos ${categoria}`);
}