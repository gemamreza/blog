import { Images } from '../../components/reusable/image';
import { checkProps } from '../../Utility/index';

describe('Testing Images(Techs) component', () => {

  describe('Checking our prop types', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        img: 'isString',
        height: 123,
        width: 123
      }
      const propsError = checkProps(Images, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});