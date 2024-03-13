import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Index from './app/route';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {supabase} from './supabase';
import {Session} from '@supabase/supabase-js';
import Auth from './app/screen/Auth/Auth';
import {Provider} from 'mobx-react';
import {StoreProvider} from './boot/StoreProvider';
import config from './boot/config.store';

type Props = {};
const queryClient = new QueryClient();

const App = (props: Props) => {
  const [session, setSession] = useState<Session | null>(null);
  const stores = config();

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <StoreProvider store={stores}>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{flex: 1}}>
            {session ? <Index /> : <Auth />}
          </GestureHandlerRootView>
        </QueryClientProvider>
      </Provider>
    </StoreProvider>
  );
};

export default App;
