import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { ListView, PullToRefresh } from 'antd-mobile'
import { getNews } from '@/services/laboratory'
import './index.scss'

type newsType = {
  path: string
  image: string
  title: string
  passtime: string
}

export default function News(): JSX.Element {
  const [newsList, setNewsList] = useState([])
  const page = useRef(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const dataSource = useMemo(
    () => new ListView.DataSource({ rowHasChanged: (r1: newsType, r2: newsType): boolean => r1 !== r2 }),
    []
  )

  const pull: () => void = useCallback(() => {
    if (!loading && !refreshing) {
      setLoading(true)
      getNews({
        page: page.current + 1,
        count: 10,
      })
        .then(({ result }) => {
          if (result && result.length) {
            setNewsList(newsList.concat(result))
            page.current += 1
          }
        })
        .finally(() => setLoading(false))
    }
  }, [loading, refreshing, newsList])

  const refresh: () => void = useCallback(() => {
    if (!loading && !refreshing) {
      setRefreshing(true)
      getNews({
        page: 1,
        count: 10,
      })
        .then(({ result }) => {
          if (result && result.length) {
            setNewsList(result)
            page.current = 1
          }
        })
        .finally(() => setRefreshing(false))
    }
  }, [loading, refreshing])

  useEffect(() => {
    pull()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderRow: (item: newsType) => JSX.Element = useCallback(item => {
    return (
      <div className="news-item" onClick={(): string => (window.location.href = item.path)}>
        <div className="news-item-content">
          <div className="title">{item.title}</div>
          <div className="time">{item.passtime}</div>
        </div>
        <img src={item.image} alt="" className="image" />
      </div>
    )
  }, [])

  const renderFooter: () => JSX.Element = useCallback(() => {
    return <div className="list-bottom">{loading ? '加载中' : '更多新闻'}</div>
  }, [loading])

  return (
    <ListView
      dataSource={dataSource.cloneWithRows(newsList)}
      renderRow={renderRow}
      className="news"
      onEndReachedThreshold={10}
      onEndReached={(): void => pull()}
      pullToRefresh={
        // PullToRefresh ts开发声明和文档没有对应 https://github.com/ant-design/ant-design-mobile/issues/3156
        <PullToRefresh
          getScrollContainer={(): null => null}
          direction="down"
          distanceToRefresh={window.devicePixelRatio * 25}
          refreshing={refreshing}
          onRefresh={refresh}
          damping={100}
          indicator={{
            activate: '释放刷新',
            deactivate: '下拉刷新',
            release: '正在刷新',
            finish: '刷新成功',
          }}
        />
      }
      scrollRenderAheadDistance={500}
      renderFooter={renderFooter}
    />
  )
}
