import { FormEvent, useCallback, useMemo, useState } from "react";
import { Stack } from "@mantine/core";

import { TextInput } from "shared/ui";
import { IEditableInputsProps } from "../../types";
import { EDITABLE_INPUTS_FIELD_VARIANT } from "../../const";
import { EditableHeader } from "..";

export const EditableInputs = (props: IEditableInputsProps) => {
  const { edit, fields } = props;
  const [editable, setEditable] = useState(edit?.defaultIsEditable || false);

  const inputElements = useMemo(() => {
    const disabled = !editable;

    return (
      <>
        {fields.map((field, index) => {
          switch (field.variant) {
            case EDITABLE_INPUTS_FIELD_VARIANT.TEXT: {
              const { variant, ...otherProps } = field;
              return (
                <TextInput {...otherProps} disabled={disabled} key={index} />
              );
            }
          }
        })}
      </>
    );
  }, [editable, fields]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      edit?.onSave();
      setEditable(false);
    },
    [edit]
  );

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        {edit && (
          <EditableHeader
            setEditable={setEditable}
            editable={editable}
            title={edit.title}
            onCancel={edit.onCancel}
          />
        )}
        <Stack>{inputElements}</Stack>
      </Stack>
    </form>
  );
};
