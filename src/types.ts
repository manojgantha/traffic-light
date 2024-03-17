// /import { InterpolateFunction, PanelData } from "@grafana/data";
//import { FieldConfigSource } from "@grafana/schema";

//type SeriesSize = 'sm' | 'md' | 'lg';
type GraphType = 'background' | 'svg' | 'traffic'
type MeterType = 'diff' | 'absolute'

export interface SimpleOptions {
  text: string;
  graphType: GraphType;
  meterType: MeterType;
  
  thresholdMinValue: number
  thresholdMaxValue: number
  
  lightsPerLine: number;
  borderSize: number;
  borderRadius: number;
  useBackgroundColor: boolean;
  backgroundColor: string;
  foregroundColor: string;
  showValue: boolean;
  showTrend: boolean;
  width: number;
  
  svgViewBox: string;
  svgIcon: string;
  
  nameFontSize: number;
  valueFontSize: number;
  trendFontSize: number;
  borderColor: string;
  invertedScale: boolean;
  minimumAbsoluteChange: number;
  showUnits: boolean;
  margin: number;
  units: string;
  nameConverter: string[];

  // seriesCountSize: SeriesSize;
  // fieldConfig: FieldConfigSource
}
