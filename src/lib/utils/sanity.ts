import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "5qex7s3f",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-21",
};

const sanityClient = createClient(config);
export default sanityClient;
