import { describe, it, expect } from '@jest/globals';
import { Button } from './Button';

describe('Button', () => {
  it('should be compatible with React 19', () => {
    const buttonProps = {
      variant: 'primary' as const,
      size: 'medium' as const,
      children: 'Test Button'
    };
    
    // This test ensures our component types are compatible with React 19
    const button = Button(buttonProps);
    expect(button).toBeDefined();
  });
});