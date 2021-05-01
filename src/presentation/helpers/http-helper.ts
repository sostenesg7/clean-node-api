import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => (
  {
    statusCode: 400,
    body: error
  }
)

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})

export const successRequest = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})
