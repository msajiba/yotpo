import YotpoWidget from "@/components/YotpoWidget";

export default function Home() {
  return (
    <div>
      <h1> Home page</h1>
      <div
        className="yotpo-widget-instance"
        data-yotpo-instance-id="1128681"
      ></div>

      <div className="mt-20 border">
        <YotpoWidget />
      </div>
    </div>
  );
}
