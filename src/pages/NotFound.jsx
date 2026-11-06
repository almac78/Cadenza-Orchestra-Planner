/* Shown when the user visits a URL that does not match any route. */
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <p className="cz-eyebrow">404</p>
      <h2>Page not found</h2>
      <p className="cz-muted mb-4">
        That page doesn’t exist. It may have moved, or the link may be wrong.
      </p>
      <Button as={Link} to="/dashboard" variant="primary">
        Go to dashboard
      </Button>
    </div>
  );
}
