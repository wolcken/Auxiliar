import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/images/cecasem.png';

export function DepreciationPDF(assets, categoria) {

    const date = new Date();

    const doc = new jsPDF({
        orientation: 'landscape'
    });

    //Encabezado del Documento
    doc.addImage(logo, 'png', 10, 10, 50, 10)
    doc.setFontSize(8);
    doc.text(`${date}`, 210, 15);
    doc.setFontSize(14);
    doc.text('Activos Fijos - Depreciacion', 130, 30);
    doc.line(120, 35, 195, 35, 'F');
    doc.text(`${categoria}`, 125, 45);

    //Tabla de Activos
    const columns = ['#', 'Codigo', 'SubCategoria', 'Fecha Inicial', 'UFV Inicial', 'Valor Inicial', 'Fecha Final', 'UFV Final', 'Valor Neto'];
    const data = assets

    doc.autoTable({
        startY: 50,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save(`Depreciacion ${categoria}`);
}