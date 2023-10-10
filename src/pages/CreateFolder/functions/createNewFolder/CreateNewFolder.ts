const date = new Date()

export const createNewFolder = (nameFolder: string, descriptionFolder: string, choiceFolder: boolean, storage: any, changeStorage: any) => {

    const createFolder = {
        id: Date.now(),
        folder_name: nameFolder,
        folder_description: descriptionFolder,
        isChoice: choiceFolder,
        day_created: date.getUTCDate(),
        month_created: date.getUTCMonth() + 1,
        year_created: date.getFullYear(),
    }

    changeStorage([...storage, createFolder])
}