import React, {FC, useState} from 'react';
import {inputElementChange} from "../functions/onChange/inputElementChange"

const CreateFolder: FC = () => {
    const [folderName, setFolderName] = useState('')

    return (
        <input onChange={(e) => inputElementChange(e, setFolderName)}/>
    );
};

export default CreateFolder;