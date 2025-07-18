/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax, @typescript-eslint/no-var-requires */
import React from 'react'
import type { ExampleCollection } from './types'

export const examples: ExampleCollection[] = [
  {
    title: 'Line Charts',
    description: '',
    examples: [
      require('./basic-line-chart').default,
      require('./multi-line-chart').default,
      require('./data-gap-line-chart').default,
      require('./patchy-line-chart').default,
      require('./basic-timeline').default,
    ],
  },
  {
    title: 'Area Charts',
    description: '',
    examples: [
      require('./non-stacked-area-chart').default,
      require('./stacked-area-chart').default,
      require('./stacked-area-chart-with-attributes').default,
      require('./baseline-area-chart').default,
      require('./step-area-chart').default,
    ],
  },
  {
    title: 'Bar Charts',
    description: '',
    examples: [
      require('./basic-grouped-bar').default,
      require('./horizontal-stacked-bar-chart').default,
    ],
  },
  {
    title: 'Scatter Plots',
    description: '',
    examples: [
      require('./basic-scatter-plot').default,
      require('./sized-scatter-plot').default,
      require('./shaped-scatter-plot').default,
    ],
  },
  {
    title: 'Maps',
    description: <div>
        Simple maps using <a href="https://github.com/topojson/topojson" target="_blank">TopoJSON</a> geometry and fully
        featured maps powered by <a href="https://github.com/Leaflet/Leaflet" target="_blank">Leaflet</a>{' '}
        (with <a href="https://maplibre.org/" target="_blank">MapLibre</a> rendering)
    </div>,
    examples: [
      require('./basic-leaflet-map').default,
      require('./leaflet-flow-map').default,
      require('./advanced-leaflet-map').default,
      require('./topojson-map').default,
    ],
  },
  {
    title: 'Networks and Flows',
    description: '',
    examples: [
      require('./basic-sankey').default,
      require('./expandable-sankey').default,
      require('./dagre-graph').default,
      require('./force-graph').default,
      require('./parallel-graph').default,
      require('./elk-layered-graph').default,
    ],
  },
  {
    title: 'Circular Charts',
    description: '',
    examples: [
      require('./basic-donut-chart').default,
      require('./hierarchical-chord-diagram').default,
      require('./sunburst-nested-donut').default,
    ],
  },
  {
    title: 'Composite Charts',
    description: '',
    examples: [
      require('./dual-axis-chart').default,
      require('./range-plot').default,
    ],
  },
  {
    title: 'Auxiliary Components',
    description: 'Annotations, Brushes, Tooltips and more',
    examples: [
      require('./basic-annotations').default,
      require('./crosshair-stacked-bar').default,
      require('./brush-grouped-bar').default,
      require('./free-brush-scatters').default,
      require('./plotband-plotline').default,
    ],
  },
  /* {} */
]
