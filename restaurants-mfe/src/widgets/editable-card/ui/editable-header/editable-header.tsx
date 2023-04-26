import { Button } from 'shared/ui'
import { memo } from 'react'
import { type IEditableCardEditableProps } from '../../types'

interface Props {
    editable: IEditableCardEditableProps
}

export const EditableHeader = memo((props: Props) => {
    const { editable } = props

    return (<div>
        <h4>
            {editable.title}
        </h4>
        {
            editable.edit &&
                    !editable.editable &&
                    <Button onClick={editable.edit.onEdit}>
                        {editable.edit.btnText}
                    </Button>
        }
        {
            editable.editable && <div>
                {
                    editable.cancel &&
                    <Button onClick={editable.cancel.onCancel}>
                        {editable.cancel.btnText}
                    </Button>
                }
                {
                    editable.save &&
                    <Button onClick={editable.save.onSave}>
                        {editable.save.btnText}
                    </Button>
                }
            </div>
        }

    </div>)
})
