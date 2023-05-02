export type ITimeInput = { hours: number; minutes: number } | null;

export interface ITimeInputRangeProps {
  disabled: boolean;
  firstInput: {
    value: ITimeInput;
    setValue: (value: ITimeInput) => void;
  };
  secondInput: {
    value: ITimeInput;
    setValue: (value: ITimeInput) => void;
  };
}
