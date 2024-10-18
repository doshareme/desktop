<script setup>
import { load } from "@cashfreepayments/cashfree-js";
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK().then(() => {
        console.log("SDK has been initialized");
    });

  async function doPayment() {
        let checkoutOptions = {
            paymentSessionId: "session_drQoMXuQTlvL9m11ou0BN9HHRWM8mxQNjOXN0gLza7052wuDM0wfgs5WjJ_hlvqVBEkTpvtPps7wGQDZ0p41lpLQ-aFZS-MN66tE85nsJMnR",
            redirectTarget: "_modal",
        };
        cashfree.checkout(checkoutOptions).then((result) => {
            console.log(result);
            if(result.error){
                // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
                console.log("User has closed the popup or there is some payment error, Check for Payment Status");
                console.log(result.error);
            }
            if(result.redirect){
                // This will be true when the payment redirection page couldnt be opened in the same window
                // This is an exceptional case only when the page is opened inside an inAppBrowser
                // In this case the customer will be redirected to return url once payment is completed
                console.log("Payment will be redirected");
            }
            if(result.paymentDetails){
                // This will be called whenever the payment is completed irrespective of transaction status
                console.log("Payment has been completed, Check for Payment Status");
                console.log(result.paymentDetails.paymentMessage);
            }
        });
    };

</script>
<template>
        <div class="row">
            <p>Click below to open the checkout page in popup</p>
            <button type="submit" class="btn btn-primary" id="renderBtn" @click="doPayment">
                Pay Now
            </button>
        </div>
    </template>