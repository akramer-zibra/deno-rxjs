import { zip as zipStatic } from '../observable/zip.ts';
import { ObservableInput, ObservableInputTuple, OperatorFunction, Cons } from '../types.ts';
import { operate } from '../util/lift.ts';

/** @deprecated Replaced with {@link zipWith}. Will be removed in v8. */
export function zip<T, A extends readonly unknown[]>(otherInputs: [...ObservableInputTuple<A>]): OperatorFunction<T, Cons<T, A>>;
/** @deprecated Replaced with {@link zipWith}. Will be removed in v8. */
export function zip<T, A extends readonly unknown[], R>(
  otherInputsAndProject: [...ObservableInputTuple<A>],
  project: (...values: Cons<T, A>) => R
): OperatorFunction<T, R>;
/** @deprecated Replaced with {@link zipWith}. Will be removed in v8. */
export function zip<T, A extends readonly unknown[]>(...otherInputs: [...ObservableInputTuple<A>]): OperatorFunction<T, Cons<T, A>>;
/** @deprecated Replaced with {@link zipWith}. Will be removed in v8. */
export function zip<T, A extends readonly unknown[], R>(
  ...otherInputsAndProject: [...ObservableInputTuple<A>, (...values: Cons<T, A>) => R]
): OperatorFunction<T, R>;

/**
 * @deprecated Replaced with {@link zipWith}. Will be removed in v8.
 */
export function zip<T, R>(...sources: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): OperatorFunction<T, any> {
  return operate((source, subscriber) => {
    zipStatic(source as ObservableInput<any>, ...(sources as Array<ObservableInput<any>>)).subscribe(subscriber);
  });
}
