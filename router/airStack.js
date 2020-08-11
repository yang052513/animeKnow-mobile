import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Air from '../components/Air'
import SubjectDetail from '../components/shared/SubjectDetail'

const screens = {
  Air: {
    screen: Air,
    navigationOptions: {
      title: '每日放送',
    },
  },
  SubjectDetail: {
    screen: SubjectDetail,
    navigationOptions: {
      title: '详细信息',
    },
  },
}

const RouteStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#4a4a4a',
    headerStyle: { backgroundColor: '#03a9f4', height: 60 },
  },
})

export default createAppContainer(RouteStack)
