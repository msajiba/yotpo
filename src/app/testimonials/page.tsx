import YotpoWidget from "@/components/YotpoWidget";

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className="border p-5 text-center">Testimonials page</h1>

      <div id="yotpo-testimonials-custom-tab"></div>

      <div
        className="yotpo-widget-instance"
        data-yotpo-instance-id="1128681"
      ></div>

      <div className="mt-20 border">
        <YotpoWidget />
      </div>
    </div>
  );
};

export default TestimonialsPage;
