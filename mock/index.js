/**
 * Created by 熊超超 on 2017/12/4.
 */
// mock的写法参照 http://mockjs.com
import Mock from 'mockjs'

Mock.mock('/login', option => {
  const user = JSON.parse(option.body).user
  if (user.userName === 'cc' && user.passWord === 'e10adc3949ba59abbe56e057f20f883e') {
    return {
      success: true,
      data: {
        user: {
          'id': '@integer(1, 10)',
          'userName': user.userName
        }
      }
    }
  } else {
    return {
      success: false,
      code: 402,
      message: '用户名密码不匹配'
    }
  }
})

Mock.mock('/fly/list', {
  success: true,
  data: {
    'list|1-10': [{
      'id|+1': 1,
      'orgName': '@city',
      'dstName': '@city',
      'orgDate': '@date',
      'orgTime': '@time("HH:mm")',
      'dstDate': '@date',
      'dstTime': '@time("HH:mm")',
      'duration': '@integer(1, 24)时@integer(1, 60)分',
      'flyNo': '@string("upper", 2)@integer(100, 9999)',
      'price': '@integer(100, 99999)',
      'plane': '@character("upper")@integer(100, 9999)',
      'cabin': '@pick(["C", "D", "Z", "I", "R", "J", "Y", "B", "H", "K", "L", "M", "Q", "X", "U", "E", "T", "N", "T1", "N1", "T2", "N2", "W", "A", "P", "V", "G", "O", "S"])'
    }]
  }
})

Mock.mock('/message/list', {
  success: true,
  data: {
    'list|1-10': [{
      'id|+1': 1,
      'title': '@ctitle(5, 20)',
      'describe': '@cparagraph()',
      'time': '@datetime',
      'img': '@pick(["girl", "boy"])'
    }]
  }
})