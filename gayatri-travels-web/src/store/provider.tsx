'use client'
import { Provider } from 'react-redux'
import store from './index.js'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
}

export default Providers
