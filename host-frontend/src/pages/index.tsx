import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "shared/ui";

//@ts-ignore
// const SampleComponent = dynamic(() => import('tableConstructor/Scheme'), {
//     ssr: false,
// });

export default function Home() {
  return (
    <>
      <Suspense fallback={<>Loading…</>}>
        <h1>Home</h1>
        <Button>Button</Button>
        {/*<SampleComponent/>*/}
      </Suspense>
    </>
  );
}
