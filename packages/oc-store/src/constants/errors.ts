export const connectionErrorNames = [
  'Modify', // 修改错误，在调用Select、Insert、Update、Delete、Clear等方法时发生
  'Bulk', // 批量操作错误
  'OpenFailed', // 数据库打开失败
  'Schema', // 数据库架构错误
  'Upgrade', // 数据库升级错误
  'Unsupported', // 不支持的操作或功能
];

export const dbDomErrorNames = [
  'Unknown', // 未知错误
  'ReadOnly', // 数据库事务以只读打开，但尝试写入错误
  'Version', // 数据库版本错误
  'NotFound', // 找不到指定的数据库
  'Abort', // 事务中止错误
  'Timeout', // 操作超时错误
];
