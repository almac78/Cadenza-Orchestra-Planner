/* Provides help and guidance on using the Cadenza application. */
import { Card, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Help topics. Each section is rendered with array.map() and listed in the "On this page" menu.
const HELP_SECTIONS = [
  {
    id: "navigating",
    title: "Navigating the app",
    intro: "The header at the top of the screen stays visible on every page.",
    items: [
      <>
        <strong>Dashboard</strong> shows your upcoming calls, grouped by month,
        with the next call highlighted at the top.
      </>,
      <>
        <strong>Add Call</strong> opens the form for scheduling a new rehearsal,
        concert or meeting.
      </>,
      <>
        <strong>Help</strong> brings you back to this page.
      </>,
      <>
        Click your <strong>name</strong> in the top-right corner to view{" "}
        <strong>My Account</strong> or to log out.
      </>,
      <>
        On a phone, tap the <strong>☰ menu</strong> button to open the
        navigation links, and tap <strong>💬 Show notes</strong> on a call to
        read its notes.
      </>,
    ],
  },
  {
    id: "register",
    title: "Registering and logging in",
    ordered: true,
    items: [
      <>
        Choose <Link to="/register">Register</Link> in the header.
      </>,
      <>
        Enter your full name, email, a username and a password. No field may be
        left empty.
      </>,
      <>
        Use a valid email address (for example <em>name@example.com</em>).
        Usernames cannot contain spaces, and passwords need at least 6
        characters.
      </>,
      <>
        Select <strong>Create account</strong>. You will be logged in and taken
        to your dashboard.
      </>,
      <>
        Next time, choose <Link to="/login">Log in</Link> and sign in with
        either your username or your email, plus your password.
      </>,
    ],
  },
  {
    id: "create",
    title: "Creating a call",
    ordered: true,
    items: [
      <>
        Select <strong>Add Call</strong> in the header (or{" "}
        <strong>+ Add Call</strong> on the dashboard).
      </>,
      <>
        Enter the <strong>engagement</strong> name, <strong>date</strong>,{" "}
        <strong>call time</strong>, <strong>venue</strong> and any{" "}
        <strong>notes</strong>.
      </>,
      <>The date and time must be in the future.</>,
      <>
        Select <strong>Save Call</strong>. The call appears on your dashboard
        straight away, in date order.
      </>,
    ],
  },
  {
    id: "edit",
    title: "Editing a call",
    ordered: true,
    items: [
      <>
        On the dashboard, find the call and select <strong>Edit</strong>.
      </>,
      <>
        Change any of the details. The form is pre-filled with the current
        information.
      </>,
      <>
        Select <strong>Update Call</strong> to save, or <strong>Cancel</strong>{" "}
        to leave without changes.
      </>,
      <>
        Past calls can be edited too (for example, to add notes after a
        concert). Open them with <strong>Show past calls</strong> at the bottom
        of the dashboard.
      </>,
    ],
  },
  {
    id: "delete",
    title: "Deleting a call",
    ordered: true,
    items: [
      <>
        On the dashboard, select <strong>Delete</strong> on the call you want to
        remove.
      </>,
      <>
        A confirmation box will appear. Select <strong>Delete</strong> again to
        confirm, or <strong>Keep it</strong> to cancel.
      </>,
      <>Deleted calls are removed permanently and cannot be recovered.</>,
    ],
  },
  {
    id: "tips",
    title: "Tips for organising rehearsals and concerts",
    items: [
      <>
        Use clear, consistent titles such as “Full Rehearsal”, “Dress Rehearsal”
        or “Concert”, so calls are easy to scan.
      </>,
      <>
        Enter the <em>call time</em> (when you need to arrive), not the
        downbeat, so you are always punctual.
      </>,
      <>
        Put the programme, dress code, run order and parking details in{" "}
        <strong>Notes</strong>.
      </>,
      <>
        Add calls as soon as the schedule is released, then check the{" "}
        <strong>Next call</strong> card before each week.
      </>,
      <>
        Tidy up by deleting cancelled calls, so your dashboard always reflects
        the real schedule.
      </>,
    ],
  },
];

export default function Help() {
  return (
    <>
      <h2>Help</h2>
      <p className="cz-muted mb-4">
        Everything you need to get the most out of Cadenza Orchestra Planner.
      </p>

      <Row className="g-4">
        {/* Quick links to each section */}
        <Col lg={3}>
          <Card className="cz-card cz-help-toc">
            <Card.Body>
              <div className="cz-summary-label mb-2">On this page</div>
              <Nav className="flex-column">
                {HELP_SECTIONS.map((section) => (
                  <Nav.Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-0 py-1"
                  >
                    {section.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={9}>
          {HELP_SECTIONS.map((section) => {
            const ListTag = section.ordered ? "ol" : "ul";
            return (
              <Card
                key={section.id}
                id={section.id}
                className="cz-card cz-help-section mb-3"
              >
                <Card.Body>
                  <Card.Title as="h3" className="cz-section-title">
                    {section.title}
                  </Card.Title>
                  {section.intro && <p className="cz-muted">{section.intro}</p>}
                  <ListTag className="mb-0 cz-help-list">
                    {section.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ListTag>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
