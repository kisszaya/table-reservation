import { MainCanvas } from "../ui/main";

import { CanvasProvider } from "entities/canvas";

const Scheme = () => {
  return (
    <CanvasProvider>
      <MainCanvas />
    </CanvasProvider>
  );
};

export default Scheme;
