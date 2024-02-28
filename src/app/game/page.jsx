
import { Suspense } from 'react';
import { GameComponent } from '@/components/gameCoponents';
import Spinner from '@/components/spinner';
import PopAdd from '@/components/popAdd';
export default function Page() {
      return (
        <Suspense fallback={<Spinner/>}>
        <GameComponent />
        <PopAdd/>
        </Suspense>
      )
}

