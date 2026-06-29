import Button from "../components/ui/Button.jsx";
import PageMeta from "../components/ui/PageMeta.jsx";

function ThankYouPage() {
  return (
    <>
      <PageMeta
        title="Inquiry Sent | Pinto Developments"
        description="Thank you for contacting Pinto Developments."
      />
      <section className="page-section">
        <div className="container narrow">
          <p className="eyebrow">Inquiry Sent</p>
          <h1 className="display-heading">Thank you for reaching out</h1>
          <p className="lede">
            Your project inquiry has been received. Pinto Developments will review the details and
            follow up about the next step.
          </p>

          <div className="button-row">
            <Button to="/">Return Home</Button>
            <Button to="/portfolio" variant="secondary">
              View Selected Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYouPage;