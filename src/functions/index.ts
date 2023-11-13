/** Promise扩展 */
export class ApiPromise<T> extends Promise<T> {
  then<TResult1 = T, TResult2 = never>(
    onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): ApiPromise<TResult1 | TResult2> {
    return super.then(onFulfilled, onRejected) as ApiPromise<TResult1 | TResult2>
  }

  catch<TResult = never>(
    onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
  ): ApiPromise<T | TResult> {
    return super.catch(onRejected) as ApiPromise<T | TResult>
  }

  to(): ApiPromise<[null, T] | [ObjectT, null]> {
    return this.then(v => [null, v], e => [e ?? {}, null])
  }

  static _resolve<T>(value: T | PromiseLike<T>): ApiPromise<Awaited<T>> {
    return this.resolve(value) as ApiPromise<Awaited<T>>
  }
}
