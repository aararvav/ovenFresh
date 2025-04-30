function showForm(paymentMethod) {
    const formContent = document.getElementById("form-content");
    const upiQr = `
      <div id="upi-qr">
        <label>Scan QR Code:</label>
        <img src="qrqr .jpg" alt="QR Code" width="150">
      </div>
    `;
  
    switch (paymentMethod) {
      case "card":
        formContent.innerHTML = `
          <div class="input-field">
            <label>Card Number:</label>
            <input type="text" placeholder="Enter card number">
          </div>
          <div class="input-field">
            <label>Expiry Date:</label>
            <input type="text" placeholder="MM/YY">
          </div>
          <div class="input-field">
            <label>CVV:</label>
            <input type="text" placeholder="***">
          </div>
          <div class="input-field">
            <label>Cardholder's Name:</label>
            <input type="text" placeholder="Name on card">
          </div>
        `;
        break;
  
      case "netbanking":
        formContent.innerHTML = `
          <div class="input-field">
            <label>Select Bank:</label>
            <select>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
              <option>AXIS</option>
              <option>RBI</option>
            </select>
          </div>
        `;
        break;
  
      case "wallet":
        formContent.innerHTML = `
          <div class="input-field">
            <label>Wallet:</label>
            <select>
              <option>PayPal</option>
              <option>Paytm</option>
              <option>Apple Pay</option>
            </select>
          </div>
        `;
        break;
  
      case "upi":
        formContent.innerHTML = `
          <div class="input-field">
            <label>UPI ID:</label>
            <input type="text" placeholder="Enter UPI ID">
          </div>
          ${upiQr}
        `;
        document.getElementById("upi-qr").style.display = "block";
        break;
  
      case "cod":
        formContent.innerHTML = `
          <p>Cash on Delivery selected. No additional information required.</p>
        `;
        break;
  
      default:
        formContent.innerHTML = "";
    }
  }
  
  function processPayment() {
    alert("Processing payment...");
  }
  