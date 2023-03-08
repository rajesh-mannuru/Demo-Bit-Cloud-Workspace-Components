import React, { ReactNode } from 'react';

export type SecondinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Secondinput({ children }: SecondinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
