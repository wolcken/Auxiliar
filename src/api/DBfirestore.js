import { useEffect, useState } from 'react';
import appFirestore from '../Credenciales';
import { collection, deleteDoc, doc, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';

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
            Details: String(asset.Details),
            Valor_Inicial: Number(asset.Valor_Inicial),
            Valor_Depreciado: Number(asset.Valor_Depreciado),
            Estado: Number(asset.Estado),
            Activo: Boolean(asset.Activo)
        });
        alert(`${categoria} creada con exito`);
    } catch (error) {
        console.log(error);
    }
}
// Read Assets
const useAssets = (categoria) => {
    const [asset, setAsset] = useState([]);
    const getAsset = async () => {
        try {
            const q = collection(db, `Activos/Externo/${categoria}`)
            onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
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
            Details: String(asset.Details),
            Valor_Inicial: Number(asset.Valor_Inicial),
            Valor_Depreciado: Number(asset.Valor_Depreciado),
            Estado: Number(asset.Estado),
            Activo: Boolean(asset.Activo)
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

// Read Assets
const useAux = (categoria) => {
    const [asset, setAsset] = useState([]);
    const getAsset = async () => {
        try {
            const q = collection(db, `Activos/Externo/Monitores`)
            onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
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

const apiObject = {
    useCategories,
    createAssets,
    useAssets,
    updateAsset,
    deleteAsset,
    useAux
}

export default apiObject;