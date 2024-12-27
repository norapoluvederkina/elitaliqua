function parseLiteral(v, scope) {
  if (typeof v === 'number') {
    return new Number(v);
  } else if (typeof v === 'string') {
    return new String(v);
  } else if (typeof v === 'boolean') {
    return new Boolean(v);
  } else {
    throw new Error('Unsupported literal type');
  }
}
