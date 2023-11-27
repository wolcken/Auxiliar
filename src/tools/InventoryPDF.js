import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export function InventoryPDF(assets) {
    const doc = new jsPDF();

    //Encabezado de la Factura
    doc.text('Inventario', 78, 20);
    doc.line(80, 25, 135, 25, 'F');

    //Tabla de Productos
    const columns = ['#', 'Categoria', 'SubCategoria', 'Unidades'];
    const data = assets

    doc.autoTable({
        startY: 30,
        theme: 'striped',
        head: [columns],
        body: data,
    })

    //Guardar PDF con nombre especifico
    doc.save('Inventario')
}