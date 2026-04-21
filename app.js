const clients = [
  { name: "Visible.vc",   plan: "pro",   mrr: 299, churnRisk: false },
  { name: "DashLX",      plan: "basic", mrr: 99, churnRisk: true },
  { name: "FlowMetrics", plan: "pro",   mrr: 299, churnRisk: false },
  { name: "ReportHQ",   plan: "basic", mrr: 99, churnRisk: false },
  { name: "DataPilot",  plan: "pro",   mrr: 499, churnRisk: true },
];




const mrrByPlan = clients.reduce((acc, client) => {
  if (acc[client.plan]) {
    acc[client.plan] = acc[client.plan] + client.mrr;
  } else {
    acc[client.plan] = client.mrr;
  }
  return acc;
}, {});

console.log(mrrByPlan);