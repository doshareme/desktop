<script setup>
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
// if existing login
// supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session)
//   if (event === 'SIGNED_IN') {
//     console.log('User signed in successfully')
//     navigateTo('/')
//   }
// })
// window.addEventListener("contextmenu", async (e) =>{
//   e.preventDefault();
// }
// );
// supabase.auth.getSession().then((data) => {
//   if(data.data.session!==null){
//     if(data.data.session.user.id){
//     // navigateTo('/')
//   }
//   }
// })

function signInWithOtp(e) {
    e.preventDefault()
    console.log(email.value, password.value)
    const { data, error } = supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    // redirectTo: 'http://localhost:3000/confirm',
    options: {
      redirectTo: window.location.origin+'/confirm',
      // emailredirect: 'http://localhost:3000/confirm',
    }
}).then((data)=>{
  console.log(data)
  console.log('User signed in successfully')
  if(data.error===null){
    // document.getElementById('feedback-sent').classList.remove('hidden')
  navigateTo('/')
  }else{
    document.getElementById('feedback-sent').innerHTML = "Error: "+data.error.message
    document.getElementById('feedback-sent').classList.remove('hidden')
    setTimeout(() => {
      document.getElementById('feedback-sent').classList.add('hidden')
      document.getElementById('feedback-sent').innerHTML = "We've sent you a confirmation mail, please check 💖"
    }, 5000);
  }
}).catch((error) => {
  e.preventDefault()
  console.log(error)
  document.getElementById('feedback-sent').innerHTML = "Error: "+error.message
  document.getElementById('feedback-sent').classList.remove('hidden')
  setTimeout(() => {
    document.getElementById('feedback-sent').classList.add('hidden')
    document.getElementById('feedback-sent').innerHTML = "We've sent you a confirmation mail, please check 💖"
  }, 5000);
})

  if (error) console.log(error)
}
const {data,error} = await supabase.auth.getUser()
console.log(data)
async function formSubmit(event) {
  const {data,error} = await supabase.auth.getUser()
  console.log(data.user)
  console.log('form submitted')
}
</script>
<template>
  <div>
    <!-- <button @click="signInWithOtp">
      Sign In with E-Mail
    </button>
    <input
      type="email"
    />
    <input
      type="email"
    /> -->

    <section class="">
      <div id="feedback-sent" class="  ease-in-out fixed flex items-center w-full z-50 max-w-xs p-4 space-x-4 text-red-600 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-red-600 dark:divide-gray-700 dark:bg-gray-800 hidden" role="alert">
    <div class="text-sm font-normal">We've sent you a confirmation mail, please check 💖</div>
</div>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo">
          Personal Cloud
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div role="alert" class="alert alert-info" v-if="data.user">
              🧙‍♂️
  <span >Existing Account Found <a class="cursor-pointer link" @click="navigateTo('/')"> view wizard </a></span>
</div>
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form autocomplete="off" class="space-y-4 md:space-y-6" @submit="">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input aria-autocomplete="none" v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" autocomplete="off" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="password" type="passwordaddr" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <!-- <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div> -->
                      </div>
                      <a href="/auth/forgot" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  @click="signInWithOtp" class="w-full text-white bg-[#6938EF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/auth/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  </div>
</template>
