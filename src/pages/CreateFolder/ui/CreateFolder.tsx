import React, {FC, useEffect, useState} from 'react';
import {onChange} from "../functions";
import {inputChangeEvents} from "../../../interfaces/Event";
import {createNewFolder} from "../functions/createNewFolder/CreateNewFolder";


const CreateFolder: FC = () => {
    const [storageFolder, setStorageFolder] = useState(
        JSON.parse(localStorage.getItem("list") || "false") || []
    );
    const [folderName, setFolderName] = useState('')


    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(storageFolder))
    }, [storageFolder])

    return (
        <div>
            <input onChange={(e: inputChangeEvents) => onChange(e, setFolderName)}/>
            <button onClick={() => createNewFolder(folderName, storageFolder, setStorageFolder)}>Добавить</button>
            <div>
                {storageFolder.map((items: any) => <p>{items.folder_name}</p>)}
            </div>
        </div>
    );
};

export default CreateFolder;