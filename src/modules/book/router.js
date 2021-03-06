/**
 * Created by 熊超超 on 2017/8/4.
 */

const Index = () => ({component: import(/* webpackChunkName: "book" */ './components/Index')})
const HomePage = () => ({component: import(/* webpackChunkName: "book" */ './components/HomePage')})
const FlightList = () => ({component: import(/* webpackChunkName: "book" */ './components/FlightList')})

export default [{
  path: '/book',
  alias: '/',
  component: Index,
  children: [
    {
      path: '',
      meta: {isHome: true},
      component: HomePage
    },
    {
      path: '/book/flightList',
      component: FlightList
    }
  ]
}]
