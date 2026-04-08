import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  test('renders required fields', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <ContactForm />
        </I18nextProvider>
      </MemoryRouter>
    )

    expect(screen.getByLabelText(/Full Name|Nom complet/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address|Adresse email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  test('shows success message after submit', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <ContactForm />
        </I18nextProvider>
      </MemoryRouter>
    )

    fireEvent.change(screen.getByLabelText(/Full Name|Nom complet/i), {
      target: { value: 'John Doe' }
    })

    fireEvent.change(screen.getByLabelText(/Email Address|Adresse email/i), {
      target: { value: 'john@example.com' }
    })

    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'I need analytics support.' }
    })

    fireEvent.click(screen.getByRole('button', { name: /Send Message|Envoyer le message/i }))

    expect(
      screen.getByText(/prepared successfully|préparé avec succès/i)
    ).toBeInTheDocument()
  })
})