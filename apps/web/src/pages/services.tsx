export default function ServicesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Services</h1>
      <p className="max-w-2xl text-sm text-muted-foreground">
        Selim helps teams plan, design, and ship digital products with clarity.
      </p>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p id="strategy">Product strategy & discovery</p>
        <p id="design">UX/UI design & prototyping</p>
        <p id="development">Full-stack development</p>
        <p id="systems">Design systems & UI engineering</p>
      </div>
    </section>
  );
}
