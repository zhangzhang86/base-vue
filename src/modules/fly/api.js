/**
 * Created by 熊超超 on 2017/8/5.
 */
import conn from '../../global/conn'

export default {
  getFly: params => {
    return conn.post('/fly/list', params)
      .then(data => ({data})).catch(err => ({err}))
  }
}
