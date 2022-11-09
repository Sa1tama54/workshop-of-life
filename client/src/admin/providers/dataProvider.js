import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = '/api';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json',
    });
  }

  const token = JSON.parse(JSON.stringify(localStorage.getItem('adminToken')));
  options.headers.set('Authorization', `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: [field, order].join(),
      page,
      limit: perPage,
      filter: JSON.stringify(params.filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);

    return {
      data: json.data.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(json.total, 10),
    };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);

    return { data: { ...json, id: json._id } };
  },

  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    };
  },

  update: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(params.data),
    });
    return { data: { ...json, id: json._id } };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify({ ...params.data, preview: params.data.preview.src }),
    });
    return { data: { ...json, id: json._id } };
  },

  delete: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    });

    return { data: json };
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
    });
    return { data: json };
  },
};
