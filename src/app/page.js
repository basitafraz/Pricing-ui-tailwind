export default function Home() {
  return (
    <div class="h-full bg-stale-500 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <div class="h-4/5 pb-52 w-full max-w-screen bg-[#6B46C1] mb-6 mt-2 translate-y-24 p">
        <h3 class="text-5xl font-bold mt-4 leading-tight text-center text-white">
          Simple pricing for your business
        </h3>
        <p class="mt-3 text-xl font-medium text-[#F7FAFC] text-center">
          Plans that are carefully crafted to suit your business.
        </p>
        <div class="mt-4 text-center"></div>
      </div>
      <div class="relative h-32 w-full max-w-screen-sm mb-16">
        <div class="h-32 w-full max-w-screen-sm bg-white rounded-lg shadow-lg text-center py-4 absolute top-50% left-0 right-0 transform -translate-y-50 z-10">
          <div class="flex mt-4">
            <div class="w-1/2 p-4">
              <h3 class="text-lg font-medium leading-tight text-center">
                Sub-card 1 
              </h3>
            </div>
            <div class="w-1/2 p-4">
              <h3 class="text-lg font-medium leading-tight text-center">
                Sub-card 2
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="h-72 w-full max-w-screen bg-yellow-100 -translate-y-7">
        <div class="text-center"></div>
      </div>
    </div>
  );
}


