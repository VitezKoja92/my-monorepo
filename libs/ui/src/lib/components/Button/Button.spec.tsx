import { render } from '@testing-library/react';
import { ButtonColor, ButtonType } from '../../enums';

import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button
        text="123"
        color={ButtonColor.Black}
        type={ButtonType.RaisedNotRounded}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
