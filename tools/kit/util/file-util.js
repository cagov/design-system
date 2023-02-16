export class FileReadError extends Error {
  constructor(message, code = '', path = '') {
    super(message);
    this.name = 'FileReadError';
    this.code = code;
    this.path = path;
  }
}
