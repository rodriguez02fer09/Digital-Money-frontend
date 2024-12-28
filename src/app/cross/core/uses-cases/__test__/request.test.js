import request from '../request'

global.fetch = jest.fn()

describe('request function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should make a fetch call with the correct parameters', async () => {
    const mockData = {message: 'success'}
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockData),
    }
    fetch.mockResolvedValue(mockResponse)

    const data = {
      path: 'example-path',
      data: {name: 'Test'},
      method: 'POST',
      addHeaders: {Authorization: 'Bearer token'},
    }

    const callBack = jest.fn()

    await request(data, callBack)

    expect(fetch).toHaveBeenCalledWith(
      'https://digitalmoney.digitalhouse.com/api/example-path',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer token',
        },
        body: JSON.stringify({name: 'Test'}),
      },
    )

    expect(callBack).toHaveBeenCalledWith(mockData)
  })

  it('should handle errors correctly', async () => {
    const mockError = new Error('Network Error')
    fetch.mockRejectedValue(mockError)

    const data = {
      path: 'error-path',
      data: {name: 'Error Test'},
      method: 'GET',
      addHeaders: {},
    }

    const callBack = jest.fn()
    console.error = jest.fn()

    await request(data, callBack)

    expect(fetch).toHaveBeenCalledWith(
      'https://digitalmoney.digitalhouse.com/api/error-path',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: 'Error Test'}),
      },
    )

    expect(callBack).not.toHaveBeenCalled()
    expect(console.error).toHaveBeenCalledWith('Detalles del error:', mockError)
  })

  it('should handle requests without body data', async () => {
    const mockData = {message: 'no-body success'}
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockData),
    }
    fetch.mockResolvedValue(mockResponse)

    const data = {
      path: 'no-body-path',
      data: null,
      method: 'GET',
      addHeaders: {},
    }

    const callBack = jest.fn()

    await request(data, callBack)

    expect(fetch).toHaveBeenCalledWith(
      'https://digitalmoney.digitalhouse.com/api/no-body-path',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      },
    )

    expect(callBack).toHaveBeenCalledWith(mockData)
  })
})
