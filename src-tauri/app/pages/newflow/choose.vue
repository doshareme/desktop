
<script setup>
import {load} from '@cashfreepayments/cashfree-js';
const supabase = useSupabaseClient()
const authdata = await supabase.auth.getUser();
let cashfree;
var initializeSDK = async function () {          
    cashfree = await load({
        mode: "sandbox"
    });
};
initializeSDK();
async function choosePlan(e){
    console.log(e.target.id)
    console.log(authdata)
    const PAY_API = "https://pay.doshare.me";
    const plan = e.target.id;
    const data = {
        id: authdata.data.user.id,
        p: plan
        
    };

    console.log(data.p);
    // const orderdata=fetch(PAY_API+"/create_order?id="+
    // authdata.data.user.id+"&p="+data.p
    // ).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // });
    const { data: order, error } =
       await useFetch(PAY_API+"/create_order?id="+
    authdata.data.user.id+"&p="+data.p
    )
    // console.log(JSON.parse(JSON.stringify(order.value)));
    const paymentid=JSON.parse(JSON.stringify(order.value))['payment_session_id'];
    console.log(paymentid);
    let checkoutOptions = {
        paymentSessionId: paymentid,
        redirectTarget: "_modal",
    };
    cashfree.checkout(checkoutOptions).then(async (result) => {
        console.log(result);
        if(result.error){
            // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
            console.log("User has closed the popup or there is some payment error, Check for Payment Status");
            
            console.log(result.error);
            const { data: verify, error } =
                await useFetch(PAY_API+"/verify?orderid="+
                JSON.parse(JSON.stringify(order.value))['order_id']
            )
            console.log(verify.value);

            if(verify.value=="paid"){
            
            const { data: update, error1 } =
                await useFetch(PAY_API+"/activate?id="+
                authdata.data.user.id
            )
            
            console.log(update.value);
            if (update.value==authdata.data.user.id){
                console.log("Plan activated");
                window.location.href = "/";
            }
        }

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
            console.log(result.error);
            console.log(JSON.parse(JSON.stringify(order.value))['order_id'])
            const { data: verify, error } =
                await useFetch(PAY_API+"/verify?orderid="+
                JSON.parse(JSON.stringify(order.value))['order_id']
            )
            if(verify.value=="paid"){
            
            const { data: update, error1 } =
                await useFetch(PAY_API+"/activate?id="+
                authdata.data.user.id
            )
            
            console.log(update.value);
            if (update.value==authdata.data.user.id){
                console.log("Plan activated");
                window.location.href = "/";
            }
        }
        }
    });
}
</script>
<template>
<section class="bg-white dark:bg-gray-900 text-center font-extralight">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <img src="https://cloud.doshare.me/favicon.ico" alt="Choose Your Plan" class="mx-auto" />
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Join DoShare</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">We focus on affordability, security and privacy without compromising features.</p>
          🔽
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Basic</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹19</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>50 GB Cloud Storage</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Sharing, Uploads and Downloads</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Sync your storage across multiple devices</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Share your cloud with family and friends</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Fast Updates and Bug Fixes</span>
                  </li>
              </ul>
              <a @click="choosePlan" id="basic" class="text-white bg-purple-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950 active:cursor-progress">Choose Plan</a>
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Standard</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹199</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything in Basic and more</span>
                  </li>
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>200 GB Cloud Storage</span>
                  </li>

                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support</span>
                  </li>

              </ul>
              <a @click="choosePlan" id="standard" class="text-white bg-purple-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950">Choose Plan</a>
          </div>
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Premium</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹299</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything in Standard and more</span>
                  </li>
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>500 GB Cloud Storage</span>
                  </li>

                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support</span>
                  </li>

              </ul>
              <a @click="choosePlan" id="premium" class="text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950">Choose Plan</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Artist</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹1399</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything in Standard and more</span>
                  </li>
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>2 TB (2000 GB) Cloud Storage</span>
                  </li>

                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support</span>
                  </li>

              </ul>
              <a @click="choosePlan" id="artist" class="text-white bg-purple-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950">Choose Plan</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Starship</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹3999</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything in Standard and more</span>
                  </li>
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>5 TB (5000 GB) Cloud Storage</span>
                  </li>

                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support</span>
                  </li>

              </ul>
              <a @click="choosePlan" id="enterprise" class="text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950">Choose Plan</a>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Mega</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">₹5999</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything in Standard and more</span>
                  </li>
                  <li class="flex text-bold font-bold items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>10 TB (10,000 GB) Cloud Storage</span>
                  </li>

                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support</span>
                  </li>

              </ul>
              <a @click="choosePlan" id="mega" class="text-white bg-purple-900 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-purple-950">Choose Plan</a>
          </div>
      </div>
  </div>
</section>
</template>