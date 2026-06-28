import { processSteps } from "../../data/processSteps.js";
import ProcessStep from "../cards/ProcessStep.jsx";
import Button from "../ui/Button.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function ProcessPreview() {
  return (
    <section className="page-section surface-section">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="A structured approach to complex door systems"
          text="From product selection to opening review, logistics, installation, and final function checks."
        />

        <div className="process-grid">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>

        <div className="section-action">
          <Button to="/process" variant="secondary">
            View the Process
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProcessPreview;