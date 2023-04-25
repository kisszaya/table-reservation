
export type INavbarLinks = Array<{
    title: string
    route: string
}>

export interface INavbarButton {
    title: string
    onClick: () => void
}
