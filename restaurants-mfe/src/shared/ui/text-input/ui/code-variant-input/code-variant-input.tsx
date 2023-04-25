import { type ChangeEvent, type FC, useEffect, useRef, useState } from 'react'

import styles from './code-variant-input.module.scss'

import { type ITextInputVariantProps } from '../../types'

export const CodeVariantInput: FC<ITextInputVariantProps> = (props) => {
    const { autofocus = false, placeholder, onChange, ...otherProps } = props
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autofocus) {
            inputRef?.current.focus()
            setIsFocused(true)
        }
    }, [autofocus])

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event)
        setCaretPosition(event.target.value.length)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={styles.container}>
            <p className={styles.placeholder}>{`${placeholder}>`}</p>
            <div className={styles['caret-container']}>
                <input
                    className={styles.input}
                    ref={inputRef}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {
                    isFocused && <div
                        className={styles.caret}
                        style={{
                            left: `${caretPosition * 9}px`
                        }}
                    />
                }
            </div>
        </div>
    )
}
