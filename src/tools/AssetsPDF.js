import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/images/cecasem.png';

export function AssetsPDF(assets, categoria) {

    const date = new Date();

    const doc = new jsPDF();

    //Encabezado del Documento
    doc.addImage(logo, 'png', 10, 10, 50, 10);
    doc.setFontSize(8);
    doc.text(`${date}`, 130, 15);
    doc.setFontSize(14);
    doc.text('Activos Fijos', 90, 30);
    doc.line(80, 35, 135, 35, 'F');
    doc.text(`${categoria}`, 85, 45);

    //Tabla de Activos
    const columns = ['#', 'Codigo', 'Detalles', 'Valor Neto', 'Estado'];
    const data = assets

    doc.autoTable({
        startY: 50,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save(`Activos ${categoria}`);
}