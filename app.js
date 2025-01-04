document.getElementById('voucher-form').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent form from submitting normally

    const voucherCode = document.getElementById('voucher-code').value;
    const walletAddress = document.getElementById('wallet-address').value;

    // Simulate backend communication (you will replace this with an actual API call)
    const response = await verifyVoucherAndSendCrypto(voucherCode, walletAddress);
    
    if (response.success) {
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert("There was an error with your voucher. Please try again.");
    }
});

async function verifyVoucherAndSendCrypto(voucherCode, walletAddress) {
    // Simulate verifying the voucher and sending crypto to the wallet address.
    // In a real system, you would call your backend to perform these actions.
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate success or failure
            const success = Math.random() > 0.2;  // 80% chance of success
            if (success) {
                resolve({ success: true });
            } else {
                resolve({ success: false });
            }
        }, 2000);  // Simulate a 2-second delay
    });
}
