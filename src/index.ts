export class ClassVersion {
  /**
   * This is the outer function.
   *
   * @returns The inner function.
   */
  outer(): () => void {
    /** Docs for the inner function? */
    return () => {};
  }
}

/**
 * This is the outer function.
 *
 * @returns The inner function.
 */
export function outerAsFunction(): () => void {
  /** Docs for the inner function? */
  return () => {};
}
