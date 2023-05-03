export interface ISeatCreateProps {
  widthNumber: number;
  heightNumber: number;
}

export const SeatCreate = (props: ISeatCreateProps) => {
  return <div>{props.widthNumber + " " + props.heightNumber}</div>;
};
