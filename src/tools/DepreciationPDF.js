import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export function DepreciationPDF(assets, categoria) {
    const doc = new jsPDF();

    //Encabezado de la Factura
    doc.text('Activos Fijos - Depreciacion', 70, 20);
    doc.line(80, 25, 135, 25, 'F');
    doc.text(`${categoria}`, 75, 35);

    //Tabla de Productos
    const columns = ['#', 'Codigo', 'Fecha Inicial', 'UFV Inicial', 'Valor Inicial', 'Fecha Final', 'UFV Final', 'Valor Neto'];
    const data = assets

    doc.autoTable({
        startY: 40,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save(`Depreciacion ${categoria}`);
}