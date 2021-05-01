export class InternalServerError extends Error {
  constructor (message = 'Internal server error') {
    super(message)
    this.message = 'InternalServerError'
  }
}
