import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/images/cecasem.png';

export function StatePDf(assets) {

    const date = new Date();

    const doc = new jsPDF();

    //Encabezado de la Factura
    doc.addImage(logo, 'png', 10, 10, 50, 10);
    doc.setFontSize(8);
    doc.text(`${date}`, 130, 15);
    doc.setFontSize(14);
    doc.text('Estado de Activos Fijos', 80, 30);
    doc.line(80, 35, 135, 35, 'F');

    //Tabla de Productos
    const columns = ['Categoria', 'SubCategoria', 'Codigo', 'Detalle', 'Estado'];
    const data = assets

    doc.autoTable({
        startY: 40,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save('Estado de Activos')
}