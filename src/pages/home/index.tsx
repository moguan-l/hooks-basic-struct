import React from 'react'
import { useHistory } from 'react-router-dom'
import { List } from 'antd-mobile'
import './index.scss'

interface LinkItem {
  name: string
  link: string
}

export default function Home(): JSX.Element {
  const history = useHistory()
  const laboratoryList: LinkItem[] = [
    {
      name: 'redux-progress',
      link: '/laboratory/progress',
    },
    {
      name: 'news',
      link: '/laboratory/news',
    },
  ]

  const renderItem: (item: LinkItem, index: number) => JSX.Element = (item, index) => {
    return (
      <List.Item key={index} arrow="horizontal" onClick={(): void => history.push(item.link)}>
        {item.name}
      </List.Item>
    )
  }

  return <List renderHeader={(): string => 'Laboratory'}>{laboratoryList.map(renderItem)}</List>
}
