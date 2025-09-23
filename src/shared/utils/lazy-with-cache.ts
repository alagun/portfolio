// src/shared/utils/lazyWithCache.ts
import { lazy, LazyExoticComponent, ComponentType } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentCache = new Map<string, LazyExoticComponent<ComponentType<any>>>()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyWithCache<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  key: string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): LazyExoticComponent<ComponentType<any>> {
  if (!componentCache.has(key)) {
    componentCache.set(key, lazy(factory))
  }
  return componentCache.get(key)!
}