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
    </div>
  );
};

export default TestimonialsPage;
