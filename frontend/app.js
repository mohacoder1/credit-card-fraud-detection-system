const API = 'http://localhost:8000/api/predict/';
const form = document.getElementById('txForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    Amount: parseFloat(document.getElementById('amount').value),
    Country: document.getElementById('country').value,
    TransactionType: document.getElementById('txType').value,
    CardType: document.getElementById('cardType').value,
    TimeOfDay: document.getElementById('timeOfDay').value,
    MerchantCategory: document.getElementById('merchant').value,
    IsInternational: parseInt(document.getElementById('isInt').value)
  };
  document.getElementById('result').textContent = 'جاري الاتصال بالخادم...';
  try {
    const res = await fetch(API, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const data = await res.json();
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById('result').textContent = 'خطأ في الاتصال: ' + err;
  }
});
