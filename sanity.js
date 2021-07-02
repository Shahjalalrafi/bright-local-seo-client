import {
    createImageUrlBuilder,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
    createCurrentUserHook,
    createClient,
  } from 'next-sanity'

  const config = {
    projectId : "62zqpisq",
    dataset : "production",
    apiVersion: "2021-03-25",
    useCdn: false
  }

  export const sanityClient = createClient(config)

  export const usePreviewSubscription = createPreviewSubscriptionHook(config)

  export const urlFor = (source) => createImageUrlBuilder(config).image(source)

  export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
  })