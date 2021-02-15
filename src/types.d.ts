export type TVDTag = string;

export type TVDElement = TVDElementRecord | string | undefined;

export interface TVDPropRecord {
  [key: string]: any;
}
export interface TVDProps extends TVDPropRecord {
  children: TVDElement[];
}

export type TVDElementRecord = {
  tag: TVDTag;
  props: TVDProps;
};

export type TRDElement = HTMLElement;

export type PatchAttributeCallback = (el: TRDElement) => HTMLElement;
