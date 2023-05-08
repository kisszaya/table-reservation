import { Button, useModal } from 'shared/ui'
import { CreateReserveModal } from '..'

export const CreateReserveButton = () => {
    const { open } = useModal()

    return <Button onClick={() => { open(<CreateReserveModal/>) }}>
        Забронировать столик
    </Button>
}
