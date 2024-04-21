import React,{Suspense,lazy} from 'react'
import ErrorBoundary from './ErrorBoundary'
const Home = lazy(()=>import('./Home'))
const About=lazy(()=>import('./About'))


const Ques1 = () => {
  return (
    <ErrorBoundary fallback="Error">
    <Suspense fallback={<div>Loading...</div>}>
    <Home/>
    <About/>
    </Suspense>
    </ErrorBoundary>
  )
}

export default Ques1