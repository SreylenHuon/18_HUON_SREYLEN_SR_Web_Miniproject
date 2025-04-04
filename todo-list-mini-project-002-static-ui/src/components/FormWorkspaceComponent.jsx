import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const FormWorkspaceComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div id="content" role="main" class="w-full  max-w-md mx-auto p-6">
            <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                    Create WorkSpace
                  </h1>
                </div>

                <div class="mt-5">
                  <form>
                    <div class="grid gap-y-4">
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <div class="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>
                      <button
                        type="submit"
                        class="w-[100px] py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormWorkspaceComponent;
