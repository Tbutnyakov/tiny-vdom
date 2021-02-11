export type TVDTag = string;

export type TVDElement = TVDElementRecord | string | undefined;
export type TVDChildren = TVDElement | TVDElement[];
export interface TVDPropRecord {
  [key: string]: any;
}
export interface TVDProps extends TVDPropRecord {
  children?: TVDChildren;
}

export type TVDElementRecord = {
  tag: TVDTag;
  props: TVDProps;
};

export type TRDElement = HTMLElement;

export type PatchAttributeCallback = (el: TRDElement) => HTMLElement;
