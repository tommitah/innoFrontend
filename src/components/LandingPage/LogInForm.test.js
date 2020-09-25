import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, wait } from '@testing-library/react'
import LogInForm from './LogInForm'

//CI=true npm test

describe('<LogInForm />', () => {
  let component
  let mockSubmit

  beforeEach(() => {
    mockSubmit = jest.fn()
    component = render(
      <LogInForm submit={mockSubmit} />
    )
  })

  test('renders content', () => {
    expect(component.container).toHaveTextContent('Log In')
    expect(component.container).toHaveTextContent('Email')
    expect(component.container).toHaveTextContent('Password')
  })

  test('updates state an calls submit', async () => {
    const [inputEmail, inputPassword] = component.container.querySelectorAll('input')
    const form = component.container.querySelector('form')

    await wait(() => {
      fireEvent.change(inputEmail, {
        target: { value: 'test@test.com' }
      })
    })

    await wait(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'secret' }
      })
    })

    await wait(() => {
      fireEvent.submit(form)
    })

    expect(mockSubmit.mock.calls).toHaveLength(1)
    expect(mockSubmit.mock.calls[0][0].email).toBe('test@test.com')
    expect(mockSubmit.mock.calls[0][0].password).toBe('secret')
  })
})