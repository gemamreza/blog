import { Skills } from '../../components/reusable/skills';
import { checkProps } from '../../Utility';

describe('Testing Skills props', () => {

  describe('Checking our props types', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'isString',
        width: 123,
        value: 123
      }
      const propsError = checkProps(Skills, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});