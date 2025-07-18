import { PlotbandLayoutMap, PlotbandLabelPosition } from './types'

export const HORIZONTAL_X: PlotbandLayoutMap = {
  [PlotbandLabelPosition.TopLeftOutside]: ({ startX, offsetX, offsetY }) => ({
    x: startX - offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopLeftInside]: ({ startX, offsetX, offsetY }) => ({
    x: startX + offsetX,
    y: offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopOutside]: ({ startX, width, offsetY }) => ({
    x: startX + width / 2,
    y: offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopInside]: ({ startX, width, offsetY }) => ({
    x: startX + width / 2,
    y: offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopRightOutside]: ({ startX, width, offsetX, offsetY }) => ({
    x: startX + width + offsetX,
    y: offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopRightInside]: ({ startX, width, offsetX, offsetY }) => ({
    x: startX + width - offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.RightOutside]: ({ startX, width, height, offsetX }) => ({
    x: startX + width + offsetX,
    y: height / 2,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.RightInside]: ({ startX, width, height, offsetX }) => ({
    x: startX + width - offsetX,
    y: height / 2,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.BottomRightOutside]: ({ startX, width, height, offsetX, offsetY }) => ({
    x: startX + width + offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomRightInside]: ({ startX, width, height, offsetX, offsetY }) => ({
    x: startX + width - offsetX,
    y: height - offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomOutside]: ({ startX, width, height, offsetY }) => ({
    x: startX + width / 2,
    y: height - offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomInside]: ({ startX, width, height, offsetY }) => ({
    x: startX + width / 2,
    y: height - offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomLeftOutside]: ({ startX, height, offsetX, offsetY }) => ({
    x: startX - offsetX,
    y: height - offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomLeftInside]: ({ startX, height, offsetX, offsetY }) => ({
    x: startX + offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.LeftOutside]: ({ startX, height, offsetX }) => ({
    x: startX - offsetX,
    y: height / 2,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.LeftInside]: ({ startX, height, offsetX }) => ({
    x: startX + offsetX,
    y: height / 2,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
}

export const VERTICAL_X: PlotbandLayoutMap = {
  [PlotbandLabelPosition.TopLeftOutside]: ({ startX, offsetX, offsetY }) => ({
    x: startX - offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.TopLeftInside]: ({ startX, offsetX, offsetY }) => ({
    x: startX + offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopOutside]: ({ startX, width, offsetY }) => ({
    x: startX + width / 2,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.TopInside]: ({ startX, width, offsetY }) => ({
    x: startX + width / 2,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.TopRightOutside]: ({ startX, width, offsetX, offsetY }) => ({
    x: startX + width + offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopRightInside]: ({ startX, width, offsetX, offsetY }) => ({
    x: startX + width - offsetX,
    y: offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.RightOutside]: ({ startX, width, height, offsetX }) => ({
    x: startX + width + offsetX,
    y: height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.RightInside]: ({ startX, width, height, offsetX }) => ({
    x: startX + width - offsetX,
    y: height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomRightOutside]: ({ startX, width, height, offsetX, offsetY }) => ({
    x: startX + width + offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.BottomRightInside]: ({ startX, width, height, offsetX, offsetY }) => ({
    x: startX + width - offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomOutside]: ({ startX, width, height, offsetY }) => ({
    x: startX + width / 2,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.BottomInside]: ({ startX, width, height, offsetY }) => ({
    x: startX + width / 2,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.BottomLeftOutside]: ({ startX, height, offsetX, offsetY }) => ({
    x: startX - offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomLeftInside]: ({ startX, height, offsetX, offsetY }) => ({
    x: startX + offsetX,
    y: height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.LeftOutside]: ({ startX, height, offsetX }) => ({
    x: startX - offsetX,
    y: height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.LeftInside]: ({ startX, height, offsetX }) => ({
    x: startX + offsetX,
    y: height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
}

export const HORIZONTAL_Y: PlotbandLayoutMap = {
  [PlotbandLabelPosition.TopLeftOutside]: ({ startY, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.TopLeftInside]: ({ startY, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopOutside]: ({ startX, width, startY, offsetY }) => ({
    x: startX + width / 2,
    y: startY - offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.TopInside]: ({ startX, width, startY, offsetY }) => ({
    x: startX + width / 2,
    y: startY + offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.TopRightOutside]: ({ startY, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY - offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.TopRightInside]: ({ startY, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.RightOutside]: ({ startY, height, width, offsetX }) => ({
    x: width - offsetX,
    y: startY + height / 2,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.RightInside]: ({ startY, height, width, offsetX }) => ({
    x: width - offsetX,
    y: startY + height / 2,
    textAnchor: 'end',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.BottomRightOutside]: ({ startY, height, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + height + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.BottomRightInside]: ({ startY, height, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + height - offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomOutside]: ({ startX, width, startY, height, offsetY }) => ({
    x: startX + width / 2,
    y: startY + height + offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.BottomInside]: ({ startX, width, startY, height, offsetY }) => ({
    x: startX + width / 2,
    y: startY + height - offsetY,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.BottomLeftOutside]: ({ startY, height, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + height + offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
  }),
  [PlotbandLabelPosition.BottomLeftInside]: ({ startY, height, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
  }),
  [PlotbandLabelPosition.LeftOutside]: ({ startY, height, offsetX }) => ({
    x: offsetX,
    y: startY + height / 2,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
  [PlotbandLabelPosition.LeftInside]: ({ startY, height, offsetX }) => ({
    x: offsetX,
    y: startY + height / 2,
    textAnchor: 'start',
    dominantBaseline: 'middle',
  }),
}

export const VERTICAL_Y: PlotbandLayoutMap = {
  [PlotbandLabelPosition.TopLeftOutside]: ({ startY, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.TopLeftInside]: ({ startY, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.TopOutside]: ({ startX, width, startY, offsetY }) => ({
    x: startX + width / 2,
    y: startY - offsetY,
    textAnchor: 'end',
    dominantBaseline: 'middle',
    rotation: -90,
  }),
  [PlotbandLabelPosition.TopInside]: ({ startX, width, startY, offsetY }) => ({
    x: startX + width / 2,
    y: startY + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'middle',
    rotation: -90,
  }),
  [PlotbandLabelPosition.TopRightOutside]: ({ startY, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.TopRightInside]: ({ startY, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.RightOutside]: ({ startY, height, width, offsetX }) => ({
    x: width - offsetX,
    y: startY + height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.RightInside]: ({ startY, height, width, offsetX }) => ({
    x: width - offsetX,
    y: startY + height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomRightOutside]: ({ startY, height, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + height + offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomRightInside]: ({ startY, height, width, offsetX, offsetY }) => ({
    x: width - offsetX,
    y: startY + height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-after-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomOutside]: ({ startX, width, startY, height, offsetY }) => ({
    x: startX + width / 2,
    y: startY + height + offsetY,
    textAnchor: 'start',
    dominantBaseline: 'middle',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomInside]: ({ startX, width, startY, height, offsetY }) => ({
    x: startX + width / 2,
    y: startY + height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'middle',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomLeftOutside]: ({ startY, height, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + height + offsetY,
    textAnchor: 'end',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.BottomLeftInside]: ({ startY, height, offsetX, offsetY }) => ({
    x: offsetX,
    y: startY + height - offsetY,
    textAnchor: 'start',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.LeftOutside]: ({ startY, height, offsetX }) => ({
    x: offsetX,
    y: startY + height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
  [PlotbandLabelPosition.LeftInside]: ({ startY, height, offsetX }) => ({
    x: offsetX,
    y: startY + height / 2,
    textAnchor: 'middle',
    dominantBaseline: 'text-before-edge',
    rotation: -90,
  }),
}
