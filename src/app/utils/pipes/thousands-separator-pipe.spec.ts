import { ThousandsSeparatorPipe } from './thousands-separator.pipe';

describe('ThousandsSeparatorPipe', () => {
  let pipe: ThousandsSeparatorPipe;

  beforeEach(() => {
    pipe = new ThousandsSeparatorPipe();
  });

  it('should transform a number to a string with thousands separator', () => {
    const result = pipe.transform(1234567);
    expect(result).toBe('1,234.567');
  });

  it('should transform a string valid to a string with thousands separator', () => {
    const result = pipe.transform(93500);
    expect(result).toBe('93.500');
  });

  it('should return an empty string for invalid input', () => {
    const result = pipe.transform(NaN);
    expect(result).toBe('');
  });
});