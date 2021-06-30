const Content = ({ title }) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="relative max-w-screen-xl mx-auto mb-12">
      <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            Zero Commission by {title || 'usage'}
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            Start selling online for free with all the features you need to
            launch your local delivery and pick-up service, nothing more. We
            don&#x27;t charge commission or monthly fees, keep all your margin.
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                What&#x27;s included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200" />
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  All unlimited components
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Own custom Tailwind styles
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Unlimited Templates
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Free premium dashboard
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Best ranking
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Premium svg
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  My wife
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                &amp; What&#x27;s not
              </h4>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    className="h-6 w-6 mr-2"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  No Contracts. No monthly, setup, or additional payment
                  processor fees
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    className="h-6 w-6 mr-2"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  No 2-week on-boarding, it takes 20 minutes!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 px-6 text-center bg-white lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
          <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
            Free
          </p>
          <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
            <span>$0/mo</span>
          </div>
          <p className="mt-4 text-sm leading-5">
            <span className="block font-medium text-gray-500 dark:text-gray-400">
              Card payments:
            </span>
            <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
              2.9% + 20p per transaction
            </span>
          </p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Create your store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12 md:px-2 mb-6 md:mb-0">
      <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
        <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
          Entreprise
        </p>
        <p className="text-gray-900 dark:text-white text-3xl font-bold">
          $0
          <span className="text-gray-300 text-sm">/ month</span>
        </p>
        <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
          For most businesses that want to optimize web queries.
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            All illimited components
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Own custom Tailwind styles
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Unlimited Templates
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Free premium dashboard
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Best ranking
          </li>
          <li className="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              className="h-6 w-6 mr-2"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Prenium svg
          </li>
          <li className="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              className="h-6 w-6 mr-2"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            My wife
          </li>
        </ul>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Choose plan
        </button>
      </div>
    </div>
    <div className="w-full md:w-4/12 md:px-2 mb-6 md:mb-0">
      <div className="shadow-lg rounded-2xl bg-indigo-500 dark:bg-gray-800 p-4">
        <div className="flex text-white  items-center justify-between">
          <p className="text-4xl font-medium mb-4">Pro</p>
          <p className="text-3xl font-bold flex flex-col">
            $99
            <span className="font-thin text-right text-sm">month</span>
          </p>
        </div>
        <p className="text-white text-md mt-4">Plan include :</p>
        <ul className="text-sm text-white w-full mt-6 mb-6">
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            All illimited components
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Own custom Tailwind styles
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Unlimited Templates
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Free premium dashboard
          </li>
          <li className="mb-3 flex items-center ">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Best ranking
          </li>
          <li className="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              className="h-6 w-6 mr-2"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Prenium svg
          </li>
          <li className="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              className="h-6 w-6 mr-2"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            My wife
          </li>
        </ul>
        <button
          type="button"
          className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
        >
          Choose plan
        </button>
      </div>
    </div>
    <div className="w-full md:w-4/12 md:px-2  mb-6 md:mb-0">
      <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
        <p className="text-black dark:text-white text-3xl font-bold">
          Pay as you go
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
          For the basics tailwind
        </p>
        <p className="text-black dark:text-white  text-3xl font-bold">$99</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
          Per agent per month
        </p>
        <button
          type="button"
          className="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
        >
          Request demo
        </button>
        <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
          <li className="mb-3 flex items-center">
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            All illimited components Tailwind
          </li>
          <li className="mb-3 flex items-center">
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            Own analytics templates
          </li>
          <li className="mb-3 flex items-center">
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            24/24 support link
          </li>
        </ul>
        <span className="w-56 block bg-gray-100 h-1 rounded-lg my-2" />
        <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
          <li className="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
            </svg>
            <div>
              All free dashboard
              <a href="#" className="text-red-500 pl-1 font-semibold">
                free plan
              </a>
            </div>
          </li>
          <li className="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
            </svg>
            <div>Best ranking</div>
          </li>
          <li className="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
            </svg>
            <div>Chocolate and meel</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Content;
