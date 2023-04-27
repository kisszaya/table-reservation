import { TablesPreviewList } from "entities/table";
import { ReservesTimeControl } from "features/reserves-filter";

export const BookingRightPanel = () => {
  return (
    <>
      <TablesPreviewList />
      <ReservesTimeControl />
    </>
  );
};
