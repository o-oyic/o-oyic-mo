function getMultiErrorMessage(msg: string, failures: Record<string, Error>) {
  // return `${msg}. Errors: ${Object.keys(failures)
  //   .map((key) => failures?.[key].toString())
  //   .filter((v, i, s) => s.indexOf(v) === i) // Only unique error strings
  //   .join('\n')}`;

  return msg + failures;
}

export { getMultiErrorMessage };
