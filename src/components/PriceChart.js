'use client';

export default function PriceChart() {
  return (
    <section className="chart-section">
      <div className="container">
        <h2 className="section-title">Live Price Chart</h2>
        <div className="tradingview-widget-container">
          <div id="tradingview_widget"></div>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              new TradingView.widget({
                "width": "100%",
                "height": 500,
                "symbol": "BTCUSDT",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "tr",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "container_id": "tradingview_widget"
              });
            `
          }} />
        </div>
      </div>
    </section>
  );
}
