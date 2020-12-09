import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import 'jest-styled-components';
import { configure as configureRTL } from '@testing-library/dom';

configureRTL({
  testIdAttribute: 'data-test',
});

// some of the a11y tests run for a while, so we up the timeout globally to allow them to complete
/* eslint-disable-next-line */
jest.setTimeout(15000);
