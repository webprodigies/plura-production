'use client'
import { DonutChart } from '@tremor/react'
import React from 'react'

type Props = { data: any }

const SubaccountFunnelChart = ({ data }: Props) => {
  return (
    <div className="h-fit flex transition-all items-start">
      <DonutChart
        className="h-40 w-40"
        data={data}
        category="totalFunnelVisits"
        index="name"
        colors={['blue-400', 'primary', 'blue-600', 'blue-700', 'blue-800']}
        showAnimation={true}
        customTooltip={customTooltip}
        variant="pie"
      />
    </div>
  )
}

export default SubaccountFunnelChart

const customTooltip = ({
  payload,
  active,
}: {
  payload: any
  active: boolean
}) => {
  if (!active || !payload) return null

  const categoryPayload = payload?.[0]
  if (!categoryPayload) return null
  return (
    <div className="ml-[100px] dark:text-white text-black w-fit dark:bg-muted/60 backdrop-blur-md bg-background/60 !rounded-lg p-2 shadow-2xl">
      <div className="flex items-center flex-1 space-x-2.5">
        <div
          className={`w-5 h-5 rounded-full  bg-${categoryPayload?.color} rounded`}
        />
        <div className="w-full">
          <div className="flex items-center justify-between space-x-8">
            <p className="text-right whitespace-nowrap">
              {categoryPayload.name}
            </p>
            <p className="font-medium text-right whitespace-nowrap ">
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
      {categoryPayload.payload.FunnelPages?.map((page: any) => (
        <div
          key={page.id}
          className="dark:text-white/70 text-black flex justify-between items-center"
        >
          <small>{page.name}</small>
          <small>{page.visits}</small>
        </div>
      ))}
    </div>
  )
}
