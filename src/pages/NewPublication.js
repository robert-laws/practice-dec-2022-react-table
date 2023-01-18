import React from 'react';

export const NewPublication = () => {
  return (
    <div class='container mx-auto px-4 py-4'>
      <form className='space-y-8 divide-y divide-gray-200'>
        <div className='space-y-8 divide-y divide-gray-200'>
          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Author Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>...</p>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-full'>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium text-gray-700'
                >
                  Title
                </label>
                <div className='mt-1'>
                  <input
                    id='title'
                    name='title'
                    type='text'
                    autoComplete='title'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-full'>
                <label
                  htmlFor='sourceTitle'
                  className='block text-sm font-medium text-gray-700'
                >
                  Source Title
                </label>
                <div className='mt-1'>
                  <input
                    id='sourceTitle'
                    name='sourceTitle'
                    type='text'
                    autoComplete='sourceTitle'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='year'
                  className='block text-sm font-medium text-gray-700'
                >
                  Publication Year
                </label>
                <div className='mt-1'>
                  <select
                    id='year'
                    name='year'
                    autoComplete='year-number'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    {Array.from({ length: 50 }, (_, i) => (
                      <option key={i} value={i + 1990}>
                        {i + 1990}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='volume'
                  className='block text-sm font-medium text-gray-700'
                >
                  Volume
                </label>
                <div className='mt-1'>
                  <input
                    id='volume'
                    name='volume'
                    type='text'
                    autoComplete='volume'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='issue'
                  className='block text-sm font-medium text-gray-700'
                >
                  Issue
                </label>
                <div className='mt-1'>
                  <input
                    id='issue'
                    name='issue'
                    type='text'
                    autoComplete='issue'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='pageStart'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Page
                </label>
                <div className='mt-1'>
                  <input
                    id='pageStart'
                    name='pageStart'
                    type='text'
                    autoComplete='pageStart'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='pageEnd'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Page
                </label>
                <div className='mt-1'>
                  <input
                    id='pageEnd'
                    name='pageEnd'
                    type='text'
                    autoComplete='pageEnd'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-1'>
                <label
                  htmlFor='pageCount'
                  className='block text-sm font-medium text-gray-700'
                >
                  Page Count
                </label>
                <div className='mt-1'>
                  <input
                    id='pageCount'
                    name='pageCount'
                    type='text'
                    autoComplete='pageCount'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='doi'
                  className='block text-sm font-medium text-gray-700'
                >
                  DOI
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='doi'
                    id='doi'
                    autoComplete='doi'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='link'
                  className='block text-sm font-medium text-gray-700'
                >
                  Link
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='link'
                    id='link'
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='sm:col-span-full'>
                <label
                  htmlFor='abstract'
                  className='block text-sm font-medium text-gray-700'
                >
                  Abstract
                </label>
                <div className='mt-1'>
                  <textarea
                    id='abstract'
                    name='abstract'
                    rows={3}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    defaultValue={''}
                  />
                </div>
                <p className='mt-2 text-sm text-gray-500'>
                  Add the abstract for the publication.
                </p>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal-code'
                  className='block text-sm font-medium text-gray-700'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='postal-code'
                    id='postal-code'
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-8'>
            <div>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Notifications
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>
            </div>
            <div className='mt-6'>
              <fieldset>
                <legend className='sr-only'>By Email</legend>
                <div
                  className='text-base font-medium text-gray-900'
                  aria-hidden='true'
                >
                  By Email
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex h-5 items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='comments'
                        className='font-medium text-gray-700'
                      >
                        Comments
                      </label>
                      <p className='text-gray-500'>
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-start'>
                    <div className='flex h-5 items-center'>
                      <input
                        id='candidates'
                        name='candidates'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='candidates'
                        className='font-medium text-gray-700'
                      >
                        Candidates
                      </label>
                      <p className='text-gray-500'>
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-start'>
                    <div className='flex h-5 items-center'>
                      <input
                        id='offers'
                        name='offers'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='offers'
                        className='font-medium text-gray-700'
                      >
                        Offers
                      </label>
                      <p className='text-gray-500'>
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className='mt-6'>
                <legend className='contents text-base font-medium text-gray-900'>
                  Push Notifications
                </legend>
                <p className='text-sm text-gray-500'>
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className='mt-4 space-y-4'>
                  <div className='flex items-center'>
                    <input
                      id='push-everything'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='push-everything'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Everything
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='push-email'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='push-email'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Same as email
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='push-nothing'
                      name='push-notifications'
                      type='radio'
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor='push-nothing'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-end'>
            <button
              type='button'
              className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
