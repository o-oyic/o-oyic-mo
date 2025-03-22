export interface LintCommandOptions {
  /**
   * 脚本命令是否传递了format选项
   * `oci lint --format`
   */
  [key: string]: any;
  format?: boolean;
}
