interface Options {
  cwd?: string;
  type?: 'directory' | 'file';
}

async function findUpSync(name: string | readonly string[], options?: Options) {
  console.log(name, options);
}

export { findUpSync };
