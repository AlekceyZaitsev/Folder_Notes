const date = new Date()

export const createNewFolder = (nameFolder: string, storage: any, changeStorage: any) => {

    const createFolder = {
        id: Date.now(),
        folder_name: nameFolder,
        isChoice: false,
        day_created: date.getUTCDay(),
        month_created: date.getUTCMonth() + 1,
        year_created: date.getFullYear(),
    }

    const changed = changeStorage([...storage, createFolder])
}