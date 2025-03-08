'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                        <Button
                            variant="outline"
                            onClick={() => this.setState({ hasError: false })}
                        >
                            Try again
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
} 