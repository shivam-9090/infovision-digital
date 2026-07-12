import { Component } from "react";

export class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.routeKey !== this.props.routeKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  componentDidCatch(error) {
    console.error("[InfoVision route boundary]", error);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main className="route-error">
        <span>ROUTE / RECOVERY</span>
        <h1>This page hit a temporary loading issue.</h1>
        <p>The application shell is still active. Reload this route or return to the homepage.</p>
        <div><button onClick={() => window.location.reload()}>Reload page</button><a href="/">Go home</a></div>
      </main>
    );
  }
}
