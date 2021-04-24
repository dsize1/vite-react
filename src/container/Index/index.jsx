import React, { useEffect, useMemo } from 'react'
import { Button } from 'antd'
import { get } from '@/utils'

export default function Index() {
  const mode = useMemo(() => {
    return import.meta.env && import.meta.env.MODE 
  }, [])
  useEffect(() => {
    get('/index-infos').then(() => {

    })
  }, [])
  return <div>
    <p>{`import.meta.env: ${mode}`}</p>
    <Button type='primary'>Index</Button>
  </div>
}