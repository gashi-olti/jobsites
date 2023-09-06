import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  body: {
    ...tw`antialiased`,
  },
});

const StylesGlobal = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default StylesGlobal;
