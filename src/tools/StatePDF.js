import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export function StatePDf(assets) {
    const doc = new jsPDF();

    //Encabezado de la Factura
    doc.text('Estado de Activos Fijos', 78, 20);
    doc.line(80, 25, 135, 25, 'F');

    //Tabla de Productos
    const columns = ['Categoria', 'SubCategoria', 'Codigo', 'Detalle', 'Estado'];
    const data = assets

    doc.autoTable({
        startY: 30,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save('Estado de Activos')
}