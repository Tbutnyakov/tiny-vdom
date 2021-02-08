export type TVDTag = string;
export type TVDProps = { [key: string]: any };

export type TVDElementRecord = {
  tag: TVDTag;
  props: TVDProps;
  children?: TVDElement | TVDElement[];
};
export type TVDElementString = string;

export type TVDElement = TVDElementRecord | TVDElementString | undefined;
