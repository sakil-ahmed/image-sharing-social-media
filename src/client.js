import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "71gx51kd",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "sk87hock5ZfwFHTbbBZFbOIlQNqR68wHftYNx4oeZ8utqb5RWrlwaBu9rMi7Qs01ievX1x0iAUX3UgbfDVPgIEP4U5A4FdvE0NmCeOLf1GUqPRGAbaAzQTNlJjOv3w1LKCX5eEnktpGfHgBo0SWIUh14SsVkZQt5PkaFcURlX1Lzu5EbUls8",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
