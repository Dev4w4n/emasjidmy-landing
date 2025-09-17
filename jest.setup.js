import '@testing-library/jest-dom'

// Extend Jest matchers
expect.extend({
  toHaveAttribute(received, attribute, value) {
    const hasAttribute = received.hasAttribute(attribute)
    const attributeValue = received.getAttribute(attribute)
    
    if (value !== undefined) {
      const pass = hasAttribute && attributeValue === value
      return {
        pass,
        message: () => pass 
          ? `Expected element not to have attribute ${attribute} with value ${value}`
          : `Expected element to have attribute ${attribute} with value ${value}, but got ${attributeValue}`
      }
    }
    
    return {
      pass: hasAttribute,
      message: () => hasAttribute
        ? `Expected element not to have attribute ${attribute}`
        : `Expected element to have attribute ${attribute}`
    }
  },
  
  toBeInTheDocument(received) {
    const pass = received !== null && document.contains(received)
    return {
      pass,
      message: () => pass
        ? 'Expected element not to be in the document'
        : 'Expected element to be in the document'
    }
  }
})

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return ''
  },
}))

// Mock Next.js image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  },
}))

// Mock intersection observer for AOS animations
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}))