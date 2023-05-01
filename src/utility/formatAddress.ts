export function formatAddress(address: string, size = 4) {
  var first = address.slice(0, size + 1);
  var last = address.slice(-size);
  return first + "..." + last;
}
