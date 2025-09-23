import { lazy, LazyExoticComponent, ComponentType } from 'react'

export function lazyImport<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends ComponentType<any>,
  I extends { [key: string]: T }
>(factory: () => Promise<I>, name: keyof I): LazyExoticComponent<T> {
  return lazy(() => factory().then(module => ({ default: module[name] })))
}