'use client'
import { ProgressCircle } from '@tremor/react'
import React from 'react'

type Props = {
  value: number
  description: React.ReactNode
}

const CircleProgress = ({ description, value = 0 }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <ProgressCircle
        showAnimation={true}
        value={value}
        radius={70}
        strokeWidth={20}
      >
        {value}%
      </ProgressCircle>
      <div>
        <b>Closing Rate</b>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default CircleProgress
