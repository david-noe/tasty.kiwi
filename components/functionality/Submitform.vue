<template>
  <div class="mt-10 sm:mt-0 text-black">
    <form action="#" method="POST">
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-6">
              <label for="title" class="block text-sm font-medium text-gray-700"
                >Rezepttitel</label
              >
              <input
                type="text"
                name="title"
                id="title"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border border-gray-300"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="caption"
                class="block text-sm font-medium text-gray-700"
                >Kurzbeschrieb</label
              >
              <textarea
                type="text"
                name="caption"
                id="caption"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border border-gray-300"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">
                Fotos
              </label>
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Datei wählen</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept=".jpg, .jpeg, .png"
                        multiple
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG or JPG up to 3MB
                  </p>
                </div>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-6">
              <label
                for="content"
                class="block text-sm font-medium text-gray-700"
                >Zubereitung</label
              >
              <textarea
                type="text"
                name="content"
                id="content"
                class="h-36 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border border-gray-300"
              />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-brown transition hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Rezept absenden
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
