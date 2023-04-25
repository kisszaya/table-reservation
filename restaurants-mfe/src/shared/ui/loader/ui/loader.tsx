import { memo } from 'react'
import './loader.scss'

interface Props {

}

export const Loader = memo((props: Props) => {
    return (
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    )
})
