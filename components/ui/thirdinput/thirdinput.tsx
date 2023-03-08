import React, { ReactNode } from 'react';

export type ThirdinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Thirdinput({ children }: ThirdinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
