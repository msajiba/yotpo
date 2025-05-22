import Script from "next/script";

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className="border p-5 text-center">Testimonials page</h1>

      <div id="yotpo-testimonials-custom-tab"></div>

      <Script
        src="//staticw2.yotpo.com/ab6bOJ030BjsaF6hJcljgRka0CLDzfybzHAtNhuh/widget.js"
        async
        strategy="afterInteractive"
      />

      <div className="border mt-20 p-5">
        <div
          className="yotpo-widget-instance"
          data-yotpo-instance-id="1128681"
        ></div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
