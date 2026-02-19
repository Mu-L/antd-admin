import { message } from 'antd'

const onErrorHandler = {
  onError(e, a) {
    e.preventDefault()
    if (e.message) {
      message.error(e.message)
    } else {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}

export default onErrorHandler
