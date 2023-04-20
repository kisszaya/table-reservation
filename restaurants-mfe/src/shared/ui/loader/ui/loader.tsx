import { type FC } from 'react'
import './loader.scss'

interface Props {

}

export const Loader: FC<Props> = (props) => {
    return (
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
