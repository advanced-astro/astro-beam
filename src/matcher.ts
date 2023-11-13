// data-token="12345678-1234-1234-1234-1234567890ab"
const tokenPattern = /([a-z0-9]){8}(-([a-z0-9]){4}){3}-([a-z0-9]){12}/;

export default function matcher(token: string): boolean {
  if (typeof token !== 'string') {
    throw new Error('Input must be a string');
  }

  const match = token.match(tokenPattern);
  return match !== null;
}