function filesPattern<MiddleFilename extends 'spec' | 'test'>(
  middleFilename: MiddleFilename,
): `**/*.${MiddleFilename}.ts?(x)` {
  return `**/*.${middleFilename}.ts?(x)`
}

export const spec = filesPattern('spec')
export const test = filesPattern('test')
