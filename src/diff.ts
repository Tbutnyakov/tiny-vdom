import {
  TVDElement,
  TRDElement,
  TVDElementRecord,
  PatchAttributeCallback,
  TVDPropRecord,
} from './types';
import { isString, isSameString, isSameTags } from './utils';
import { render } from './render';

const diffProps = (oldProps: TVDPropRecord, newProps: TVDPropRecord) => {
  const patches: PatchAttributeCallback[] = [];
  Object.entries(newProps).forEach(([key, value]) => {
    patches.push((rNode: TRDElement) => setAttribute(key, value, rNode));
  });
  Object.keys(oldProps).forEach(key => {
    patches.push((rNode: TRDElement) => removeAttribute(key, rNode));
  });
  return (rNode: TRDElement) => {
    patches.forEach(patch => patch(rNode));
    return rNode;
  };
};

const appendElement = (vNode: TVDElement) => (rNode: TRDElement) => {
  rNode.appendChild(render(vNode));
  return rNode;
};

const diffChildren = (oldChildren: TVDElement[], newChildren: TVDElement[]) => {
  const childPatches = [] as any[];
  const additionalPatches = [] as any[];
  oldChildren.forEach((oldChild, i) =>
    childPatches.push(diff(oldChild, newChildren[i]))
  );

  newChildren
    .slice(oldChildren.length)
    .forEach(newChild => additionalPatches.push(appendElement(newChild)));

  return (parentNode: TRDElement) => {
    parentNode.childNodes.forEach((child, i) => {
      childPatches[i](child);
    });

    additionalPatches.forEach(patch => patch(parentNode));
    return parentNode;
  };
};

const removeElement = (rNode: TRDElement) => {
  rNode.remove();
  return undefined;
};

const replaceElement = (vNode: TVDElement) => (rNode: TRDElement) => {
  const newNode = render(vNode);
  rNode.replaceWith(newNode);
  return newNode;
};

const setAttribute = (name: string, value: string, rNode: TRDElement) => {
  rNode.setAttribute(name, value);
  return rNode;
};

const removeAttribute = (name: string, rNode: TRDElement) => {
  rNode.removeAttribute(name);
  return rNode;
};

export const doNothing = (rNode: TRDElement) => rNode;

export const diff = (oldVTree: TVDElement, newVTree: TVDElement) => {
  if (Object.is(newVTree, undefined)) return removeElement;
  if (isString(oldVTree) || isString(newVTree)) {
    if (!isSameString(oldVTree as string, newVTree as string))
      return replaceElement(newVTree);
    return doNothing;
  }
  if (!isSameTags(oldVTree as TVDElementRecord, newVTree as TVDElementRecord))
    return replaceElement(newVTree);

  const {
    props: oldProps,
    children: oldChildren,
  } = oldVTree as TVDElementRecord;
  const {
    props: newProps,
    children: newChildren,
  } = newVTree as TVDElementRecord;

  const patchProps = diffProps(oldProps, newProps);
  const patchChildren = diffChildren(oldChildren, newChildren);
  return (rNode: TRDElement) => {
    patchProps(rNode);
    patchChildren(rNode);
    return rNode;
  };
};
