export function is_prime(num) {
  if (num == 1) {
    return false;
  } else if (num == 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    if (num < i * i) {
      break;
    }
  }
  return true;
}

export function count_prime(num) {
  let rtn = 0;
  for (let i = 1; i < num; i++) {
    if (is_prime(i) == true) {
      rtn += 1;
    }
  }
  return rtn;
}
