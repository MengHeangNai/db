import { AuthStore } from "../app/store/auth.store"

function config() {
  return {
    auth: new AuthStore(),
  }
}

export type Store = ReturnType<typeof config>
export default config
