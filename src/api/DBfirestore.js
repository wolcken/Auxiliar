import { useEffect, useState } from 'react';
import { getFirestore, collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { app } from '../Credenciales';

const db = getFirestore(app);

// Read Assets
const useCategories = () => {
    const [category, setCategory] = useState([]);
    const getCategories = async () => {
        try {
            const q = collection(db, 'Categorias')
            onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setCategory(docs)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCategories();
    }, []);
    return category
}

// Create Assets
const createAssets = async (asset, categoria) => {
    const assetRef = collection(db, `Activos/Externo/${categoria.value}`);
    try {
        await setDoc(doc(assetRef), {
            Tipo: String(categoria.value),
            Category: String(categoria.label),
            SubCategory: String(asset.SubCategory),
            Codigo: Number(asset.Codigo),
            Details: String(asset.Details),
            Image: String(asset.Image),
            Fecha_Inicial: String(`${asset.Mes}/${asset.Dia}/${asset.Año}`),
            UFV_Inicial: Number(asset.Ufv),
            Valor_Inicial: Number(asset.Valor),
            Fecha_Final: String(''),
            UFV_Final: Number(''),
            Valor_Depreciado: Number(asset.Valor),
            Estado: Number(asset.Estado),
            Activo: Boolean(true),
            Asignado: String(''),
            Life: Number(categoria.life),
            Coefficient: Number(categoria.coefficient)
        });
        alert(`${categoria.value} creada con exito`);
    } catch (error) {
        console.log(error);
    }
}
// Read Assets
const useAssets = (categoria, label) => {
    const [asset, setAsset] = useState([]);
    const getAsset = async () => {
        try {
            const q = collection(db, `Activos/Externo/${categoria}`)
            onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id, Categoria: label })
                })
                setAsset(docs)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAsset();
        // eslint-disable-next-line
    }, []);
    return asset
}
//Update Asset
const updateAsset = async (id, asset, categoria) => {
    const assetRef = doc(db, `Activos/Externo/${categoria}`, id);
    try {
        await updateDoc(assetRef, {
            SubCategory: String(asset.SubCategory),
            Codigo: Number(asset.Codigo),
            Details: String(asset.Details),
            Image: String(asset.Image),
            Valor_Inicial: Number(asset.Valor_Inicial),
            Valor_Depreciado: Number(asset.Valor_Depreciado),
            Estado: Number(asset.Estado),
            Activo: Boolean(asset.Activo),
            Asignado: String(asset.Asignado)
        })
        alert('Modificado con exito')
    } catch (error) {
        console.log(error)
    }
}
//Delete Asset
const deleteAsset = async (categoria, id) => {
    try {
        await deleteDoc(doc(db, `Activos/Externo/${categoria}`, id))
        alert('Eliminado con exito')
    } catch (error) {
        console.log(error)
    }
}

const useInventary = (categoria, subCategoria, categoriaLabel) => {
    const [article, setArticle] = useState(null)
    const getInventary = async () => {
        const q = query(collection(db, `Activos/Externo/${categoria}`), where("SubCategory", "==", subCategoria));
        const querySnapshot = await getDocs(q);
        setArticle({
            Category: categoriaLabel,
            SubCategory: subCategoria,
            Units: querySnapshot.docs.length
        });
    }
    useEffect(() => {
        getInventary();
        // eslint-disable-next-line
    }, []);
    return article
}

//Update Asignacion
const updateAsignacion = async (categoria, id, asignado) => {

    const assetRef = doc(db, `Activos/Externo/${categoria}`, id);

    try {
        await updateDoc(assetRef, {
            Asignado: String(asignado)
        })
        alert('Asignado con exito')
    } catch (error) {
        console.log(error)
    }
}

//Update Depreciation and UFV
const updateDepreciation = async (categoria, id, fecha, ufv, valor) => {

    const assetRef = doc(db, `Activos/Externo/${categoria}`, id);

    try {
        await updateDoc(assetRef, {
            Fecha_Final: String(fecha),
            UFV_Final: Number(ufv),
            Valor_Depreciado: Number(valor)
        })
    } catch (error) {
        console.log(error)
    }
}

const apiObject = {
    useCategories,
    createAssets,
    useAssets,
    updateAsset,
    deleteAsset,
    useInventary,
    updateAsignacion,
    updateDepreciation
}

export default apiObject;