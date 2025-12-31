"use client";
import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class TokenErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-500/30 rounded-lg text-red-300 text-sm bg-red-900/10">
          ⚠️ Something went wrong while loading tokens.
          <br />
          Please refresh or try again.
          <br />
          <button
            onClick={this.handleRetry}
            className="mt-2 px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/30"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
