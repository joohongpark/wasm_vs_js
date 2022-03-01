use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn is_prime(num: u64) -> bool {
  if num == 1 {
    return false;
  } else if num == 2 {
    return true;
  }
  for i in 2..num {
    if num % i == 0 {
      return false;
    }
    if num < i * i {
      break;
    }
  }
  true
}

#[wasm_bindgen]
pub fn count_prime(num: u64) -> u64 {
  let mut rtn: u64 = 0;
  for i in 1..num {
    if is_prime(i) == true {
      rtn += 1;
    }
  }
  rtn
}