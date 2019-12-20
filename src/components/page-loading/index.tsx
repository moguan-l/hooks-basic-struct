import React from 'react'
import { Button, ActivityIndicator } from 'antd-mobile'
import './index.scss'

export default function PageLoading(props: LoadableExport.LoadingComponentProps): JSX.Element {
  return (
    <div className="page-loading">
      {props.error ? (
        <>
          <p className="message">{props.error}</p>
          <Button type="primary" onClick={props.retry}>
            重试
          </Button>
        </>
      ) : props.timedOut ? (
        <>
          <p className="message">请求超时</p>
          <Button type="primary" onClick={props.retry}>
            重试
          </Button>
        </>
      ) : props.pastDelay ? (
        <ActivityIndicator />
      ) : null}
    </div>
  )
}
