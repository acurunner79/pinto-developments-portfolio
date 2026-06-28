function ProcessStep({ step }) {
  return (
    <article className="process-step">
      <span>{step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  );
}

export default ProcessStep;