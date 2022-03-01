import { useState } from 'react'
import wasm_logo from './wasm.svg'
import js_logo from './js.svg'
import './App.css'
import * as JSPrime from './lib/js/prime'
import * as WASMPrime from './lib/wasm/find_prime_number'

function App() {
  const [number, setNumber] = useState(10000000);
  const [wasmResult, setWasmResult] = useState('');
  const [wasmCalTime, setWasmCalTime] = useState(0.0);
  const [jsResult, setJsResult] = useState('');
  const [jsCalTime, setJsCalTime] = useState(0.0);

  const now = () => (new Date()).getTime();

  const jstest = () => {
    const before = now();
    setJsResult(JSPrime.count_prime(number).toString());
    const after = now();
    setJsCalTime(after - before);
  }

  const wasmtest = () => {
    const before = now();
    setWasmResult(WASMPrime.count_prime(BigInt(number)).toString());
    const after = now();
    setWasmCalTime(after - before);
  }

  const inputCtrl = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span className="title">
            <img src={wasm_logo} className="App-logo" alt="logo" />
            VS
            <img src={js_logo} className="App-logo" alt="logo" />
          </span>
        </p>
        <p><code>WebAssembly</code> Vs <code>JavaScript</code> Speed Test!</p>
        <p>
          1부터
          <input type='number' value={number} onChange={inputCtrl} />
          까지의 소수의 개수를 구하는 데 걸리는 속도를 비교합니다.</p>
        <p>
          <button type="button" onClick={wasmtest}>
            WASM 연산 시작!
          </button>
          <button type="button" onClick={jstest}>
            JS 연산 시작!
          </button>
        </p>
        <p>
        <code>WebAssembly</code> 연산 결과 : {wasmResult === '' ? '없음' : `${wasmResult} 개`} (시간 : {wasmCalTime / 1000}초)
        </p>
        <p>
        <code>JavaScript</code> 연산 결과 : {jsResult === '' ? '없음' : `${jsResult} 개`} (시간 : {jsCalTime / 1000}초)
        </p>
      </header>
    </div>
  )
}

export default App
