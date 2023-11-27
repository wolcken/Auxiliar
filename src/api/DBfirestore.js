import { useEffect, useState } from 'react';
import appFirestore from '../Credenciales';
import { collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';

const db = getFirestore(appFirestore);

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
    const assetRef = collection(db, `Activos/Externo/${categoria}`);
    try {
        await setDoc(doc(assetRef), {
            SubCategory: String(asset.SubCategory),
            Codigo: Number(asset.Codigo),
            Details: String(asset.Details),
            Image: String(asset.Image),
            Valor_Inicial: Number(asset.Valor_Inicial),
            Valor_Depreciado: Number(asset.Valor_Inicial),
            Estado: Number(asset.Estado),
            Activo: Boolean(asset.Activo),
            Asignado: String(asset.Asignado)
        });
        alert(`${categoria} creada con exito`);
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

const apiObject = {
    useCategories,
    createAssets,
    useAssets,
    updateAsset,
    deleteAsset,
    useInventary,
    updateAsignacion
}

export default apiObject;