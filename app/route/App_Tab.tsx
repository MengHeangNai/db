import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from '../screen/Todo/Todo';
import HomeContainer from '../screen/Home/HomeContainer';
import TabBar, { TAB_DATA } from './TabBar';
import InfoContainer from '../screen/Info/InfoContainer';
import ListInfo from '../screen/ListInfo';
import Roots from '../screen/Roots';
import ListMedai from '../screen/Media/ListMedai';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <TabBar {...props}/>}
    >
      <Tab.Screen name={TAB_DATA.STUDENT.name} component={Todo} />
      <Tab.Screen name={TAB_DATA.EMPLOYEE.name} component={HomeContainer} />
      <Tab.Screen name={TAB_DATA.INFO.name} component={InfoContainer} />
      <Tab.Screen name={TAB_DATA.MEDIA.name} component={ListMedai} />
      <Tab.Screen name={TAB_DATA.LIST_INFO.name} component={ListInfo} />
      <Tab.Screen name={TAB_DATA.ADD.name} component={Roots} />

    </Tab.Navigator>
  );
}

export default MyTabs;