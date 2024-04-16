
import { Suspense } from 'react';
import { GameComponent } from '@/components/gameCoponents';
import Spinner from '@/components/spinner';
export default function Page() {
      return (
        <Suspense fallback={<Spinner/>}>
        <GameComponent />
        </Suspense>
      )
}

