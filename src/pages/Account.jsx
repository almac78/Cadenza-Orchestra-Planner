// Account page displaying the logged-in user's details.
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEvents } from "../hooks/useEvents";

export default function Account() {
  const { currentUser, logout } = useAuth();
  const { upcomingEvents, pastEvents } = useEvents();
  const navigate = useNavigate();

  // Log out and return to the login page.
  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="cz-narrow">
      <h2>My Account</h2>

      <Card className="cz-card shadow-sm mt-3">
        <Card.Body className="d-flex align-items-center gap-3">
          <span className="cz-avatar cz-avatar-lg" aria-hidden="true">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </span>
          <div>
            <Card.Title className="mb-0">{currentUser?.name}</Card.Title>
            <Card.Subtitle className="cz-muted mt-1">
              @{currentUser?.username}
            </Card.Subtitle>
          </div>
        </Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Email:</strong> {currentUser?.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Calls:</strong> {upcomingEvents.length} upcoming,{" "}
            {pastEvents.length} past
          </ListGroup.Item>
          <ListGroup.Item className="cz-muted small">
            Accounts and calls are stored in <strong>localStorage</strong> on
            this device (capstone simulation).
          </ListGroup.Item>
        </ListGroup>

        <Card.Body>
          <Button variant="outline-secondary" onClick={handleLogout}>
            Log out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
