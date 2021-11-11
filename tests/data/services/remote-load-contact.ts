import { RemoteLoadContact, RemoteLoadContactList } from '@/data/services'
import { HttpStatusCode } from '@/data/contracts/http'
import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClientSpy } from '@/tests/data/mocks'
import { mockContactModel } from '@/tests/domain/mocks'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadContact
  httpClientSpy: HttpClientSpy<RemoteLoadContactList.Response>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadContactList.Response>()
  const sut = new RemoteLoadContact(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadContact', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.loadOne()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }

    const promise = sut.loadOne()

    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.loadOne()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.loadOne()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a ContactModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockContactModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: {
        items: 1,
        data: [httpResult]
      }
    }

    const Contact = await sut.loadOne()

    expect(Contact).toEqual({
      id: httpResult.id,
      message: httpResult.message,
      email: httpResult.email,
      eventManager: httpResult.eventManager,
      phone: httpResult.phone,
      active: true
    })
  })
})
