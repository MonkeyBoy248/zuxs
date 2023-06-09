import { Operator, Predicate } from '../../types/operators';
import { getValidIndex } from './utils/helpers/getValidIndex';

export function removeItem<T>(selector: number | Predicate<T>): Operator<T[]> {
  return (current: T[]): T[] => {
    const index = getValidIndex(selector, current);

  if (index === null) {
    return current;
  }

  const copy = current.slice();
  copy.splice(index, 1);

  return copy;
  }
}