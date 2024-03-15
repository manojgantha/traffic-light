// /import { InterpolateFunction, PanelData } from "@grafana/data";
//import { FieldConfigSource } from "@grafana/schema";

//type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  lightsPerLine:number;
  borderSize:number;
  borderRadius:number;
  showValue: boolean;
  showTrend: boolean;
  width: number;
  nameFontSize:number;
  valueFontSize:number;
  trendFontSize:number;
  borderColor:string;

  // seriesCountSize: SeriesSize;
  // fieldConfig: FieldConfigSource
}
