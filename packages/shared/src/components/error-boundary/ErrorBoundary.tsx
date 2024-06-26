import React, { PropsWithChildren, ReactNode } from 'react'

export interface ErrorBoundaryFallbackProps {
  error?: Error | null
  resetErrorState?: VoidFunction
}

export interface ErrorBoundaryProps extends React.PropsWithChildren {
  fallback: React.FC<ErrorBoundaryFallbackProps> | ReactNode
  boundary?: string
}

interface ErrorBoundaryState {
  error: Error | null
  boundary?: string
}

const isReactFC: <T>(args: React.FC<T> | React.ReactNode) => args is React.FC<T> = (args) => {
  return typeof args === 'function'
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      error: null,
      boundary: props.boundary,
    }
  }

  resetErrorState = () => {
    this.setState({ error: null })
  }

  public static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error }
  }

  /**
   * @todo sentry capture
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { boundary } = this.state
    console.error(`${boundary} boundary error:`, error, errorInfo)
  }

  public render() {
    const { error } = this.state
    const { children, fallback: Fallback } = this.props

    if (!error) {
      return children
    }

    if (!isReactFC(Fallback)) {
      return Fallback
    }

    return <Fallback error={error} resetErrorState={this.resetErrorState} />
  }
}
