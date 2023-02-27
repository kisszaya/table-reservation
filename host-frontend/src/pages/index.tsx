import dynamic from 'next/dynamic';
import { Suspense } from 'react';

//@ts-ignore
const SampleComponent = dynamic(() => import('tableConstructor/Scheme'), {
    ssr: false,
});

export default function Home() {

    return (
        <>
            <Suspense fallback={<>Loading…</>}>
                <h1>Home</h1>
                <SampleComponent/>
            </Suspense>
        </>
    )
}
