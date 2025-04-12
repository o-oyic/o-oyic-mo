class BaseException extends Error {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message);

    this.name = this.constructor.name;
    this.cause = options.cause;
  }

  override toString() {
    const stacks = this.stack?.split('\n');
    stacks?.shift();

    console.error(`${this.name}: ${this.message} \n`, this.toString(), '\n', stacks?.join('\n'));

    return `${this.name}: ${this.message}`;
  }
}

export { BaseException };
