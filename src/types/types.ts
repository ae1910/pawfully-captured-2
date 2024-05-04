export type petType = {
    title: string
    description: string
    url: string
    created?: string
}
  
export interface cardProps extends petType {
    id: number
    onOpen: (title: string, description: string, image: string) => void
    handleSave: () => void
    handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: boolean
    handleDownload: (image: string, title: string) => void
    isAFave: boolean
}

export interface modalProps extends petType {
    open: boolean
    onClose: () => void
    handleDownload: (image: string, title: string) => void
}

export type FaveType = {
    faves: petType[]
    addFave: (pet: petType) => void
}

export interface functionType extends FaveType {
    openModal: boolean
    handleOpen: (title: string, description: string, url: string) => void
    handleClose: () => void
    handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
    info: petType
    handleDownload: (image: string, filename: string) => void
    list: petType[]
    isCheck: string[]
    setIsCheckState: React.Dispatch<React.SetStateAction<string[]>>
    isCheckAll: boolean
    setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>
}

export interface faveFunctionType extends functionType {
    setFaves: React.Dispatch<React.SetStateAction<petType[]>>
}

export interface homeFunctionType extends functionType {
    setFaves: React.Dispatch<React.SetStateAction<petType[]>>
    setList: React.Dispatch<React.SetStateAction<petType[]>>
}