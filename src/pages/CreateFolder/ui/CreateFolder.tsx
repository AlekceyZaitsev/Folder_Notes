import React, { FC, useEffect, useState } from "react";
import { inputChangeEvents } from "@/interfaces/Event";
import { onChange } from "@/pages/CreateFolder/functions";
import { createNewFolder } from "@/pages/CreateFolder/functions/createNewFolder/CreateNewFolder";
import { ButtonAgree } from "@/utilites/styles/button/buttonAgree/ButtonAgree";
import { SectionCreateNewFolder } from "@/pages/CreateFolder/styles/SectionCreateNewFolder";
import { Container } from "@/styles/globalStyles";
import {Input} from "@/utilites/styles/input/Input";
import {TitleH2} from "@/utilites/styles/title/h2/h2Title";
import {FolderList} from "@/pages/CreateFolder/styles/List/FolderList";
import {FolderListItem} from "@/pages/CreateFolder/styles/List/ListItem";

const CreateFolder: FC = () => {
  const [storageFolder, setStorageFolder] = useState(
    JSON.parse(localStorage.getItem("list") || "false") || []
  );
  const [folderName, setFolderName] = useState("");
  const [folderDescription, setFolderDescription] = useState("")
  const [isChoiceFolder, setIsChoiceFolder] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(storageFolder));
  }, [storageFolder]);

  return (
    <Container>
      <SectionCreateNewFolder>
        <TitleH2>Создание новой папки</TitleH2>
        <Input placeholder={"Введите название папки"}
          onChange={(e: inputChangeEvents) => onChange(e, setFolderName)}
        />
        <Input placeholder={"Введите описание папки"}
               onChange={(e: inputChangeEvents) => onChange(e, setFolderDescription)}
        />
        <ButtonAgree
          onClick={() =>
            createNewFolder(folderName, folderDescription, isChoiceFolder, storageFolder, setStorageFolder)
          }
        >
          Добавить
        </ButtonAgree>
        <div>Количество папок: {storageFolder.length}</div>
      </SectionCreateNewFolder>
      <div>
        <FolderList>
          {storageFolder.map((items: any) => (
              <FolderListItem>
                <h3>{items.folder_name}</h3>
                <p>{items.folder_description}</p>
                <p>{items.day_created}/{items.month_created}/{items.year_created}</p>
                <p></p>
                <button>Подробнее</button>
                <button>Удалить папку</button>
              </FolderListItem>
          ))}
        </FolderList>
      </div>
    </Container>
  );
};

export default CreateFolder;
