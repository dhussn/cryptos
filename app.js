document.getElementById("voucher-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const voucherCode = document.getElementById("voucher-code").value.trim();
    const walletAddress = document.getElementById("wallet-address").value.trim();
    const resultElement = document.getElementById("result");

    resultElement.textContent = "Processing...";

    try {
        // Validate voucher and send crypto
        const response = await verifyVoucherAndSendCrypto(voucherCode, walletAddress);
        if (response.success) {
            resultElement.textContent = `Success! $${response.value} worth of crypto has been sent to ${walletAddress}.`;
        } else {
            resultElement.textContent = response.message || "Error processing your request.";
        }
    } catch (error) {
        console.error(error);
        resultElement.textContent = "An unexpected error occurred. Please try again.";
    }
});

async function verifyVoucherAndSendCrypto(voucherCode, walletAddress) {
    try {
        const response = await fetch('http://localhost:3000/validate-voucher', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ voucherCode })
        });
        const data = await response.json();

        if (data.success) {
            // Simulate sending crypto
            await sendCrypto(walletAddress, data.value);
            return { success: true, value: data.value };
        } else {
            return { success: false, message: data.message };
        }
    } catch (error) {
        console.error("Error in verifyVoucherAndSendCrypto:", error);
        return { success: false, message: "Error connecting to the server." };
    }
}

async function sendCrypto(walletAddress, amount) {
    console.log(`Simulating sending $${amount} worth of crypto to ${walletAddress}.`);
    // Add real Crypto.com API calls here in the future
    return new Promise((resolve) => setTimeout(resolve, 2000));
}
