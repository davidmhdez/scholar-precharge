import { GraphQLClient } from "graphql-request";

type Props = {
    query: String,
    variables?: Object,
    preview?: any
}

export function request({ query, variables, preview }: Props) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
    //   authorization: `Bearer 57bd3aa37b591727c409376021f0cc`
    }
  });
  return client.request(query, variables);
}