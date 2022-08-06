/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqty/react";

import type { QueryFetcher } from "gqty";
import { createClient } from "gqty";
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

import { extractFiles } from 'extract-files';

const apiPath = 'http://localhost:5000/api/graphql'

const queryFetcher: QueryFetcher = async function (query, variables) {
  const extracted = extractFiles({
    query,
    variables,
  })
  
  if (extracted.files.size > 0) {
    const form = new FormData();
    form.append('operations', JSON.stringify(extracted.clone));
    
    const map: Record<number, string[]> = {};
    let i = 0
    extracted.files.forEach((paths) => {
      map[++i] = paths
    })
    form.append('map', JSON.stringify(map));
    i = 0;
    extracted.files.forEach((_paths, file) => {
      form.append(++i + '', file as File);
    })
    
    const response = await fetch(apiPath, {
      method: 'POST',
      headers: {},
      body: form,
      mode: 'cors',
    })
    
    const json = await response.json();
    
    return json
  }
  
  // Fallback to regular queries
  
  const response = await fetch(apiPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  })
  
  const json = await response.json()
  
  return json
}
/*
const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions
) {
  // Modify "/api/graphql" if needed
  const response = await fetch('/api/graphql', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  const json = await response.json();

  return json;
};
*/
export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

export { query, mutation, mutate, subscription, resolved, refetch, track };

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: true,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
};

export * from "./schema.generated";
