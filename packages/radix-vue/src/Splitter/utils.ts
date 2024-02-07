export type PanelCallbacks = {
  // onCollapse?: PanelOnCollapse
  // onExpand?: PanelOnExpand
  // onResize?: PanelOnResize
}

export type PanelConstraints = {
  collapsedSize?: number | undefined
  collapsible?: boolean | undefined
  defaultSize?: number | undefined
  maxSize?: number | undefined
  minSize?: number | undefined
}

export type PanelData = {
  callbacks: PanelCallbacks
  constraints: PanelConstraints
  id: string
  idIsFromProps: boolean
  order: number | undefined
}

export function findPanelDataIndex(panelDataArray: PanelData[], panelData: PanelData) {
  return panelDataArray.findIndex(
    prevPanelData =>
      prevPanelData === panelData || prevPanelData.id === panelData.id,
  )
}

export function panelDataHelper(
  panelDataArray: PanelData[],
  panelData: PanelData,
  layout: number[],
) {
  const panelIndex = findPanelDataIndex(panelDataArray, panelData)

  const isLastPanel = panelIndex === panelDataArray.length - 1
  const pivotIndices = isLastPanel
    ? [panelIndex - 1, panelIndex]
    : [panelIndex, panelIndex + 1]

  const panelSize = layout[panelIndex]

  return {
    ...panelData.constraints,
    panelSize,
    pivotIndices,
  }
}
