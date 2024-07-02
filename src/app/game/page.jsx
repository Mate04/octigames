"use client"
import { GameComponent } from '../../components/gameCoponents';
import { Suspense } from 'react'
export default function Page() {
  return (
    <Suspense>
      <GameComponent />
    </Suspense>
  )
}

