import { checkProps } from '../../Utility';
import { Work } from '../../components/reusable/work';

describe('Testing Work props', () => {

  describe('Checking our prop types', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        work: 'isString',
        title: 'isString',
        desc: 'isString'
      }
      const propsError = checkProps(Work, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});