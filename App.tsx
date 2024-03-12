import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Index from './app/route'
import { Home } from './app/pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

type Props = {}
const queryClient = new QueryClient()

const App = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={{flex: 1}}>
    <Index />
    {/* <Home /> */}
  </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default App