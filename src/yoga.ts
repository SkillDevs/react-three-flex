import Yoga, { YogaWasm } from 'yoga-layout-wasm'

export let yogaGlobal: YogaWasm

export async function initKonvaFlex(wasmPath: string) {
  yogaGlobal = await Yoga.init(wasmPath)
}
