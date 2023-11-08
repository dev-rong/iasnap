export interface ImageInterface {
    id: string;
    order: number
    name: string;
    directory : string;
    sources : string;
    region : string;
    subregion : string;
    ceremony: string;
    theme : string;
    venue : string;
}

export interface Theme {
    id: number;
    ceremony: string;
    name: string;
  }