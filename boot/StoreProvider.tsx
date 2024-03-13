import React, { createContext, PropsWithChildren, useContext } from "react"
import { Store } from "./config.store"

export const StoreContext = createContext<Store>({} as Store)

export interface StoreProviderProps extends PropsWithChildren<any> {
    store: Store
}

export function StoreProvider({ children, store }: StoreProviderProps) {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (): Store => {
    return useContext(StoreContext)
}
