import { makeAutoObservable } from "mobx"
import { create } from 'zustand'
import { IUser } from "../interface/auth.interface"
import { createJSONStorage, persist } from "zustand/middleware"
import { clientStorage } from "../../boot/middleware"

type IUserStore = {
    user: any
    action: {
      setUser: (user: any) => void
    }
  }
  
  
  type IAuthStore = {
    confirmation: any
    action: {
      setConfirmation: (user: any) => void
    }
  }


export type TAuthStore = AuthStore

export class AuthStore {
    constructor() {
        makeAutoObservable(this)
    }

  user: IUser | null = null
  setUser = (user: IUser | null) => {
    this.user = user
  }

}

export const useUser = create(persist<IUserStore>(
    (set) => ({
      user: null,
      action: {
        setUser: (user: any) => set(() => ({ user })),
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => clientStorage)
    },
  ),
  )

// export async function fetchUser(uid: string) {
//     const { setUser } = useUser(s => s.action)
  
//     const userDoc = await usersRef().doc(uid).get()
//     setUser(pushToObject(userDoc))
  
//     return userDoc
// }